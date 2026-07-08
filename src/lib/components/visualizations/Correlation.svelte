<script>
  // @ts-nocheck
  // Corrélation & régression : un nuage de points dont on règle le coefficient r.
  // Les points sont générés de façon déterministe (même rendu au serveur et au
  // client) : x tiré d'une normale, y = r·x + √(1−r²)·bruit. On trace la droite
  // de régression des moindres carrés et on affiche r et r².
  let r = 0.7;

  // PRNG déterministe (mulberry32) + normale par Box-Muller, graine fixe.
  function makeRng(seed) {
    let a = seed >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const base = (() => {
    const rng = makeRng(20240607);
    const xs = [], es = [];
    for (let i = 0; i < 60; i++) {
      const u1 = Math.max(1e-6, rng()), u2 = rng();
      xs.push(Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2));
      const v1 = Math.max(1e-6, rng()), v2 = rng();
      es.push(Math.sqrt(-2 * Math.log(v1)) * Math.cos(2 * Math.PI * v2));
    }
    return { xs, es };
  })();

  const W = 380, H = 300, m = { top: 16, right: 16, bottom: 30, left: 30 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const S = 3.2; // demi-étendue affichée (en σ)
  $: xPix = (x) => ((x + S) / (2 * S)) * iW;
  $: yPix = (y) => iH - ((y + S) / (2 * S)) * iH;

  $: data = base.xs.map((x, i) => {
    const y = r * x + Math.sqrt(Math.max(0, 1 - r * r)) * base.es[i];
    return { x, y };
  });
  // droite des moindres carrés sur l'échantillon affiché
  $: reg = (() => {
    const n = data.length;
    const mx = data.reduce((s, d) => s + d.x, 0) / n;
    const my = data.reduce((s, d) => s + d.y, 0) / n;
    let sxy = 0, sxx = 0, syy = 0;
    for (const d of data) { sxy += (d.x - mx) * (d.y - my); sxx += (d.x - mx) ** 2; syy += (d.y - my) ** 2; }
    const a = sxy / sxx, b = my - a * mx;
    const robs = sxy / Math.sqrt(sxx * syy);
    return { a, b, robs };
  })();
  $: line = (() => {
    const x1 = -S, x2 = S;
    return `M${xPix(x1)},${yPix(reg.a * x1 + reg.b)} L${xPix(x2)},${yPix(reg.a * x2 + reg.b)}`;
  })();
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Nuage de points et droite de régression">
    <g transform={`translate(${m.left},${m.top})`}>
      <rect x="0" y="0" width={iW} height={iH} class="frame" />
      <line x1={xPix(0)} x2={xPix(0)} y1="0" y2={iH} class="grid" />
      <line x1="0" x2={iW} y1={yPix(0)} y2={yPix(0)} class="grid" />
      <path d={line} class="reg" />
      {#each data as d}
        <circle cx={xPix(d.x)} cy={yPix(d.y)} r="3.4" class="pt" />
      {/each}
      <text x={iW/2} y={iH+22} class="axlbl">variable X</text>
      <text transform={`translate(-20,${iH/2}) rotate(-90)`} class="axlbl">variable Y</text>
    </g>
  </svg>

  <div class="stats">
    <span class="pill">r = {reg.robs.toFixed(2)}</span>
    <span class="pill r2">r² = {(reg.robs*reg.robs*100).toFixed(0)} % de variance liée</span>
  </div>

  <label class="ctrl">Corrélation visée r <span>{r.toFixed(2)}</span>
    <input type="range" min="-1" max="1" step="0.05" bind:value={r} /></label>
  <p class="hint">À r = 0 le nuage est rond (aucune liaison). Vers ±1 il s'aplatit sur la droite. Notez que r² chute vite : à r = 0,5, seule <strong>un quart</strong> de la variance est liée.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); max-width: 420px; margin: 0 auto; }
  svg { width: 100%; height: auto; display: block; }
  .frame { fill: none; stroke: var(--border-subtle); }
  .grid { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 2 3; }
  .reg { stroke: var(--accent-pk); stroke-width: 2.5; fill: none; }
  .pt { fill: color-mix(in srgb, var(--accent-ai) 70%, transparent); stroke: var(--accent-ai); stroke-width: 0.5; }
  .axlbl { font-size: 10px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent-pk) 14%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.r2 { background: var(--bg-secondary); color: var(--text-secondary); font-weight: 400; }
  .ctrl { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  .ctrl span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
