<script>
  import { trackById } from '$lib/content/tracks';
  import chapters from '$lib/content/loadChapters';
  import { exercises, exerciseCats } from '$lib/content/exercises';
  import ExerciseBlock from '$lib/components/ui/ExerciseBlock.svelte';
  import Quiz from '$lib/components/ui/Quiz.svelte';

  const tabs = [
    { id: 'qcm', label: 'QCM', sub: 'Vrai/faux & choix multiples' },
    { id: 'exo', label: "Exercices d'application", sub: 'Calculs & interprétation' }
  ];
  let tab = 'qcm';

  // QCM : quiz des chapitres, regroupés par partie
  const qcmByTrack = (() => {
    const withQcm = chapters.filter((c) => c.quiz?.length);
    /** @type {Record<string, any[]>} */
    const g = {};
    for (const c of withQcm) (g[c.track] ??= []).push(c);
    return Object.entries(g);
  })();
  // Exercices : par catégorie
  const exoByCat = exerciseCats.map((cat) => ({ cat, items: exercises.filter((e) => e.cat === cat) }));
</script>

<header class="head">
  <p class="eyebrow">S'entraîner</p>
  <h1>Entraînement</h1>
  <p class="lede">Deux modes : des <strong>QCM</strong> pour ancrer les définitions et les pièges, et des <strong>exercices d'application</strong> — poser le bon test, mener le calcul, interpréter le résultat.</p>
</header>

<div class="tabs">
  {#each tabs as t}
    <button class:on={tab === t.id} on:click={() => (tab = t.id)}>
      <strong>{t.label}</strong><span>{t.sub}</span>
    </button>
  {/each}
</div>

{#if tab === 'qcm'}
  {#if !qcmByTrack.length}<p class="empty">Les QCM arrivent avec les chapitres.</p>{/if}
  {#each qcmByTrack as [track, list]}
    <section class="grp">
      <h2>{trackById(track)?.title ?? track}</h2>
      {#each list as c}<Quiz title={c.title} questions={c.quiz} />{/each}
    </section>
  {/each}
{:else}
  {#if !exoByCat.some((g) => g.items.length)}<p class="empty">Les exercices d'application arrivent bientôt.</p>{/if}
  {#each exoByCat as g}
    {#if g.items.length}
      <section class="grp"><h2>{g.cat}</h2><ExerciseBlock items={g.items} /></section>
    {/if}
  {/each}
{/if}

<style>
  .head { max-width: 720px; margin-bottom: var(--space-6); }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .tabs { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-8); border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--space-3); }
  .tabs button { display: flex; flex-direction: column; align-items: flex-start; padding: 8px 14px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 10px; cursor: pointer; color: var(--text-secondary); }
  .tabs button strong { font-size: var(--text-sm); }
  .tabs button span { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); }
  .tabs button.on { background: var(--accent-pk); border-color: var(--accent-pk); color: #fff; }
  .tabs button.on span { color: rgba(255,255,255,0.85); }
  .grp { margin-bottom: var(--space-12); max-width: 820px; display: grid; gap: var(--space-4); }
  .grp h2 { font-size: var(--text-xl); margin: 0; }
  .empty { color: var(--text-muted); max-width: 720px; }
</style>
