<script>
  // @ts-nocheck
  // Assistant « Quel test choisir ? » : on descend l'arbre de décision en
  // répondant à quelques questions, jusqu'à une recommandation + liens vers le cours.
  import { base } from '$app/paths';
  import { arbre } from '$lib/content/choixTest';

  // pile de nœuds visités (le dernier = nœud courant) + libellés choisis
  let stack = [arbre];
  let crumbs = [];
  $: node = stack[stack.length - 1];
  $: isLeaf = !!node.result;

  function choose(opt) {
    stack = [...stack, opt.node];
    crumbs = [...crumbs, opt.label];
  }
  function back() {
    if (stack.length > 1) { stack = stack.slice(0, -1); crumbs = crumbs.slice(0, -1); }
  }
  function reset() { stack = [arbre]; crumbs = []; }
</script>

<div class="chooser">
  <div class="trail">
    <span class="step">Étape {crumbs.length + 1}</span>
    {#each crumbs as c, i}
      <span class="crumb">{c}</span>{#if i < crumbs.length - 1}<span class="sep">›</span>{/if}
    {/each}
    {#if crumbs.length}
      <button class="mini" on:click={back}>← Retour</button>
      <button class="mini" on:click={reset}>Recommencer</button>
    {/if}
  </div>

  {#if !isLeaf}
    <h3 class="q">{node.q}</h3>
    <div class="options">
      {#each node.options as opt}
        <button class="opt" on:click={() => choose(opt)}>
          <span>{opt.label}</span><span class="arrow">→</span>
        </button>
      {/each}
    </div>
  {:else}
    <div class="result">
      <p class="rlabel">Test recommandé</p>
      <h3 class="rname">{node.result}</h3>
      <p class="detail">{node.detail}</p>
      <div class="liens">
        {#each node.liens as l}
          <a class="lien" href={`${base}/chapitres/${l.slug}`}>{l.label} →</a>
        {/each}
      </div>
      <button class="mini restart" on:click={reset}>↻ Nouveau choix</button>
    </div>
  {/if}
</div>

<style>
  .chooser { border: 1px solid var(--border-subtle); border-radius: 12px; background: var(--bg-tertiary); padding: var(--space-5); }
  .trail { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: var(--space-4); padding-bottom: var(--space-3); border-bottom: 1px solid var(--border-subtle); }
  .step { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; color: var(--accent-pk); text-transform: uppercase; letter-spacing: 0.06em; }
  .crumb { font-size: var(--text-xs); background: color-mix(in srgb, var(--accent-pk) 12%, var(--bg-primary)); color: var(--accent-pk); padding: 2px 8px; border-radius: 999px; }
  .sep { color: var(--text-muted); }
  .mini { margin-left: auto; font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 999px; cursor: pointer; color: var(--text-secondary); }
  .mini + .mini { margin-left: 6px; }
  .q { font-size: var(--text-lg); margin: 0 0 var(--space-4); }
  .options { display: grid; gap: var(--space-2); }
  .opt { display: flex; justify-content: space-between; align-items: center; gap: var(--space-3); text-align: left; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-strong); background: var(--bg-primary); border-radius: 10px; cursor: pointer; color: var(--text-primary); font-size: var(--text-sm); line-height: 1.4; transition: border-color .15s, background .15s; }
  .opt:hover { border-color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 7%, var(--bg-primary)); }
  .arrow { color: var(--accent-pk); font-weight: 700; }
  .result { text-align: left; }
  .rlabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 var(--space-1); }
  .rname { font-size: var(--text-xl); margin: 0 0 var(--space-3); color: var(--accent-pk); }
  .detail { color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.6; margin: 0 0 var(--space-4); }
  .liens { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .lien { font-family: var(--font-mono); font-size: var(--text-xs); padding: 6px 12px; border-radius: 8px; background: var(--accent-pk); color: #fff; text-decoration: none; font-weight: 600; }
  .lien:hover { filter: brightness(1.08); }
  .restart { display: inline-block; margin: var(--space-4) 0 0; margin-left: 0; }
</style>
