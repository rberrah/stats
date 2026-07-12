<script>
  import { base } from '$app/paths';
  import chapters from '$lib/content/loadChapters';
  import { tracks, chaptersByTrack } from '$lib/content/tracks';

  const grouped = chaptersByTrack(chapters);
  const total = chapters.length;
</script>

<section class="hero">
  <p class="eyebrow">Biostatistique · médecine & biologie</p>
  <h1>La statistique, <span>rendue intuitive</span>.</h1>
  <p class="lede">
    Comprendre pourquoi un test fonctionne avant d'appliquer sa formule. Des explications
    courtes, des schémas que l'on manipule (loi normale, risques α/β, χ², corrélation…) et des
    exercices corrigés — pour raisonner, pas seulement calculer.
  </p>
  <div class="cta">
    <a class="btn btn-primary" href={`${base}/chapitres`}>Parcourir le cours</a>
    <a class="btn btn-outline" href={`${base}/exercices`}>S'entraîner</a>
  </div>
  <p class="stat">{total} chapitre{total > 1 ? 's' : ''} · {tracks.length} parties, du pari statistique à l'épidémiologie clinique</p>
</section>

<section class="grid">
  {#each tracks as t}
    {@const list = grouped[t.id] ?? []}
    {@const first = list[0]}
    <a
      class="tcard card card-hover"
      class:soon={!list.length}
      href={list.length ? `${base}/chapitres/${first.slug}` : `${base}/chapitres`}
      style={`--accent:${t.accent}`}
    >
      <span class="tlabel">{t.label}</span>
      <h2>{t.title}</h2>
      <p class="tag">{t.tagline}</p>
      <span class="count">
        {#if list.length}{list.length} chapitre{list.length > 1 ? 's' : ''} →{:else}Bientôt{/if}
      </span>
    </a>
  {/each}
</section>

<style>
  .hero { max-width: 780px; margin: var(--space-8) 0 var(--space-16); }
  h1 { font-size: var(--text-4xl); margin: var(--space-3) 0; line-height: 1.05; }
  h1 span { color: var(--accent-pk); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  .cta { display: flex; gap: var(--space-3); flex-wrap: wrap; margin: var(--space-6) 0 var(--space-3); }
  .stat { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-muted); }
  .grid { display: grid; gap: var(--space-4); grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .tcard { display: flex; flex-direction: column; gap: var(--space-2); text-decoration: none; color: inherit; border-top: 4px solid var(--accent); }
  .tcard.soon { opacity: 0.72; }
  .tlabel { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; }
  .tcard h2 { font-size: var(--text-xl); margin: 0; }
  .tag { color: var(--text-secondary); font-size: var(--text-sm); flex: 1; }
  .count { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
</style>
