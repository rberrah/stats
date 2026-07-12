---
id: "c-4-variance-liee"
slug: "c-4-variance-liee"
title: "Coefficient exact ρ, variance liée et décomposition"
description: "Du r de l'échantillon au ρ de la population, et pourquoi la variance totale se partage exactement en une part liée et une part résiduelle, dont r² est le ratio."
track: "section-C"
order: 34
duration: "11 min"
programItem: "C-4"
tags: ["rho", "variance expliquée", "variance résiduelle", "décomposition", "r carré"]
level: "intermediate"
sources: ["schwartz", "armitage-berry", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Dans une régression, la variance totale de y se décompose en :"
    options:
      - "Variance liée (expliquée par x) + variance résiduelle"
      - "Variance de x + variance de y"
      - "Variance de mesure + variance biologique uniquement"
    correct: 0
  - prompt: "Quelle est la relation entre r² et la décomposition de variance ?"
    options:
      - "r² = variance liée / variance totale, la fraction de variance expliquée"
      - "r² = variance résiduelle / variance totale"
      - "r² = variance totale / variance liée"
    correct: 0
---

<!-- step:title="Le r que l'on calcule n'est qu'une estimation" -->
Jusqu'ici, $r$ était calculé sur un échantillon : cinq patients, une valeur $0{,}91$. Mais ces cinq-là ne sont qu'un tirage parmi tous les adultes possibles. Si la population entière avait une vraie liaison, elle aurait son propre coefficient, une constante fixe et inconnue que l'on note par la lettre grecque $\rho$ (rhô).

La distinction est la même qu'entre moyenne d'échantillon et moyenne vraie :

- $\rho$ est le **coefficient exact de la population** — fixe, inconnu, ce que l'on voudrait connaître ;
- $r$ est son **estimation sur l'échantillon** — calculable, mais fluctuant d'un tirage à l'autre.

Notre $r = 0{,}91$ est donc une *photographie bruitée* de $\rho$. Sur cinq sujets, cette photo est floue : un autre échantillon de cinq donnerait un autre $r$. C'est précisément ce flou que le test de $r$ (chapitre C-2) cherche à maîtriser.
<!-- /step -->

<!-- step:title="D'où vient la variabilité de y ?" -->
Repartons de la variabilité de la PAS. Pourquoi les valeurs de $y$ ne sont-elles pas toutes égales ? Deux raisons se superposent.

- Une partie de cette variabilité **suit l'âge** : les patients âgés ont, en tendance, une PAS plus haute. C'est la part que la droite de régression sait reproduire.
- Une autre partie **échappe à l'âge** : à âge égal, deux patients diffèrent encore (poids, génétique, hasard de mesure). C'est ce que la droite ne capte pas.

L'idée-clé de ce chapitre est que ces deux parts ne se mélangent pas : elles **s'additionnent exactement**. La variabilité totale de $y$ se coupe proprement en deux morceaux.
<!-- /step -->

<!-- step:title="La décomposition de la variance" -->
On mesure la variabilité par des **sommes de carrés des écarts** (notées $\text{SCE}$). Pour chaque patient, l'écart de sa PAS à la moyenne, $y_i - \bar{y}$, se scinde en deux : l'écart *que la droite explique* ($\hat{y}_i - \bar{y}$) et l'écart *résiduel* qu'elle laisse ($y_i - \hat{y}_i$).

En élevant au carré et en sommant sur tous les individus, les doubles produits s'annulent (propriété des moindres carrés), et il reste une égalité exacte :

$$\underbrace{\sum (y_i - \bar{y})^2}_{\text{SCE}_{\text{tot}}} = \underbrace{\sum (\hat{y}_i - \bar{y})^2}_{\text{SCE}_{\text{exp}}} + \underbrace{\sum (y_i - \hat{y}_i)^2}_{\text{SCE}_{\text{res}}}$$

soit, en mots :

$$\text{variance totale} = \text{variance liée (expliquée)} + \text{variance résiduelle}$$

:::key
Toute la variabilité de $y$ se partage **sans reste** entre ce que $x$ explique et ce qu'il n'explique pas. C'est cette partition, et non $r$ lui-même, qui donne son sens à la notion de « part de variance liée ».
:::
<!-- /step -->

<!-- step:title="Le calcul sur notre exemple" -->
Reprenons les cinq adultes. La variabilité totale de la PAS est $\text{SCE}_{\text{tot}} = \sum (y_i - \bar{y})^2 = 776$. La part expliquée par la droite se calcule directement :

$$\text{SCE}_{\text{exp}} = \dfrac{\left[\sum (x_i-\bar{x})(y_i-\bar{y})\right]^2}{\sum (x_i-\bar{x})^2} = \dfrac{800^2}{1000} = 640$$

Il reste donc, par différence, une variance résiduelle :

$$\text{SCE}_{\text{res}} = 776 - 640 = 136$$

La partition est limpide : $776 = 640 + 136$. Sur la variabilité totale de la PAS, **640 unités vont de pair avec l'âge** et **136 lui échappent**.
<!-- /step -->

<!-- step:title="r² est exactement ce ratio" -->
Le rapport de la part expliquée à la part totale n'est autre que $r^2$ :

$$r^2 = \dfrac{\text{SCE}_{\text{exp}}}{\text{SCE}_{\text{tot}}} = \dfrac{640}{776} \approx 0{,}82$$

On retrouve le $r^2$ du chapitre C-2, mais avec une signification bien plus concrète : ce n'est pas une abstraction, c'est **la fraction de la variabilité totale que la régression absorbe**. Ici, l'âge « prend en charge » 82 % de la variabilité de la PAS ; les 18 % restants ($136/776$) restent résiduels.

:::note
D'où deux lectures équivalentes : « $r^2 = 0{,}82$ » et « la droite réduit la variabilité inexpliquée de 82 % ». La quantité $1 - r^2 = 0{,}18$ est la **part résiduelle**, celle sur laquelle l'écart-type des résidus $s_{\text{res}}$ (chapitre C-3) est bâti.
:::
<!-- /step -->

<!-- step:title="Piège : « expliquée » ne veut pas dire « causée »" -->
:::pitfall
Le mot **variance « expliquée »** est un piège de vocabulaire. Il signifie seulement « statistiquement liée à $x$ », **jamais** « causée par $x$ ». Dire que l'âge explique 82 % de la variance de la PAS ne prouve pas que l'âge en soit la cause : un facteur commun (par exemple la rigidification des artères) pourrait agir sur les deux. « Expliquée » est un terme comptable, pas causal.
:::

Second garde-fou : un $r^2$ élevé sur un **petit** échantillon est facilement gonflé par le hasard. Ajouter des points, ou des variables, augmente presque toujours la part « expliquée » sans que la liaison soit plus réelle. La solidité de $r^2$ se juge avec $n$, jamais dans l'absolu.
<!-- /step -->

<!-- step:title="À retenir" -->
- $\rho$ est le coefficient **exact et inconnu** de la population ; $r$ n'en est qu'une **estimation** fluctuante calculée sur l'échantillon.
- La variabilité de $y$ se décompose **exactement** : $\text{SCE}_{\text{tot}} = \text{SCE}_{\text{exp}} + \text{SCE}_{\text{res}}$ (totale = liée + résiduelle).
- **$r^2 = \text{SCE}_{\text{exp}} / \text{SCE}_{\text{tot}}$** : la fraction de variance liée à $x$ ; ici $640/776 \approx 0{,}82$, et $1 - r^2 \approx 0{,}18$ est la part résiduelle.
- « Variance **expliquée** » est un terme statistique (lien), **pas causal**.
- Un $r^2$ ne se juge pas sans son effectif : petit $n$, valeur facilement surestimée.
<!-- /step -->
