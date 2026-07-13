---
id: "a-4-comparaison-deux-pourcentages"
slug: "a-4-comparaison-deux-pourcentages"
title: "Comparaison de deux pourcentages observés"
description: "L'écart-réduit de la différence de deux fréquences, avec le pourcentage commun estimé sous l'hypothèse nulle."
track: "section-A"
order: 14
duration: "13 min"
programItem: "A-4"
tags: ["comparaison de pourcentages", "écart-réduit", "pourcentage commun", "essai thérapeutique"]
level: "beginner"
sources: ["schwartz", "altman", "asa-pvalue"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Sous H0 (les deux groupes ont la même proportion), quelle valeur utilise-t-on pour calculer l'écart-type de la différence ?"
    options:
      - "le pourcentage commun, obtenu en regroupant les deux groupes"
      - "le plus grand des deux pourcentages observés"
      - "la valeur 0,5, toujours la plus prudente"
    correct: 0
  - prompt: "Deux groupes de tailles n1 et n2. L'erreur-standard de la différence fait intervenir le terme :"
    options:
      - "1/n1 − 1/n2"
      - "1/n1 + 1/n2"
      - "n1 + n2"
    correct: 1
  - prompt: "On compare 30 % (traité) à 18 % (placebo) et l'on trouve z = 2,8. On conclut :"
    options:
      - "la différence est compatible avec le hasard"
      - "la différence entre les deux groupes est significative"
      - "le traitement est dangereux"
    correct: 1
---

<!-- step:title="Deux groupes, deux pourcentages" -->
Le cas le plus fréquent en recherche clinique n'est pas de comparer un pourcentage à une référence théorique, mais de **comparer deux groupes entre eux**.

Un essai teste un traitement. Dans le groupe **traité**, 60 patients guérissent sur 200, soit **30 %**. Dans le groupe **placebo**, 36 guérissent sur 200, soit **18 %**. L'écart brut est de 12 points en faveur du traitement.

Est-ce une vraie supériorité, ou deux fluctuations qui, cette fois, sont tombées dans le bon sens ? Les deux fréquences fluctuent maintenant *chacune* autour de leur vraie valeur ; il faut tenir compte de la variabilité **des deux** groupes.
<!-- /step -->

<!-- step:title="L'hypothèse nulle et le pourcentage commun" -->
L'hypothèse nulle affirme que les deux groupes proviennent de populations de **même proportion** : le traitement ne change rien.

$$H_0 : p_1 = p_2$$

Sous cette hypothèse, il n'existe qu'une seule vraie proportion commune. La meilleure estimation consiste à **fusionner les deux groupes** : c'est le *pourcentage commun* $p_c$, calculé sur l'ensemble des guérisons et des sujets.

$$p_c = \dfrac{x_1 + x_2}{n_1 + n_2} = \dfrac{60 + 36}{200 + 200} = \dfrac{96}{400} = 0{,}24$$

L'idée est fine : puisque $H_0$ dit que les deux groupes sont identiques, on estime leur proportion commune sur *toutes* les données, ce qui donne un chiffre plus stable que chaque groupe pris isolément.
<!-- /step -->

<!-- step:title="L'écart-réduit de la différence" -->
On mesure la différence $f_1 - f_2$ en nombre d'écarts-types, comme toujours. L'écart-type d'une différence de deux fréquences indépendantes combine les variabilités des deux groupes ; sous $H_0$, on y injecte le pourcentage commun :

$$z = \dfrac{f_1 - f_2}{\sqrt{p_c(1-p_c)\left(\dfrac{1}{n_1} + \dfrac{1}{n_2}\right)}}$$

Le terme $\left(\tfrac{1}{n_1} + \tfrac{1}{n_2}\right)$ traduit une règle intuitive : c'est le **plus petit groupe** qui pèse le plus sur l'imprécision. Application :

$$\sqrt{0{,}24 \times 0{,}76 \times \left(\tfrac{1}{200} + \tfrac{1}{200}\right)} = \sqrt{0{,}1824 \times 0{,}01} = \sqrt{0{,}001824} \approx 0{,}0427$$

$$z = \dfrac{0{,}30 - 0{,}18}{0{,}0427} \approx 2{,}81$$

Comme $2{,}81 > 1{,}96$, la différence est **significative au seuil de 5 %** (degré de signification $p \approx 0{,}005$). La supériorité du traitement ne s'explique pas commodément par le seul hasard.

:::key
Pour comparer deux pourcentages, on estime une proportion **commune** $p_c$ sous $H_0$, puis $z = (f_1 - f_2)/\sqrt{p_c(1-p_c)(1/n_1 + 1/n_2)}$. On rejette $H_0$ si $|z| > 1{,}96$.
:::
<!-- /step -->

<!-- step:title="Différence significative n'est pas différence importante" -->
:::pitfall
Un résultat significatif dit que l'écart est *réel*, pas qu'il est *grand* ni *cliniquement utile*. Avec de très grands effectifs, une différence dérisoire de 30,0 % contre 30,5 % peut devenir « significative ». À l'inverse, une différence cliniquement majeure peut rester non significative faute de sujets. Regardez toujours **l'ampleur** de la différence (et son intervalle de confiance), pas seulement l'étiquette « significatif ».
:::

Il est d'ailleurs utile de donner l'intervalle de confiance de la **différence** elle-même. Ici, la différence vaut 12 points ; son erreur-standard (estimée sans $H_0$, à partir de chaque $f$) permet de l'encadrer, par exemple autour de $[4\%\,;\,20\%]$. Cet intervalle exclut 0, ce qui rejoint la conclusion du test.
<!-- /step -->

<!-- step:title="Conditions d'emploi" -->
La méthode par l'écart-réduit repose, comme au chapitre A-1, sur l'approximation normale. Elle exige des **effectifs attendus suffisants** : en pratique, chacune des cases (guéris et non-guéris, dans chaque groupe) doit correspondre à un effectif attendu supérieur à 5.

Quand ce n'est pas le cas — petits essais, événements rares — cet écart-réduit devient trompeur, et l'on se tournera vers le **test exact de Fisher** (A-8). Nous verrons aussi (A-7) que comparer deux pourcentages par cet écart-réduit revient *exactement* au test du χ² sur un tableau 2 × 2 : $z^2 = \chi^2$.
<!-- /step -->

<!-- step:title="À retenir" -->
- Comparer deux pourcentages observés, c'est tester $H_0 : p_1 = p_2$ à partir de la différence $f_1 - f_2$.
- Sous $H_0$, on estime une proportion **commune** $p_c = (x_1 + x_2)/(n_1 + n_2)$.
- L'écart-réduit vaut $z = (f_1 - f_2)/\sqrt{p_c(1-p_c)(1/n_1 + 1/n_2)}$ ; le terme $1/n_1 + 1/n_2$ montre que le petit groupe commande la précision.
- On rejette $H_0$ si $|z| > 1{,}96$ ; « significatif » qualifie la réalité de l'écart, pas son importance clinique.
- Conditions : effectifs attendus > 5 dans chaque case ; sinon, test exact de Fisher.
<!-- /step -->
