// @ts-nocheck
// Registre AUTOMATIQUE des visualisations.
// Tout composant `.svelte` déposé dans `src/lib/components/visualizations/`
// est enregistré ici sans autre code. Utilisation dans un chapitre : `viz="<clé>"`.
//
//   Antibiogramme.svelte      -> "Antibiogramme"
//   01_ClassifAnemie.svelte   -> "01_ClassifAnemie", "ClassifAnemie"

const modules = import.meta.glob('../components/visualizations/*.svelte', { eager: true });

/** @type {Record<string, any>} */
const registry = {};
/** @type {Array<{file:string, keys:string[]}>} */
const manifest = [];

/**
 * @param {string} stem
 * @returns {string[]}
 */
function aliasesFor(stem) {
  const keys = new Set();
  keys.add(stem);
  const noPrefix = stem.replace(/^\d+[_-]/, '');
  keys.add(noPrefix);
  const noExplorer = noPrefix.replace(/Explorer$/, '');
  if (noExplorer) keys.add(noExplorer);
  return [...keys];
}

for (const [path, mod] of Object.entries(modules)) {
  const stem = path.split('/').pop().replace(/\.svelte$/, '');
  const component = mod.default ?? mod;
  const keys = aliasesFor(stem);
  for (const key of keys) {
    if (!(key in registry) || key === stem) registry[key] = component;
  }
  manifest.push({ file: `${stem}.svelte`, keys });
}

export const availableVizKeys = Object.keys(registry).sort();
export const vizManifest = manifest.sort((a, b) => a.file.localeCompare(b.file));

/**
 * @param {string | undefined | null} key
 * @returns {any | null}
 */
export function getViz(key) {
  if (!key) return null;
  return registry[key] ?? null;
}

export default registry;
