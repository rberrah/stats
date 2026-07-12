<script>
  // @ts-nocheck
  // Pied de chapitre : sources vérifiables (pool fermé), date de dernière révision,
  // statut de relecture, et signalement d'erreur pré-rempli avec l'id du chapitre.
  import { resolveSources, refIdentifier } from '$lib/content/references';

  /** @type {any} */
  export let chapter = null;

  $: sources = resolveSources(chapter?.sources);
  $: issueUrl =
    'https://github.com/rberrah/stats/issues/new?title=' +
    encodeURIComponent(`[${chapter?.slug ?? ''}] erreur ou imprécision`) +
    '&body=' +
    encodeURIComponent(
      `Chapitre : ${chapter?.title ?? ''} (\`${chapter?.slug ?? ''}\`)\n\nDécrivez l'erreur ou l'imprécision :\n\n`
    );

  const STATUS = {
    brouillon: { label: 'Brouillon', cls: 'draft' },
    relu: { label: 'Relu', cls: 'read' },
    valide: { label: 'Validé', cls: 'ok' }
  };
  $: st = STATUS[chapter?.status] ?? null;
</script>

<footer class="chfoot">
  {#if sources.length}
    <section class="sources">
      <h3>Sources</h3>
      <ul>
        {#each sources as s}
          <li>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
            {#if s.authors}<span class="au">— {s.authors}</span>{/if}
            {#if s.where}<span class="wh">, {s.where}</span>{/if}
            {#if refIdentifier(s)}<span class="id">{refIdentifier(s)}</span>{/if}
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <div class="meta">
    {#if st}<span class="badge {st.cls}">{st.label}</span>{/if}
    {#if chapter?.reviewed_on}<span class="rev">Dernière révision : {chapter.reviewed_on}</span>{/if}
    <a class="report" href={issueUrl} target="_blank" rel="noopener noreferrer">Signaler une erreur</a>
  </div>
</footer>

<style>
  .chfoot { margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--border-subtle); max-width: 760px; }
  .sources h3 { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 var(--space-3); }
  .sources ul { list-style: none; margin: 0 0 var(--space-4); padding: 0; display: grid; gap: var(--space-2); }
  .sources li { font-size: var(--text-sm); line-height: 1.5; color: var(--text-secondary); padding-left: 1em; position: relative; }
  .sources li::before { content: '▸'; position: absolute; left: 0; color: var(--accent-pk); }
  .sources a { color: var(--text-primary); font-weight: 600; text-decoration: none; border-bottom: 1px solid var(--border-strong); }
  .sources a:hover { color: var(--accent-pk); border-color: var(--accent-pk); }
  .au, .wh { color: var(--text-muted); font-size: var(--text-xs); }
  .id { display: inline-block; margin-left: 6px; font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.02em; color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 10%, transparent); border-radius: 999px; padding: 1px 7px; white-space: nowrap; }
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-3); font-family: var(--font-mono); font-size: var(--text-xs); }
  .badge { padding: 2px 8px; border-radius: 999px; font-weight: 700; }
  .badge.ok { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); }
  .badge.read { background: var(--bg-secondary); color: var(--text-secondary); }
  .badge.draft { background: color-mix(in srgb, #c0392b 12%, var(--bg-primary)); color: #c0392b; }
  .rev { color: var(--text-muted); }
  .report { margin-left: auto; color: var(--accent-pk); text-decoration: none; }
  .report:hover { text-decoration: underline; }
</style>
