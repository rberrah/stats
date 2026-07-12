---
id: "g-6-biais"
slug: "g-6-biais"
title: "Les biais : sélection, classement, confusion"
description: "Un biais est une erreur systématique, distincte de la fluctuation aléatoire ; savoir reconnaître les trois grandes familles et les moyens de les contrôler."
track: "section-G"
order: 66
duration: "13 min"
programItem: "G-6"
tags: ["biais", "confusion", "sélection", "classement", "validité interne"]
level: "intermediate"
sources: ["sackett-bias", "rothman", "bouyer", "hill-criteria"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Quelle est la différence fondamentale entre un biais et un manque de puissance ?"
    options:
      - "Le biais est une erreur systématique qui persiste même sur un grand échantillon ; le manque de puissance est une erreur aléatoire qui se corrige en augmentant l'effectif."
      - "Le biais concerne les études cas-témoins, le manque de puissance les cohortes."
      - "Ce sont deux mots pour désigner la même chose."
    correct: 0
  - prompt: "Dans l'exemple « café et cancer du poumon », le tabac agit comme :"
    options:
      - "un biais de classement"
      - "un facteur de confusion"
      - "un biais de sélection"
    correct: 1
  - prompt: "Quel dispositif permet, en moyenne, de neutraliser aussi les facteurs de confusion inconnus ?"
    options:
      - "l'appariement"
      - "l'ajustement statistique"
      - "la randomisation"
    correct: 2
---

<!-- step:title="Erreur systématique ou hasard ?" -->
Quand une étude se trompe, il y a deux façons très différentes de se tromper.

La première est le **hasard** : votre échantillon, par malchance, ne ressemble pas tout à fait à la population. Cette erreur est **aléatoire**, imprévisible dans son sens, et surtout elle **diminue quand l'effectif augmente**. C'est le domaine des intervalles de confiance et des tests.

La seconde est le **biais** : une faille dans la manière de recruter, de mesurer ou d'analyser, qui pousse le résultat **toujours dans le même sens**. Un biais est une **erreur systématique**. Doubler l'échantillon ne le corrige pas — cela ne fait qu'estimer plus précisément un chiffre faux.

:::key
Le hasard disperse les résultats autour de la vérité ; le biais **décale** la vérité elle-même. Un grand échantillon combat le hasard, jamais le biais.
:::
<!-- /step -->

<!-- step:title="Le biais de sélection" -->
Il naît de la façon dont les sujets **entrent** dans l'étude (ou en **sortent**). Si les personnes analysées ne représentent pas la population visée, la comparaison est faussée avant même la première mesure.

Exemple original. On veut estimer la gravité d'une grippe saisonnière et l'on ne recrute que des patients **hospitalisés**. On conclut à une létalité de 8 %. Mais les formes bénignes, restées chez elles, ne sont jamais entrées dans l'étude : la sélection sur l'hospitalisation a mécaniquement **gonflé** la gravité apparente.

Autre visage fréquent : le **biais de survie**. On analyse les dossiers de patients « toujours suivis » à 5 ans dans un service ; ceux qui sont décédés ou perdus de vue ont disparu des données, ce qui embellit artificiellement le pronostic.
<!-- /step -->

<!-- step:title="Le biais de classement (information)" -->
Ici les sujets sont bien choisis, mais **mal mesurés** : l'exposition ou la maladie est classée avec erreur. On l'appelle aussi biais d'**information**.

Cas typique en étude cas-témoins, le **biais de mémorisation** : une mère dont l'enfant est malade se remémore plus intensément ses prises de médicaments pendant la grossesse qu'une mère dont l'enfant va bien. L'exposition passée est donc mieux « déclarée » chez les cas que chez les témoins — un écart artificiel apparaît.

On distingue deux régimes :

- Erreur de classement **non différentielle** (identique dans les deux groupes) : elle tend à **diluer** l'association, à rapprocher la mesure de « pas d'effet ».
- Erreur de classement **différentielle** (inégale selon le groupe) : elle peut fabriquer une association qui n'existe pas, ou en masquer une réelle.
<!-- /step -->

<!-- step:title="Le facteur de confusion" -->
C'est le plus subtil. Un **facteur de confusion** est une variable liée **à la fois** à l'exposition étudiée et à la maladie, sans être sur le chemin causal entre les deux. Il crée une association **trompeuse**.

L'exemple d'école : le **café** semble associé au **cancer du poumon**. Faut-il incriminer le café ? Non : les gros buveurs de café **fument** davantage, et c'est le **tabac** qui cause le cancer. Le tabac est lié au café (habitudes communes) et à la maladie (cause réelle) : il **confond** la relation.

Un chiffre pour fixer les idées. Imaginons un risque de cancer de 20 pour 1 000 chez les buveurs de café contre 5 pour 1 000 chez les non-buveurs, soit un risque relatif brut de **4**. Si l'on regarde **à tabagisme égal** — fumeurs entre eux, non-fumeurs entre eux — l'écart s'effondre à un risque relatif proche de **1** : l'association café–cancer n'était qu'une ombre projetée par le tabac.

:::pitfall
Un facteur de confusion n'est pas une erreur de mesure ni de recrutement : les données sont **exactes**. C'est leur **interprétation causale** qui est piégée. D'où l'adage : corrélation n'est pas causalité.
:::
<!-- /step -->

<!-- step:title="Comment on contrôle les biais" -->
Chaque famille appelle des parades, à deux moments : la **conception** de l'étude et l'**analyse**.

- **Randomisation** (à la conception). Tirer au sort l'attribution du traitement équilibre les groupes sur **tous** les facteurs de confusion — y compris ceux qu'on ne connaît pas. C'est l'arme décisive de l'essai contrôlé, et la seule qui neutralise l'**inconnu**.
- **Appariement** (à la conception). On associe à chaque cas un témoin de même âge, même sexe, même statut tabagique. On neutralise ainsi les facteurs choisis, mais **seulement ceux-là**.
- **Ajustement statistique** (à l'analyse). On mesure le facteur de confusion et on le neutralise par une analyse **stratifiée** ou un **modèle multivarié** (régression logistique en G-10, modèle de Cox en G-9). On ne peut ajuster que sur ce que l'on a **mesuré**.
- Contre le biais de classement : mesures **standardisées**, définitions objectives, évaluation en **aveugle**.
- Contre le biais de sélection : critères d'inclusion clairs, recrutement **exhaustif**, chasse aux perdus de vue.
<!-- /step -->

<!-- step:title="Biais et puissance : ne pas confondre les deux maux" -->
Une étude peut échouer de deux manières indépendantes, et le remède n'est pas le même.

Une étude **manquant de puissance** (effectif trop faible, chapitre F-4) risque de **ne pas détecter** un effet réel : son intervalle de confiance est large, mais **centré au bon endroit**. Ajouter des patients règle le problème.

Une étude **biaisée** vise **à côté de la cible** : son intervalle de confiance peut être étroit et rassurant, tout en entourant une **valeur fausse**. Ajouter des patients ne fait qu'aggraver l'illusion de précision.

:::note
On résume souvent par une image : la puissance concerne la **taille** de la cible touchée, le biais concerne son **emplacement**. Un tireur biaisé groupe ses tirs — loin du centre.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Un **biais** est une erreur **systématique** ; il persiste et se renforce quand l'échantillon grandit, contrairement au **hasard**.
- **Sélection** : erreur d'entrée/sortie des sujets. **Classement (information)** : erreur de mesure de l'exposition ou de la maladie.
- **Confusion** : une tierce variable liée à l'exposition et à la maladie (café–cancer confondu par le **tabac**) fabrique une association trompeuse.
- Contrôle : **randomisation** (neutralise même l'inconnu), **appariement** et **ajustement** (seulement le connu et mesuré), mesures en aveugle, recrutement exhaustif.
- **Biais ≠ manque de puissance** : le premier décale la vérité, le second l'estime imprécisément. Plus de patients corrige le second, jamais le premier.
<!-- /step -->
