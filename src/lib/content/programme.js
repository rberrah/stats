// @ts-nocheck
// PLAN DU COURS « Stat & Biologie ».
// Contenu original ; la PROGRESSION pédagogique (l'ordre des thèmes) s'inspire de
// D. Schwartz, « Méthodes statistiques à l'usage des médecins et des biologistes »
// (Flammarion) — une référence du domaine. Les méthodes elles-mêmes (écart-réduit,
// tests, χ², t, F, ANOVA, régression, tests des rangs) relèvent du savoir public.
//
// 6 parties, chacune découpée en items numérotés. Un chapitre se rattache à un item
// via son frontmatter `programItem` (ex. "A-3") et `track` (ex. "section-A").

/** @typedef {{n:string, l:string}} Item */
/** @typedef {{titre?:string, items:Item[]}} Groupe */
/** @typedef {{id:string, roman:string, titre:string, tagline:string, accent:string, groupes:Groupe[]}} Section */

/** @type {Section[]} */
export const sections = [
  {
    id: 'F', roman: 'F', titre: 'Fondations', accent: '#5a5f7a',
    tagline: "Pourquoi la statistique en biologie : la variabilité, le pari sur une population, les deux risques d'erreur.",
    groupes: [{ items: [
      { n: '1', l: 'La variabilité du vivant : pourquoi raisonner en statistique' },
      { n: '2', l: 'Population et échantillon : le schéma de l\'urne' },
      { n: '3', l: 'Le pari statistique et la notion de risque' },
      { n: '4', l: 'Deux façons de se tromper : les risques α et β' }
    ] }]
  },
  {
    id: 'A', roman: 'A', titre: 'Deux variables qualitatives', accent: '#4f46b8',
    tagline: "Pourcentages : fluctuations d'échantillonnage, principe des tests, intervalle de confiance, χ² et tableaux de contingence.",
    groupes: [{ items: [
      { n: '1', l: 'Fluctuations d\'échantillonnage d\'un pourcentage : l\'écart-réduit' },
      { n: '2', l: 'Comparer un pourcentage observé à une valeur théorique : le principe des tests' },
      { n: '3', l: 'Précision d\'un pourcentage : l\'intervalle de confiance' },
      { n: '4', l: 'Comparaison de deux pourcentages observés' },
      { n: '5', l: 'Le test du χ² : ajustement à une répartition théorique' },
      { n: '6', l: 'Le χ² d\'indépendance et le tableau de contingence' },
      { n: '7', l: 'Le tableau 2 × 2 et la comparaison de plusieurs pourcentages' },
      { n: '8', l: 'Petits échantillons : le test exact de Fisher' }
    ] }]
  },
  {
    id: 'B', roman: 'B', titre: 'Qualitative × quantitative', accent: '#7e4fb0',
    tagline: "Moyennes : loi normale, estimation, test t de Student, séries appariées, test F, analyse de la variance, plans d'expérience.",
    groupes: [{ items: [
      { n: '1', l: 'Fluctuations d\'échantillonnage d\'une moyenne : la loi normale' },
      { n: '2', l: 'Estimer la moyenne et la variance d\'une population' },
      { n: '3', l: 'Précision d\'une moyenne ; comparaison à une valeur théorique' },
      { n: '4', l: 'Comparaison de deux moyennes : le test t de Student' },
      { n: '5', l: 'Séries appariées : la méthode des couples' },
      { n: '6', l: 'Comparaison de deux variances : le test F' },
      { n: '7', l: 'Comparaison de plusieurs moyennes : l\'analyse de la variance' },
      { n: '8', l: 'Plans d\'expérience à plusieurs facteurs' },
      { n: '9', l: 'Petits échantillons et conditions d\'application' }
    ] }]
  },
  {
    id: 'C', roman: 'C', titre: 'Deux variables quantitatives', accent: '#3f6fb0',
    tagline: "Corrélation et régression : le coefficient r, la droite des moindres carrés, variance liée, corrélations partielles.",
    groupes: [{ items: [
      { n: '1', l: 'Corrélation et régression : deux questions distinctes' },
      { n: '2', l: 'Le coefficient de corrélation r et son test' },
      { n: '3', l: 'La droite de régression : estimation et prédiction' },
      { n: '4', l: 'Coefficient exact ρ, variance liée et décomposition' },
      { n: '5', l: 'Liaisons multiples et corrélations partielles' }
    ] }]
  },
  {
    id: 'D', roman: 'D', titre: 'Tests non paramétriques', accent: '#2f9e7a',
    tagline: "Quand la normalité n'est pas acquise : raisonner sur les rangs — Mann-Whitney, Wilcoxon, Kruskal-Wallis, Spearman.",
    groupes: [{ items: [
      { n: '1', l: 'Le principe des tests non paramétriques : raisonner sur les rangs' },
      { n: '2', l: 'Deux groupes indépendants : Mann-Whitney et Wilcoxon' },
      { n: '3', l: 'Séries appariées : le test T de Wilcoxon' },
      { n: '4', l: 'Plusieurs groupes : le test de Kruskal-Wallis' },
      { n: '5', l: 'Corrélation des rangs de Spearman' }
    ] }]
  },
  {
    id: 'E', roman: 'E', titre: 'Stratégie & synthèse', accent: '#b8527e',
    tagline: "Choisir le bon test selon le type d'information, vérifier la normalité, et bien comprendre α, β et la puissance.",
    groupes: [{ items: [
      { n: '1', l: 'Choisir le bon test : l\'arbre de décision' },
      { n: '2', l: 'Qualitatif ou quantitatif ? aléatoire ou contrôlé ?' },
      { n: '3', l: 'Épreuve graphique de normalité (droite de Henry)' },
      { n: '4', l: 'α, β, puissance et taille d\'échantillon : la synthèse' }
    ] }]
  },
  {
    id: 'G', roman: 'G', titre: 'Épidémiologie clinique & méthodes modernes', accent: '#b45309',
    tagline: "Au-delà des tests classiques : interpréter un sondage, mesurer un risque, évaluer un test diagnostique, déjouer les biais, analyser la survie (Kaplan-Meier, Cox).",
    groupes: [{ items: [
      { n: '1', l: 'Interpréter un sondage : marge d\'erreur, taille d\'échantillon, représentativité' },
      { n: '2', l: 'Mesurer un risque : risque relatif, odds ratio, réduction absolue, NNT' },
      { n: '3', l: 'Évaluer un test diagnostique : sensibilité, spécificité, VPP et VPN' },
      { n: '4', l: 'La courbe ROC et le choix d\'un seuil' },
      { n: '5', l: 'Schémas d\'étude : cohorte, cas-témoins, essai randomisé' },
      { n: '6', l: 'Les biais : sélection, classement, confusion' },
      { n: '7', l: 'Le biais de temps immortel' },
      { n: '8', l: 'Analyse de survie : Kaplan-Meier et test du log-rank' },
      { n: '9', l: 'Le modèle de Cox et le hazard ratio' },
      { n: '10', l: 'La régression logistique' }
    ] }]
  }
];

/** index rapide : "A-3" → item + section */
export const itemIndex = (() => {
  /** @type {Record<string, {section:Section, item:Item}>} */
  const idx = {};
  for (const s of sections) for (const g of s.groupes) for (const it of g.items) idx[`${s.id}-${it.n}`] = { section: s, item: it };
  return idx;
})();

export function sectionById(id) {
  return sections.find((s) => s.id === id);
}
