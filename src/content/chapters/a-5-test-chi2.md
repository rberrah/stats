---
id: "a-5-test-chi2"
slug: "a-5-test-chi2"
title: "Le test du χ² : ajustement à une répartition théorique"
description: "Comparer des effectifs observés à des effectifs attendus, calculer le χ², compter les degrés de liberté et lire la table."
track: "section-A"
order: 15
duration: "13 min"
programItem: "A-5"
tags: ["khi-deux", "test d'ajustement", "effectifs attendus", "degrés de liberté"]
level: "beginner"
sources: ["pearson-1900", "schwartz", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La statistique du χ² d'ajustement se calcule par :"
    options:
      - "la somme des (observé − calculé)² divisée par le calculé, sur toutes les catégories"
      - "la somme des observé − calculé, sur toutes les catégories"
      - "la somme des observé² divisée par le calculé"
    correct: 0
  - prompt: "Pour un ajustement à k catégories dont les proportions théoriques sont fixées d'avance, le nombre de degrés de liberté est :"
    options:
      - "k"
      - "k − 1"
      - "k + 1"
    correct: 1
  - prompt: "Le χ² calculé est plus petit que la valeur seuil de la table. On conclut :"
    options:
      - "les effectifs observés s'écartent significativement de la théorie"
      - "la répartition observée est compatible avec la répartition théorique"
      - "il faut refaire l'expérience jusqu'à obtenir un grand χ²"
    correct: 1
---

<!-- step:title="Au-delà de deux catégories" -->
L'écart-réduit compare *une* proportion à une valeur, ou *deux* proportions entre elles. Mais bien des situations comportent **plusieurs catégories** à la fois.

Un exemple. On connaît, pour une population de référence, la répartition des groupes sanguins ABO : **O 45 %, A 40 %, B 10 %, AB 5 %**. On étudie **400 donneurs** d'une autre région et l'on veut savoir si leur répartition **s'écarte** de cette référence.

On ne peut pas traiter chaque groupe séparément : il faut un test qui juge d'un coup l'écart **global** entre ce que l'on observe et ce que la théorie prévoit. C'est le rôle du **test du χ² d'ajustement**.
<!-- /step -->

<!-- step:title="Effectifs observés, effectifs attendus" -->
Le χ² raisonne sur des **effectifs** (des comptages), jamais directement sur des pourcentages. Première étape : traduire les proportions théoriques en **effectifs attendus** sous $H_0$, pour notre total de 400.

| Groupe | Proportion théorique | Effectif attendu $C$ | Effectif observé $O$ |
|---|---|---|---|
| O | 45 % | 180 | 168 |
| A | 40 % | 160 | 172 |
| B | 10 % | 40 | 38 |
| AB | 5 % | 20 | 22 |

L'hypothèse nulle affirme que la population étudiée suit la répartition de référence ; les écarts entre $O$ et $C$ ne seraient alors que des fluctuations d'échantillonnage.
<!-- /step -->

<!-- step:title="La statistique du χ²" viz="KhiDeux" -->
:::howto
**Comment lire le schéma.** Chaque barre compare l'effectif observé (plein) à l'effectif attendu (repère). La contribution d'une catégorie au χ² grandit comme le **carré** de l'écart, rapporté à l'effectif attendu : un petit écart sur une grande case pèse peu, un gros écart sur une petite case pèse lourd. La courbe de droite est la loi du χ² ; la zone colorée au-delà du seuil vaut 5 %.
:::

On additionne, catégorie par catégorie, le carré de l'écart divisé par l'effectif attendu :

$$\chi^2 = \sum \dfrac{(O - C)^2}{C}$$

Le carré empêche les écarts positifs et négatifs de s'annuler ; la division par $C$ **relativise** chaque écart à la taille de la case attendue. Calcul :

$$\chi^2 = \dfrac{(168-180)^2}{180} + \dfrac{(172-160)^2}{160} + \dfrac{(38-40)^2}{40} + \dfrac{(22-20)^2}{20}$$

$$\chi^2 = 0{,}80 + 0{,}90 + 0{,}10 + 0{,}20 = 2{,}00$$

Un χ² proche de 0 signifie que l'observé colle à l'attendu ; plus il grandit, plus la répartition s'éloigne de la théorie.
<!-- /step -->

<!-- step:title="Degrés de liberté et lecture de la table" -->
Pour juger si $\chi^2 = 2{,}00$ est grand, il faut savoir combien de catégories étaient **libres de varier**. Avec $k$ catégories dont le total est fixé, une fois $k-1$ effectifs connus, le dernier est imposé. Le nombre de **degrés de liberté** est donc :

$$\text{ddl} = k - 1 = 4 - 1 = 3$$

La table du χ² donne, pour chaque ddl, la valeur seuil au risque de 5 %. Quelques repères utiles à mémoriser :

| ddl | Seuil à 5 % |
|---|---|
| 1 | 3,84 |
| 2 | 5,99 |
| 3 | 7,81 |
| 4 | 9,49 |

:::note
**D'où sort le 7,81 ?** Le χ² est une **somme de carrés** d'écarts qui suivent chacun ~une loi normale. Plus il y a de catégories (donc de degrés de liberté), plus cette somme est naturellement grande, *même sous $H_0$* — le seuil doit donc monter avec les ddl. Chaque valeur de la table (3,84 ; 5,99 ; 7,81…) est simplement le point qui laisse **5 % de l'aire dans la queue droite** de la loi du χ² correspondante : exactement la même logique de « 5 % au-delà » que le 1,96 de la loi normale, mais pour une distribution non symétrique qui s'étale à droite quand les ddl augmentent.
:::

Notre $\chi^2 = 2{,}00$ est **très inférieur** au seuil de 7,81. On **ne rejette pas** $H_0$ : la répartition des groupes sanguins observée est **compatible** avec la référence. L'écart global est de l'ordre de ce que le hasard produit couramment.
<!-- /step -->

<!-- step:title="Pièges du χ²" -->
:::pitfall
Le χ² se calcule sur des **effectifs**, pas sur des pourcentages : appliquer la formule à des « 45, 40, 10, 5 » (les %) au lieu des vrais comptages donne n'importe quoi. De plus, l'approximation n'est fiable que si **tous les effectifs attendus dépassent 5** ; en dessous, le χ² surestime la signification et il faut regrouper des catégories ou passer à un calcul exact.
:::

:::note
Le seuil 3,84 pour 1 ddl n'est pas un hasard : c'est **1,96²**. Le χ² à 1 degré de liberté est le carré de l'écart-réduit — un fil que l'on retrouvera au chapitre A-7 sur les tableaux 2 × 2.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le χ² d'ajustement compare une répartition **observée** à une répartition **théorique** sur plusieurs catégories.
- On travaille sur des **effectifs** : $\chi^2 = \sum (O - C)^2 / C$, où $C$ est l'effectif attendu sous $H_0$.
- Le carré évite les compensations ; la division par $C$ relativise chaque écart.
- Degrés de liberté : $\text{ddl} = k - 1$ ; on compare le χ² au seuil de la table (3,84 pour 1 ddl, 5,99 pour 2, 7,81 pour 3…).
- Conditions : effectifs **attendus** tous supérieurs à 5 ; un χ² non significatif signifie « compatible avec la théorie ».
<!-- /step -->
