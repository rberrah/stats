<script>
  // Signature d'auteur en tête de chapitre : qui écrit, dans quel cours, quand la page
  // a été revue. Ligne discrète, sans photo ni encadré.
  import { AUTHOR_NAME, AUTHOR_TITLE, COURSE_NAME, AUTHOR_URL, ORCID_URL } from '$lib/site';

  /** @type {any} */
  export let chapter = null;

  // La date vient du frontmatter (`reviewed_on`). Absente : on n'affiche RIEN
  // plutôt qu'une date inventée.
  $: reviewedOn = chapter?.reviewed_on ?? '';
</script>

<p class="byline">
  <a class="who" href={AUTHOR_URL}>{AUTHOR_NAME}</a>, {AUTHOR_TITLE}
  <a class="orcid" href={ORCID_URL} target="_blank" rel="noopener noreferrer me">ORCID</a>
  <span class="sep">·</span>{COURSE_NAME}
  {#if reviewedOn}<span class="sep">·</span>Dernière révision : {reviewedOn}{/if}
</p>

<style>
  .byline {
    margin: var(--space-2) 0 var(--space-3);
    font-size: var(--text-sm);
    line-height: 1.5;
    color: var(--text-muted);
  }
  .who { color: var(--text-secondary); text-decoration: none; border-bottom: 1px solid var(--border-subtle); }
  .who:hover { color: var(--accent-pk); border-color: var(--accent-pk); }
  .orcid {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    letter-spacing: 0.04em;
    color: var(--text-muted);
    text-decoration: none;
    margin-left: 4px;
  }
  .orcid:hover { color: var(--accent-pk); }
  .sep { margin: 0 6px; color: var(--border-strong); }
</style>
