<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { tracks, chaptersByTrack } from '$lib/content/tracks';

  const grouped = chaptersByTrack(chapters);

  // fiche = étape « À retenir » du chapitre (synthèse déjà rédigée, toujours à jour)
  function synthese(ch) {
    const s = ch.steps?.find((st) => /retenir/i.test(st.title));
    return s ? s.html : '';
  }

  let query = '';
  $: q = query.trim().toLowerCase();
  const hay = (c) => `${c.title} ${c.description} ${c.theme ?? ''} ${(c.tags ?? []).join(' ')}`.toLowerCase();
  $: visible = (list) => (q ? list.filter((c) => hay(c).includes(q)) : list);
</script>

<header class="head">
  <p class="eyebrow">Révision express</p>
  <h1>Fiches de synthèse</h1>
  <p class="lede">Une fiche par cours : le <strong>contexte</strong> en une phrase et l'<strong>essentiel à retenir</strong>, prêt à réviser.</p>
  <input class="search" type="search" placeholder="Rechercher une fiche (ex. test, moyenne, corrélation, χ²…)" bind:value={query} />
</header>

{#each tracks as t}
  {@const list = visible(grouped[t.id] ?? [])}
  {#if list.length}
    <details class="sec" open style={`--accent:${t.accent}`}>
      <summary><span class="slabel">{t.label}</span> {t.title} <span class="scount">· {list.length}</span></summary>
      <div class="fiches">
        {#each list as c}
          <article class="fiche">
            <div class="ftop">
              <a class="ftitle" href={`${base}/chapitres/${c.slug}`}>{c.title}</a>
              <span class="meta">{c.theme}{c.duration ? ` · ${c.duration}` : ''}</span>
            </div>
            {#if c.description}<p class="fdesc">{c.description}</p>{/if}
            <p class="flabel">À retenir</p>
            <div class="synth">{@html synthese(c)}</div>
            <a class="golink" href={`${base}/chapitres/${c.slug}`}>Ouvrir le cours →</a>
          </article>
        {/each}
      </div>
    </details>
  {/if}
{/each}

<style>
  .head { max-width: 760px; margin-bottom: var(--space-8); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .search { width: 100%; margin-top: var(--space-4); padding: var(--space-3) var(--space-4); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-tertiary); color: var(--text-primary); font-size: var(--text-base); }

  .sec { margin-bottom: var(--space-6); border-left: 3px solid var(--accent); padding-left: var(--space-4); }
  summary { cursor: pointer; }
  .sec > summary { font-size: var(--text-xl); font-weight: 700; padding: var(--space-2) 0; }
  .slabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); }
  .scount { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); font-weight: 400; }

  .fiches { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); align-items: start; margin-top: var(--space-4); }
  .fiche { border: 1px solid var(--border-subtle); border-top: 4px solid var(--accent); border-radius: 10px; padding: var(--space-5); background: var(--bg-tertiary); box-shadow: 0 2px 6px rgba(0,0,0,0.04); }
  .ftop { display: flex; justify-content: space-between; align-items: baseline; gap: var(--space-3); }
  .ftitle { font-family: var(--font-heading); font-weight: 700; font-size: var(--text-lg); color: var(--text-primary); text-decoration: none; line-height: 1.2; }
  .ftitle:hover { color: var(--accent-pk); }
  .meta { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; text-align: right; }
  .fdesc { color: var(--text-secondary); font-size: var(--text-sm); font-style: italic; margin: var(--space-2) 0 var(--space-3); }
  .flabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); font-weight: 700; margin: 0 0 var(--space-2); padding-top: var(--space-2); border-top: 1px solid var(--border-subtle); }
  .synth :global(ul) { margin: 0; padding-left: 1.15em; }
  .synth :global(li) { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.6; margin-bottom: var(--space-2); }
  .synth :global(li strong), .synth :global(strong) { color: var(--text-primary); }
  .synth :global(p) { font-size: var(--text-sm); color: var(--text-secondary); margin: 0 0 var(--space-2); }
  .golink { display: inline-block; margin-top: var(--space-3); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-pk); text-decoration: none; }
  .golink:hover { text-decoration: underline; }
</style>
