---
id: "c-5-correlations-partielles"
slug: "c-5-correlations-partielles"
title: "Liaisons multiples et corrélations partielles"
description: "Comment une troisième variable peut fabriquer ou masquer une corrélation, comment la corrélation partielle la neutralise, et pourquoi corrélation n'est jamais causalité."
track: "section-C"
order: 35
duration: "12 min"
programItem: "C-5"
tags: ["corrélation partielle", "facteur de confusion", "régression multiple", "causalité"]
level: "advanced"
sources: ["rothman", "hill-criteria", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "On observe une corrélation r = 0,50 entre café et risque cardiovasculaire. Après avoir tenu compte du tabac, la corrélation partielle chute à 0,02. Que conclure ?"
    options:
      - "La liaison café–risque était surtout due au tabac, facteur de confusion"
      - "À tabac constant, le café garde un effet propre, faible mais bien réel"
      - "La corrélation partielle se trompe, la vraie liaison reste bien r = 0,50"
    correct: 0
  - prompt: "À quoi sert une corrélation partielle entre x et y ?"
    options:
      - "À mesurer la liaison x–y une fois neutralisée l'influence d'une troisième variable z"
      - "À combiner en une seule valeur moyenne les corrélations de x et de y avec z"
      - "À démontrer que x est bien la cause directe de y, une fois la variable z neutralisée"
    correct: 0
---

<!-- step:title="Une troisième variable qui brouille tout" -->
Une étude observe que les gros buveurs de café ont plus d'accidents cardiovasculaires. La corrélation est nette, disons $r = 0{,}50$. Faut-il incriminer le café ?

Pas si vite. Les gros buveurs de café **fument aussi davantage**, et le tabac, lui, est un facteur de risque cardiovasculaire établi. Le tabac est corrélé au café (les deux habitudes vont ensemble) **et** au risque (il l'augmente). Il pourrait donc créer, à lui seul, une liaison apparente entre café et risque — sans que le café y soit pour rien.

Une telle variable, liée à la fois à ce que l'on étudie et à ce que l'on mesure, s'appelle un **facteur de confusion**. Il est le grand ennemi de l'interprétation des corrélations : il fabrique des liaisons qui n'existent pas, ou en cache qui existent.
<!-- /step -->

<!-- step:title="La corrélation partielle : neutraliser z" -->
Comment savoir si le café garde un lien avec le risque **une fois le tabac mis hors jeu** ? L'idéal serait de ne comparer que des fumeurs identiques entre eux. À défaut, la statistique le simule avec la **corrélation partielle**, notée $r_{xy \cdot z}$ : la corrélation entre $x$ et $y$ *à $z$ constant*.

Sa formule combine les trois corrélations simples deux à deux :

$$r_{xy \cdot z} = \dfrac{r_{xy} - r_{xz}\,r_{yz}}{\sqrt{\left(1 - r_{xz}^2\right)\left(1 - r_{yz}^2\right)}}$$

Lisez le numérateur : on **retranche** de la liaison brute $r_{xy}$ ce que $z$ explique à lui seul ($r_{xz}\,r_{yz}$). Si tout le lien passait par $z$, ce numérateur s'annule et la corrélation partielle tombe à zéro.

:::key
La corrélation partielle répond à : « et si $z$ n'avait pas bougé ? ». Elle isole la liaison propre entre $x$ et $y$, débarrassée de l'effet de la troisième variable.
:::
<!-- /step -->

<!-- step:title="Le calcul sur l'exemple café–tabac" -->
Posons $x$ = café, $y$ = risque cardiovasculaire, $z$ = tabac, avec les corrélations simples suivantes :

$$r_{xy} = 0{,}50 \quad (\text{café–risque}), \qquad r_{xz} = 0{,}70 \quad (\text{café–tabac}), \qquad r_{yz} = 0{,}70 \quad (\text{tabac–risque})$$

La corrélation partielle café–risque, à tabac constant, vaut :

$$r_{xy \cdot z} = \dfrac{0{,}50 - 0{,}70 \times 0{,}70}{\sqrt{(1 - 0{,}49)(1 - 0{,}49)}} = \dfrac{0{,}50 - 0{,}49}{0{,}51} \approx 0{,}02$$

La liaison passe de $0{,}50$ à **$0{,}02$** : elle s'évanouit. Presque toute la corrélation apparente entre café et risque n'était qu'un **reflet du tabac**. À tabac égal, le café n'a pratiquement plus de lien avec le risque cardiovasculaire — dans ce jeu de chiffres fictif mais parlant.
<!-- /step -->

<!-- step:title="Vers la régression multiple" -->
Contrôler un seul facteur de confusion suffit rarement : l'âge, le poids, l'activité physique s'en mêlent aussi. La **régression multiple** généralise l'idée en modélisant $y$ par plusieurs variables à la fois :

$$y = b_0 + b_1 x_1 + b_2 x_2 + \dots + b_k x_k$$

Chaque coefficient $b_j$ s'interprète « **toutes les autres variables étant maintenues constantes** » : c'est l'effet propre de $x_j$, une fois les autres neutralisées, exactement l'esprit de la corrélation partielle mais avec plusieurs correcteurs simultanés.

:::note
C'est pourquoi les études cliniques présentent des résultats « ajustés sur l'âge, le sexe, le tabac… » : chaque ajustement retire un facteur de confusion potentiel. Un effet qui résiste à ces ajustements est plus crédible — sans être pour autant démontré comme causal.
:::
<!-- /step -->

<!-- step:title="Piège : corrélation n'est pas causalité" -->
:::pitfall
C'est **le** piège de toute cette partie. Une corrélation entre $x$ et $y$ peut naître de quatre situations bien différentes :
**1.** $x$ cause $y$ ; **2.** $y$ cause $x$ (le sens inverse !) ; **3.** un facteur de confusion $z$ cause les deux (café–tabac) ; **4.** le pur hasard, surtout si l'on teste beaucoup de paires.
Le coefficient $r$, à lui seul, est **incapable de distinguer ces quatre cas**. Il mesure une coïncidence de variation, rien de plus.
:::

Corrélation partielle et régression multiple aident à écarter la situation 3, mais aucune statistique ne prouve à elle seule une causalité. Celle-ci se construit autrement : par l'expérimentation contrôlée (randomisation), la cohérence temporelle (la cause précède l'effet), la plausibilité biologique et la reproductibilité. La statistique **suggère**, l'expérience et le raisonnement **tranchent**.
<!-- /step -->

<!-- step:title="À retenir" -->
- Un **facteur de confusion** $z$, lié à la fois à $x$ et à $y$, peut fabriquer ou masquer une corrélation apparente entre $x$ et $y$.
- La **corrélation partielle** $r_{xy \cdot z}$ mesure la liaison $x$–$y$ **à $z$ constant** ; si le lien passait tout entier par $z$, elle tombe à zéro (café–risque : $0{,}50 \to 0{,}02$).
- La **régression multiple** généralise l'idée : chaque coefficient est l'effet propre d'une variable, **les autres étant maintenues constantes** — d'où les résultats « ajustés ».
- **Corrélation ≠ causalité** : une liaison peut venir de $x \to y$, de $y \to x$, d'un facteur commun ou du hasard ; $r$ ne les distingue pas.
- La causalité se démontre par l'**expérimentation** et le raisonnement, jamais par un coefficient de corrélation seul.
<!-- /step -->
