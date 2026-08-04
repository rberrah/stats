// Sitemap prérendu : pages fixes (NAV_LINKS) + tous les chapitres, dérivés du
// chargeur existant. Ajouter un chapitre Markdown suffit pour qu'il y figure.
import chapters from '$lib/content/loadChapters';
import { NAV_LINKS, publicUrl } from '$lib/site';

export const prerender = true;
// Un endpoint ne suit pas le `trailingSlash: 'always'` des pages : on l'écrit
// explicitement pour que le fichier soit bien écrit sous /sitemap.xml.
export const trailingSlash = 'never';

/**
 * Échappe les caractères interdits dans un nœud XML.
 * @param {string} s
 * @returns {string}
 */
function xml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function GET() {
  /** @type {{loc: string, lastmod?: string}[]} */
  const urls = [
    ...NAV_LINKS.map((l) => ({ loc: publicUrl(l.href) })),
    ...chapters.map((c) => ({
      loc: publicUrl(`/chapitres/${c.slug}`),
      // `lastmod` seulement si le frontmatter porte une date au format W3C.
      ...(/^\d{4}-\d{2}-\d{2}$/.test(c.reviewed_on ?? '') ? { lastmod: c.reviewed_on } : {})
    }))
  ];

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map(
        (u) =>
          '  <url>\n' +
          `    <loc>${xml(u.loc)}</loc>\n` +
          (u.lastmod ? `    <lastmod>${xml(u.lastmod)}</lastmod>\n` : '') +
          '  </url>'
      )
      .join('\n') +
    '\n</urlset>\n';

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
