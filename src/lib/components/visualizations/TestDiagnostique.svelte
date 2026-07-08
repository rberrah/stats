<script>
  // @ts-nocheck
  // Test diagnostique : à sensibilité (Se) et spécificité (Sp) FIXES, la valeur
  // prédictive positive (VPP) dépend fortement de la PRÉVALENCE. On applique le
  // test à 1000 personnes et on lit le tableau 2×2 + VPP / VPN.
  let se = 0.90;   // sensibilité
  let sp = 0.90;   // spécificité
  let prev = 0.10; // prévalence
  const N = 1000;

  $: malades = Math.round(N * prev);
  $: sains = N - malades;
  $: VP = Math.round(malades * se);
  $: FN = malades - VP;
  $: VN = Math.round(sains * sp);
  $: FP = sains - VN;
  $: VPP = VP + FP > 0 ? VP / (VP + FP) : 0;
  $: VPN = VN + FN > 0 ? VN / (VN + FN) : 0;
  const pct = (x) => (x * 100).toFixed(0) + ' %';
</script>

<div class="viz">
  <table class="tab">
    <thead>
      <tr><th></th><th class="pos">Malade</th><th class="neg">Sain</th><th>Total</th></tr>
    </thead>
    <tbody>
      <tr>
        <th>Test +</th>
        <td class="vp">{VP}<span>vrais +</span></td>
        <td class="fp">{FP}<span>faux +</span></td>
        <td class="tot">{VP + FP}</td>
      </tr>
      <tr>
        <th>Test −</th>
        <td class="fn">{FN}<span>faux −</span></td>
        <td class="vn">{VN}<span>vrais −</span></td>
        <td class="tot">{FN + VN}</td>
      </tr>
      <tr class="totrow"><th>Total</th><td>{malades}</td><td>{sains}</td><td>{N}</td></tr>
    </tbody>
  </table>

  <div class="stats">
    <span class="pill">Se = {pct(se)}</span>
    <span class="pill">Sp = {pct(sp)}</span>
    <span class="pill vpp">VPP = {pct(VPP)}</span>
    <span class="pill vpn">VPN = {pct(VPN)}</span>
  </div>

  <div class="controls">
    <label>Sensibilité (Se) <span>{pct(se)}</span>
      <input type="range" min="0.5" max="1" step="0.01" bind:value={se} /></label>
    <label>Spécificité (Sp) <span>{pct(sp)}</span>
      <input type="range" min="0.5" max="1" step="0.01" bind:value={sp} /></label>
    <label>Prévalence <span>{pct(prev)}</span>
      <input type="range" min="0.005" max="0.6" step="0.005" bind:value={prev} /></label>
  </div>
  <p class="hint">Fixez Se = Sp = 90 % puis faites varier la prévalence : à <strong>1 %</strong>, un test positif n'est « vrai » que dans ~8 % des cas (VPP faible) — la plupart des positifs sont des <strong>faux positifs</strong>. C'est pourquoi on ne dépiste pas une maladie rare sans confirmation.</p>
</div>

<style>
  .viz { border: 1px solid var(--border-subtle); border-radius: var(--radius); padding: var(--space-4); background: var(--bg-tertiary); }
  .tab { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
  .tab th, .tab td { border: 1px solid var(--border-subtle); padding: var(--space-2); text-align: center; }
  .tab thead th { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); }
  .tab tbody th { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-secondary); text-align: left; }
  .tab td { font-weight: 700; font-size: var(--text-lg); position: relative; }
  .tab td span { display: block; font-weight: 400; font-size: 9px; color: var(--text-muted); font-family: var(--font-mono); }
  .vp { background: color-mix(in srgb, var(--accent-pk) 16%, transparent); }
  .vn { background: color-mix(in srgb, var(--accent-pk) 16%, transparent); }
  .fp { background: color-mix(in srgb, #c0392b 13%, transparent); }
  .fn { background: color-mix(in srgb, #c0392b 13%, transparent); }
  .tot, .totrow td, .totrow th { color: var(--text-muted); font-weight: 400; background: var(--bg-secondary); }
  .stats { display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center; margin: var(--space-3) 0 var(--space-2); }
  .pill { font-family: var(--font-mono); font-size: var(--text-xs); padding: 3px 10px; border-radius: 999px; background: var(--bg-secondary); color: var(--text-secondary); }
  .pill.vpp { background: color-mix(in srgb, var(--accent-pk) 16%, var(--bg-primary)); color: var(--accent-pk); font-weight: 700; }
  .pill.vpn { background: color-mix(in srgb, var(--accent-ai) 16%, var(--bg-primary)); color: var(--accent-ai); font-weight: 700; }
  .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--space-2) var(--space-4); margin-top: var(--space-2); }
  label { font-size: var(--text-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 2px; font-family: var(--font-mono); }
  label span { color: var(--accent-pk); font-weight: 700; }
  input[type=range] { width: 100%; accent-color: var(--accent-pk); }
  .hint { font-size: var(--text-xs); color: var(--text-muted); margin: var(--space-3) 0 0; text-align: center; }
</style>
