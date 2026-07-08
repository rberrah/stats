// @ts-nocheck
// EXERCICES D'APPLICATION (contenu original). Distincts des QCM (frontmatter `quiz`
// des chapitres). Dans `q`, les données qui « indiquent la méthode » sont marquées
// [[...]] et détaillées dans `indices` ({mot, pourquoi}) — révélables à la demande.

/** @typedef {{cat:string, chapter:string, type:'num', q:string, unit?:string, answer:number, tol?:number, indices?:{mot:string,pourquoi:string}[], explain:string}} Exercise */

/** @type {Exercise[]} */
export const exercises = [
  {
    cat: 'Pourcentages', chapter: 'a-1-ecart-reduit', type: 'num', unit: '', answer: 0.04, tol: 0.1,
    q: "Dans une population, la prévalence vraie d'un caractère est [[p = 0,20]]. Sur un échantillon de [[n = 100]] sujets, quel est l'écart-type de la fréquence observée ?",
    indices: [
      { mot: 'p = 0,20', pourquoi: "La variance d'une fréquence sous le schéma de l'urne vaut p(1−p)/n." },
      { mot: 'n = 100', pourquoi: "L'écart-type diminue comme 1/√n : plus l'échantillon est grand, plus la fréquence est précise." }
    ],
    explain: "σ = √(p(1−p)/n) = √(0,20 × 0,80 / 100) = √0,0016 = 0,04, soit ≈ 4 points de pourcentage."
  },
  {
    cat: 'Pourcentages', chapter: 'a-2-principe-des-tests', type: 'num', unit: '', answer: 2.5, tol: 0.05,
    q: "On observe [[f = 0,30]] sur [[n = 100]] sujets, alors que la théorie prédit p = 0,20. Calculez l'écart-réduit z.",
    indices: [
      { mot: 'f = 0,30', pourquoi: "L'écart-réduit compare l'écart observé f − p à sa fluctuation attendue." },
      { mot: 'n = 100', pourquoi: "Sous H0, l'écart-type de f est √(p(1−p)/n) avec le p théorique." }
    ],
    explain: "z = (f − p) / √(p(1−p)/n) = (0,30 − 0,20) / 0,04 = 2,5. Comme 2,5 > 1,96, on rejette H0 au risque 5 %."
  },
  {
    cat: 'Moyennes', chapter: 'b-4-test-t-student', type: 'num', unit: '', answer: 2, tol: 0.05,
    q: "Deux groupes de [[n = 25]] sujets. Différence des moyennes = 4 ; écart-type estimé de cette différence = [[2]]. Valeur du t observé ?",
    indices: [
      { mot: 'n = 25', pourquoi: "Le degré de liberté (ici 2n−2 = 48) fixe le seuil du t dans la table." },
      { mot: '2', pourquoi: "Le t est le rapport de la différence observée à son écart-type estimé." }
    ],
    explain: "t = différence / écart-type de la différence = 4 / 2 = 2. À 48 ddl, le seuil 5 % ≈ 2,01 : t = 2 est à la limite (non significatif de justesse)."
  },
  {
    cat: 'Corrélation', chapter: 'c-2-coefficient-correlation', type: 'num', unit: '%', answer: 49, tol: 0.03,
    q: "Un coefficient de corrélation vaut [[r = 0,70]]. Quelle part (en %) de la variance d'une variable est « expliquée » par l'autre ?",
    indices: [
      { mot: 'r = 0,70', pourquoi: "La part de variance liée est le carré du coefficient de corrélation (r²)." }
    ],
    explain: "r² = 0,70² = 0,49, soit 49 %. Un r de 0,70 « paraît » fort mais laisse plus de la moitié de la variance inexpliquée."
  }
];

export const exerciseCats = [...new Set(exercises.map((e) => e.cat))];

/** @param {string} slug */
export function exercisesForChapter(slug) {
  return exercises.filter((e) => e.chapter === slug);
}
