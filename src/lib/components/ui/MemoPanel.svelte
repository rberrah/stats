<script>
  // Mémo visuel affiché dans le panneau de droite quand un chapitre n'a pas de
  // schéma interactif : une « fiche » illustrée reprenant l'essentiel à retenir.
  export let title = '';
  /** @type {string} html de l'étape « À retenir » */
  export let html = '';
  export let accent = 'var(--accent-pk)';
</script>

<div class="memo" style={`--a:${accent}`}>
  <div class="banner">
    <svg viewBox="0 0 96 72" role="img" aria-label="Fiche mémo">
      <rect x="20" y="8" width="56" height="60" rx="5" class="sheet" />
      <rect x="34" y="3" width="28" height="10" rx="3" class="clip" />
      <g class="lines">
        <circle cx="31" cy="24" r="3" class="check" /><line x1="38" x2="66" y1="24" y2="24" />
        <circle cx="31" cy="36" r="3" class="check" /><line x1="38" x2="66" y1="36" y2="36" />
        <circle cx="31" cy="48" r="3" class="check" /><line x1="38" x2="60" y1="48" y2="48" />
      </g>
    </svg>
    <span class="tag">Fiche mémo</span>
  </div>

  <h3>{title}</h3>
  {#if html}
    <div class="synth">{@html html}</div>
  {:else}
    <p class="fallback">L'essentiel de ce cours est à retenir directement dans le texte.</p>
  {/if}
</div>

<style>
  .memo { width: 100%; }
  .banner { display: flex; flex-direction: column; align-items: center; gap: var(--space-2); padding: var(--space-4) 0 var(--space-3); background: color-mix(in srgb, var(--a) 8%, var(--bg-tertiary)); border-radius: 10px; margin-bottom: var(--space-4); }
  .banner svg { width: 92px; height: auto; }
  .sheet { fill: var(--bg-tertiary); stroke: var(--a); stroke-width: 2.5; }
  .clip { fill: var(--a); }
  .lines line { stroke: color-mix(in srgb, var(--a) 40%, var(--border-subtle)); stroke-width: 3; stroke-linecap: round; }
  .check { fill: var(--a); }
  .tag { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--a); font-weight: 700; }
  h3 { font-size: var(--text-lg); margin: 0 0 var(--space-3); }
  .synth :global(ul) { margin: 0; padding-left: 1.2em; }
  .synth :global(li) { color: var(--text-secondary); line-height: 1.55; margin-bottom: var(--space-2); }
  .synth :global(li strong), .synth :global(strong) { color: var(--text-primary); }
  .synth :global(p) { color: var(--text-secondary); margin: 0 0 var(--space-2); }
  .fallback { color: var(--text-muted); font-size: var(--text-sm); }
</style>
