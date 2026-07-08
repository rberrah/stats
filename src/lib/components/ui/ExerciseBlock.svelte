<script>
  // Bloc d'exercices d'application. Le sujet peut contenir des termes marqués [[...]]
  // qui « indiquent la méthode » : bouton « Indices » pour les souligner + expliquer.
  import { parseMarks } from '$lib/content/marks';

  /** @type {import('$lib/content/exercises').Exercise[]} */
  export let items = [];
  /** @type {string} */
  export let heading = '';

  /** @type {{done:boolean,correct:boolean,input:string,idx:boolean}[]} */
  let state = [];
  $: if (state.length !== items.length) state = items.map(() => ({ done: false, correct: false, input: '', idx: false }));

  function checkNum(/** @type {number} */ i) {
    const ex = items[i];
    const v = parseFloat((state[i].input || '').replace(',', '.'));
    const tol = (ex.tol ?? 0.05) * Math.abs(ex.answer ?? 0) + 1e-9;
    const ok = Number.isFinite(v) && Math.abs(v - (ex.answer ?? 0)) <= tol;
    state[i] = { ...state[i], done: true, correct: ok };
    state = state;
  }
  function reset(/** @type {number} */ i) {
    state[i] = { ...state[i], done: false, correct: false, input: '' };
    state = state;
  }
  function toggleIdx(/** @type {number} */ i) {
    state[i] = { ...state[i], idx: !state[i].idx };
    state = state;
  }

  $: answered = state.filter((s) => s.done).length;
  $: score = state.filter((s) => s.done && s.correct).length;
</script>

<div class="block">
  {#if heading}<h3 class="heading">{heading}</h3>{/if}
  {#each items as ex, i}
    <article class="ex" class:ok={state[i]?.done && state[i]?.correct} class:ko={state[i]?.done && !state[i]?.correct}>
      <p class="q">{#each parseMarks(ex.q) as seg}{#if seg.key}<span class="term" class:on={state[i]?.idx}>{seg.text}</span>{:else}{seg.text}{/if}{/each}</p>

      {#if ex.indices?.length}
        <button class="idxbtn" class:on={state[i]?.idx} on:click={() => toggleIdx(i)}>
          {state[i]?.idx ? 'Masquer les indices' : 'Indices'}
        </button>
        {#if state[i]?.idx}
          <ul class="indices">{#each ex.indices as ind}<li><strong>{ind.mot}</strong> — {ind.pourquoi}</li>{/each}</ul>
        {/if}
      {/if}

      <div class="num">
        <input type="text" inputmode="decimal" bind:value={state[i].input} placeholder="valeur" disabled={state[i]?.done} on:keydown={(e) => e.key === 'Enter' && checkNum(i)} />
        {#if ex.unit}<span class="unit">{ex.unit}</span>{/if}
        {#if !state[i]?.done}<button class="check" on:click={() => checkNum(i)}>Vérifier</button>{/if}
      </div>

      {#if state[i]?.done}
        <div class="feedback">
          <span class="badge">{state[i].correct ? '✓ Correct' : '✗ Incorrect'}</span>
          <span class="answer">Réponse : {ex.answer} {ex.unit ?? ''}</span>
          <p class="explain">{ex.explain}</p>
          <button class="retry" on:click={() => reset(i)}>Réessayer</button>
        </div>
      {/if}
    </article>
  {/each}
  {#if answered > 0}<p class="score">Score : <strong>{score}</strong> / {answered}</p>{/if}
</div>

<style>
  .block { display: grid; gap: var(--space-4); }
  .heading { font-size: var(--text-sm); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--space-2); margin: 0; }
  .ex { border: 1px solid var(--border-subtle); border-left: 3px solid var(--border-strong); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .ex.ok { border-left-color: var(--accent-pk); }
  .ex.ko { border-left-color: #b23b4a; }
  .q { margin: 0 0 var(--space-3); color: var(--text-primary); font-weight: 600; }
  .term { border-radius: 3px; }
  .term.on { background: color-mix(in srgb, var(--accent-pk) 18%, transparent); box-shadow: 0 1px 0 var(--accent-pk); }
  .idxbtn { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border: 1px dashed var(--border-strong); background: transparent; border-radius: 999px; cursor: pointer; color: var(--accent-ai); margin-bottom: var(--space-2); }
  .idxbtn.on { background: color-mix(in srgb, var(--accent-ai) 10%, transparent); }
  .indices { margin: 0 0 var(--space-3); padding-left: 1.1em; display: grid; gap: 3px; }
  .indices li { font-size: var(--text-sm); color: var(--text-secondary); }
  .indices strong { color: var(--accent-pk); }
  .num { display: flex; gap: var(--space-2); align-items: center; flex-wrap: wrap; }
  .num input { width: 130px; padding: var(--space-2) var(--space-3); border: 1px solid var(--border-strong); border-radius: var(--radius); background: var(--bg-primary); color: var(--text-primary); font-family: var(--font-mono); }
  .num .unit { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-secondary); }
  .check, .retry { font-family: var(--font-mono); font-size: var(--text-xs); padding: 6px 12px; border: 1px solid var(--border-strong); background: var(--bg-secondary); border-radius: var(--radius); cursor: pointer; }
  .check { background: var(--text-primary); color: var(--bg-primary); border-color: var(--text-primary); }
  .feedback { margin-top: var(--space-3); display: grid; gap: var(--space-2); }
  .badge { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; }
  .ex.ok .badge { color: var(--accent-pk); }
  .ex.ko .badge { color: #b23b4a; }
  .answer { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); }
  .explain { margin: 0; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.5; }
  .retry { justify-self: start; }
  .score { font-family: var(--font-mono); font-size: var(--text-sm); margin: 0; }
  .score strong { color: var(--accent-pk); }
</style>
