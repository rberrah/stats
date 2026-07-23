---
id: "g-8-survie-kaplan-meier"
slug: "g-8-survie-kaplan-meier"
title: "Analyse de survie : Kaplan-Meier et test du log-rank"
description: "Pourquoi la survie n'est pas un simple pourcentage, comment la censure impose la courbe en escalier de Kaplan-Meier, et comment comparer deux courbes avec le test du log-rank."
track: "section-G"
order: 68
duration: "14 min"
programItem: "G-8"
tags: ["survie", "Kaplan-Meier", "censure", "log-rank", "médiane de survie"]
level: "intermediate"
sources: ["kaplan-meier-1958", "mantel-1966", "collett-survival"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Qu'appelle-t-on « censure » en analyse de survie ?"
    options:
      - "le fait d'exclure de l'analyse un patient qui a quitté l'étude avant l'événement"
      - "le fait d'ignorer la date de l'événement, en sachant seulement qu'il n'est pas encore survenu"
      - "le fait de compter comme décédé un patient perdu de vue avant la fin du suivi"
    correct: 1
  - prompt: "Pourquoi la survie ne se résume-t-elle pas à un simple pourcentage de survivants ?"
    options:
      - "parce que les patients n'ont pas tous été suivis aussi longtemps (censure)"
      - "parce qu'un simple pourcentage ignore la date exacte de chaque décès"
      - "parce qu'un pourcentage ne distingue pas les différentes causes de décès"
    correct: 0
  - prompt: "Que compare le test du log-rank ?"
    options:
      - "la survie des deux groupes à un unique instant fixé d'avance"
      - "les deux courbes de survie entières, pas seulement un instant donné"
      - "les médianes de survie estimées dans chacun des deux groupes"
    correct: 1
---

<!-- step:title="Pourquoi un pourcentage ne suffit pas" -->
On aimerait résumer un pronostic par une phrase simple : « 70 % des patients sont vivants à 5 ans ». Mais en pratique, les patients n'ont pas tous été suivis aussi longtemps.

Certains ont été inclus il y a 5 ans, d'autres il y a 6 mois. Certains ont **déménagé**, d'autres sont **encore vivants** à la fin de l'étude. Pour eux, on ne connaît pas leur date de décès — seulement qu'ils étaient vivants à un certain moment. Les jeter fausserait tout ; les compter comme « survivants à 5 ans » serait mentir sur ceux qu'on n'a suivis que 6 mois.

Il faut donc une méthode qui exploite **chaque patient à hauteur du temps réellement observé**. C'est tout l'objet de l'analyse de survie.
<!-- /step -->

<!-- step:title="La censure : une information incomplète, pas nulle" -->
Un patient est **censuré** lorsqu'on ignore la date de son événement, tout en sachant qu'il ne s'était **pas produit** jusqu'à une certaine date. Le cas le plus fréquent est la **censure à droite** : le suivi s'arrête (fin d'étude, perte de vue) avant l'événement.

Exemple. Un patient inclus, suivi 18 mois, toujours vivant à la clôture de l'étude : il est censuré à 18 mois. On ne sait pas quand il mourra — mais on sait qu'il a **vécu au moins 18 mois**, et cette information est précieuse.

:::key
La censure n'est pas une donnée manquante ordinaire : c'est une information **partielle** (« vivant jusqu'à tel jour »). L'analyse de survie est précisément l'art de tirer parti de ces observations incomplètes.
:::

Une condition importante : la censure doit être **non informative** — la raison pour laquelle un patient quitte l'étude ne doit pas être liée à son risque de décès. Sinon, un biais de sélection (chapitre G-6) s'installe.
<!-- /step -->

<!-- step:title="La fonction de survie S(t)" -->
La grandeur centrale est la **fonction de survie** $S(t)$ : la probabilité d'être encore **sans événement** au-delà de l'instant $t$.

$$S(t) = P(T > t)$$

où $T$ est la durée jusqu'à l'événement. Elle vaut $1$ au départ (tout le monde est en vie à $t=0$) et **décroît** vers $0$. Ce n'est pas un chiffre unique mais une **courbe** : elle raconte l'histoire du pronostic au fil du temps, pas seulement à un instant choisi.
<!-- /step -->

<!-- step:title="La courbe de Kaplan-Meier" viz="SurvieKaplanMeier" -->
L'estimateur de **Kaplan-Meier** construit $S(t)$ marche après marche. À chaque date où survient au moins un événement, la survie est multipliée par la **proportion de survivants** parmi ceux encore « à risque » juste avant :

$$\hat{S}(t) = \prod_{t_i \le t} \left( 1 - \frac{d_i}{n_i} \right)$$

où $d_i$ est le nombre d'événements à la date $t_i$ et $n_i$ le nombre de sujets **à risque** juste avant. Les patients censurés restent comptés dans $n_i$ **jusqu'à** leur censure, puis en sortent sans faire chuter la courbe.

Mini-exemple. 10 patients à l'inclusion. À 4 mois, 1 décès : $\hat{S} = 1 \times (1 - \tfrac{1}{10}) = 0{,}90$. Entre 4 et 9 mois, 1 patient est censuré (il reste 8 à risque). À 9 mois, 1 décès : $\hat{S} = 0{,}90 \times (1 - \tfrac{1}{8}) = 0{,}79$.

:::howto
**Comment lire le schéma.** La courbe descend **en escalier** : chaque marche verticale est un événement, sa hauteur d'autant plus grande qu'il reste peu de sujets à risque. Les petits **traits** sur les paliers marquent les censures — ils ne font pas descendre la courbe. Là où les sujets à risque se raréfient (fin de courbe), les marches deviennent hautes et l'estimation **incertaine**.
:::
<!-- /step -->

<!-- step:title="La médiane de survie" -->
Plutôt qu'une moyenne (impossible à calculer tant que des patients survivent), on résume la courbe par la **médiane de survie** : le temps où $\hat{S}(t)$ franchit **0,50**, c'est-à-dire l'instant où la moitié des sujets ont connu l'événement.

On la lit graphiquement en traçant une horizontale à 0,50 jusqu'à la courbe, puis en descendant sur l'axe des temps. Avantage majeur : elle est **estimable** dès que la courbe passe sous 50 %, même si beaucoup de patients sont encore vivants.

:::pitfall
Si la courbe ne descend jamais sous 0,50 pendant le suivi, la médiane est **« non atteinte »** — et non « infinie » ou « très longue ». C'est fréquent dans les cancers de bon pronostic : on ne peut alors pas annoncer de médiane, seulement une survie à un horizon donné (par exemple à 5 ans).
:::
<!-- /step -->

<!-- step:title="Comparer deux courbes : le test du log-rank" -->
Pour savoir si deux groupes (traité vs témoin, par exemple) diffèrent, on ne compare pas seulement la survie à **un** instant : cela gaspillerait l'information et dépendrait du point choisi. Le **test du log-rank** compare les **courbes entières**.

Son principe : à **chaque date d'événement**, on calcule le nombre de décès **attendus** dans chaque groupe **si les deux avaient le même risque** (proportionnellement aux sujets encore à risque). On cumule sur toutes les dates l'écart entre décès **observés** et **attendus**. La statistique suit approximativement un $\chi^2$ à 1 degré de liberté :

$$\chi^2_{\text{log-rank}} = \frac{(O_1 - E_1)^2}{V}$$

Un exemple chiffré simplifié : cumulés sur le suivi, le groupe traité totalise $O_1 = 12$ décès observés pour $E_1 = 18{,}5$ attendus (moins que prévu → il survit mieux). Avec une variance $V \approx 7{,}0$, on obtient $\chi^2 \approx (12-18{,}5)^2 / 7{,}0 \approx 6{,}0$, au-delà du seuil 3,84 : la différence est **significative** ($p < 0{,}05$).

:::note
Le log-rank teste seulement **s'il existe** une différence, sans la quantifier. Pour chiffrer l'écart par un **hazard ratio** et ajuster sur des covariables, on passe au modèle de Cox (chapitre G-9). Le log-rank est d'ailleurs le plus puissant lorsque les risques sont **proportionnels**, hypothèse au cœur du modèle de Cox.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- La survie n'est pas un simple pourcentage : la **censure** (suivi incomplet) impose d'exploiter chaque patient à hauteur du temps observé.
- Un sujet **censuré** apporte une information partielle (« sans événement jusqu'à tel jour ») ; la censure doit être **non informative**.
- La **fonction de survie** $S(t) = P(T > t)$ est une **courbe**, estimée en escalier par **Kaplan-Meier** ; les censures y font des traits, pas des marches.
- La **médiane de survie** est le temps où $\hat{S}(t)$ atteint 0,50 ; elle peut être « **non atteinte** » si la courbe reste haute.
- Le **test du log-rank** compare deux courbes entières (observés vs attendus cumulés) et suit un $\chi^2$ ; il dit **s'il y a** une différence, pas de combien.
<!-- /step -->
