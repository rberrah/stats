// Validation du contenu (chapitres + disciplines) — sans navigateur.
// Vérifie frontmatter, unicité des slugs, disciplines connues, structure des
// étapes, encadrés/maths équilibrés, et résolution des visualisations référencées.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import matter from 'gray-matter';

const root = path.dirname(url.fileURLToPath(import.meta.url)) + '/..';
const chaptersDir = path.join(root, 'src/content/chapters');
const vizDir = path.join(root, 'src/lib/components/visualizations');

const errors = [];
const err = (f, m) => errors.push(`${f}: ${m}`);

// disciplines connues
const { tracks } = await import(url.pathToFileURL(path.join(root, 'src/lib/content/tracks.js')));
const trackIds = new Set(tracks.map((t) => t.id));

// clés de visualisation disponibles (même logique d'alias que vizRegistry.js)
const vizKeys = new Set();
for (const f of fs.readdirSync(vizDir).filter((f) => f.endsWith('.svelte'))) {
  const stem = f.replace(/\.svelte$/, '');
  vizKeys.add(stem);
  const noPrefix = stem.replace(/^\d+[_-]/, '');
  vizKeys.add(noPrefix);
  const noExplorer = noPrefix.replace(/Explorer$/, '');
  if (noExplorer) vizKeys.add(noExplorer);
}

const files = fs.readdirSync(chaptersDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
const slugs = new Map();
const allSlugs = new Set();

// premier passage : collecter les slugs
for (const f of files) {
  const { data } = matter(fs.readFileSync(path.join(chaptersDir, f), 'utf8'));
  if (data.slug) allSlugs.add(data.slug);
}

for (const f of files) {
  const raw = fs.readFileSync(path.join(chaptersDir, f), 'utf8');
  const { data, content } = matter(raw);

  for (const key of ['id', 'slug', 'title', 'track', 'order']) {
    if (data[key] === undefined || data[key] === '') err(f, `champ frontmatter manquant : ${key}`);
  }
  if (data.slug) {
    if (slugs.has(data.slug)) err(f, `slug dupliqué « ${data.slug} » (déjà dans ${slugs.get(data.slug)})`);
    slugs.set(data.slug, f);
  }
  if (data.track && !trackIds.has(data.track)) err(f, `discipline inconnue : « ${data.track} »`);

  // prérequis
  for (const p of data.prerequisites ?? []) {
    if (!allSlugs.has(p)) err(f, `prérequis introuvable : « ${p} »`);
  }

  // étapes
  const stepRe = /<!--\s*step:([^>]*)-->([\s\S]*?)<!--\s*\/step\s*-->/g;
  let m;
  let nSteps = 0;
  while ((m = stepRe.exec(content)) !== null) {
    nSteps++;
    const meta = m[1];
    const tm = meta.match(/title="([^"]*)"/);
    if (!tm) err(f, `une étape sans title="…"`);
    // Les apostrophes sont acceptées (parseur guillemet-conscient). Seul un
    // guillemet double DANS un title="…" casse l'analyse.
    if (/title="[^"]*"[^ \t>/]/.test(meta)) err(f, `titre d'étape avec guillemet double interne`);
    // viz référencée doit résoudre
    const vm = meta.match(/viz="([^"]*)"/);
    if (vm && !vizKeys.has(vm[1])) err(f, `viz introuvable : « ${vm[1]} » (clés: ${[...vizKeys].sort().join(', ')})`);
  }
  if (nSteps === 0) err(f, `aucun bloc <!-- step … -->`);

  // encadrés :::type … :::  (ouvrants = fermants)
  const opens = (content.match(/^:::\w+/gm) ?? []).length;
  const closes = (content.match(/^:::\s*$/gm) ?? []).length;
  if (opens !== closes) err(f, `encadrés déséquilibrés : ${opens} ouvrants, ${closes} fermants`);

  // maths : $$ appariés, puis $ inline appariés (après retrait du code)
  const noCode = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
  const displayCount = (noCode.match(/\$\$/g) ?? []).length;
  if (displayCount % 2 !== 0) err(f, `délimiteurs $$ impairs (${displayCount})`);
  const inline = (noCode.replace(/\$\$[\s\S]*?\$\$/g, '').match(/\$/g) ?? []).length;
  if (inline % 2 !== 0) err(f, `délimiteurs $ (maths inline) impairs (${inline})`);
}

if (errors.length) {
  console.error('Validation ÉCHOUÉE :\n' + errors.map((e) => '  ✗ ' + e).join('\n'));
  process.exit(1);
}
console.log(`Validation OK : ${files.length} chapitres, ${trackIds.size} disciplines, ${slugs.size} slugs uniques.`);
