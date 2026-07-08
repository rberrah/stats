<script>
  // @ts-nocheck
  // Loi normale : courbe en cloche, avec moyenne (μ) et écart-type (σ) réglables,
  // et aire hachurée entre deux bornes (en nombre d'écarts-types).
  let mu = 0;
  let sigma = 1;
  let lo = -1.96; // borne basse (en σ)
  let hi = 1.96;  // borne haute (en σ)

  const W = 480, H = 260, m = { top: 16, right: 16, bottom: 34, left: 16 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;

  const XMIN = -4.2, XMAX = 4.2; // en écarts-types autour de μ
  $: xOf = (z) => ((z - XMIN) / (XMAX - XMIN)) * iW;
  const phi = (z) => Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  const peak = phi(0);
  $: yOf = (d) => iH - (d / (peak * 1.08)) * iH;

  const N = 240;
  $: pts = Array.from({ length: N + 1 }, (_, i) => {
    const z = XMIN + (i / N) * (XMAX - XMIN);
    return [xOf(z), yOf(phi(z))];
  });
  $: curve = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  $: area = (() => {
    const seg = pts.filter(([, ], i) => {
      const z = XMIN + (i / N) * (XMAX - XMIN);
      return z >= lo && z <= hi;
    });
    if (!seg.length) return '';
    const first = xOf(Math.max(lo, XMIN)), last = xOf(Math.min(hi, XMAX));
    return `M${first.toFixed(1)},${yOf(0).toFixed(1)} ` +
      seg.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(' ') +
      ` L${last.toFixed(1)},${yOf(0).toFixed(1)} Z`;
  })();

  // aire ≈ proportion sous la courbe entre lo et hi (intégration numérique)
  $: prob = (() => {
    let s = 0; const step = (hi - lo) / 200;
    if (step <= 0) return 0;
    for (let i = 0; i < 200; i++) s += phi(lo + (i + 0.5) * step) * step;
    return s;
  })();
  const fmtV = (z) => (mu + z * sigma).toFixed(2);
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbe de la loi normale">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2={iW} y1={yOf(0)} y2={yOf(0)} class="axis" />
      {#each [-3,-2,-1,0,1,2,3] as z}
        <line x1={xOf(z)} x2={xOf(z)} y1={yOf(0)} y2={yOf(0)+4} class="tick" />
        <text x={xOf(z)} y={yOf(0)+18} class="tlbl">{fmtV(z)}</text>
      {/each}
      <path d={area} class="area" />
      <path d={curve} class="curve" />
      <line x1={xOf(lo)} x2={xOf(lo)} y1={yOf(0)} y2={yOf(phi(lo))} class="bound" />
      <line x1={xOf(hi)} x2={xOf(hi)} y1={yOf(0)} y2={yOf(phi(hi))} class="bound" />
      <line x1={xOf(0)} x2={xOf(0)} y1={yOf(0)} y2={yOf(peak)} class="mean" />
      <text x={xOf(0)} y={yOf(peak)-4} class="meanlbl">μ = {mu.toFixed(1)}</text>
    </g>
  </svg>

  <p class="readout">Aire hachurée ≈ <strong>{(prob*100).toFixed(1)} %</strong> des observations,
    entre <strong>{fmtV(lo)}</strong> et <strong>{fmtV(hi)}</strong>.</p>

  <div class="controls">
    <label>μ (moyenne) <span>{mu.toFixed(1)}</span>
      <input type="range" min="-3" max="3" step="0.1" bind:value={mu} /></label>
    <label>σ (écart-type) <span>{sigma.toFixed(1)}</span>
      <input type="range" min="0.5" max="2.5" step="0.1" bind:value={sigma} /></label>
    <label>borne basse <span>{lo.toFixed(2)} σ</span>
      <input type="range" min="-4" max="0" step="0.01" bind:value={lo} /></label>
    <label>borne haute <span>{hi.toFixed(2)} σ</span>
      <input type="range" min="0" max="4" step="0.01" bind:value={hi} /></label>
  </div>
  <p class="hint">Réglez les bornes à ±1,96 σ : l'aire vaut ≈ 95 % — c'est l'origine du fameux « 1,96 ».</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .tick { stroke: var(--border-strong); stroke-width: 1; }
  .tlbl { font-size: 9px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .area { fill: color-mix(in srgb, var(--accent-pk) 22%, transparent); }
  .bound { stroke: var(--accent-pd); stroke-width: 1.5; stroke-dasharray: 3 2; }
  .mean { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 2 2; }
  .meanlbl { font-size: 10px; fill: var(--text-secondary); text-anchor: middle; font-family: var(--font-mono); }
  .readout { text-align: center; font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-3) 0 var(--space-2); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
