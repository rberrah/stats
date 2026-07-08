// @ts-nocheck
// Glossaire (français, définitions originales). Termes réutilisables dans les
// chapitres via le champ `glossary:` du frontmatter (liens vers /glossaire?q=terme).

/** @typedef {{term:string, def:string, tags?:string[]}} GlossaryEntry */

/** @type {GlossaryEntry[]} */
export const glossary = [
  { term: 'Population', def: "Ensemble (souvent hypothétique et infini) de tous les individus concernés par la question posée. On ne l'observe jamais en entier : on en tire un échantillon.", tags: ['fondations'] },
  { term: 'Échantillon', def: "Sous-ensemble d'individus effectivement observés, censé représenter la population. Un tirage au sort garantit sa représentativité.", tags: ['fondations'] },
  { term: 'Paramètre', def: "Quantité vraie mais inconnue qui caractérise la population (ex. moyenne μ, pourcentage p). On l'estime à partir de l'échantillon.", tags: ['fondations'] },
  { term: 'Estimation', def: "Valeur calculée sur l'échantillon (ex. moyenne observée, fréquence f) utilisée pour approcher un paramètre de la population.", tags: ['fondations'] },
  { term: 'Fluctuations d\'échantillonnage', def: "Variations d'un résultat (moyenne, pourcentage) d'un échantillon à l'autre, dues au seul hasard du tirage. C'est ce que la statistique quantifie.", tags: ['fondations'] },
  { term: 'Schéma de l\'urne', def: "Modèle de référence : tirer au sort des boules dans une urne de composition connue. Il donne la loi des résultats possibles sous une hypothèse donnée.", tags: ['fondations', 'qualitatif'] },
  { term: 'Hypothèse nulle (H0)', def: "Hypothèse « de départ » que le test cherche à mettre en défaut : le plus souvent « aucune différence », « aucune liaison ». Le test calcule la probabilité des données si H0 était vraie.", tags: ['tests'] },
  { term: 'Hypothèse alternative (H1)', def: "Hypothèse opposée à H0 (il existe une différence / une liaison). Elle peut être bilatérale (≠) ou unilatérale (> ou <).", tags: ['tests'] },
  { term: 'Test de signification', def: "Procédure qui confronte les données à H0 et décide de la rejeter ou non, à un risque d'erreur fixé.", tags: ['tests'] },
  { term: 'Risque α (première espèce)', def: "Probabilité de rejeter H0 à tort (conclure à une différence qui n'existe pas). C'est le seuil de signification, fixé a priori (souvent 5 %).", tags: ['tests'] },
  { term: 'Risque β (deuxième espèce)', def: "Probabilité de ne pas rejeter H0 alors qu'elle est fausse (passer à côté d'une différence réelle). Diminue quand l'effectif augmente.", tags: ['tests'] },
  { term: 'Puissance', def: "1 − β : probabilité de détecter une différence qui existe réellement. On l'augmente en agrandissant l'échantillon ou l'effet recherché.", tags: ['tests'] },
  { term: 'Seuil de signification', def: "Valeur d'α choisie avant l'analyse (typiquement 0,05). Si le degré de signification p est inférieur au seuil, on rejette H0.", tags: ['tests'] },
  { term: 'Degré de signification (p)', def: "Probabilité d'observer un écart au moins aussi grand que celui constaté, si H0 était vraie. Petit p ⇒ données peu compatibles avec H0.", tags: ['tests'] },
  { term: 'Écart-réduit (z)', def: "Écart observé divisé par son écart-type attendu sous H0. Suit approximativement une loi normale : |z| > 1,96 correspond au seuil bilatéral 5 %.", tags: ['qualitatif', 'tests'] },
  { term: 'Intervalle de confiance', def: "Fourchette calculée sur l'échantillon qui contient le paramètre vrai avec une probabilité fixée (ex. 95 %). Sa largeur mesure la précision de l'estimation.", tags: ['estimation'] },
  { term: 'Loi normale', def: "Courbe en cloche symétrique, entièrement définie par sa moyenne et son écart-type. Décrit les fluctuations d'une moyenne (théorème central limite) et beaucoup de grandeurs biologiques.", tags: ['quantitatif'] },
  { term: 'Moyenne', def: "Somme des valeurs divisée par leur nombre : l'indice de position le plus courant d'une variable quantitative.", tags: ['quantitatif'] },
  { term: 'Variance', def: "Moyenne des carrés des écarts à la moyenne : mesure de dispersion. Sa racine carrée est l'écart-type, exprimé dans l'unité de la variable.", tags: ['quantitatif'] },
  { term: 'Écart-type', def: "Racine carrée de la variance ; dispersion moyenne autour de la moyenne, dans l'unité des données.", tags: ['quantitatif'] },
  { term: 'Degrés de liberté (ddl)', def: "Nombre de valeurs « libres » de varier une fois les contraintes d'estimation posées. Fixe la table à utiliser (χ², t, F).", tags: ['tests'] },
  { term: 'Test du χ²', def: "Test comparant des effectifs observés à des effectifs attendus (ajustement, ou indépendance dans un tableau de contingence). Valide si les effectifs attendus sont suffisants.", tags: ['qualitatif'] },
  { term: 'Tableau de contingence', def: "Tableau croisant deux caractères qualitatifs ; le χ² d'indépendance y teste l'existence d'une liaison entre les deux.", tags: ['qualitatif'] },
  { term: 'Test t de Student', def: "Compare deux moyennes (ou une moyenne à une valeur théorique) en tenant compte de la variabilité et de l'effectif. Suppose une distribution approximativement normale.", tags: ['quantitatif'] },
  { term: 'Séries appariées', def: "Chaque sujet est son propre témoin (avant/après, deux mesures couplées). On analyse les différences intra-paires, ce qui élimine la variabilité entre sujets.", tags: ['quantitatif'] },
  { term: 'Test F', def: "Rapport de deux variances ; sert à comparer deux dispersions et sous-tend l'analyse de la variance.", tags: ['quantitatif'] },
  { term: 'Analyse de la variance (ANOVA)', def: "Compare simultanément plusieurs moyennes en décomposant la variance totale en variance inter-groupes et variance intra-groupe.", tags: ['quantitatif'] },
  { term: 'Corrélation', def: "Mesure de l'intensité de la liaison entre deux variables quantitatives (coefficient r, entre −1 et +1). Une corrélation n'est pas une causalité.", tags: ['liaison'] },
  { term: 'Régression', def: "Modélise une variable (à prédire) en fonction d'une autre par une droite (moindres carrés). Distincte de la corrélation : elle a un sens de dépendance.", tags: ['liaison'] },
  { term: 'Coefficient r', def: "Coefficient de corrélation linéaire de Pearson (−1 à +1). Son carré r² est la part de variance « expliquée » par la liaison linéaire.", tags: ['liaison'] },
  { term: 'Tests non paramétriques', def: "Tests ne supposant pas de loi particulière (souvent fondés sur les rangs) : Mann-Whitney, Wilcoxon, Kruskal-Wallis, Spearman. Utiles pour petits effectifs ou distributions non normales.", tags: ['non-parametrique'] },
  { term: 'Rang', def: "Position d'une valeur dans la série ordonnée. Les tests des rangs remplacent les valeurs par leurs rangs, d'où leur robustesse aux valeurs extrêmes.", tags: ['non-parametrique'] }
];
