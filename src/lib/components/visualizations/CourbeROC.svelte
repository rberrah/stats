<script>
  // @ts-nocheck
  // Courbe ROC : un marqueur continu sépare imparfaitement malades et sains (deux
  // distributions normales qui se recouvrent). En déplaçant le SEUIL, on lit un
  // couple (sensibilité, spécificité). La courbe ROC trace la sensibilité contre
  // 1 − spécificité pour tous les seuils ; l'aire sous la courbe (AUC) résume la
  // performance. Plus les distributions sont séparées, plus l'AUC est grande.
  let sep = 2;       // séparation des moyennes (pouvoir discriminant)
  let seuil = 1;     // seuil de décision

  const normCdf = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  };
  // sains ~ N(0,1), malades ~ N(sep,1). Test positif si valeur > seuil.
  $: se = 1 - normCdf(seuil - sep);   // P(malade dépasse le seuil)
  $: sp = normCdf(seuil);             // P(sain sous le seuil)
  $: auc = normCdf(sep / Math.SQRT2);

  const W = 300, H = 300, m = { top: 12, right: 12, bottom: 34, left: 40 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: xOf = (v) => v * iW;           // v = 1 − Sp  (0..1)
  $: yOf = (v) => iH - v * iH;       // v = Se     (0..1)
  // courbe ROC : balayage du seuil de +4 à −4
  $: roc = (() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = 4 - (i / 80) * 8;
      const s = 1 - normCdf(t - sep);
      const fp = 1 - normCdf(t);
      pts.push([xOf(fp), yOf(s)]);
    }
    return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  })();
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbe ROC">
    <g transform={`translate(${m.left},${m.top})`}>
      <rect x="0" y="0" width={iW} height={iH} class="frame" />
      <line x1="0" y1={iH} x2={iW} y2="0" class="diag" />
      <path d={roc} class="roc" />
      <circle cx={xOf(1 - sp)} cy={yOf(se)} r="5" class="cur" />
      <text x={iW/2} y={iH+24} class="axlbl">1 − spécificité (faux positifs)</text>
      <text transform={`translate(-26,${iH/2}) rotate(-90)`} class="axlbl">sensibilité</text>
      {#each [0,0.5,1] as t}
        <text x={xOf(t)} y={iH+12} class="tk">{t}</text>
        <text x="-6" y={yOf(t)+3} class="tk r">{t}</text>
      {/each}
    </g>
  </svg>

  <div class="stats">
    <span class="pill">Se = {(se*100).toFixed(0)} %</span>
    <span class="pill">Sp = {(sp*100).toFixed(0)} %</span>
    <span class="pill auc">AUC = {auc.toFixed(2)}</span>
  </div>

  <div class="controls">
    <label>Pouvoir discriminant (séparation) <span>{sep.toFixed(1)}</span>
      <input type="range" min="0" max="4" step="0.1" bind:value={sep} /></label>
    <label>Seuil de décision <span>{seuil.toFixed(1)}</span>
      <input type="range" min="-3" max="5" step="0.1" bind:value={seuil} /></label>
  </div>
  <p class="hint">Le seuil déplace le point le long de la courbe : baisser le seuil monte la sensibilité mais fait chuter la spécificité. La <strong>forme</strong> de la courbe (AUC) ne dépend que du pouvoir discriminant : AUC = 0,5 = pile ou face (diagonale), AUC = 1 = test parfait (coin en haut à gauche).</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); max-width: 360px; margin: 0 auto; }
  svg { width: 100%; height: auto; display: block; }
  .frame { fill: none; stroke: var(--border-subtle); }
  .diag { stroke: var(--border-strong); stroke-width: 1; stroke-dasharray: 3 3; }
  .roc { fill: none; stroke: var(--accent-pk); stroke-width: 2.5; }
  .cur { fill: var(--accent-pd); stroke: #fff; stroke-width: 1; }
  .axlbl { font-size: 10px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .tk { font-size: 9px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .tk.r { text-anchor: end; }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.auc { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .controls { display: grid; grid-template-columns: 1fr; gap: var(--space-2); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
