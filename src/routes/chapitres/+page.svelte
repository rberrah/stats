<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { sections } from '$lib/content/programme';
  import { trackById } from '$lib/content/tracks';

  // item officiel ("IV-14") → chapitres qui le couvrent
  const byItem = {};
  for (const c of chapters) if (c.programItem) (byItem[c.programItem] ??= []).push(c);

  const transversal = chapters.filter((c) => c.track === 'transversal');
  const tv = trackById('transversal');

  const covered = (s) => s.groupes.reduce((n, g) => n + g.items.filter((it) => byItem[`${s.id}-${it.n}`]).length, 0);
  const totalItems = (s) => s.groupes.reduce((n, g) => n + g.items.length, 0);
</script>

<header class="head">
  <p class="eyebrow">Programme officiel · Arrêté du 12 avril 2012</p>
  <h1>Le programme, item par item</h1>
  <p class="lede">Le site suit les <strong>5 sections officielles</strong> du concours. Chaque item est listé ; ceux déjà rédigés sont cliquables, les autres arrivent.</p>
</header>

{#if transversal.length}
  <section class="parcours" style={`--accent:${tv.accent}`}>
    <div class="phead"><span class="plabel">Transversal</span><h2>{tv.title}</h2></div>
    <ol class="chaps">
      {#each transversal as c}
        <li><a href={`${base}/chapitres/${c.slug}`}><span class="body"><strong>{c.title}</strong><em>{c.description}</em></span>{#if c.duration}<span class="dur">{c.duration}</span>{/if}</a></li>
      {/each}
    </ol>
  </section>
{/if}

{#each sections as s}
  <section class="parcours" style={`--accent:${s.accent}`}>
    <div class="phead">
      <span class="plabel">Section {s.roman}</span>
      <h2>{s.titre}</h2>
      <p class="tag">{s.tagline}</p>
      <span class="cov">{covered(s)} / {totalItems(s)} items rédigés</span>
    </div>

    {#each s.groupes as g}
      {#if g.titre}<p class="gtitre">{g.titre}</p>{/if}
      <ul class="items">
        {#each g.items as it}
          {@const chs = byItem[`${s.id}-${it.n}`]}
          {#if chs}
            <li class="item done">
              <span class="num">{it.n}</span>
              <span class="lbl">{it.l}</span>
              <span class="links">{#each chs as c}<a href={`${base}/chapitres/${c.slug}`}>{c.title} →</a>{/each}</span>
            </li>
          {:else}
            <li class="item todo"><span class="num">{it.n}</span><span class="lbl">{it.l}</span><span class="soon">à venir</span></li>
          {/if}
        {/each}
      </ul>
    {/each}
  </section>
{/each}

<style>
  .head { max-width: 760px; margin-bottom: var(--space-12); }
  .head .eyebrow { color: var(--text-muted); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .parcours { margin-bottom: var(--space-12); border-left: 3px solid var(--accent); padding-left: var(--space-6); }
  .phead { margin-bottom: var(--space-4); }
  .plabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; }
  .phead h2 { font-size: var(--text-2xl); margin: var(--space-1) 0; }
  .tag { color: var(--text-secondary); font-size: var(--text-sm); margin: 0 0 4px; }
  .cov { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
  .gtitre { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin: var(--space-4) 0 var(--space-2); }
  .items { list-style: none; margin: 0 0 var(--space-2); padding: 0; display: grid; gap: 2px; }
  .item { display: grid; grid-template-columns: 28px 1fr auto; gap: var(--space-3); align-items: baseline; padding: 6px 8px; border-radius: 6px; font-size: var(--text-sm); }
  .item .num { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); text-align: right; }
  .item.done { background: color-mix(in srgb, var(--accent) 7%, transparent); }
  .item.done .lbl { color: var(--text-primary); }
  .item.todo .lbl { color: var(--text-muted); }
  .links { display: flex; flex-wrap: wrap; gap: var(--space-3); justify-content: flex-end; }
  .links a { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent); text-decoration: none; white-space: nowrap; }
  .links a:hover { text-decoration: underline; }
  .soon { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); font-style: italic; }
  .chaps { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2); }
  .chaps a { display: flex; align-items: center; gap: var(--space-4); text-decoration: none; color: inherit; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--radius); background: var(--bg-tertiary); }
  .chaps a:hover { border-color: var(--accent); }
  .body { display: flex; flex-direction: column; flex: 1; }
  .body strong { color: var(--text-primary); }
  .body em { font-style: normal; color: var(--text-secondary); font-size: var(--text-sm); }
  .dur { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
</style>
