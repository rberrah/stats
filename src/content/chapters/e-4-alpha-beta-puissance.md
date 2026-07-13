---
id: "e-4-alpha-beta-puissance"
slug: "e-4-alpha-beta-puissance"
title: "α, β, puissance et taille d'échantillon : la synthèse"
description: "Le risque α qu'on fixe, le risque β qui dépend de l'effet et de l'effectif, la puissance qui les relie, et pourquoi « non significatif » ne veut jamais dire « pas de différence »."
track: "section-E"
order: 54
duration: "12 min"
programItem: "E-4"
tags: ["risque alpha", "risque beta", "puissance", "nombre de sujets", "taille d'échantillon"]
level: "intermediate"
sources: ["fisher-1925", "altman-bland-nonsig", "ioannidis-2005", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le risque β (deuxième espèce) dépend de plusieurs facteurs. Lequel N'influence PAS β ?"
    options:
      - "La taille de l'effet réel"
      - "L'effectif de l'échantillon"
      - "La couleur du graphique utilisé"
    correct: 2
  - prompt: "Un essai ne trouve pas de différence significative (p > 0,05) entre deux traitements, mais n'incluait que 12 patients. La conclusion correcte est :"
    options:
      - "Les deux traitements sont équivalents, c'est prouvé"
      - "L'essai manque de puissance : l'absence de preuve n'est pas une preuve d'absence"
      - "Il faut abaisser α pour trouver la différence"
    correct: 1
---

<!-- step:title="Deux façons de se tromper" -->
Chaque fois qu'on conclut un test, on peut se tromper de deux manières opposées. Toute cette synthèse consiste à les nommer, les mesurer, et comprendre ce qui les gouverne.

- **Conclure à une différence qui n'existe pas** : le test « détecte » un effet dû au seul hasard de l'échantillonnage. C'est le **faux positif**, dont le risque se note $\alpha$ (risque de première espèce).
- **Rater une différence qui existe** : l'effet est réel mais le test ne le voit pas. C'est le **faux négatif**, dont le risque se note $\beta$ (risque de deuxième espèce).

Ces deux risques ne se comportent pas du tout de la même façon. L'un se décide, l'autre se subit (en partie). C'est cette asymétrie qu'il faut maîtriser.
<!-- /step -->

<!-- step:title="α : un risque que l'on fixe d'avance" -->
Le risque $\alpha$ a une propriété remarquable : c'est **vous** qui le choisissez, avant l'expérience. Par convention on prend le plus souvent $\alpha = 0{,}05$, soit 5 % de chance de crier au loup à tort.

Ce seuil est un contrat : « je n'accepte de conclure à une différence que si ce que j'observe avait moins de 5 % de chance d'arriver par pur hasard sous l'hypothèse nulle ». C'est pourquoi on rejette l'hypothèse nulle quand $p < \alpha$.

Baisser $\alpha$ (par exemple à 0,01) rend le test plus **prudent** : moins de faux positifs. Mais rien n'est gratuit — nous allons voir que cette prudence se paie en risque de rater les vraies différences.

:::key
$\alpha$ est **fixé a priori** par l'expérimentateur, indépendamment des données. Il ne dépend ni de l'effectif, ni de la taille de l'effet. C'est le seul des deux risques que l'on contrôle directement.
:::
<!-- /step -->

<!-- step:title="β : un risque qui dépend de l'effet et de l'effectif" -->
Le risque $\beta$ est d'une tout autre nature : on ne le fixe pas, il **résulte** de la situation. Trois leviers le commandent :

- **La taille de l'effet réel.** Une grosse différence est facile à détecter → $\beta$ petit. Une différence minuscule se noie dans le bruit → $\beta$ grand. Un effet énorme ne se rate presque jamais ; un effet ténu se rate souvent.
- **L'effectif $n$.** Plus l'échantillon est grand, plus la fluctuation d'échantillonnage est faible, plus une vraie différence ressort → $\beta$ diminue quand $n$ augmente. C'est le levier que l'expérimentateur maîtrise le mieux.
- **Le risque $\alpha$ choisi et la variabilité.** Rendre le test plus prudent (baisser $\alpha$) augmente mécaniquement $\beta$ : les deux risques tirent en sens inverse. Et plus les données sont dispersées (grand écart-type), plus $\beta$ grimpe.

:::pitfall
On ne peut pas écraser $\alpha$ et $\beta$ en même temps à effectif fixé : les diminuer tous deux exige d'**augmenter $n$**. À échantillon constant, gagner en prudence sur les faux positifs, c'est perdre sur les faux négatifs, et réciproquement.
:::
<!-- /step -->

<!-- step:title="Visualiser le jeu des deux risques" viz="RisquesAlphaBeta" -->
Le schéma montre les deux distributions en présence : celle attendue **si l'hypothèse nulle est vraie** (pas de différence) et celle attendue **si la différence réelle existe**. Le seuil de décision, fixé par $\alpha$, sépare la zone où l'on conclut « différence » de celle où l'on conclut « rien ».

Les deux courbes se chevauchent : c'est dans ce recouvrement que naissent les deux erreurs. La queue de la courbe nulle qui déborde au-delà du seuil, c'est $\alpha$. La part de la courbe « effet réel » qui reste en deçà du seuil, c'est $\beta$.

:::howto
**Comment lire le schéma.** Déplacez le seuil : le poussez vers la droite réduit $\alpha$ (moins de faux positifs) mais gonfle $\beta$ (plus de faux négatifs) — les deux zones se déplacent en sens inverse. Éloignez les deux courbes l'une de l'autre (effet plus grand, ou $n$ plus grand qui les affine) : le recouvrement fond, et $\alpha$ comme $\beta$ diminuent ensemble. Vous voyez ainsi *de vos yeux* pourquoi seul un plus grand effet ou un plus grand effectif permet de gagner sur les deux tableaux.
:::
<!-- /step -->

<!-- step:title="La puissance : la capacité à voir ce qui existe" -->
On préfère souvent raisonner sur le complément de $\beta$ : la **puissance**, définie par

$$\text{puissance} = 1 - \beta$$

C'est la probabilité de **détecter** une différence quand elle existe vraiment. Une puissance de 0,80 signifie : « si l'effet est réel, j'ai 80 % de chances de le mettre en évidence » (et donc 20 % de le rater). Par convention, on vise au moins **0,80**, parfois 0,90.

Tout ce qui fait baisser $\beta$ fait monter la puissance : un effet plus grand, un échantillon plus grand, une variabilité plus faible. La puissance est donc la **qualité d'un test à détecter**, et c'est elle qu'on cherche à garantir avant de lancer une étude.

:::note
Une étude peut être « négative » pour deux raisons opposées : soit parce qu'il n'y a réellement rien, soit parce qu'elle était trop faible pour voir quelque chose. Sans puissance suffisante, on ne peut pas distinguer ces deux cas — d'où l'importance de la calculer *avant*.
:::
<!-- /step -->

<!-- step:title="Le nombre de sujets nécessaire" -->
Renversons la logique. Au lieu de subir $\beta$, on décide à l'avance de la puissance voulue et on en **déduit l'effectif** à recruter. C'est le calcul du **nombre de sujets nécessaire (NSN)**, étape obligatoire de tout protocole sérieux.

Pour le lancer, il faut fixer quatre ingrédients :

1. le risque $\alpha$ (souvent 0,05) ;
2. la puissance voulue $1-\beta$ (souvent 0,80) ;
3. la **différence minimale** que l'on juge cliniquement intéressante de détecter ;
4. la **variabilité** attendue (écart-type, estimé par la littérature ou un pré-essai).

L'intuition de la formule : l'effectif nécessaire **augmente** avec la variabilité et avec l'exigence de puissance, mais **s'effondre** quand la différence à détecter est grande. Pour une comparaison de moyennes, $n$ varie comme le carré de l'écart-type divisé par le carré de la différence visée :

$$n \ \propto\ \frac{\sigma^2}{\Delta^2}$$

Traduction concrète : vouloir détecter une différence **deux fois plus petite** exige environ **quatre fois plus** de sujets. C'est pourquoi les petits effets cliniques coûtent des essais gigantesques.

:::key
On ne calcule pas le NSN *après* l'étude pour se rassurer : on le calcule **avant**, pour garantir que l'essai aura la puissance de répondre. Un essai sous-dimensionné est condamné d'avance à l'ambiguïté.
:::
<!-- /step -->

<!-- step:title="« Non significatif » n'est pas « pas de différence »" -->
Voici la confusion la plus lourde de conséquences en lecture d'article, et la synthèse de tout ce chapitre.

Un résultat **non significatif** ($p > \alpha$) signifie seulement : « je n'ai pas réuni assez de preuves pour rejeter l'hypothèse nulle ». Cela ne prouve **pas** que l'hypothèse nulle est vraie. L'absence de preuve n'est pas la preuve de l'absence.

Pourquoi ? Parce qu'un $p$ non significatif peut venir de deux mondes très différents : soit il n'y a réellement aucune différence, soit il y en a une mais l'étude, **trop peu puissante** (effectif trop faible), n'a pas su la voir. Un essai sur 12 patients qui ne « trouve rien » n'a le plus souvent rien trouvé faute d'yeux, pas faute d'objet.

:::pitfall
Conclure « les deux traitements sont équivalents » à partir d'un simple $p > 0{,}05$ est une faute classique. Pour affirmer une **équivalence**, il faut une démarche dédiée (borne d'équivalence, intervalle de confiance étroit autour de la différence) et une puissance suffisante — pas seulement l'échec à trouver une différence.
:::

Le bon réflexe devant un résultat négatif : regarder l'**intervalle de confiance** de la différence et l'**effectif**. Un intervalle large qui englobe des effets cliniquement importants signe un manque de puissance, non une équivalence.
<!-- /step -->

<!-- step:title="À retenir" -->
- Deux erreurs : **faux positif** (risque $\alpha$) et **faux négatif** (risque $\beta$).
- $\alpha$ est **fixé a priori** (souvent 0,05) ; il ne dépend pas des données.
- $\beta$ **dépend** de la taille de l'effet, de l'effectif $n$, de la variabilité et de $\alpha$. À $n$ fixé, $\alpha$ et $\beta$ varient en **sens inverse**.
- La **puissance** $= 1 - \beta$ est la capacité à détecter un effet réel ; on la vise à **0,80** au minimum. On l'augmente surtout en augmentant $n$.
- Le **nombre de sujets nécessaire** se calcule *avant* l'étude à partir de $\alpha$, de la puissance, de la différence à détecter et de la variabilité : $n \propto \sigma^2 / \Delta^2$ (viser un effet deux fois plus petit ≈ quatre fois plus de sujets).
- **« Non significatif » ≠ « pas de différence »** : un résultat négatif peut simplement traduire un **manque de puissance**. L'absence de preuve n'est pas la preuve de l'absence.
<!-- /step -->
