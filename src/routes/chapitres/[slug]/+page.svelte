<script>
  import { base } from '$app/paths';
  import { onMount, onDestroy, tick } from 'svelte';
  import { page } from '$app/stores';
  import chapters from '$lib/content/loadChapters';
  import { trackById } from '$lib/content/tracks';
  import Quiz from '$lib/components/ui/Quiz.svelte';
  import ExerciseBlock from '$lib/components/ui/ExerciseBlock.svelte';
  import MemoPanel from '$lib/components/ui/MemoPanel.svelte';
  import ChapterFooter from '$lib/components/ui/ChapterFooter.svelte';
  import { exercisesForChapter } from '$lib/content/exercises';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import vizMap, { availableVizKeys } from '$lib/content/vizRegistry';

  $: slug = $page.params.slug;
  $: chapter = chapters.find((c) => c.slug === slug);
  $: idx = chapters.findIndex((c) => c.slug === slug);
  $: track = chapter ? trackById(chapter.track) : null;
  $: prev = idx > 0 ? chapters[idx - 1] : null;
  $: next = idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : null;
  $: chapterExercises = chapter ? exercisesForChapter(chapter.slug) : [];
  // Synthèse « À retenir » du chapitre (utilisée comme mémo visuel quand pas de schéma).
  $: synthese = chapter?.steps?.find((s) => /retenir/i.test(s.title))?.html ?? '';

  // Rappels : prérequis (liens) + termes du glossaire.
  $: prereqs = (chapter?.prerequisites ?? [])
    .map((/** @type {string} */ s) => chapters.find((c) => c.slug === s))
    .filter(Boolean)
    .map((/** @type {any} */ c) => ({ slug: c.slug, title: c.title }));
  $: glossaryTerms = chapter?.glossary ?? [];
  $: hasRecall = prereqs.length > 0 || glossaryTerms.length > 0;

  let activeIndex = 0;
  /** @type {HTMLElement[]} */
  let stepEls = [];
  /** @type {HTMLElement} */
  let articleEl;
  let progress = 0;

  // dernière étape qui définit une viz (le panneau persiste sur les étapes texte)
  $: activeViz = (() => {
    if (!chapter) return null;
    for (let i = activeIndex; i >= 0; i--) {
      const v = chapter.steps[i]?.viz;
      if (v && vizMap[v]) return v;
    }
    for (const s of chapter.steps) if (s.viz && vizMap[s.viz]) return s.viz;
    return null;
  })();
  $: requestedViz = (() => {
    if (!chapter) return null;
    for (let i = activeIndex; i >= 0; i--) {
      const v = chapter.steps[i]?.viz;
      if (v) return v;
    }
    return null;
  })();

  /** @type {IntersectionObserver | null} */
  let observer = null;

  function setupObserver() {
    if (observer) observer.disconnect();
    if (typeof IntersectionObserver === 'undefined') return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number(/** @type {HTMLElement} */ (e.target).dataset.index);
            if (!Number.isNaN(i)) activeIndex = i;
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    stepEls.forEach((el) => el && observer && observer.observe(el));
  }

  function onScroll() {
    if (!articleEl) return;
    const rect = articleEl.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    progress = total > 0 ? passed / total : 0;
  }

  onMount(async () => {
    await tick();
    setupObserver();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  });
  onDestroy(() => {
    if (observer) observer.disconnect();
    if (typeof window !== 'undefined') window.removeEventListener('scroll', onScroll);
  });

  let lastSlug = '';
  $: if (slug && slug !== lastSlug) {
    lastSlug = slug;
    activeIndex = 0;
    tick().then(setupObserver);
  }
</script>

{#if !chapter}
  <div class="missing">
    <h1>Chapitre introuvable</h1>
    <a class="btn btn-outline" href={`${base}/chapitres`}>Retour aux disciplines</a>
  </div>
{:else}
  <div class="progress" style={`--p:${progress}`}><div class="bar"></div></div>

  <header class="chap-head">
    <a class="back" href={`${base}/chapitres`}>← Disciplines</a>
    <p class="eyebrow">{track?.title ?? ''}</p>
    <h1>{chapter.title}</h1>
    <p class="desc">{chapter.description}</p>

    {#if hasRecall}
      <aside class="recall">
        <p class="recall-title">Rappels</p>
        {#if prereqs.length}
          <div class="recall-row">
            <span class="recall-label">Prérequis</span>
            <span class="recall-items">
              {#each prereqs as p}<a class="chip chip-link" href={`${base}/chapitres/${p.slug}`}>{p.title}</a>{/each}
            </span>
          </div>
        {/if}
        {#if glossaryTerms.length}
          <div class="recall-row">
            <span class="recall-label">Glossaire</span>
            <span class="recall-items">
              {#each glossaryTerms as t}<a class="chip chip-term" href={`${base}/glossaire?q=${encodeURIComponent(t)}`}>{t}</a>{/each}
            </span>
          </div>
        {/if}
      </aside>
    {/if}
  </header>

  <div class="scrolly">
    <div class="narrative" bind:this={articleEl}>
      {#each chapter.steps as step, i}
        <section class="step" class:active={i === activeIndex} data-index={i} bind:this={stepEls[i]}>
          <p class="step-kicker">{String(i + 1).padStart(2, '0')} · {step.title}</p>
          <div class="prose">{@html step.html}</div>
        </section>
      {/each}

      {#if chapter.quiz?.length}
        <section class="step quiz-step">
          <p class="step-kicker">QCM · épreuve 1</p>
          <Quiz title="QCM" questions={chapter.quiz} />
        </section>
      {/if}

      {#if chapterExercises.length}
        <section class="step ex-step">
          <p class="step-kicker">Exercices d'application</p>
          <ExerciseBlock items={chapterExercises} />
        </section>
      {/if}

      <ChapterFooter {chapter} />

      <nav class="chap-nav">
        {#if prev}
          <a class="nav-card" href={`${base}/chapitres/${prev.slug}`}><span>Précédent</span><strong>{prev.title}</strong></a>
        {:else}<span></span>{/if}
        {#if next}
          <a class="nav-card right" href={`${base}/chapitres/${next.slug}`}><span>Suivant</span><strong>{next.title}</strong></a>
        {/if}
      </nav>
    </div>

    <aside class="viz-panel">
      <div class="viz-inner">
        {#if activeViz && vizMap[activeViz]}
          {#key activeViz}
            <div class="viz-swap" in:fly={{ y: 14, duration: 320, easing: cubicOut }} out:fade={{ duration: 120 }}>
              <svelte:component this={vizMap[activeViz]} />
            </div>
          {/key}
        {:else if requestedViz && !vizMap[requestedViz]}
          <div class="viz-empty">
            <p><strong>Visualisation introuvable :</strong> <code>{requestedViz}</code></p>
            <p class="hint">Vérifiez le nom dans <code>src/lib/components/visualizations/</code>. Clés disponibles :</p>
            <p class="keys">{availableVizKeys.join(' · ')}</p>
          </div>
        {:else}
          <MemoPanel title={chapter.title} html={synthese} accent={track?.accent} />
        {/if}
      </div>
    </aside>
  </div>
{/if}

<style>
  .progress { position: sticky; top: 56px; z-index: 40; height: 3px; background: var(--border-subtle); margin: 0 0 var(--space-6); }
  .progress .bar { height: 100%; width: calc(var(--p) * 100%); background: var(--accent-pk); transition: width 0.1s linear; }
  .chap-head { max-width: 720px; margin-bottom: var(--space-8); }
  .back { font-family: var(--font-mono); font-size: var(--text-sm); text-decoration: none; color: var(--text-secondary); }
  .chap-head h1 { font-size: var(--text-3xl); margin: var(--space-2) 0; }
  .chap-head .desc { color: var(--text-secondary); font-size: var(--text-lg); }

  .scrolly { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
  @media (min-width: 920px) { .scrolly { grid-template-columns: minmax(0, 1fr) minmax(420px, 1.1fr); gap: var(--space-12); align-items: start; } }
  .narrative { display: flex; flex-direction: column; }
  .step { padding: var(--space-6) 0; transition: opacity 0.3s ease; }
  @media (min-width: 920px) { .step { min-height: 62vh; display: flex; flex-direction: column; justify-content: center; opacity: 0.4; } .step.active { opacity: 1; } }
  .step-kicker { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-pk); margin: 0 0 var(--space-3); }
  .prose { font-size: var(--text-base); line-height: var(--line-height-body); color: var(--text-primary); }
  .prose :global(p) { margin: 0 0 var(--space-4); color: var(--text-secondary); }
  .prose :global(strong) { color: var(--text-primary); }
  .prose :global(ul), .prose :global(ol) { color: var(--text-secondary); padding-left: 1.2em; }
  .prose :global(li) { margin-bottom: var(--space-2); }
  .prose :global(table) { width: 100%; border-collapse: collapse; margin: var(--space-4) 0; font-size: var(--text-sm); display: block; overflow-x: auto; }
  .prose :global(thead th) { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-muted); text-align: left; }
  .prose :global(th), .prose :global(td) { border: 1px solid var(--border-subtle); padding: var(--space-2) var(--space-3); text-align: left; color: var(--text-secondary); }
  .prose :global(tbody tr:nth-child(even)) { background: var(--bg-tertiary); }
  .prose :global(.math-rendered) { overflow-x: auto; }
  .prose :global(.math-display) { margin: var(--space-6) 0; padding: var(--space-4); background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius); }
  .prose :global(.katex-display) { margin: var(--space-6) 0; padding: var(--space-4); background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius); overflow-x: auto; }
  .prose :global(.math-display .katex-display) { margin: 0; padding: 0; background: transparent; border: 0; }

  .prose :global(.callout) { margin: var(--space-5) 0; padding: var(--space-4) var(--space-4) var(--space-4) var(--space-6); border-left: 3px solid var(--border-strong); border-radius: 0 var(--radius) var(--radius) 0; background: var(--bg-tertiary); }
  .prose :global(.callout p) { margin: 0 0 var(--space-2); }
  .prose :global(.callout p:last-child) { margin-bottom: 0; }
  .prose :global(.callout-label) { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; margin-bottom: var(--space-2) !important; }
  .prose :global(.callout-pitfall) { border-left-color: #b23b4a; background: color-mix(in srgb, #b23b4a 6%, var(--bg-tertiary)); }
  .prose :global(.callout-pitfall .callout-label) { color: #b23b4a; }
  .prose :global(.callout-key) { border-left-color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 7%, var(--bg-tertiary)); }
  .prose :global(.callout-key .callout-label) { color: var(--accent-pk); }
  .prose :global(.callout-clinical) { border-left-color: var(--accent-ai); background: color-mix(in srgb, var(--accent-ai) 6%, var(--bg-tertiary)); }
  .prose :global(.callout-clinical .callout-label) { color: var(--accent-ai); }
  .prose :global(.callout-math) { border-left-color: var(--border-strong); }
  .prose :global(.callout-math .callout-label) { color: var(--text-secondary); }
  .prose :global(.callout-note .callout-label) { color: var(--text-muted); }
  .prose :global(.callout-howto) { border-left-color: var(--accent-ai); background: color-mix(in srgb, var(--accent-ai) 7%, var(--bg-tertiary)); }
  .prose :global(.callout-howto .callout-label) { color: var(--accent-ai); }
  .prose :global(.callout-recall) { border-left-color: var(--text-muted); background: var(--bg-secondary); }
  .prose :global(.callout-recall .callout-label) { color: var(--text-secondary); }

  .recall { margin-top: var(--space-6); padding: var(--space-4); background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius); display: grid; gap: var(--space-2); }
  .recall-title { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary); margin: 0; }
  .recall-row { display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--space-2); }
  .recall-label { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); min-width: 78px; }
  .recall-items { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { font-family: var(--font-mono); font-size: var(--text-xs); padding: 2px 9px; border-radius: 12px; text-decoration: none; border: 1px solid var(--border-subtle); }
  .chip-link { background: color-mix(in srgb, var(--accent-pk) 10%, var(--bg-tertiary)); color: var(--accent-pk); border-color: color-mix(in srgb, var(--accent-pk) 30%, transparent); }
  .chip-term { background: var(--bg-tertiary); color: var(--text-secondary); }
  .chip-term:hover { border-color: var(--accent-ai); color: var(--accent-ai); }

  .viz-panel { position: relative; }
  @media (min-width: 920px) { .viz-panel { position: sticky; top: 80px; height: calc(100vh - 110px); display: flex; align-items: center; } }
  .viz-inner { width: 100%; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 12px; padding: var(--space-6); box-shadow: 0 14px 40px rgba(22, 32, 31, 0.07); }
  .viz-swap { width: 100%; }
  .viz-empty { color: var(--text-muted); text-align: center; padding: var(--space-12) var(--space-4); }
  .viz-empty .hint { font-size: var(--text-sm); margin-top: var(--space-2); }
  .viz-empty .keys { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); margin-top: var(--space-3); line-height: 1.9; }

  .quiz-step, .ex-step { min-height: auto; opacity: 1; }
  .ex-step { max-width: 760px; }
  .chap-nav { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-8); }
  .nav-card { display: flex; flex-direction: column; gap: 2px; text-decoration: none; padding: var(--space-4); border: 1px solid var(--border-subtle); border-radius: var(--radius); background: var(--bg-tertiary); transition: border-color 0.2s ease, transform 0.2s ease; }
  .nav-card:hover { border-color: var(--accent-pk); transform: translateY(-2px); }
  .nav-card.right { text-align: right; }
  .nav-card span { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
  .nav-card strong { color: var(--text-primary); }
  .missing { text-align: center; padding: var(--space-24) 0; display: grid; gap: var(--space-4); place-items: center; }
</style>
