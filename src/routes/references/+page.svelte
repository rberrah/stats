<script>
  // @ts-nocheck
  // Bibliographie du site : le pool FERMÉ de références auquel chaque chapitre se rattache.
  // Chaque chapitre affiche SES sources en pied de page ; cette page les rassemble toutes.
  import { referenceGroups, refIdentifier } from '$lib/content/references';
  import chapters from '$lib/content/loadChapters';

  const stable = referenceGroups.flatMap((g) => g.items).filter((r) => r.doi || r.pmid || r.isbn).length;

  // Combien de chapitres citent chaque référence ? (rend la bibliographie vivante)
  const usage = (() => {
    const n = {};
    for (const c of chapters) for (const s of c.sources ?? []) n[s] = (n[s] ?? 0) + 1;
    return n;
  })();

  const total = referenceGroups.reduce((n, g) => n + g.items.length, 0);
  const sourced = chapters.filter((c) => (c.sources ?? []).length).length;
  // Annoncer « aucune référence décorative » puis en laisser un tiers sans usage serait
  // exactement le travers qu'on veut éviter. On affiche donc le compte réel.
  const cited = Object.keys(usage).length;

  const KIND = {
    book: 'Ouvrage',
    article: 'Article',
    guideline: 'Recommandation',
    site: 'Ressource'
  };
</script>

<header class="head">
  <p class="eyebrow">Bibliographie</p>
  <h1>Références</h1>
  <p class="lede">
    Les <strong>{total} sources</strong> sur lesquelles s'appuie ce cours. Ce n'est pas une liste
    décorative : chaque chapitre <strong>cite les siennes</strong> en pied de page, et
    <strong>{sourced}/{chapters.length}</strong> chapitres sont sourcés. <strong>{cited}</strong> de
    ces {total} références sont effectivement citées par au moins un chapitre ; les
    {total - cited} autres sont des ressources d'institution, données pour aller plus loin. La
    mention à droite de chaque entrée indique combien de chapitres s'y appuient.
  </p>
  <p class="note">
    Ce pool est <strong>fermé</strong> : un chapitre ne peut citer qu'une référence de cette liste —
    un identifiant inconnu fait échouer la vérification automatique du site. C'est ce qui garantit
    qu'aucune source n'est inventée. <strong>{stable} des {total}</strong> portent un DOI, un PMID ou
    un ISBN : elles résolvent vers un document unique, et pour toujours.
  </p>
</header>

{#each referenceGroups as g}
  <section class="grp">
    <h2>{g.title}</h2>
    <ul>
      {#each g.items as r}
        <li>
          <a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a>
          <span class="kind">{KIND[r.kind] ?? r.kind}</span>
          {#if refIdentifier(r)}<span class="id">{refIdentifier(r)}</span>{/if}
          {#if usage[r.id]}<span class="used">{usage[r.id]} chapitre{usage[r.id] > 1 ? 's' : ''}</span>{/if}
          <span class="meta">
            {#if r.authors}{r.authors}{/if}{#if r.where} — {r.where}{/if}
          </span>
        </li>
      {/each}
    </ul>
  </section>
{/each}

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  .eyebrow { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); margin: 0 0 var(--space-2); }
  h1 { font-size: var(--text-3xl); margin: 0 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); line-height: 1.6; }
  .note { font-size: var(--text-sm); color: var(--text-muted); background: var(--bg-secondary); padding: var(--space-3) var(--space-4); border-radius: var(--radius); }

  .grp { max-width: 860px; margin-bottom: var(--space-10); }
  h2 { font-size: var(--text-xl); margin: 0 0 var(--space-4); padding-bottom: var(--space-2); border-bottom: 1px solid var(--border-subtle); }
  ul { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-3); }
  li { display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--space-2); padding-left: 1em; position: relative; line-height: 1.5; }
  li::before { content: '▸'; position: absolute; left: 0; color: var(--accent-pk); }
  a { font-weight: 600; color: var(--text-primary); text-decoration: none; border-bottom: 1px solid var(--border-strong); }
  a:hover { color: var(--accent-pk); border-color: var(--accent-pk); }
  .kind { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); border: 1px solid var(--border-subtle); border-radius: 999px; padding: 1px 7px; }
  .used { font-family: var(--font-mono); font-size: 9px; color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 12%, var(--bg-primary)); border-radius: 999px; padding: 1px 7px; }
  .id { font-family: var(--font-mono); font-size: 9px; color: var(--text-secondary); background: var(--bg-secondary); border-radius: 999px; padding: 1px 7px; }
  .meta { flex-basis: 100%; font-size: var(--text-sm); color: var(--text-muted); }
</style>
