<script>
  // @ts-nocheck
  // Risques α et β : deux distributions se recouvrent — celle sous H0 (pas de
  // différence) et celle sous H1 (différence réelle). Un seuil de décision sépare
  // « on rejette H0 » de « on ne rejette pas ». α = aire de H0 à droite du seuil ;
  // β = aire de H1 à gauche du seuil ; puissance = 1 − β.
  let sep = 3;      // écart entre les deux moyennes (en σ) = taille de l'effet
  let seuil = 1.64; // seuil de décision (en σ à partir de H0)

  const W = 500, H = 260, m = { top: 16, right: 14, bottom: 30, left: 14 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const XMIN = -3.6, XMAX = 7;
  $: xOf = (z) => ((z - XMIN) / (XMAX - XMIN)) * iW;
  const phi = (z) => Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  const peak = phi(0);
  $: yOf = (d) => iH - (d / (peak * 1.12)) * iH;
  const N = 260;

  function pathFor(center, fromZ, toZ, close) {
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const z = XMIN + (i / N) * (XMAX - XMIN);
      if (z < fromZ || z > toZ) continue;
      pts.push([xOf(z), yOf(phi(z - center))]);
    }
    if (!pts.length) return '';
    let d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    if (close) d = `M${pts[0][0].toFixed(1)},${yOf(0).toFixed(1)} ` + d + ` L${pts[pts.length-1][0].toFixed(1)},${yOf(0).toFixed(1)} Z`;
    return d;
  }
  $: curveH0 = pathFor(0, XMIN, XMAX, false);
  $: curveH1 = pathFor(sep, XMIN, XMAX, false);
  $: alphaArea = pathFor(0, seuil, XMAX, true);   // H0 à droite du seuil
  $: betaArea = pathFor(sep, XMIN, seuil, true);  // H1 à gauche du seuil

  const normCdf = (z) => { // approximation
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  };
  $: alpha = 1 - normCdf(seuil);
  $: beta = normCdf(seuil - sep);
  $: power = 1 - beta;
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Distributions sous H0 et H1 avec risques alpha et bêta">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2={iW} y1={yOf(0)} y2={yOf(0)} class="axis" />
      <path d={betaArea} class="beta" />
      <path d={alphaArea} class="alpha" />
      <path d={curveH0} class="c0" />
      <path d={curveH1} class="c1" />
      <line x1={xOf(seuil)} x2={xOf(seuil)} y1="0" y2={yOf(0)} class="seuil" />
      <text x={xOf(seuil)} y="10" class="seuillbl">seuil</text>
      <text x={xOf(0)} y={yOf(peak)-4} class="clbl h0">H0</text>
      <text x={xOf(sep)} y={yOf(peak)-4} class="clbl h1">H1</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill a">α = {(alpha*100).toFixed(1)} %</span>
    <span class="pill b">β = {(beta*100).toFixed(1)} %</span>
    <span class="pill p">puissance = {(power*100).toFixed(1)} %</span>
  </div>

  <div class="controls">
    <label>Taille de l'effet (écart H0↔H1) <span>{sep.toFixed(1)} σ</span>
      <input type="range" min="0.5" max="5" step="0.1" bind:value={sep} /></label>
    <label>Seuil de décision <span>{seuil.toFixed(2)} σ</span>
      <input type="range" min="0" max="5" step="0.01" bind:value={seuil} /></label>
  </div>
  <p class="hint">Déplacez le seuil : baisser α (moins de faux positifs) <em>augmente</em> β (plus de faux négatifs). Pour gagner sur les deux, il faut <strong>écarter les courbes</strong> — plus d'effet ou un plus grand échantillon.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .c0 { fill: none; stroke: var(--text-secondary); stroke-width: 2; }
  .c1 { fill: none; stroke: var(--accent-pk); stroke-width: 2; }
  .alpha { fill: color-mix(in srgb, #c0392b 45%, transparent); }
  .beta { fill: color-mix(in srgb, var(--accent-pd) 40%, transparent); }
  .seuil { stroke: var(--text-primary); stroke-width: 1.5; stroke-dasharray: 4 2; }
  .seuillbl { font-size: 9px; fill: var(--text-secondary); text-anchor: middle; font-family: var(--font-mono); }
  .clbl { font-size: 11px; text-anchor: middle; font-family: var(--font-mono); font-weight: 700; }
  .clbl.h0 { fill: var(--text-secondary); }
  .clbl.h1 { fill: var(--accent-pk); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700; padding: 3px 10px; border-radius: 999px; }
  .pill.a { background: color-mix(in srgb, #c0392b 18%, var(--bg-primary)); color: #c0392b; }
  .pill.b { background: color-mix(in srgb, var(--accent-pd) 18%, var(--bg-primary)); color: var(--accent-pd); }
  .pill.p { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
