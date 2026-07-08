<script>
  // @ts-nocheck
  // Intervalle de confiance à 95 %. On simule de nombreux échantillons ; pour chacun
  // on calcule l'IC f ± 1,96·√(f(1−f)/n). En moyenne 95 % de ces intervalles
  // contiennent la vraie valeur p — les autres la manquent (surlignés).
  let ptrue = 0.4;
  let n = 80;
  let seed = 7;
  const K = 25; // nombre d'échantillons affichés

  function makeRng(s) {
    let a = s >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  $: samples = (() => {
    const rng = makeRng(seed * 1000 + n + Math.round(ptrue * 100));
    const out = [];
    for (let k = 0; k < K; k++) {
      let succ = 0;
      for (let i = 0; i < n; i++) if (rng() < ptrue) succ++;
      const f = succ / n;
      const se = Math.sqrt((f * (1 - f)) / n) || 0.0001;
      const lo = f - 1.96 * se, hi = f + 1.96 * se;
      out.push({ f, lo, hi, covers: lo <= ptrue && ptrue <= hi });
    }
    return out;
  })();
  $: nCover = samples.filter((s) => s.covers).length;

  const W = 460, H = 300, m = { top: 14, right: 14, bottom: 28, left: 14 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const XMIN = 0, XMAX = 1;
  $: xOf = (v) => ((v - XMIN) / (XMAX - XMIN)) * iW;
  $: rowY = (k) => (k + 0.5) * (iH / K);
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Intervalles de confiance de plusieurs échantillons">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1={xOf(ptrue)} x2={xOf(ptrue)} y1="0" y2={iH} class="truth" />
      <text x={xOf(ptrue)} y={iH+18} class="truthlbl">vraie valeur p = {ptrue.toFixed(2)}</text>
      {#each samples as s, k}
        <line x1={xOf(s.lo)} x2={xOf(s.hi)} y1={rowY(k)} y2={rowY(k)} class="ci" class:miss={!s.covers} />
        <circle cx={xOf(s.f)} cy={rowY(k)} r="2.6" class="dot" class:miss={!s.covers} />
      {/each}
    </g>
  </svg>

  <div class="stats">
    <span class="pill cover">{nCover}/{K} contiennent p ({Math.round(nCover/K*100)} %)</span>
    <span class="pill miss">{K-nCover} manquent</span>
    <button on:click={() => (seed += 1)}>Rééchantillonner ↻</button>
  </div>

  <div class="controls">
    <label>p (vraie valeur) <span>{ptrue.toFixed(2)}</span>
      <input type="range" min="0.1" max="0.9" step="0.05" bind:value={ptrue} /></label>
    <label>n (taille de chaque échantillon) <span>{n}</span>
      <input type="range" min="20" max="400" step="10" bind:value={n} /></label>
  </div>
  <p class="hint">« 95 % de confiance » ne dit pas que p a 95 % de chances d'être dans <em>votre</em> intervalle : c'est la <strong>méthode</strong> qui capture p 95 fois sur 100. Augmentez n : les intervalles rétrécissent (plus de précision), la couverture reste ≈ 95 %.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .truth { stroke: var(--accent-pk); stroke-width: 2; stroke-dasharray: 4 3; }
  .truthlbl { font-size: 10px; fill: var(--accent-pk); text-anchor: middle; font-family: var(--font-mono); font-weight: 700; }
  .ci { stroke: var(--accent-ai); stroke-width: 2.4; }
  .ci.miss { stroke: #c0392b; }
  .dot { fill: var(--accent-ai); }
  .dot.miss { fill: #c0392b; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; font-weight: 700; }
  .pill.cover { background: color-mix(in srgb, var(--accent-ai) 16%, var(--bg-primary)); color: var(--accent-ai); }
  .pill.miss { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  button { font-family: var(--font-mono); font-size: var(--text-xs); padding: 4px 12px; border: 1px solid var(--accent-pk); background: var(--bg-primary); color: var(--accent-pk); border-radius: 999px; cursor: pointer; font-weight: 700; }
  button:hover { background: var(--accent-pk); color: #fff; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
