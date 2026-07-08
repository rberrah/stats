// @ts-nocheck
// Parcours du site = les 6 PARTIES du plan (voir programme.js).
// Chaque chapitre porte `track: "section-A"` (etc.) dans son frontmatter, et
// `programItem: "A-3"` pour se rattacher à l'item correspondant du plan.
import { sections } from './programme.js';

export const tracks = sections.map((s) => ({
  id: `section-${s.id}`,
  label: `Partie ${s.roman}`,
  title: s.titre,
  tagline: s.tagline,
  accent: s.accent,
  status: 'available'
}));

export function trackById(id) {
  return tracks.find((t) => t.id === id);
}

/**
 * Regroupe une liste de chapitres (ordonnée) par parcours (champ `track`).
 * @param {{track?:string}[]} chapters
 * @returns {Record<string, any[]>}
 */
export function chaptersByTrack(chapters) {
  /** @type {Record<string, any[]>} */
  const grouped = {};
  for (const t of tracks) grouped[t.id] = [];
  for (const c of chapters) {
    const id = grouped[c.track] ? c.track : tracks[0].id;
    grouped[id].push(c);
  }
  return grouped;
}
