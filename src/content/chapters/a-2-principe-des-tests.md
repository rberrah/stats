---
id: "a-2-principe-des-tests"
slug: "a-2-principe-des-tests"
title: "Comparer un pourcentage à une valeur théorique : le principe des tests"
description: "L'hypothèse nulle, l'écart-réduit sous H0, la décision au seuil α et le degré de signification p."
track: "section-A"
order: 12
duration: "13 min"
programItem: "A-2"
tags: ["test statistique", "hypothèse nulle", "risque alpha", "degré de signification"]
quiz:
  - prompt: "Que suppose exactement l'hypothèse nulle H0 quand on compare un pourcentage observé à une valeur théorique p0 ?"
    options:
      - "que la vraie proportion vaut p0, l'écart observé n'étant qu'une fluctuation"
      - "que la vraie proportion est différente de p0"
      - "que l'échantillon est trop petit pour conclure"
    correct: 0
  - prompt: "Le degré de signification p d'un test représente :"
    options:
      - "la probabilité que H0 soit vraie"
      - "la probabilité d'observer un écart au moins aussi grand si H0 est vraie"
      - "la proportion vraie dans la population"
    correct: 1
  - prompt: "On trouve z = 1,4, donc p ≈ 0,16, au seuil α = 5 %. La bonne conclusion est :"
    options:
      - "on rejette H0 : l'écart est significatif"
      - "on démontre que H0 est vraie"
      - "on ne rejette pas H0 : l'écart est compatible avec le hasard"
    correct: 2
---

<!-- step:title="Le problème : un chiffre observé s'écarte d'une référence" -->
Dans une région, la fréquence historique d'une malformation à la naissance est bien établie : **8 %**. Cette année, une maternité enregistre **30 cas sur 250 naissances**, soit **12 %**.

Faut-il s'alarmer ? Peut-être qu'un facteur nouveau a fait grimper le risque. Ou peut-être que 12 % n'est qu'une fluctuation d'échantillonnage au-dessus de 8 %, comme au chapitre précédent nos bactéries oscillaient autour de 20 %.

Nous avons besoin d'une procédure de décision honnête, qui ne se laisse pas emporter par l'impression que « 12, c'est plus que 8 ». Cette procédure, c'est le **test statistique**. Son principe est le même pour tous les tests du cours ; autant le comprendre à fond ici.
<!-- /step -->

<!-- step:title="L'hypothèse nulle : le scénario du hasard seul" -->
Le test commence par un renversement contre-intuitif. Au lieu de chercher à prouver qu'il se passe quelque chose, on fait comme si **rien n'avait changé**. C'est l'*hypothèse nulle*, notée $H_0$ :

$$H_0 : p = p_0 = 0{,}08$$

Sous $H_0$, la vraie proportion vaut toujours 8 % ; les 12 % observés ne seraient qu'une fluctuation. On lui oppose l'*hypothèse alternative* $H_1 : p \ne p_0$.

La stratégie : **calculer à quel point les données seraient surprenantes si $H_0$ était vraie**. Si elles sont très surprenantes, on abandonne $H_0$. Sinon, on la garde faute de preuve du contraire.

:::note
On ne « prouve » jamais $H_0$. On la rejette, ou bien on ne parvient pas à la rejeter — nuance capitale, sur laquelle nous reviendrons.
:::
<!-- /step -->

<!-- step:title="Calculer l'écart-réduit sous H0" -->
Sous $H_0$, nous connaissons la proportion vraie ($p_0$), donc l'écart-type des fluctuations se calcule directement avec $p_0$ — et non avec la fréquence observée :

$$z = \dfrac{f - p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}$$

Appliquons à la maternité, avec $f = 0{,}12$, $p_0 = 0{,}08$, $n = 250$ :

$$\sqrt{\dfrac{0{,}08 \times 0{,}92}{250}} = \sqrt{0{,}0002944} \approx 0{,}0172$$

$$z = \dfrac{0{,}12 - 0{,}08}{0{,}0172} \approx 2{,}33$$

L'écart observé vaut **2,33 écarts-types**. Sur le graphique des deux risques, cet écart-réduit tombe déjà dans la zone que $H_0$ juge peu probable.
<!-- /step -->

<!-- step:title="Décider au seuil α" viz="RisquesAlphaBeta" -->
:::howto
**Comment lire le schéma.** La cloche de gauche est le monde de $H_0$ (rien n'a changé). Les zones colorées aux extrémités sont la *région de rejet* : leur surface totale vaut α, le risque qu'on accepte de courir. Faites varier α : les frontières se rapprochent ou s'écartent de ±1,96. Placez l'écart-réduit observé : s'il tombe dans la zone colorée, on rejette $H_0$.
:::

Avant de regarder les données, on fixe un **seuil de décision** $\alpha$, presque toujours **5 %**. Il représente le risque qu'on s'autorise de rejeter $H_0$ *à tort* — le **risque de première espèce**.

:::note
**Pourquoi 5 % ?** Ce seuil n'a rien d'une loi de la nature : c'est une **convention**, popularisée par le statisticien R. A. Fisher dans les années 1920 (« une chance sur vingt » lui semblait un repère commode). Il traduit un compromis : abaisser α (1 %, 0,1 %) réduit les fausses alertes, mais laisse passer davantage de vraies différences — le risque β augmente en retour (voir F‑4). 5 % est donc un point d'équilibre usuel, pas une vérité : un dépistage aux conséquences lourdes exigera 1 %, une étude exploratoire tolérera 10 %. La seule règle stricte est de **fixer α *avant* de regarder les données**.
:::

Pour un test bilatéral à $\alpha = 5\%$, la frontière est notre vieille connaissance **1,96**. La règle :

- si $|z| > 1{,}96$ : on **rejette** $H_0$, l'écart est dit *significatif* ;
- si $|z| \le 1{,}96$ : on **ne rejette pas** $H_0$, l'écart est compatible avec le hasard.

Ici $z = 2{,}33 > 1{,}96$ : on rejette $H_0$. La hausse de 8 % à 12 % est **significative au seuil de 5 %** ; il est raisonnable de chercher une cause.
<!-- /step -->

<!-- step:title="Le degré de signification p" -->
Le seuil α donne une réponse en tout ou rien. On préfère souvent chiffrer *précisément* le degré de surprise : c'est le **degré de signification**, la fameuse valeur $p$.

$$p = \text{probabilité d'un écart-réduit au moins aussi grand que } |z|,\ \text{si } H_0 \text{ est vraie}$$

Pour $z = 2{,}33$, la loi normale donne, en bilatéral, $p \approx 0{,}02$. On l'interprète ainsi : **si la vraie fréquence était bien 8 %, un écart aussi marqué que celui observé ne surviendrait qu'environ 2 fois sur 100.** C'est assez rare pour douter de $H_0$.

La règle de décision devient : rejeter $H_0$ quand $p < \alpha$.

:::pitfall
$p$ n'est **pas** la probabilité que $H_0$ soit vraie, ni la probabilité que le résultat soit dû au hasard. C'est une probabilité *conditionnelle à $H_0$* : « en supposant $H_0$ vraie, à quel point ces données sont-elles extrêmes ? ». Confondre les deux est l'erreur d'interprétation la plus répandue en biologie.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Un test oppose $H_0$ (la valeur théorique $p_0$ est vraie, l'écart n'est qu'une fluctuation) à $H_1$.
- On calcule l'écart-réduit **sous $H_0$**, donc avec $p_0$ : $z = (f - p_0)/\sqrt{p_0(1-p_0)/n}$.
- On décide au seuil $\alpha$ (souvent 5 %) : $|z| > 1{,}96$ conduit à **rejeter** $H_0$ (résultat significatif).
- Le **degré de signification $p$** est la probabilité d'un écart au moins aussi grand *si $H_0$ est vraie* ; on rejette quand $p < \alpha$.
- On ne prouve jamais $H_0$ : « non significatif » veut dire *compatible avec le hasard*, pas *identique à $p_0$*.
<!-- /step -->
