---
id: "f-2-population-echantillon"
slug: "f-2-population-echantillon"
title: "Population et échantillon : le schéma de l'urne"
description: "La population qu'on veut connaître, l'échantillon qu'on observe, et le tirage au sort qui relie les deux : le modèle fondateur de l'inférence."
track: "section-F"
order: 2
duration: "10 min"
programItem: "F-2"
tags: ["population", "échantillon", "paramètre", "estimation", "urne"]
level: "beginner"
sources: ["schwartz", "altman", "bouyer", "sackett-bias"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Dans le vocabulaire statistique, la vraie proportion de porteurs d'un gène dans toute la population française est :"
    options:
      - "Un paramètre : une valeur fixe mais inconnue"
      - "Une estimation : elle change à chaque échantillon"
      - "Une variable aléatoire sans valeur définie"
    correct: 0
  - prompt: "Pourquoi le tirage au sort de l'échantillon est-il si important ?"
    options:
      - "Il garantit que l'échantillon soit représentatif et rend le hasard calculable"
      - "Il permet d'obtenir un échantillon de très grande taille"
      - "Il supprime la variabilité biologique entre individus"
    correct: 0
---

<!-- step:title="On veut connaître un tout, on n'observe qu'une partie" -->
Vous voulez savoir quelle proportion de nouveau-nés d'une région porte un certain variant génétique. L'idéal serait de tester *tous* les nouveau-nés. Impossible : ils sont trop nombreux, certains ne sont pas encore nés, d'autres naîtront demain.

Vous êtes donc condamné à observer un **échantillon** : disons 200 nouveau-nés. Et à partir de ces 200, vous voulez parler des dizaines de milliers que vous ne verrez jamais.

C'est le cœur de la statistique inférentielle : **remonter du particulier au général**, de la poignée observée à la totalité voulue. Tout le problème est que cette poignée ne dit pas exactement la même chose que le tout.
<!-- /step -->

<!-- step:title="Population et échantillon : deux mondes à ne pas confondre" -->
Fixons le vocabulaire, car toute la suite en dépend.

- La **population** est l'ensemble de *tous* les individus concernés par la question. Elle est souvent immense, parfois infinie ou même hypothétique (tous les patients qui pourraient un jour recevoir ce traitement). On ne la voit jamais en entier.
- L'**échantillon** est le sous-ensemble réellement observé. C'est le seul que l'on mesure.

À chacun son chiffre :

- Le **paramètre** décrit la population. C'est une valeur **fixe mais inconnue** : par exemple la vraie proportion $p$ de porteurs du variant. Elle existe, elle a une valeur précise, mais nous l'ignorons.
- L'**estimation** décrit l'échantillon. C'est la proportion observée $\hat{p}$, par exemple 24 porteurs sur 200, soit $\hat{p} = 0{,}12$. Elle est **connue mais variable** : un autre échantillon de 200 donnerait un autre chiffre.

:::key
Le paramètre ($p$) est fixe et inconnu ; l'estimation ($\hat{p}$) est connue et fluctuante. Tout l'art de l'inférence consiste à ce que le chiffre variable qu'on possède nous renseigne sur le chiffre fixe qu'on cherche.
:::
<!-- /step -->

<!-- step:title="Le schéma de l'urne" -->
Pour raisonner sans se perdre, remplaçons la population par une image simple et calculable : une **urne**.

Imaginez une urne géante contenant des milliers de boules. Une fraction $p$ d'entre elles est rouge (les porteurs du variant), le reste est blanche. La proportion $p$ est fixée une fois pour toutes, mais vous ne pouvez pas ouvrir l'urne pour la compter.

Ce que vous faites : plonger la main et **tirer au sort** 200 boules. Vous comptez les rouges : 24. Votre estimation est $\hat{p} = 24/200 = 0{,}12$.

Recommencez : reposez les boules, mélangez, tirez à nouveau 200 boules. Vous trouverez peut-être 27 rouges, puis 21, puis 30… Chaque tirage donne un $\hat{p}$ un peu différent, alors que le vrai $p$ n'a pas bougé d'un pouce. Cette danse des $\hat{p}$ autour de $p$ porte un nom : la **fluctuation d'échantillonnage**.

:::note
L'urne est un *modèle*, pas la réalité. Mais c'est un modèle si fidèle qu'il permet de calculer exactement comment $\hat{p}$ fluctue autour de $p$. C'est ce calcul qui rend la statistique possible.
:::
<!-- /step -->

<!-- step:title="Mesurer la fluctuation : l'écart-réduit" viz="EcartReduit" -->
Comment un échantillon peut-il s'écarter du vrai $p$ ? La théorie de l'urne répond précisément. Si la vraie proportion est $p$ et qu'on tire $n$ boules, l'estimation $\hat{p}$ fluctue autour de $p$ avec un écart-type caractéristique appelé **erreur standard** :

$$\sigma_{\hat{p}} = \sqrt{\dfrac{p\,(1-p)}{n}}$$

Avec $p = 0{,}12$ et $n = 200$ : $\sigma_{\hat{p}} = \sqrt{0{,}12 \times 0{,}88 / 200} \approx 0{,}023$, soit 2,3 points de pourcentage.

Pour juger si un échantillon est « loin » ou « près » du vrai $p$, on ramène son écart à cette unité naturelle : c'est l'**écart-réduit** (ou variable centrée réduite)

$$z = \dfrac{\hat{p} - p}{\sigma_{\hat{p}}}$$

Un $z$ de 0 signifie « pile sur la cible » ; un $z$ de 2 signifie « à deux erreurs standard de la cible », ce qui est déjà rare. Cet écart-réduit est l'outil qui, dans toute la partie A, transformera une différence brute en jugement sur le hasard.

:::recall
Une valeur d'écart-réduit compare toujours un écart observé à la fluctuation attendue *par pur hasard*. C'est le même réflexe que pour un score standardisé : « combien d'écarts-types me sépare de ce que le hasard prédisait ? »
:::
<!-- /step -->

<!-- step:title="Représentativité : le tirage au sort n'est pas un détail" -->
Toute la mécanique de l'urne repose sur une condition : chaque individu de la population doit avoir la **même chance** d'entrer dans l'échantillon. C'est le **tirage au sort**, ou échantillonnage aléatoire.

S'il est respecté, l'échantillon est *représentatif* et le hasard devient calculable. S'il est violé, l'estimation se met à mentir de façon systématique — et aucune formule ne pourra rattraper le biais.

:::pitfall
Le **biais de sélection**. Enquêter sur la consommation de tabac en interrogeant les gens à la sortie d'un bureau de tabac : l'échantillon n'est pas tiré au sort, il surreprésente les fumeurs. On observera un $\hat{p}$ énorme, non parce que la population fume beaucoup, mais parce que le recrutement était tordu. Un grand échantillon mal tiré est *pire* qu'un petit échantillon bien tiré : il donne une fausse précision à un chiffre faux.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- On veut connaître une **population** (le tout, souvent inaccessible) à partir d'un **échantillon** (la partie observée).
- Le **paramètre** ($p$, $\mu$…) décrit la population : fixe mais inconnu. L'**estimation** ($\hat{p}$, $\bar{x}$…) décrit l'échantillon : connue mais fluctuante.
- Le **schéma de l'urne** modélise ce lien : tirer au sort $n$ boules dans une urne de proportion $p$ inconnue. Chaque tirage donne un $\hat{p}$ différent : c'est la **fluctuation d'échantillonnage**.
- Cette fluctuation se mesure par l'**erreur standard** $\sigma_{\hat{p}} = \sqrt{p(1-p)/n}$, et se juge par l'**écart-réduit** $z = (\hat{p}-p)/\sigma_{\hat{p}}$. Elle diminue quand $n$ augmente.
- Tout repose sur le **tirage au sort** : sans lui, l'échantillon n'est pas représentatif et l'estimation est biaisée. Un grand échantillon mal tiré ne vaut rien.
<!-- /step -->
