// Tests de fumée : cohérence contenu ↔ code, sans navigateur.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import matter from 'gray-matter';

const root = path.dirname(url.fileURLToPath(import.meta.url)) + '/..';
const chaptersDir = path.join(root, 'src/content/chapters');
const vizDir = path.join(root, 'src/lib/components/visualizations');

const fail = [];
const ok = (m) => console.log('  ✓ ' + m);
const check = (cond, m) => (cond ? ok(m) : fail.push(m));

// chapitres
const files = fs.readdirSync(chaptersDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
const chapters = files.map((f) => {
  const { data, content } = matter(fs.readFileSync(path.join(chaptersDir, f), 'utf8'));
  return { f, data, content };
});
const slugs = chapters.map((c) => c.data.slug);

const { tracks } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/tracks.js')));
const { exercises, exercisesForChapter } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/exercises.js')));
const { glossary } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/glossary.js')));
const { itemIndex } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/programme.js')));
const { markedTerms } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/marks.js')));

// 1. slugs uniques
check(new Set(slugs).size === slugs.length, `${slugs.length} slugs uniques`);

// 2. parties des chapitres connues
const trackIds = new Set(tracks.map((t) => t.id));
check(chapters.every((c) => trackIds.has(c.data.track)), `parcours (track) valides (${trackIds.size} définis)`);

// 3. items du plan (programItem) résolus
const badItem = chapters.filter((c) => c.data.programItem && !itemIndex[c.data.programItem]);
check(badItem.length === 0, `items du plan (programItem) tous résolus`);

// 4. prérequis résolus
const slugSet = new Set(slugs);
const badPrereq = chapters.flatMap((c) => (c.data.prerequisites ?? []).filter((p) => !slugSet.has(p)));
check(badPrereq.length === 0, `prérequis tous résolus`);

// 5. viz référencées résolvent (sinon fallback MemoPanel, mais on veut le zéro)
const vizKeys = new Set();
for (const f of fs.readdirSync(vizDir).filter((f) => f.endsWith('.svelte'))) {
  const stem = f.replace(/\.svelte$/, '');
  vizKeys.add(stem);
  vizKeys.add(stem.replace(/^\d+[_-]/, ''));
}
const vizRefs = chapters.flatMap((c) => [...c.content.matchAll(/viz="([^"]*)"/g)].map((m) => m[1]));
const badViz = vizRefs.filter((v) => !vizKeys.has(v));
check(badViz.length === 0, `${vizRefs.length} références viz résolvent (${vizKeys.size} clés)` + (badViz.length ? ` — manquantes : ${[...new Set(badViz)].join(', ')}` : ''));

// 6. chaque chapitre a une étape « À retenir » (alimente les fiches)
const noRetenir = chapters.filter((c) => !/<!--\s*step:[^>]*retenir/i.test(c.content) && !/title="[^"]*[Rr]etenir/.test(c.content));
check(noRetenir.length === 0, `chaque chapitre a une étape « À retenir »` + (noRetenir.length ? ` — sans : ${noRetenir.map((c) => c.data.slug).join(', ')}` : ''));

// 7. chaque chapitre a au moins une étape
const noStep = chapters.filter((c) => ![...c.content.matchAll(/<!--\s*step:/g)].length);
check(noStep.length === 0, `chaque chapitre a au moins une étape`);

// 8. quiz : structure valide (options + index correct)
let quizOk = true;
for (const c of chapters) for (const q of c.data.quiz ?? []) {
  if (!q.prompt || !Array.isArray(q.options) || !Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length) quizOk = false;
}
check(quizOk, `structure des quiz valide`);

// 9. exercices : chapitre existant + structure + marques ⇔ indices
const badExChapter = exercises.filter((e) => !slugSet.has(e.chapter));
check(badExChapter.length === 0, `${exercises.length} exercices rattachés à un chapitre existant` + (badExChapter.length ? ` — orphelins : ${badExChapter.map((e) => e.chapter).join(', ')}` : ''));
const badExStruct = exercises.filter((e) => !Number.isFinite(e.answer) || !e.explain);
check(badExStruct.length === 0, `structure des exercices valide`);
let exoMarkOk = true;
for (const e of exercises) {
  const marks = new Set(markedTerms(e.q));
  for (const i of (e.indices ?? [])) if (!marks.has(i.mot)) exoMarkOk = false;
}
check(exoMarkOk, `indices des exercices cohérents avec les marques [[...]] du sujet`);

// 10. glossaire : structure + termes référencés définis
const badGlossStruct = glossary.filter((g) => !g.term || !g.def);
check(badGlossStruct.length === 0, `${glossary.length} entrées de glossaire : structure valide`);
const glossTerms = new Set(glossary.map((g) => g.term));
const badGloss = chapters.flatMap((c) => (c.data.glossary ?? []).filter((t) => !glossTerms.has(t)));
check(badGloss.length === 0, `termes de glossaire référencés tous définis`);

// 10b. SOURCES : pool fermé — tout identifiant cité doit exister dans references.js
const { allRefIds } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/references.js')));
const refSet = new Set(allRefIds);
const badSrc = [];
for (const c of chapters) for (const s of (c.data.sources ?? [])) if (!refSet.has(s)) badSrc.push(`${c.data.slug}→${s}`);
check(badSrc.length === 0, `sources : tous les identifiants résolvent (pool de ${refSet.size} références)` + (badSrc.length ? ` — INCONNUS : ${badSrc.slice(0, 6).join(', ')}` : ''));
const nSourced = chapters.filter((c) => (c.data.sources ?? []).length).length;
const badStatus = chapters.filter((c) => c.data.status && !['brouillon', 'relu', 'valide'].includes(c.data.status));
check(badStatus.length === 0, `statuts de relecture valides`);
console.log(`  · couverture : sources ${nSourced}/${chapters.length} · relus ${chapters.filter((c) => c.data.reviewed_on).length}/${chapters.length}`);

// 11. assistant « Quel test choisir ? » : tous les liens vers le cours résolvent
const { chooserSlugs } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/choixTest.js')));
const chooser = chooserSlugs();
const badChooser = [...new Set(chooser)].filter((s) => !slugSet.has(s));
check(badChooser.length === 0, `assistant « quel test » : ${chooser.length} liens vers le cours résolvent` + (badChooser.length ? ` — cassés : ${badChooser.join(', ')}` : ''));

if (fail.length) {
  console.error('\nSmoke tests ÉCHOUÉS :\n' + fail.map((m) => '  ✗ ' + m).join('\n'));
  process.exit(1);
}
console.log('\nSmoke tests OK : contenu cohérent.');
