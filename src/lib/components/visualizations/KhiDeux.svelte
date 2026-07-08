<script>
  // @ts-nocheck
  // Test du χ² (ajustement). On compare des effectifs OBSERVÉS à des effectifs
  // ATTENDUS sous l'hypothèse testée. Ici 4 catégories, N fixé, effectifs attendus
  // égaux (N/4). Un curseur « écart » éloigne l'observé de l'attendu ; on voit
  // χ² = Σ (O − C)² / C grandir et franchir le seuil 5 % (ddl = 3 → 7,81).
  let ecart = 0.35; // 0 = observé identique à l'attendu
  const N = 200;
  const K = 4;
  const seuil = 7.81; // χ² au risque 5 %, 3 ddl

  $: expected = Array(K).fill(N / K);
  $: observed = (() => {
    // profil de déviation symétrique, renormalisé pour sommer à N
    const w = [1 + ecart, 1 + ecart / 3, 1 - ecart / 3, 1 - ecart];
    const raw = w.map((x) => (N / K) * x);
    const s = raw.reduce((a, b) => a + b, 0);
    return raw.map((x) => (x * N) / s);
  })();
  $: chi2 = observed.reduce((s, o, i) => s + (o - expected[i]) ** 2 / expected[i], 0);
  $: signif = chi2 > seuil;

  const W = 460, H = 220, m = { top: 14, right: 16, bottom: 40, left: 30 };
  $: iW = W - m.left - m.right;
  $: iH = H - m.top - m.bottom;
  const YMAX = 90;
  $: yOf = (v) => iH - (v / YMAX) * iH;
  const bw = 34, gap = 10;
  $: groupW = iW / K;
  const cats = ['A', 'B', 'C', 'D'];
</script>

<div class="viz">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Effectifs observés contre attendus (test du khi-deux)">
    <g transform={`translate(${m.left},${m.top})`}>
      <line x1="0" x2={iW} y1={yOf(0)} y2={yOf(0)} class="axis" />
      <line x1="0" x2={iW} y1={yOf(N/K)} y2={yOf(N/K)} class="ref" />
      <text x={iW-2} y={yOf(N/K)-3} class="reflbl">attendu {N/K}</text>
      {#each cats as c, i}
        {@const cx = i * groupW + groupW/2}
        <rect x={cx - bw - gap/2} y={yOf(expected[i])} width={bw} height={iH - yOf(expected[i])} class="exp" />
        <rect x={cx + gap/2} y={yOf(observed[i])} width={bw} height={iH - yOf(observed[i])} class="obs" class:sig={signif} />
        <text x={cx} y={iH + 16} class="clbl">{c}</text>
        <text x={cx} y={iH + 30} class="onum">{observed[i].toFixed(0)}</text>
      {/each}
    </g>
  </svg>

  <div class="legend"><span class="sw exp"></span>attendu (C) <span class="sw obs"></span>observé (O)</div>

  <div class="stats">
    <span class="pill chi" class:sig={signif}>χ² = {chi2.toFixed(2)}</span>
    <span class="pill">seuil 5 % (3 ddl) = {seuil}</span>
    <span class="verdict" class:sig={signif}>{signif ? 'χ² > seuil → répartition ≠ attendue (significatif)' : 'χ² < seuil → compatible avec l\'attendu'}</span>
  </div>

  <label class="ctrl">Écart observé ↔ attendu <span>{(ecart*100).toFixed(0)} %</span>
    <input type="range" min="0" max="0.6" step="0.01" bind:value={ecart} /></label>
  <p class="hint">À écart nul, O = C et χ² ≈ 0. Le χ² additionne les écarts <strong>au carré, relatifs à l'attendu</strong> : quelques grosses différences pèsent lourd. Il ne devient « significatif » qu'au-delà du seuil lu dans la table (ici 7,81 pour 3 ddl).</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  svg { width: 100%; height: auto; display: block; }
  .axis { stroke: var(--border-strong); stroke-width: 1; }
  .ref { stroke: var(--text-muted); stroke-width: 1; stroke-dasharray: 4 3; }
  .reflbl { font-size: 9px; fill: var(--text-muted); text-anchor: end; font-family: var(--font-mono); }
  .exp { fill: var(--border-strong); opacity: 0.55; }
  .obs { fill: var(--accent-pk); }
  .obs.sig { fill: #c0392b; }
  .clbl { font-size: 11px; fill: var(--text-secondary); text-anchor: middle; font-family: var(--font-mono); font-weight: 700; }
  .onum { font-size: 9px; fill: var(--text-muted); text-anchor: middle; font-family: var(--font-mono); }
  .legend { display: flex; gap: var(--space-3); justify-content: center; align-items: center; font-size: var(--text-xs); color: var(--text-secondary); margin-top: var(--space-2); font-family: var(--font-mono); }
  .sw { width: 12px; height: 12px; border-radius: 3px; display: inline-block; vertical-align: middle; margin-right: 3px; }
  .sw.exp { background: var(--border-strong); opacity: 0.55; }
  .sw.obs { background: var(--accent-pk); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.chi { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.chi.sig { background: color-mix(in srgb, #c0392b 16%, var(--bg-primary)); color: #c0392b; }
  .verdict { font-size: var(--text-xs); color: var(--text-secondary); }
  .verdict.sig { color: #c0392b; font-weight: 600; }
  .ctrl { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  .ctrl span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
