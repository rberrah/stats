<script>
  // @ts-nocheck
  // Analyse de la variance : 3 groupes de mesures. On règle la SÉPARATION des
  // moyennes de groupe. L'ANOVA compare la variance ENTRE groupes (les moyennes
  // s'écartent-elles ?) à la variance INTRA-groupe (le « bruit »). F est leur
  // rapport : grand F ⇒ les groupes diffèrent vraiment.
  let sep = 1.4;   // écart entre moyennes de groupe (unités d'écart-type)
  let seed = 3;
  const K = 3, ng = 10;

  function makeRng(s) {
    let a = s >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const noise = (() => {
    const rng = makeRng(99); const g = [];
    for (let k = 0; k < K; k++) { const row = []; for (let i = 0; i < ng; i++) { const u1 = Math.max(1e-6, rng()), u2 = rng(); row.push(Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2)); } g.push(row); }
    return g;
  })();
  const centers0 = [-1, 0, 1];
  $: groups = noise.map((row, k) => row.map((e) => centers0[k] * sep + e));
  $: allVals = groups.flat();
  $: grand = allVals.reduce((a, b) => a + b, 0) / allVals.length;
  $: means = groups.map((g) => g.reduce((a, b) => a + b, 0) / g.length);
  $: SSB = means.reduce((s, m) => s + ng * (m - grand) ** 2, 0);
  $: SSW = groups.reduce((s, g, k) => s + g.reduce((ss, v) => ss + (v - means[k]) ** 2, 0), 0);
  $: F = (SSB / (K - 1)) / (SSW / (allVals.length - K) || 1e-6);
  const Fseuil = 3.35; // ~ F 5 %, ddl (2, 27)
  $: signif = F > Fseuil;

  const W = 460, H = 250, m = { top: 16, right: 16, bottom: 34, left: 30 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const YMIN = -4, YMAX = 4;
  $: yOf = (v) => iH - ((v - YMIN) / (YMAX - YMIN)) * iH;
  $: colX = (k) => (k + 0.5) * (iW / K);
  const labels = ['Groupe 1', 'Groupe 2', 'Groupe 3'];
  function jitter(k, i) { return colX(k) + ((i % 5) - 2) * 7; }
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Nuage de trois groupes, analyse de la variance">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2={iW} y1={yOf(grand)} y2={yOf(grand)} class="grand" />
      <text x={iW-2} y={yOf(grand)-4} class="grandlbl">moyenne générale</text>
      {#each groups as g, k}
        <line x1={colX(k)-30} x2={colX(k)+30} y1={yOf(means[k])} y2={yOf(means[k])} class="gmean" class:sig={signif} />
        {#each g as v, i}
          <circle cx={jitter(k,i)} cy={yOf(v)} r="3.2" class="pt" />
        {/each}
        <text x={colX(k)} y={iH+16} class="glbl">{labels[k]}</text>
        <line x1={colX(k)} x2={colX(k)} y1={yOf(means[k])} y2={yOf(grand)} class="link" />
      {/each}
    </g>
  </svg>

  <div class="stats">
    <span class="pill f" class:sig={signif}>F = {F.toFixed(2)}</span>
    <span class="pill">seuil 5 % ≈ {Fseuil}</span>
    <span class="verdict" class:sig={signif}>{signif ? 'F > seuil → au moins une moyenne diffère' : 'F < seuil → différences compatibles avec le hasard'}</span>
  </div>

  <div class="controls">
    <label>Séparation des moyennes <span>{sep.toFixed(1)}</span>
      <input type="range" min="0" max="3" step="0.1" bind:value={sep} /></label>
    <button on:click={() => (seed += 1)}>Rééchantillonner ↻</button>
  </div>
  <p class="hint">À séparation nulle, les trois nuages se superposent : F ≈ 1 (variance entre ≈ variance intra). En écartant les moyennes, la variance <strong>entre</strong> groupes gonfle et F décolle — sans jamais avoir à comparer les groupes deux à deux.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .grand { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 4 3; }
  .grandlbl { font-size: 9px; fill: var(--text-muted); text-anchor: end; font-family: var(--font-mono); }
  .gmean { stroke: var(--accent-pk); stroke-width: 3; }
  .gmean.sig { stroke: #c0392b; }
  .pt { fill: color-mix(in srgb, var(--accent-ai) 60%, transparent); stroke: var(--accent-ai); stroke-width: 0.5; }
  .link { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 2 2; }
  .glbl { font-size: 10px; fill: var(--text-secondary); text-anchor: middle; font-family: var(--font-mono); font-weight: 700; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.f { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.f.sig { background: color-mix(in srgb, #c0392b 16%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); color: var(--text-secondary); }
  .verdict.sig { color: #c0392b; font-weight: 600; }
  .controls { display: flex; gap: var(--space-4); align-items: flex-end; flex-wrap: wrap; margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); flex: 1; min-width: 180px; }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 12px; border: 1px solid var(--accent-pk); background: var(--bg-primary); color: var(--accent-pk); border-radius: 999px; cursor: pointer; font-weight: 700; }
  button:hover { background: var(--accent-pk); color: #fff; }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
