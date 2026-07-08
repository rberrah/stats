// @ts-nocheck
// Balisage des « termes-clés » dans un texte : on écrit [[terme]] dans l'énoncé,
// et parseMarks() découpe le texte en segments {text, key} pour un rendu où l'on
// peut souligner (révéler) les indices à la demande.

/**
 * @param {string} text
 * @returns {{text:string, key:boolean}[]}
 */
export function parseMarks(text) {
  const re = /\[\[(.+?)\]\]/g;
  /** @type {{text:string, key:boolean}[]} */
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ text: text.slice(last, m.index), key: false });
    out.push({ text: m[1], key: true });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ text: text.slice(last), key: false });
  return out;
}

/** Liste des termes marqués [[...]] d'un texte. @param {string} text */
export function markedTerms(text) {
  return [...text.matchAll(/\[\[(.+?)\]\]/g)].map((m) => m[1]);
}
