// @ts-nocheck
// Arbre de décision GÉNÉRAL « Quel test choisir ? ». L'utilisateur répond à
// quelques questions ; on aboutit à une feuille qui recommande un test et renvoie
// vers le(s) chapitre(s) du cours. Les `slug` doivent correspondre à des chapitres
// existants (vérifié par smoke_test).
//
// Nœud question : { q, options: [{ label, node }] }
// Feuille        : { result, detail, liens: [{ label, slug }] }

/** @typedef {{result:string, detail:string, liens:{label:string,slug:string}[]}} Feuille */

const leaf = (result, detail, liens) => ({ result, detail, liens });

export const arbre = {
  q: "Que voulez-vous faire ?",
  options: [
    {
      label: "Comparer des groupes (mettre en évidence une différence)",
      node: {
        q: "Quelle est la nature du critère de jugement (la variable mesurée) ?",
        options: [
          {
            label: "Qualitative — une proportion, un pourcentage, oui/non, des catégories",
            node: {
              q: "Que compare-t-on exactement ?",
              options: [
                { label: "Un pourcentage observé à une valeur théorique attendue",
                  node: leaf("Écart-réduit (test d'un pourcentage)",
                    "On rapporte l'écart f − p à sa fluctuation attendue : z = (f − p) / √(p(1−p)/n), comparé à 1,96.",
                    [{ label: "Principe des tests", slug: "a-2-principe-des-tests" }, { label: "L'écart-réduit", slug: "a-1-ecart-reduit" }]) },
                { label: "Deux pourcentages (deux groupes)",
                  node: leaf("Comparaison de deux pourcentages (χ² sur tableau 2×2)",
                    "Écart-réduit de la différence des deux fréquences, ou χ² équivalent sur le tableau 2×2.",
                    [{ label: "Comparaison de deux pourcentages", slug: "a-4-comparaison-deux-pourcentages" }, { label: "Le tableau 2×2", slug: "a-7-tableau-2x2" }]) },
                { label: "Plusieurs groupes ou plusieurs catégories (tableau de contingence)",
                  node: leaf("Test du χ² d'indépendance",
                    "Compare les effectifs observés aux effectifs attendus sous indépendance ; ddl = (lignes−1)(colonnes−1).",
                    [{ label: "χ² d'indépendance", slug: "a-6-chi2-independance" }]) },
                { label: "De petits effectifs (effectifs attendus < 5)",
                  node: leaf("Test exact de Fisher",
                    "Quand le χ² n'est plus valide (effectifs attendus trop faibles), on calcule la probabilité exacte.",
                    [{ label: "Test exact de Fisher", slug: "a-8-test-exact-fisher" }]) }
              ]
            }
          },
          {
            label: "Quantitative — une mesure numérique (glycémie, taille, pression…)",
            node: {
              q: "La distribution est-elle à peu près normale (ou l'effectif est-il grand) ?",
              options: [
                {
                  label: "Oui → tests paramétriques",
                  node: {
                    q: "Combien de groupes, et quel dispositif ?",
                    options: [
                      { label: "Une moyenne comparée à une valeur théorique",
                        node: leaf("Test t à un échantillon",
                          "Compare la moyenne observée à une valeur de référence via t = (x̄ − μ₀) / (s/√n).",
                          [{ label: "Précision et comparaison d'une moyenne", slug: "b-3-precision-moyenne" }]) },
                      { label: "Deux groupes indépendants",
                        node: leaf("Test t de Student (deux échantillons)",
                          "Compare deux moyennes indépendantes ; suppose la normalité et (classiquement) l'égalité des variances.",
                          [{ label: "Test t de Student", slug: "b-4-test-t-student" }]) },
                      { label: "Deux mesures appariées (avant/après, mêmes sujets)",
                        node: leaf("Test t apparié (méthode des couples)",
                          "On analyse les différences intra-paires, ce qui élimine la variabilité entre sujets.",
                          [{ label: "Séries appariées", slug: "b-5-series-appariees" }]) },
                      { label: "Trois groupes ou plus",
                        node: leaf("Analyse de la variance (ANOVA)",
                          "Compare plusieurs moyennes d'un coup (évite l'inflation d'α des t multiples) via le rapport F.",
                          [{ label: "Analyse de la variance", slug: "b-7-analyse-variance" }]) },
                      { label: "Comparer deux variances (dispersions)",
                        node: leaf("Test F",
                          "Rapport des deux variances, comparé à la table de F.",
                          [{ label: "Comparaison de deux variances", slug: "b-6-test-f-variances" }]) }
                    ]
                  }
                },
                {
                  label: "Non / variable ordinale / petit effectif → tests non paramétriques",
                  node: {
                    q: "Combien de groupes, et quel dispositif ?",
                    options: [
                      { label: "Deux groupes indépendants",
                        node: leaf("Test de Mann-Whitney (Wilcoxon rang-somme)",
                          "Raisonne sur les rangs des valeurs ; robuste aux valeurs extrêmes et à la non-normalité.",
                          [{ label: "Mann-Whitney / Wilcoxon", slug: "d-2-mann-whitney-wilcoxon" }]) },
                      { label: "Deux mesures appariées",
                        node: leaf("Test T de Wilcoxon (apparié)",
                          "Équivalent non paramétrique du t apparié : rangs des différences signées.",
                          [{ label: "Wilcoxon apparié", slug: "d-3-wilcoxon-apparie" }]) },
                      { label: "Trois groupes ou plus",
                        node: leaf("Test de Kruskal-Wallis",
                          "Extension de Mann-Whitney à plusieurs groupes ; équivalent non paramétrique de l'ANOVA.",
                          [{ label: "Kruskal-Wallis", slug: "d-4-kruskal-wallis" }]) }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      label: "Étudier la liaison entre deux variables",
      node: {
        q: "Quelle est la nature des DEUX variables ?",
        options: [
          { label: "Deux qualitatives",
            node: leaf("Test du χ² d'indépendance",
              "Teste si la répartition d'un caractère dépend de l'autre dans le tableau de contingence.",
              [{ label: "χ² d'indépendance", slug: "a-6-chi2-independance" }]) },
          { label: "Une qualitative (groupe) × une quantitative",
            node: leaf("C'est une comparaison de moyennes",
              "La liaison groupe → mesure se teste par un test t (2 groupes) ou une ANOVA (≥ 3 groupes).",
              [{ label: "Test t de Student", slug: "b-4-test-t-student" }, { label: "Analyse de la variance", slug: "b-7-analyse-variance" }]) },
          { label: "Deux quantitatives",
            node: {
              q: "Relation linéaire et variables approximativement normales ?",
              options: [
                { label: "Oui",
                  node: leaf("Corrélation de Pearson (r) et régression linéaire",
                    "r mesure l'intensité de la liaison linéaire ; la régression prédit une variable par l'autre.",
                    [{ label: "Le coefficient r", slug: "c-2-coefficient-correlation" }, { label: "La droite de régression", slug: "c-3-droite-regression" }]) },
                { label: "Non / ordinale / relation monotone",
                  node: leaf("Corrélation des rangs de Spearman",
                    "Corrélation calculée sur les rangs : capte une liaison monotone sans supposer la linéarité.",
                    [{ label: "Spearman", slug: "d-5-spearman" }]) }
              ]
            }
          },
          { label: "Prédire une variable binaire (malade/sain) à partir de plusieurs facteurs",
            node: leaf("Régression logistique",
              "Modélise la probabilité d'un événement ; les coefficients s'interprètent en odds ratios ajustés.",
              [{ label: "Régression logistique", slug: "g-10-regression-logistique" }]) }
        ]
      }
    },
    {
      label: "Estimer une grandeur avec sa précision (intervalle de confiance)",
      node: {
        q: "Quelle grandeur estimez-vous ?",
        options: [
          { label: "Un pourcentage (sondage)",
            node: leaf("Intervalle de confiance d'un pourcentage",
              "f ± 1,96·√(f(1−f)/n) ; la marge d'erreur diminue en 1/√n.",
              [{ label: "IC d'un pourcentage", slug: "a-3-intervalle-confiance-pourcentage" }, { label: "Interpréter un sondage", slug: "g-1-interpreter-sondage" }]) },
          { label: "Une moyenne",
            node: leaf("Intervalle de confiance d'une moyenne",
              "x̄ ± t·(s/√n) ; utilise la loi de Student quand l'effectif est modéré.",
              [{ label: "Précision d'une moyenne", slug: "b-3-precision-moyenne" }]) }
        ]
      }
    },
    {
      label: "Analyser un délai de survenue d'un événement (survie)",
      node: {
        q: "Que voulez-vous faire de ces délais ?",
        options: [
          { label: "Décrire et comparer la survie de groupes",
            node: leaf("Courbes de Kaplan-Meier + test du log-rank",
              "Kaplan-Meier gère la censure (suivi incomplet) ; le log-rank compare deux courbes.",
              [{ label: "Kaplan-Meier & log-rank", slug: "g-8-survie-kaplan-meier" }]) },
          { label: "Mesurer l'effet de facteurs sur le risque (résultat ajusté)",
            node: leaf("Modèle de Cox (hazard ratio)",
              "Estime un hazard ratio ajusté sur des covariables, sous l'hypothèse des risques proportionnels.",
              [{ label: "Le modèle de Cox", slug: "g-9-modele-cox" }]) }
        ]
      }
    },
    {
      label: "Mesurer un risque ou évaluer un test diagnostique",
      node: {
        q: "Quel est votre objectif précis ?",
        options: [
          { label: "Mesurer l'association entre une exposition et une maladie",
            node: leaf("Risque relatif (cohorte) ou odds ratio (cas-témoins)",
              "Le schéma d'étude dicte la mesure : RR en cohorte, OR en cas-témoins.",
              [{ label: "Risque relatif & odds ratio", slug: "g-2-risque-relatif-odds-ratio" }, { label: "Schémas d'étude", slug: "g-5-schemas-etude" }]) },
          { label: "Évaluer les performances d'un test diagnostique",
            node: leaf("Sensibilité, spécificité, VPP / VPN",
              "Se et Sp sont intrinsèques ; VPP et VPN dépendent de la prévalence.",
              [{ label: "Test diagnostique", slug: "g-3-test-diagnostique" }]) },
          { label: "Choisir le meilleur seuil d'un marqueur continu",
            node: leaf("Courbe ROC (et aire sous la courbe, AUC)",
              "La ROC visualise l'arbitrage sensibilité / spécificité selon le seuil ; l'AUC résume la performance.",
              [{ label: "La courbe ROC", slug: "g-4-courbe-roc" }]) }
        ]
      }
    }
  ]
};

/** Tous les slugs référencés par l'arbre (pour validation). */
export function chooserSlugs() {
  const out = [];
  (function walk(n) {
    if (!n) return;
    if (n.liens) out.push(...n.liens.map((l) => l.slug));
    if (n.options) for (const o of n.options) walk(o.node);
  })(arbre);
  return out;
}
