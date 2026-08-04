// Identité publique du site : constantes uniques pour l'attribution, la licence,
// les URL canoniques et les données structurées (JSON-LD, sitemap).
// Site français uniquement : aucune plomberie bilingue, aucun hreflang.

/** Origine publique réelle (GitHub Pages, repo « projet »). */
export const SITE_ORIGIN = 'https://rberrah.github.io';
/** Préfixe de déploiement en production (cf. BASE_PATH dans deploy.yml). */
export const SITE_PATH = '/stats';
/** URL d'accueil du cours, terminée par « / » (trailingSlash: 'always'). */
export const SITE_URL = `${SITE_ORIGIN}${SITE_PATH}/`;

/** Nom du cours, tel qu'il doit apparaître dans une citation. */
export const COURSE_NAME = 'Stat & Biologie';

export const AUTHOR_NAME = 'Racym Berrah';
export const AUTHOR_SHORT = 'Berrah R.';
export const AUTHOR_TITLE = 'PharmD';
export const AUTHOR_URL = 'https://rberrah.github.io/a-propos/';
export const ORCID_URL = 'https://orcid.org/0009-0001-6432-2880';

/** Licence du CONTENU. Le code du site reste sous licence MIT. */
export const LICENSE_LABEL = 'CC BY-SA 4.0';
export const LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr';

/**
 * Pages fixes du site (hors chapitres). Source UNIQUE : la navigation principale et
 * le sitemap en dérivent tous les deux — ajouter une page ici suffit.
 */
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Accueil' },
  { href: '/chapitres', key: 'course', label: 'Le cours' },
  { href: '/resume', key: 'resume', label: 'Résumé' },
  { href: '/fiches', key: 'fiches', label: 'Fiches' },
  { href: '/exercices', key: 'exercises', label: 'Entraînement' },
  { href: '/glossaire', key: 'glossary', label: 'Glossaire' },
  { href: '/references', key: 'refs', label: 'Références' },
  { href: '/a-propos', key: 'about', label: 'À propos' }
];

/**
 * Construit une URL publique absolue à partir d'un chemin SANS le préfixe `base`.
 * @param {string} relPath  ex. « /chapitres/a-1-ecart-reduit/ »
 * @returns {string}
 */
export function publicUrl(relPath = '/') {
  let rel = relPath || '/';
  if (!rel.startsWith('/')) rel = `/${rel}`;
  if (!rel.endsWith('/')) rel = `${rel}/`;
  return `${SITE_ORIGIN}${SITE_PATH}${rel}`;
}

/**
 * URL canonique d'une page à partir de `$page.url.pathname`.
 * Ce chemin contient déjà le préfixe de déploiement (vide en local, « /stats » en
 * production) : on le retire pour que la valeur soit IDENTIQUE en dev et au prérendu.
 *
 * On NE se sert PAS de `base` ($app/paths) pour cela : avec `paths.relative` (actif
 * par défaut en SvelteKit 2), `base` vaut une valeur RELATIVE au prérendu (« . »,
 * « ../.. ») et non « /stats ». Le test `rel.startsWith(base)` échouait donc en
 * silence, et l'URL canonique sortait doublée : /stats/stats/chapitres/…
 * @param {string} pathname
 * @returns {string}
 */
export function canonicalUrl(pathname = '/') {
  let rel = pathname || '/';
  if (SITE_PATH && rel.startsWith(SITE_PATH)) rel = rel.slice(SITE_PATH.length);
  return publicUrl(rel);
}

/**
 * Sérialise un objet JSON-LD dans une balise <script> injectable via {@html}.
 * Le « < » est échappé : un titre contenant une balise ne peut pas fermer le script.
 * @param {Record<string, any>} data
 * @returns {string}
 */
export function jsonLdScript(data) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}<\/script>`;
}

/**
 * Fiche « auteur » réutilisable dans les blocs JSON-LD.
 * @returns {Record<string, any>}
 */
export function authorNode() {
  return {
    '@type': 'Person',
    name: AUTHOR_NAME,
    identifier: ORCID_URL,
    sameAs: [ORCID_URL],
    url: AUTHOR_URL
  };
}
