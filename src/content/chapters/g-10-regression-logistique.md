---
id: "g-10-regression-logistique"
slug: "g-10-regression-logistique"
title: "La régression logistique"
description: "Prédire une variable binaire, comprendre pourquoi la régression linéaire échoue, passer par les odds et le logit, et interpréter les coefficients en odds ratios ajustés."
track: "section-G"
order: 70
duration: "14 min"
programItem: "G-10"
tags: ["régression logistique", "odds ratio", "logit", "variable binaire", "ajustement"]
quiz:
  - prompt: "Pourquoi ne pas utiliser une régression linéaire ordinaire pour prédire une variable binaire (malade / sain) ?"
    options:
      - "parce qu'elle peut prédire des probabilités inférieures à 0 ou supérieures à 1, hors de tout sens"
      - "parce qu'elle est trop lente à calculer"
      - "parce qu'elle exige au moins trois catégories"
    correct: 0
  - prompt: "Dans une régression logistique, un coefficient s'interprète, après exponentiation, comme :"
    options:
      - "un risque relatif"
      - "un odds ratio"
      - "une différence de moyennes"
    correct: 1
  - prompt: "Que vaut le logit d'une probabilité ?"
    options:
      - "le logarithme de la probabilité"
      - "le logarithme des odds, soit ln[p / (1 − p)]"
      - "la probabilité divisée par 2"
    correct: 1
---

<!-- step:title="Prédire une réponse par oui ou non" -->
Beaucoup de questions cliniques appellent une réponse **binaire** : le patient est-il malade ou sain ? l'intervention a-t-elle réussi ou échoué ? y a-t-il eu complication ou non ?

On voudrait relier cette issue $Y$ (codée 0 ou 1) à des variables explicatives : âge, glycémie, tabac… Autrement dit, **prédire la probabilité** $p$ que $Y = 1$ à partir de ces facteurs. C'est exactement ce que fait la **régression logistique**, le pendant de la régression linéaire pour une sortie **oui/non**.
<!-- /step -->

<!-- step:title="Pourquoi pas une régression linéaire ?" -->
La tentation serait d'écrire $p = a + b\,x$ et d'ajuster une droite, comme en C-1. Deux obstacles rédhibitoires.

D'abord, une probabilité est **bornée entre 0 et 1**, mais une droite file vers $\pm\infty$. Pour un âge assez grand, le modèle prédirait $p = 1{,}3$ ou $p = -0{,}2$ — dépourvus de sens.

Ensuite, la relation entre un facteur et une probabilité est rarement linéaire : elle sature. Passer de 20 à 30 ans change peu le risque d'infarctus ; passer de 60 à 70 ans le change beaucoup. La bonne forme est une courbe **en S** (sigmoïde), pas une droite.

:::pitfall
Forcer une droite sur une issue binaire donne des probabilités hors de [0 ; 1] et une variance non constante (les conditions de la régression linéaire, chapitre C, sont violées). Il faut **transformer** la probabilité avant de la modéliser linéairement.
:::
<!-- /step -->

<!-- step:title="Odds et log-odds (logit)" -->
La solution passe par une réécriture de la probabilité. On définit d'abord les **odds** (la « cote ») : le rapport de la probabilité que l'événement survienne à celle qu'il ne survienne pas.

$$\text{odds} = \frac{p}{1 - p}$$

Si $p = 0{,}80$, les odds valent $0{,}80 / 0{,}20 = 4$ : l'événement est « 4 fois plus probable que son contraire ». Les odds vont de $0$ à $+\infty$ — on a déjà supprimé la borne haute. En prenant le **logarithme**, on obtient le **logit**, qui s'étend de $-\infty$ à $+\infty$ :

$$\text{logit}(p) = \ln\!\left( \frac{p}{1 - p} \right)$$

C'est **cette** quantité, sans borne, que l'on modélise linéairement :

$$\text{logit}(p) = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_k x_k$$

En sens inverse, on revient à la probabilité par la sigmoïde $p = 1 / (1 + e^{-(\beta_0 + \beta_1 x_1 + \dots)})$, toujours comprise entre 0 et 1. Le tour est joué : linéaire sur l'échelle logit, borné sur l'échelle des probabilités.
<!-- /step -->

<!-- step:title="Les coefficients sont des odds ratios" -->
Que signifie un coefficient $\beta_1$ ? Sur l'échelle logit, augmenter $x_1$ d'une unité **ajoute** $\beta_1$. Sur l'échelle des odds, cela **multiplie** les odds par $e^{\beta_1}$. Or ce facteur multiplicatif des odds est précisément un **odds ratio** (chapitre G-2) :

$$\text{OR} = e^{\beta_1}$$

Interprétation : $\text{OR} = 1$ signifie aucun effet ; $\text{OR} > 1$ un facteur de risque ; $\text{OR} < 1$ un facteur protecteur.

Mini-exemple chiffré original. On modélise la survenue d'une infection du site opératoire selon le tabac ($x = 1$ fumeur, $0$ non-fumeur). Le modèle donne $\beta_{\text{tabac}} = 0{,}59$, d'où :

$$\text{OR} = e^{0{,}59} \approx 1{,}80$$

Les fumeurs ont des odds d'infection **1,8 fois** plus élevés que les non-fumeurs. Pour une variable **continue** comme la glycémie, avec $\beta = 0{,}26$ par mmol/L, chaque mmol/L supplémentaire multiplie les odds par $e^{0{,}26} \approx 1{,}30$, soit **+30 %** par unité.

:::key
En régression logistique, on **exponentie** chaque coefficient pour lire un **odds ratio**. C'est le fil direct avec le chapitre G-2 : le modèle produit des OR, mais pour **plusieurs** facteurs à la fois.
:::
<!-- /step -->

<!-- step:title="L'ajustement multivarié et la confusion" -->
Le vrai pouvoir du modèle est d'estimer chaque OR **en tenant les autres variables constantes**. Chaque odds ratio est alors **ajusté** : c'est l'effet propre du facteur, débarrassé des autres.

C'est l'outil de choix contre les **facteurs de confusion** (chapitre G-6). Reprenons le tabac. En analyse **brute**, l'OR d'infection du site opératoire pour le tabac est de 2,10. Mais les fumeurs de l'étude étaient aussi plus souvent **diabétiques**, or le diabète favorise l'infection. En introduisant le diabète dans le modèle, l'OR du tabac **descend** à 1,80 :

$$\text{OR}_{\text{tabac, brut}} = 2{,}10 \quad\longrightarrow\quad \text{OR}_{\text{tabac, ajusté}} = 1{,}80$$

La différence (2,10 → 1,80) correspond à la part de l'association qui passait en réalité **par le diabète**. L'OR ajusté isole l'effet du tabac « à diabète égal ». Comme pour tout modèle, un OR dont l'intervalle de confiance **exclut 1** est statistiquement significatif.

:::note
La régression logistique est à l'issue **binaire** ce que le modèle de Cox (chapitre G-9) est à l'issue **de survie** : tous deux ajustent l'effet d'un facteur sur des covariables. Logistique → **odds ratio** (a-t-on l'événement ?) ; Cox → **hazard ratio** (quand survient-il ?).
:::
<!-- /step -->

<!-- step:title="Un piège d'interprétation : OR n'est pas risque relatif" -->
L'odds ratio se lit souvent, à tort, comme un risque relatif. Les deux **coïncident** seulement quand l'événement est **rare** (incidence faible). Dès que l'événement est **fréquent**, l'OR **s'éloigne** du risque relatif et **exagère** l'effet.

Illustration. Si un facteur fait passer une probabilité de 0,40 à 0,60, le risque relatif vaut $0{,}60/0{,}40 = 1{,}5$, mais les odds passent de $0{,}67$ à $1{,}5$, soit un OR de $2{,}25$ — nettement plus impressionnant. Annoncer « le risque double » sur la foi d'un OR de 2 serait une **surinterprétation** quand l'issue est courante.

:::pitfall
Ne traduisez pas machinalement un odds ratio par « le risque est multiplié par… ». Pour un événement fréquent, l'OR **surestime** le risque relatif. Réservez la lecture « OR ≈ RR » aux événements **rares**.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- La **régression logistique** prédit une issue **binaire** (0/1) en modélisant la **probabilité** $p$ que $Y = 1$.
- La régression **linéaire** échoue : elle prédit des probabilités hors de [0 ; 1] et suppose une relation droite là où la forme est **sigmoïde**.
- On modélise le **logit** $\ln[p/(1-p)]$ (les log-odds), sans borne, de façon linéaire, puis on revient à $p$ par la sigmoïde.
- Chaque coefficient exponentié donne un **odds ratio** ($\text{OR} = e^{\beta}$) ; le modèle fournit des **OR ajustés** qui neutralisent les **facteurs de confusion** (lien G-2 et G-6).
- Piège : l'OR **n'égale** le risque relatif que si l'événement est **rare** ; sur un événement fréquent, il **exagère** l'effet.
<!-- /step -->
