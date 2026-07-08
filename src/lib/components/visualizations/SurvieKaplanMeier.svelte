<script>
  // @ts-nocheck
  // Analyse de survie : deux groupes suivis dans le temps. Les temps d'événement
  // sont simulés (générateur déterministe) à partir d'un risque de base ; le
  // groupe « traité » a un hazard ratio (HR) réglable. On trace les courbes de
  // Kaplan-Meier (en escalier), la survie médiane, et on affiche le HR.
  let hr = 0.6;      // hazard ratio traité vs témoin (<1 = protecteur)
  const lambda0 = 0.06; // risque de base (témoin)
  const nSubj = 24;     // sujets par groupe

  function makeRng(s) {
    let a = s >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const Tmax = 36; // mois
  // temps d'événement ~ exponentielle(λ) par transformation inverse ; graine fixe
  function eventTimes(lambda, seed) {
    const rng = makeRng(seed);
    const ts = [];
    for (let i = 0; i < nSubj; i++) {
      const u = Math.max(1e-6, rng());
      ts.push(-Math.log(u) / lambda);
    }
    return ts.sort((a, b) => a - b);
  }
  // courbe KM : à chaque événement observé (t ≤ Tmax), S descend de S×(1−1/nRisque)
  function kmCurve(times) {
    let s = 1, atRisk = nSubj;
    const pts = [[0, 1]];
    for (const t of times) {
      if (t > Tmax) { atRisk--; continue; } // censuré à Tmax
      s = s * (1 - 1 / atRisk);
      pts.push([t, s]);
      atRisk--;
    }
    pts.push([Tmax, s]);
    return pts;
  }
  function median(pts) {
    for (const [t, s] of pts) if (s <= 0.5) return t;
    return null;
  }

  $: tim0 = eventTimes(lambda0, 12345);
  $: tim1 = eventTimes(lambda0 * hr, 67890);
  $: km0 = kmCurve(tim0);
  $: km1 = kmCurve(tim1);
  $: med0 = median(km0);
  $: med1 = median(km1);

  const W = 440, H = 260, m = { top: 14, right: 14, bottom: 34, left: 40 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  $: xOf = (t) => (t / Tmax) * iW;
  $: yOf = (s) => iH - s * iH;
  function stepPath(pts) {
    let d = `M${xOf(pts[0][0]).toFixed(1)},${yOf(pts[0][1]).toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` L${xOf(pts[i][0]).toFixed(1)},${yOf(pts[i-1][1]).toFixed(1)}`; // horizontal
      d += ` L${xOf(pts[i][0]).toFixed(1)},${yOf(pts[i][1]).toFixed(1)}`;   // drop
    }
    return d;
  }
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Courbes de survie de Kaplan-Meier">
    <g transform={`translate(${m.left},${m.top})`}>
      {#each [0,0.25,0.5,0.75,1] as g}
        <line x1="0" x2={iW} y1={yOf(g)} y2={yOf(g)} class="grid" />
        <text x="-6" y={yOf(g)+3} class="tk">{(g*100).toFixed(0)}</text>
      {/each}
      {#if med0}<line x1={xOf(med0)} x2={xOf(med0)} y1={yOf(0.5)} y2={iH} class="med c0" />{/if}
      {#if med1}<line x1={xOf(med1)} x2={xOf(med1)} y1={yOf(0.5)} y2={iH} class="med c1" />{/if}
      <path d={stepPath(km0)} class="curve c0" />
      <path d={stepPath(km1)} class="curve c1" />
      <text x={iW/2} y={iH+24} class="axlbl">temps (mois)</text>
      <text transform={`translate(-30,${iH/2}) rotate(-90)`} class="axlbl">survie (%)</text>
    </g>
  </svg>

  <div class="legend">
    <span><i class="sw c0"></i>Témoin{med0 ? ` · médiane ${med0.toFixed(0)} mois` : ''}</span>
    <span><i class="sw c1"></i>Traité{med1 ? ` · médiane ${med1.toFixed(0)} mois` : ''}</span>
  </div>
  <div class="stats">
    <span class="pill hr" class:prot={hr < 1} class:del={hr > 1}>HR = {hr.toFixed(2)}</span>
    <span class="verdict">{hr < 1 ? `risque instantané réduit de ${((1-hr)*100).toFixed(0)} %` : hr > 1 ? `risque augmenté de ${((hr-1)*100).toFixed(0)} %` : 'aucun effet'}</span>
  </div>

  <label class="ctrl">Hazard ratio (traité vs témoin) <span>{hr.toFixed(2)}</span>
    <input type="range" min="0.2" max="2" step="0.05" bind:value={hr} /></label>
  <p class="hint">Chaque « marche » est un événement (décès, rechute) ; la courbe ne descend qu'à ces instants. Un <strong>HR &lt; 1</strong> maintient la courbe du groupe traité au-dessus : meilleure survie. Le HR compare les <strong>risques instantanés</strong>, pas les survies médianes — c'est ce qu'estime le modèle de Cox.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .grid { stroke: var(--border-subtle); stroke-width: 1; stroke-dasharray: 2 3; }
  .tk { font-size: 9px; fill: var(--text-muted); text-anchor: end; font-family: var(--font-mono); }
  .curve { fill: none; stroke-width: 2.5; }
  .c0 { stroke: var(--text-secondary); }
  .c1 { stroke: var(--accent-pk); }
  .med { stroke-width: 1; stroke-dasharray: 3 2; }
  .med.c0 { stroke: var(--text-muted); }
  .med.c1 { stroke: var(--accent-pk); opacity: 0.6; }
  .axlbl { font-size: 10px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .legend { display: flex; gap: var(--space-4); justify-content: center; font-size: var(--text-xs); color: var(--text-secondary); margin-top: var(--space-2); font-family: var(--font-mono); flex-wrap: wrap; }
  .sw { display: inline-block; width: 14px; height: 3px; vertical-align: middle; margin-right: 4px; }
  .sw.c0 { background: var(--text-secondary); }
  .sw.c1 { background: var(--accent-pk); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: center; margin: var(--space-2) 0; }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; font-weight: 700; }
  .pill.hr.prot { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); }
  .pill.hr.del { background: color-mix(in srgb, #c0392b 14%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); color: var(--text-secondary); }
  .ctrl { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  .ctrl span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
