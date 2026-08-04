<script>
  // « Citer cette page » : citation courte + entrée BibTeX, avec copie en un clic.
  // Aucune balise meta citation_* (Highwire) : les règles d'indexation de Google
  // Scholar excluent le matériel de cours, les poser exposerait à un rejet.
  import { AUTHOR_NAME, AUTHOR_SHORT, COURSE_NAME, LICENSE_LABEL } from '$lib/site';

  /** @type {any} */
  export let chapter = null;
  /** URL canonique complète de la page (construite par l'appelant). */
  export let url = '';

  // Année de référence : celle de la dernière révision si le frontmatter la donne,
  // sinon l'année courante — jamais une date inventée.
  $: year = /^\d{4}/.test(chapter?.reviewed_on ?? '')
    ? String(chapter.reviewed_on).slice(0, 4)
    : String(new Date().getFullYear());

  $: title = chapter?.title ?? '';
  $: citation = `${AUTHOR_SHORT} ${title}. ${COURSE_NAME}, ${year}. ${url}`;

  // Clé BibTeX : nom, slug, année — stable et lisible dans une bibliographie.
  $: bibKey = `berrah_${(chapter?.slug ?? 'page').replace(/[^a-z0-9-]/gi, '')}_${year}`;
  // « & » est un caractère actif en LaTeX : il doit être échappé dans les champs.
  $: bibtex = `@misc{${bibKey},
  author       = {Berrah, Racym},
  title        = {{${title.replace(/&/g, '\\&')}}},
  howpublished = {${COURSE_NAME.replace(/&/g, '\\&')} — cours de biostatistique en ligne},
  year         = {${year}},
  url          = {${url}},
  note         = {Chapitre du cours en ligne « ${COURSE_NAME.replace(/&/g, '\\&')} ». Licence ${LICENSE_LABEL}.}
}`;

  /** @type {'' | 'citation' | 'bibtex'} */
  let copied = '';
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;

  /**
   * Copie dans le presse-papiers. Repli SILENCIEUX si l'API n'est pas disponible
   * (contexte non sécurisé, permission refusée) : le texte reste sélectionnable.
   * @param {string} text
   * @param {'citation' | 'bibtex'} which
   */
  async function copy(text, which) {
    try {
      if (!navigator?.clipboard?.writeText) return;
      await navigator.clipboard.writeText(text);
      copied = which;
      clearTimeout(timer);
      timer = setTimeout(() => (copied = ''), 2000);
    } catch {
      // silence volontaire
    }
  }
</script>

{#if chapter && url}
  <section class="cite">
    <h3>Citer cette page</h3>

    <div class="row">
      <p class="ref">{citation}</p>
      <button type="button" class="copy" on:click={() => copy(citation, 'citation')}>
        {copied === 'citation' ? 'Copié' : 'Copier'}
      </button>
    </div>

    <div class="row">
      <pre class="bib">{bibtex}</pre>
      <button type="button" class="copy" on:click={() => copy(bibtex, 'bibtex')}>
        {copied === 'bibtex' ? 'Copié' : 'Copier'}
      </button>
    </div>

    <p class="note">
      Auteur : {AUTHOR_NAME}. Contenu réutilisable sous licence {LICENSE_LABEL}.
    </p>
  </section>
{/if}

<style>
  .cite { margin-top: var(--space-6); }
  .cite h3 { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin: 0 0 var(--space-3); }
  .row { display: flex; align-items: flex-start; gap: var(--space-3); margin-bottom: var(--space-3); }
  .ref { flex: 1; margin: 0; font-size: var(--text-sm); line-height: 1.55; color: var(--text-secondary); overflow-wrap: anywhere; }
  .bib {
    flex: 1; margin: 0; padding: var(--space-3) var(--space-4);
    background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius);
    font-family: var(--font-mono); font-size: var(--text-xs); line-height: 1.6;
    color: var(--text-secondary); overflow-x: auto; white-space: pre;
  }
  .copy {
    flex: none; cursor: pointer;
    font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700;
    color: var(--accent-pk); background: transparent;
    border: 1px solid var(--border-subtle); border-radius: var(--radius);
    padding: 4px 10px;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }
  .copy:hover { border-color: var(--accent-pk); background: color-mix(in srgb, var(--accent-pk) 8%, transparent); }
  .copy:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  .note { margin: var(--space-2) 0 0; font-size: var(--text-xs); color: var(--text-muted); }
  @media (max-width: 640px) {
    .row { flex-direction: column; align-items: stretch; }
    .copy { align-self: flex-start; }
  }
</style>
