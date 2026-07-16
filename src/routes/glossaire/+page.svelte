<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { glossary } from '$lib/content/glossary';

  let query = '';
  // Pré-remplit depuis ?q= (liens « Rappels » des chapitres). Lecture côté client
  // uniquement : searchParams est interdit pendant le prérendu.
  $: initial = browser ? ($page.url.searchParams.get('q') ?? '') : '';
  // Pre-remplissage ONE-SHOT. En instruction reactive, elle dependait de `query` : des que
  // l utilisateur vidait le champ, elle le re-remplissait — champ impossible a effacer.
  onMount(() => {
    const q = $page.url.searchParams.get('q') ?? '';
    if (q) query = q;
  });

  $: filtered = glossary
    .filter((g) => {
      const q = query.trim().toLowerCase();
      return !q || g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q);
    })
    .sort((a, b) => a.term.localeCompare(b.term, 'fr'));
</script>

<header class="head">
  <p class="eyebrow">Définitions</p>
  <h1>Glossaire</h1>
  <input class="search" type="search" placeholder="Rechercher un terme…" bind:value={query} />
</header>

<div class="list">
  {#each filtered as g}
    <article class="entry" class:hi={initial && g.term.toLowerCase() === initial.toLowerCase()}>
      <h2>{g.term}</h2>
      <p>{g.def}</p>
    </article>
  {:else}
    <p class="empty">Aucun terme ne correspond à « {query} ».</p>
  {/each}
</div>

<style>
  .head { max-width: 640px; margin-bottom: var(--space-8); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0 var(--space-4); }
  .search { width: 100%; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-tertiary); color: var(--text-primary); font-size: var(--text-base); }
  .list { display: grid; gap: var(--space-3); max-width: 760px; }
  .entry { border: 1px solid var(--border-subtle); border-left: 3px solid var(--accent-pk); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .entry.hi { border-left-color: var(--accent-ai); box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent-ai) 25%, transparent); }
  .entry h2 { font-size: var(--text-lg); margin: 0 0 var(--space-2); }
  .entry p { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.6; }
  .empty { color: var(--text-muted); }
</style>
