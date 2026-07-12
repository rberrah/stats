---
id: "e-1-choisir-test"
slug: "e-1-choisir-test"
title: "Choisir le bon test : l'arbre de décision"
description: "Une méthode en quatre questions pour passer de vos données au test adapté : nature des variables, nombre de groupes, appariement, normalité."
track: "section-E"
order: 51
duration: "12 min"
programItem: "E-1"
tags: ["choix du test", "arbre de décision", "test paramétrique", "test non paramétrique", "méthode"]
level: "beginner"
sources: ["schwartz", "altman", "mann-whitney-1947", "kruskal-wallis-1952"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Vous comparez la pression artérielle moyenne (quantitative) entre trois groupes de traitement indépendants, avec des effectifs suffisants et des distributions à peu près normales. Quel test choisir ?"
    options:
      - "Une analyse de variance (ANOVA à un facteur)"
      - "Un test du χ²"
      - "Un test t de Student"
    correct: 0
  - prompt: "Deux groupes indépendants, variable quantitative, mais petits effectifs et distributions nettement asymétriques. Le bon réflexe est :"
    options:
      - "Utiliser un test t quand même, il est robuste"
      - "Utiliser le test de Mann-Whitney (non paramétrique)"
      - "Utiliser un test du χ²"
    correct: 1
---

<!-- step:title="Le vrai problème n'est pas le calcul" -->
Une fois vos données recueillies, la difficulté n'est presque jamais de *faire* le test : un logiciel le calcule en une seconde. La difficulté est de choisir **lequel**. Un test t appliqué là où il fallait un χ², et toute la conclusion s'effondre, quelle que soit la propreté du calcul.

Bonne nouvelle : ce choix n'est pas affaire d'inspiration. Il suit une logique mécanique. Il suffit de poser à vos données quatre questions, dans l'ordre, et le test s'impose presque toujours de lui-même.

L'objectif de ce chapitre est de vous donner cet **arbre de décision** : une grille que vous pourrez dérouler devant n'importe quel énoncé, à l'examen comme au laboratoire.
<!-- /step -->

<!-- step:title="Les quatre questions qui décident de tout" -->
Avant de nommer un seul test, répondez dans l'ordre :

**Question 1 — Quelle est la nature des variables ?** Chaque variable est soit **qualitative** (une catégorie : malade/sain, groupe sanguin, guéri/non guéri), soit **quantitative** (un nombre mesuré : glycémie, taille, pression). C'est la question reine : elle sépare d'emblée trois grandes familles.

**Question 2 — Combien de groupes comparez-vous ?** Deux groupes, ou plus de deux ? Passer de deux à trois change le test (le test t devient une ANOVA).

**Question 3 — Les groupes sont-ils indépendants ou appariés ?** *Indépendants* : deux ensembles de sujets différents (traités vs témoins). *Appariés* : les mêmes sujets mesurés deux fois (avant/après), ou des paires naturelles (jumeaux, cas-témoins appariés). L'appariement change le test.

**Question 4 — Les conditions du test paramétrique sont-elles réunies ?** Essentiellement : la variable quantitative suit-elle une distribution à peu près **normale**, avec des effectifs raisonnables ? Si oui, on utilise les tests « classiques » (t, ANOVA). Sinon, on bascule sur leurs équivalents **non paramétriques**.

:::key
Nature des variables → nombre de groupes → appariement → normalité. Toujours dans cet ordre. Les trois premières questions désignent la *famille* de test ; la quatrième choisit entre version paramétrique et version non paramétrique.
:::
<!-- /step -->

<!-- step:title="Branche A — comparer des fréquences (variables qualitatives)" -->
Vos données sont des **effectifs** dans des catégories : combien de guéris et de non-guéris dans chaque groupe. On travaille alors sur des pourcentages, jamais sur des moyennes.

- **Comparer un pourcentage observé à une valeur théorique**, ou **deux pourcentages** issus de grands échantillons : c'est l'**écart-réduit** (comparaison de proportions). Exemple : le taux de complications de 8 % de votre service diffère-t-il du taux national de 5 % ?
- **Comparer des répartitions dans un tableau de contingence** (deux variables qualitatives croisées) : c'est le **test du χ²**. Exemple : la répartition guéri/non-guéri dépend-elle du traitement reçu ? Le χ² d'indépendance répond.
- Effectifs théoriques trop petits (inférieurs à 5) : on remplace le χ² par le **test exact de Fisher**.

:::note
L'écart-réduit sur deux proportions et le χ² à deux cases par deux cases sont deux visages du même calcul : sur un tableau 2×2, on a la relation $\chi^2 = z^2$. Choisir l'un ou l'autre est surtout une question d'habitude.
:::
<!-- /step -->

<!-- step:title="Branche B — comparer des moyennes (variable quantitative selon des groupes)" -->
Ici, une variable **quantitative** (la mesure) est comparée entre des **groupes** définis par une variable qualitative. On compare des moyennes. Le sous-arbre dépend du nombre de groupes, de l'appariement et de la normalité.

**Deux groupes :**

- Indépendants, distribution normale → **test t de Student** (pour groupes indépendants).
- Appariés (avant/après, paires), distribution normale → **test t apparié** (sur les différences).
- Conditions de normalité non réunies (petits effectifs, forte asymétrie) → **Mann-Whitney** si indépendants, **Wilcoxon** (des rangs signés) si appariés.

**Trois groupes ou plus :**

- Indépendants, normalité → **ANOVA à un facteur**, dont la statistique de test est le **F** (rapport de la variance entre groupes sur la variance intra-groupe).
- Conditions non réunies → **Kruskal-Wallis** (l'équivalent non paramétrique de l'ANOVA).

:::pitfall
Comparer trois groupes en enchaînant trois tests t (A vs B, A vs C, B vs C) gonfle mécaniquement le risque de faux positif : chaque test a son propre risque α, et ils s'additionnent. C'est précisément pour cela que l'ANOVA existe : un seul test global au risque α maîtrisé.
:::
<!-- /step -->

<!-- step:title="Branche C — lier deux variables quantitatives" -->
Aucun groupe à comparer : vous avez deux mesures numériques sur chaque sujet (par exemple l'âge et la pression artérielle) et vous voulez savoir si elles **varient ensemble**.

- Relation étudiée, distributions normales → **coefficient de corrélation** de Pearson $r$, et sa **régression** linéaire associée lorsqu'on veut prédire une variable à partir de l'autre.
- Relation monotone mais données non normales, présence de valeurs extrêmes, ou variable **ordinale** (des rangs, un score) → **corrélation de Spearman** $r_s$, qui travaille sur les rangs et non sur les valeurs brutes.

:::recall
Corrélation et régression répondent à deux questions distinctes. La **corrélation** mesure la *force* du lien (les deux variables jouent un rôle symétrique). La **régression** modélise et *prédit* l'une à partir de l'autre (elles ne sont plus interchangeables). Le chapitre suivant montre que ce choix dépend du caractère aléatoire ou contrôlé des variables.
:::
<!-- /step -->

<!-- step:title="L'arbre complet en un coup d'œil" -->
Le tableau condense tout l'arbre. Lisez-le de gauche à droite : la nature des variables fixe la ligne, les colonnes affinent selon le nombre de groupes et les conditions.

| Situation | Conditions réunies (paramétrique) | Conditions non réunies (non paramétrique) |
|---|---|---|
| 1 proportion vs référence | Écart-réduit | Test exact (binomial) |
| 2 proportions | Écart-réduit / χ² (2×2) | Test exact de Fisher |
| Répartitions croisées (tableau) | Test du χ² | Test exact de Fisher |
| 2 groupes indépendants, quantitatif | Test t de Student | Mann-Whitney |
| 2 groupes appariés, quantitatif | Test t apparié | Wilcoxon (rangs signés) |
| ≥ 3 groupes indépendants, quantitatif | ANOVA (statistique F) | Kruskal-Wallis |
| 2 quantitatives liées | Corrélation / régression (Pearson) | Corrélation de Spearman |

:::key
Trois grandes portes d'entrée selon les variables : **qualitatif ↔ qualitatif** (écart-réduit, χ²) ; **quantitatif selon des groupes** (t, ANOVA, ou Mann-Whitney / Wilcoxon / Kruskal-Wallis) ; **quantitatif ↔ quantitatif** (corrélation / régression, Spearman). Le reste n'est qu'affinage.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le choix du test se décide en **quatre questions ordonnées** : nature des variables → nombre de groupes → appariement → normalité.
- **Deux qualitatives** : écart-réduit pour comparer des proportions, **χ²** pour croiser des répartitions (Fisher si petits effectifs).
- **Quantitatif comparé entre groupes** : **test t** (2 groupes), **ANOVA / F** (≥ 3 groupes) si la normalité tient ; sinon **Mann-Whitney**, **Wilcoxon** (apparié), **Kruskal-Wallis**.
- **Deux quantitatives liées** : **corrélation / régression** de Pearson, ou **Spearman** sur les rangs si les données s'y prêtent mal.
- L'appariement (mêmes sujets, paires) impose sa version dédiée : t apparié, Wilcoxon.
- Un test paramétrique mal choisi ne se rattrape pas par un beau calcul : **le choix du test précède le calcul**.
<!-- /step -->
