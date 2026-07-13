---
id: "b-4-test-t-student"
slug: "b-4-test-t-student"
title: "Comparaison de deux moyennes : le test t de Student"
description: "Comparer les moyennes de deux groupes indépendants : la statistique t, les degrés de liberté, la table et les conditions d'application."
track: "section-B"
order: 24
duration: "14 min"
programItem: "B-4"
tags: ["test t", "Student", "comparaison de moyennes", "degrés de liberté"]
level: "beginner"
sources: ["student-1908", "welch-1947", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Dans le test t de comparaison de deux moyennes, que représente le dénominateur s_d ?"
    options:
      - "L'erreur-standard de la différence des deux moyennes, c'est-à-dire l'ampleur des fluctuations attendues du numérateur sous le seul effet du hasard."
      - "L'écart-type des individus du premier groupe."
      - "La différence des deux moyennes."
    correct: 0
  - prompt: "Parmi ces conditions, laquelle N'EST PAS requise pour appliquer le test t classique à deux échantillons ?"
    options:
      - "Les deux groupes ont le même effectif."
      - "Les données sont approximativement normales (ou n assez grand)."
      - "Les deux variances sont comparables (égalité des variances)."
    correct: 0
---

<!-- step:title="La question la plus fréquente en biologie" -->
Un nouvel antihypertenseur baisse-t-il davantage la pression que le placebo ? Le temps de coagulation diffère-t-il entre deux réactifs ? Presque toute expérience se ramène à comparer **deux moyennes** : celle du groupe traité et celle du groupe témoin.

On observe forcément un écart entre les deux moyennes. La vraie question n'est pas « y a-t-il un écart ? » — il y en a toujours un — mais : **cet écart est-il trop grand pour être le simple fruit du hasard d'échantillonnage ?** Le test $t$ de Student répond précisément à cela.
<!-- /step -->

<!-- step:title="L'idée : comparer l'écart à sa propre fluctuation" -->
Reprenons B-1 : même si les deux populations avaient exactement la même moyenne, deux échantillons donneraient des moyennes légèrement différentes, par pur hasard. Le test consiste à **rapporter l'écart observé à l'ampleur de ces fluctuations naturelles**.

$$t = \frac{\bar{x}_1 - \bar{x}_2}{s_d}$$

- Le **numérateur** $\bar{x}_1 - \bar{x}_2$ est le signal : l'écart entre les deux moyennes.
- Le **dénominateur** $s_d$ est le bruit : l'erreur-standard de cette différence, soit de combien la différence fluctuerait si le hasard seul jouait.

Si $t$ est petit (proche de 0 ou de 1), l'écart n'excède pas le bruit ordinaire : rien de probant. Si $t$ est grand (2, 3, 4…), l'écart dépasse largement ce que le hasard produirait : la différence est **significative**.
<!-- /step -->

<!-- step:title="Le dénominateur : erreur-standard de la différence" viz="LoiNormale" -->
On combine d'abord la dispersion des deux groupes en une **variance commune** $s^2$ (moyenne pondérée par les degrés de liberté) :

$$s^2 = \frac{(n_1-1)\,s_1^2 + (n_2-1)\,s_2^2}{n_1 + n_2 - 2}$$

puis l'erreur-standard de la différence :

$$s_d = \sqrt{s^2\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}$$

La statistique $t$ se compare à la **loi de Student** à $\nu = n_1 + n_2 - 2$ degrés de liberté. Cette loi ressemble à la loi normale mais avec des queues un peu plus épaisses, d'autant plus marquées que $\nu$ est petit.

:::howto
**Comment lire le schéma.** La cloche représente les valeurs de $t$ attendues **si les deux moyennes étaient réellement égales**. Les zones extrêmes (2,5 % de chaque côté) sont la région de rejet. Placez la valeur de $t$ calculée : si elle tombe dans une queue, l'écart est trop grand pour le hasard.
:::
<!-- /step -->

<!-- step:title="Un exemple chiffré complet" -->
On compare la baisse de pression systolique (mmHg) obtenue par deux traitements.

- Groupe A : $n_1 = 10$, $\bar{x}_1 = 18{,}0$, $s_1 = 5{,}0$
- Groupe B : $n_2 = 10$, $\bar{x}_2 = 12{,}0$, $s_2 = 4{,}0$

Variance commune :

$$s^2 = \frac{9 \times 25 + 9 \times 16}{10 + 10 - 2} = \frac{225 + 144}{18} = \frac{369}{18} = 20{,}5$$

Erreur-standard de la différence :

$$s_d = \sqrt{20{,}5 \times \left(\tfrac{1}{10}+\tfrac{1}{10}\right)} = \sqrt{20{,}5 \times 0{,}2} = \sqrt{4{,}1} \approx 2{,}02$$

Statistique de test :

$$t = \frac{18{,}0 - 12{,}0}{2{,}02} = \frac{6{,}0}{2{,}02} \approx 2{,}97$$

Avec $\nu = 18$ degrés de liberté, la valeur seuil de la table à 5 % (bilatéral) est **2,10**. Comme $2{,}97 > 2{,}10$, on **rejette** l'hypothèse d'égalité : la différence de 6 mmHg entre les deux traitements est significative.
<!-- /step -->

<!-- step:title="Lire la table de Student" -->
La table donne, pour chaque nombre de degrés de liberté $\nu$ et chaque risque $\alpha$, la valeur seuil que $|t|$ doit dépasser. Quelques repères utiles (bilatéral, $\alpha = 5\%$) :

- $\nu = 10 \rightarrow 2{,}23$
- $\nu = 20 \rightarrow 2{,}09$
- $\nu = 30 \rightarrow 2{,}04$
- $\nu \to \infty \rightarrow 1{,}96$ (la loi normale)

Deux enseignements : le seuil **diminue** quand $\nu$ augmente (plus de données, moins d'exigence sur $t$), et il converge vers la valeur 1,96 de la loi normale pour les grands échantillons.

:::note
**Pourquoi le seuil dépasse-t-il 1,96 ?** Avec la loi normale, on faisait comme si l'on connaissait l'écart-type des fluctuations. Ici, on ne le connaît pas : on l'**estime** à partir du même (petit) échantillon, via $s$. Cette estimation est elle-même incertaine — d'autant plus que $n$ est petit — et cette incertitude *supplémentaire* épaissit les queues de la loi de Student. Il faut donc un seuil un peu **plus grand** que 1,96 pour tenir le risque à 5 %. Quand $n$ grandit, $s$ devient une mesure fiable de $\sigma$ : la loi de Student rejoint la loi normale et le seuil retombe sur 1,96. Le « ≈ 2 » usuel n'est donc que le 1,96 de la loi normale, un peu gonflé par notre ignorance de $\sigma$.
:::
<!-- /step -->

<!-- step:title="Les conditions d'application" -->
Le test $t$ classique repose sur trois hypothèses :

1. **Indépendance** des observations (les deux groupes sont distincts, aucun sujet dans les deux).
2. **Normalité** approximative des données dans chaque groupe — condition peu exigeante dès que $n$ dépasse ~30 (théorème central limite), mais à surveiller sur les petits échantillons.
3. **Égalité des variances** (homoscédasticité) : les deux groupes ont des dispersions comparables, ce qui justifie de les fondre en un $s^2$ commun.

:::pitfall
Si les variances sont franchement différentes, le calcul du $s^2$ commun n'est plus légitime : on emploie alors une variante (test de Welch) qui n'agrège pas les variances et ajuste les degrés de liberté. Vérifier l'égalité des variances **avant** le test $t$ est précisément le rôle du test $F$ (chapitre B-6). Et n'oubliez pas la condition la plus élémentaire : le test compare des **groupes indépendants** — pour des mesures appariées, c'est le test des couples (B-5) qu'il faut.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le test $t$ compare l'**écart des moyennes** au **bruit** attendu : $t = (\bar{x}_1 - \bar{x}_2)/s_d$.
- $s_d$ est l'erreur-standard de la différence, bâtie sur une **variance commune** $s^2$ pondérée par les degrés de liberté.
- On compare $|t|$ à la **table de Student** à $\nu = n_1 + n_2 - 2$ degrés de liberté ; le seuil tend vers 1,96 pour $n$ grand.
- Conditions : **indépendance**, **normalité** (souple si $n$ grand), **égalité des variances**.
- Variances inégales → test de Welch ; données appariées → test des couples (B-5), pas le $t$ à deux échantillons.
<!-- /step -->
