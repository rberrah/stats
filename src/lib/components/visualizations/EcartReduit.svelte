<script>
  // @ts-nocheck
  // Fluctuations d'échantillonnage d'un pourcentage. Sous H0, la fréquence f d'un
  // échantillon de taille n se répartit ~normalement autour de p, avec un écart-type
  // √(p(1−p)/n). L'écart-réduit z = (f − p) / σ situe une observation.
  let p = 0.20;   // pourcentage théorique (H0)
  let n = 100;    // taille d'échantillon
  let f = 0.30;   // fréquence observée

  $: sigma = Math.sqrt((p * (1 - p)) / n);
  $: z = sigma > 0 ? (f - p) / sigma : 0;

  const W = 500, H = 240, m = { top: 16, right: 16, bottom: 34, left: 16 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  // fenêtre : p ± 4σ, bornée à [0,1]
  $: xmin = Math.max(0, p - 4 * sigma);
  $: xmax = Math.min(1, p + 4 * sigma);
  $: xOf = (v) => ((v - xmin) / (xmax - xmin || 1)) * iW;
  const phi = (t) => Math.exp(-0.5 * t * t) / Math.sqrt(2 * Math.PI);
  $: peak = phi(0);
  $: yOf = (d) => iH - (d / (peak * 1.1)) * iH;
  const N = 200;
  $: pts = Array.from({ length: N + 1 }, (_, i) => {
    const v = xmin + (i / N) * (xmax - xmin);
    const t = sigma > 0 ? (v - p) / sigma : 0;
    return [xOf(v), yOf(phi(t))];
  });
  $: curve = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  // bande d'acceptation ±1,96σ
  $: bLo = p - 1.96 * sigma;
  $: bHi = p + 1.96 * sigma;
  $: band = (() => {
    const a = [];
    for (let i = 0; i <= N; i++) {
      const v = xmin + (i / N) * (xmax - xmin);
      if (v < bLo || v > bHi) continue;
      const t = (v - p) / sigma;
      a.push([xOf(v), yOf(phi(t))]);
    }
    if (!a.length) return '';
    return `M${a[0][0].toFixed(1)},${yOf(0).toFixed(1)} ` + a.map(([x,y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(' ') + ` L${a[a.length-1][0].toFixed(1)},${yOf(0).toFixed(1)} Z`;
  })();
  $: outside = Math.abs(z) > 1.96;
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Distribution d'échantillonnage d'un pourcentage">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2={iW} y1={yOf(0)} y2={yOf(0)} class="axis" />
      <path d={band} class="band" />
      <path d={curve} class="curve" />
      <line x1={xOf(p)} x2={xOf(p)} y1={yOf(0)} y2={yOf(peak)} class="mean" />
      <text x={xOf(p)} y={yOf(peak)-4} class="meanlbl">p = {p.toFixed(2)}</text>
      {#if f >= xmin && f <= xmax}
        <line x1={xOf(f)} x2={xOf(f)} y1={yOf(0)} y2="0" class="obs" class:out={outside} />
        <text x={xOf(f)} y="10" class="obslbl" class:out={outside}>f = {f.toFixed(2)}</text>
      {/if}
      {#each [bLo, bHi] as b}
        <text x={xOf(b)} y={yOf(0)+16} class="blbl">{b.toFixed(2)}</text>
      {/each}
    </g>
  </svg>

  <div class="stats">
    <span class="pill">σ = √(p(1−p)/n) = {sigma.toFixed(3)}</span>
    <span class="pill z" class:out={outside}>z = {z.toFixed(2)}</span>
    <span class="verdict" class:out={outside}>{outside ? 'hors bande 95 % → écart significatif' : 'dans la bande 95 % → compatible avec p'}</span>
  </div>

  <div class="controls">
    <label>p (théorique) <span>{p.toFixed(2)}</span>
      <input type="range" min="0.05" max="0.95" step="0.01" bind:value={p} /></label>
    <label>n (effectif) <span>{n}</span>
      <input type="range" min="10" max="1000" step="10" bind:value={n} /></label>
    <label>f (observé) <span>{f.toFixed(2)}</span>
      <input type="range" min="0" max="1" step="0.01" bind:value={f} /></label>
  </div>
  <p class="hint">Augmentez <strong>n</strong> : la cloche se resserre (σ ↓ en 1/√n), donc une même fréquence f devient « plus surprenante ». C'est pourquoi les grands échantillons détectent de petits écarts.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .curve { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .band { fill: color-mix(in srgb, var(--accent-pk) 16%, transparent); }
  .mean { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 2 2; }
  .meanlbl { font-size: 10px; fill: var(--text-secondary); text-anchor: middle; font-family: var(--font-mono); }
  .obs { stroke: var(--accent-pd); stroke-width: 2; }
  .obs.out { stroke: #c0392b; }
  .obslbl { font-size: 10px; fill: var(--accent-pd); text-anchor: middle; font-family: var(--font-mono); font-weight: 700; }
  .obslbl.out { fill: #c0392b; }
  .blbl { font-size: 9px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.z { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.z.out { background: color-mix(in srgb, #c0392b 16%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); color: var(--text-secondary); }
  .verdict.out { color: #c0392b; font-weight: 600; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
