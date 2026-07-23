---
id: "a-8-test-exact-fisher"
slug: "a-8-test-exact-fisher"
title: "Petits échantillons : le test exact de Fisher"
description: "Quand les effectifs attendus sont trop faibles pour le χ² : calculer directement la probabilité exacte des tableaux, à marges fixées."
track: "section-A"
order: 18
duration: "13 min"
programItem: "A-8"
tags: ["test de Fisher", "petits échantillons", "probabilité exacte", "loi hypergéométrique"]
level: "intermediate"
sources: ["fisher-1935-exact", "altman-bland-nonsig", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Quand préfère-t-on le test exact de Fisher au χ² sur un tableau 2 × 2 ?"
    options:
      - "quand un ou plusieurs effectifs attendus sont inférieurs à 5"
      - "quand un ou plusieurs effectifs observés sont inférieurs à 5"
      - "quand tous les effectifs attendus dépassent largement la valeur 5"
    correct: 0
  - prompt: "Sur quoi repose le calcul du test exact de Fisher ?"
    options:
      - "sur l'approximation de la loi du χ² par une loi normale centrée réduite"
      - "sur la probabilité exacte de chaque tableau possible, à marges fixées"
      - "sur la loi binomiale appliquée séparément à chaque case du tableau"
    correct: 1
  - prompt: "Pour obtenir le degré de signification, le test de Fisher additionne :"
    options:
      - "la seule probabilité du tableau observé, sans les tableaux plus extrêmes"
      - "la probabilité du tableau observé et des tableaux au moins aussi extrêmes"
      - "la probabilité de tous les tableaux possibles compatibles avec les marges"
    correct: 1
---

<!-- step:title="Quand le χ² n'a plus le droit de parler" -->
Toutes les méthodes précédentes — écart-réduit, χ² — reposent sur l'**approximation normale**, valable seulement si les effectifs sont assez grands. La règle rappelée à chaque chapitre : les effectifs **attendus** doivent dépasser 5.

Que faire d'un petit essai pilote ? Considérons deux traitements comparés sur 12 patients :

| | Guéris | Non guéris | Total |
|---|---|---|---|
| Traitement A | 5 | 1 | 6 |
| Traitement B | 2 | 4 | 6 |
| **Total** | **7** | **5** | **12** |

Les taux affichés sont spectaculaires : **83 % contre 33 %**. Mais l'effectif attendu de la case « A / non guéris » vaut $6 \times 5 / 12 = 2{,}5$, bien en dessous de 5. Le χ² n'est **pas valide** ici. Il faut renoncer à toute approximation et calculer **exactement**.
<!-- /step -->

<!-- step:title="L'idée : fixer les marges et compter" -->
Le test exact de Fisher raisonne « à **marges fixées** ». On considère comme immuables les totaux : 6 patients par traitement, 7 guéris et 5 non guéris au total. On se demande alors :

> Parmi toutes les façons de répartir 7 guérisons et 5 échecs dans ce tableau **sans changer les marges**, quelle est la probabilité de tomber sur une répartition aussi déséquilibrée que celle observée ?

Le tableau est entièrement déterminé par une seule case (1 degré de liberté). Faire varier la case « A / guéris » de 1 à 6 engendre **toutes** les tables possibles — la borne vient des marges : une case varie de $\max(0,\ \text{total ligne} + \text{total colonne} - N)$ à $\min(\text{total ligne},\ \text{total colonne})$, ici de $\max(0, 6+7-12)=1$ à $\min(6,7)=6$. Sous $H_0$ (les deux traitements se valent), chacune a une probabilité que l'on sait calculer exactement.
<!-- /step -->

<!-- step:title="La probabilité d'un tableau" -->
Pour un tableau 2 × 2 de cases $a, b, c, d$ et de total $N$, la probabilité exacte sous $H_0$, marges fixées, est donnée par la **loi hypergéométrique** :

$$P = \dfrac{(a+b)!\,(c+d)!\,(a+c)!\,(b+d)!}{N!\;a!\,b!\,c!\,d!}$$

Au numérateur, les factorielles des quatre marges ; au dénominateur, celle du total et des quatre cases. Pour notre tableau observé ($a=5,\ b=1,\ c=2,\ d=4$) :

$$P_{\text{obs}} = \dfrac{6!\;6!\;7!\;5!}{12!\;5!\;1!\;2!\;4!} \approx 0{,}114$$

Ce tableau précis a donc environ **11 % de chances** de survenir par hasard, à marges fixées. Mais ce n'est pas encore le degré de signification.
<!-- /step -->

<!-- step:title="Sommer les tableaux extrêmes" -->
Comme pour tout test, le degré de signification n'est pas la probabilité du tableau observé seul, mais celle d'un résultat **au moins aussi extrême**. Dans le sens « A supérieur à B », la seule table plus extrême que la nôtre est celle où A guérit **tout le monde** :

| | Guéris | Non guéris |
|---|---|---|
| Traitement A | 6 | 0 |
| Traitement B | 1 | 5 |

Sa probabilité :

$$P = \dfrac{6!\;6!\;7!\;5!}{12!\;6!\;0!\;1!\;5!} \approx 0{,}008$$

Le degré de signification **unilatéral** additionne les deux :

$$p_{\text{unil.}} = P_{\text{obs}} + P_{\text{extrême}} \approx 0{,}114 + 0{,}008 = 0{,}122$$

Comme le reste du cours raisonne en **bilatéral** (on n'avait pas fait de pari sur le sens avant l'expérience), c'est le $p$ bilatéral qu'on compare au seuil : en sommant aussi les tables également extrêmes de l'autre côté, il vaut ici $p_{\text{bil.}} \approx 0{,}24$. On garde donc **0,24** pour la décision.

:::key
Le test exact de Fisher calcule la probabilité **exacte** de chaque tableau à marges fixées, puis somme celles du tableau observé et de tous les tableaux **au moins aussi extrêmes**. Aucune approximation, aucune condition d'effectif. Comparez toujours le $p$ au seuil correspondant à l'hypothèse posée : bilatéral avec 0,05, unilatéral avec 0,025.
:::
<!-- /step -->

<!-- step:title="La leçon des petits nombres" -->
Malgré des taux de 83 % contre 33 %, on obtient $p \approx 0{,}24 > 0{,}05$ : la différence n'est **pas significative**.

C'est déstabilisant, mais parfaitement logique. Avec seulement 6 patients par groupe, même une différence aussi apparente peut se produire par hasard près d'une fois sur quatre. Ici le χ² (non corrigé) aurait donné $3{,}09$, donc la **même** conclusion — mais cette valeur n'a aucune garantie : l'effectif attendu de 2,5 invalide l'approximation. Seul le test exact fournit un $p$ légitime.

:::pitfall
Ne lisez jamais un pourcentage impressionnant sans regarder l'effectif derrière. « 83 % de guérison » sur 6 patients ne pèse pas lourd : l'intervalle de confiance est immense et le test reste muet. Un grand pourcentage sur un petit échantillon est une promesse, pas une preuve.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le test exact de **Fisher** remplace le χ² sur un tableau 2 × 2 quand un effectif **attendu** est inférieur à 5.
- Il raisonne **à marges fixées** et calcule la probabilité exacte de chaque tableau par la loi hypergéométrique : $P = \dfrac{(a+b)!(c+d)!(a+c)!(b+d)!}{N!\,a!\,b!\,c!\,d!}$.
- Le degré de signification somme la probabilité du tableau **observé** et de tous les tableaux **au moins aussi extrêmes**.
- Aucune approximation ni condition d'effectif : c'est la référence pour les **petits échantillons**.
- Leçon : un fort pourcentage sur peu de sujets peut rester **non significatif** — méfiez-vous des petits effectifs.
<!-- /step -->
