---
id: "f-1-variabilite"
slug: "f-1-variabilite"
title: "La variabilité du vivant : pourquoi la statistique"
description: "Pourquoi deux mesures biologiques ne sont jamais identiques, et comment la statistique transforme cette variabilité en outil de décision."
track: "section-F"
order: 1
duration: "9 min"
programItem: "F-1"
tags: ["variabilité", "mesure", "échantillonnage", "incertitude"]
quiz:
  - prompt: "Vous dosez deux fois de suite le même tube de sérum et trouvez 4,9 puis 5,1 mmol/L. À quelle source de variabilité attribuez-vous surtout cet écart ?"
    options:
      - "La variabilité de mesure (imprécision de la technique)"
      - "La variabilité biologique entre individus"
      - "La variabilité d'échantillonnage"
    correct: 0
  - prompt: "Quelle phrase décrit le mieux le rôle de la statistique en biologie ?"
    options:
      - "Décider sous incertitude en quantifiant le risque de se tromper"
      - "Supprimer la variabilité des mesures biologiques"
      - "Prouver avec certitude qu'une hypothèse est vraie"
    correct: 0
---

<!-- step:title="Deux mesures ne sont jamais identiques" -->
Prélevez le sang de dix étudiants en bonne santé un lundi matin et dosez leur glycémie à jeun. Vous n'obtiendrez jamais dix fois la même valeur. Peut-être 4,6 ; 5,2 ; 4,9 ; 5,5 ; 4,8 mmol/L… Les chiffres dansent autour d'un niveau central sans jamais s'y poser exactement.

Ce n'est pas un défaut de votre travail. C'est la signature du vivant : il **varie**. Un biologiste qui attend des mesures identiques se trompe de métier. Celui qui apprend à *lire* cette variation, lui, fait de la statistique.

L'idée directrice de toute cette partie : puisque le hasard est présent dans chaque mesure, on ne peut pas conclure « à l'œil ». Il faut une méthode pour distinguer ce qui relève d'une vraie différence de ce qui n'est qu'un caprice du hasard.
<!-- /step -->

<!-- step:title="Trois sources de variation à ne pas confondre" -->
Reprenons nos dosages. L'écart entre deux chiffres peut avoir trois origines très différentes, et les mélanger est la première grande erreur du débutant.

**1. La variabilité biologique.** Deux individus diffèrent vraiment : âge, alimentation, génétique, rythme de sommeil. Même un seul individu change d'une heure à l'autre. Cette variation-là est *réelle*, elle appartient au sujet.

**2. La variabilité de mesure.** Redosez *le même tube* deux fois : 4,9 puis 5,1 mmol/L. Le sujet n'a pas bougé, pourtant les chiffres diffèrent. En cause : l'appareil, le réactif, la main de l'opérateur. Cette variation est *parasite*, on cherche à la réduire.

**3. La variabilité d'échantillonnage.** Vos dix étudiants ne sont qu'un petit groupe tiré parmi des milliers. Un autre groupe de dix donnerait une autre moyenne. Cette variation-là naît du simple fait qu'on observe *une partie* et non le tout.

:::pitfall
Attribuer à une « vraie » différence biologique un écart qui n'est en réalité que de l'imprécision de mesure ou du hasard d'échantillonnage. Avant d'interpréter un résultat, demandez-vous toujours : *d'où vient cet écart ?*
:::
<!-- /step -->

<!-- step:title="Un mini-exemple chiffré" -->
Un laboratoire compare un nouveau réactif de dosage du cholestérol à l'ancien. Sur un même pool de sérum de référence (dont la vraie valeur est fixe), on obtient :

- Ancien réactif, 5 dosages : 2,00 ; 2,04 ; 1,97 ; 2,03 ; 1,96 g/L.
- Nouveau réactif, 5 dosages : 1,88 ; 2,15 ; 1,95 ; 2,10 ; 1,92 g/L.

Les deux moyennes sont quasi identiques (environ 2,00 g/L). Pourtant les deux réactifs ne se valent pas : les valeurs du nouveau sont **plus dispersées**. Comme le sérum est le même tube, cette dispersion supplémentaire est de la pure variabilité de mesure : le nouveau réactif est moins *précis*.

On mesure cette dispersion par l'**écart-type** $s$, qui résume l'éloignement typique des valeurs à leur moyenne $\bar{x}$ :

$$s = \sqrt{\dfrac{1}{n-1}\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2}$$

Ici $s_{\text{ancien}} \approx 0{,}035$ g/L contre $s_{\text{nouveau}} \approx 0{,}12$ g/L. Même moyenne, mais une précision trois fois moindre : la statistique rend visible ce que l'œil aurait manqué.
<!-- /step -->

<!-- step:title="La statistique : décider sans certitude" -->
Puisque le hasard brouille chaque mesure, aucune expérience biologique ne « prouve » quoi que ce soit au sens mathématique. On ne peut jamais être *certain*. Mais on peut être **raisonnablement sûr**, et surtout mesurer *à quel point*.

C'est exactement le rôle de la statistique : ce n'est pas la science qui supprime le hasard, c'est la science qui **décide malgré lui**, en attachant à chaque conclusion un risque d'erreur chiffré.

:::key
La variabilité n'est pas l'ennemie du biologiste : c'est sa matière première. La statistique ne l'efface pas, elle la *modélise* pour transformer des données bruitées en décisions dont on connaît le risque.
:::

Dans les chapitres suivants, nous verrons comment ce raisonnement se met en place : d'abord le modèle population/échantillon (l'urne), puis l'idée de *parier* sur une hypothèse, enfin les deux façons de se tromper.
<!-- /step -->

<!-- step:title="Piège classique : confondre précision et exactitude" -->
Deux mots que le langage courant confond, mais que la biologie médicale sépare soigneusement.

- **L'exactitude** (justesse) : la moyenne des mesures tombe-t-elle sur la vraie valeur ? Un appareil qui affiche toujours 4,5 alors que la vraie glycémie est 5,0 est *inexact* : il est biaisé.
- **La précision** (fidélité) : les mesures répétées sont-elles serrées entre elles ? Un appareil qui donne 5,0 ; 5,0 ; 5,1 est *précis*.

:::note
Un appareil peut être précis mais faux (toujours la même erreur), ou exact mais imprécis (juste en moyenne, mais dispersé). Ce sont deux qualités indépendantes. La variabilité de mesure concerne la précision ; le biais concerne l'exactitude.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le vivant **varie** : deux mesures ne sont jamais strictement identiques, c'est la règle, pas l'exception.
- Trois sources de variation à distinguer : **biologique** (réelle, propre au sujet), **de mesure** (parasite, liée à la technique), **d'échantillonnage** (liée au fait d'observer une partie du tout).
- L'**écart-type** $s$ résume la dispersion ; deux séries de même moyenne peuvent avoir des précisions très différentes.
- Ne pas confondre **exactitude** (justesse, absence de biais) et **précision** (fidélité, faible dispersion) : ce sont deux qualités indépendantes.
- La statistique ne supprime pas le hasard : elle **décide sous incertitude** en quantifiant le risque de se tromper. On ne prouve jamais, on parie de façon maîtrisée.
<!-- /step -->
