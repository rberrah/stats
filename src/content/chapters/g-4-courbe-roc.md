---
id: "g-4-courbe-roc"
slug: "g-4-courbe-roc"
title: "La courbe ROC et le choix d'un seuil"
description: "Comment le seuil arbitre entre sensibilité et spécificité, ce que trace la courbe ROC, et ce que mesure l'aire sous la courbe (AUC)."
track: "section-G"
order: 64
duration: "13 min"
programItem: "G-4"
tags: ["courbe ROC", "AUC", "seuil", "sensibilité", "spécificité"]
level: "intermediate"
sources: ["hanley-mcneil-1982", "deeks-altman-lr", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Sur une échelle continue, abaisser le seuil de positivité a pour effet de :"
    options:
      - "augmenter la sensibilité et diminuer la spécificité"
      - "augmenter à la fois la sensibilité et la spécificité"
      - "diminuer la sensibilité et augmenter la spécificité"
    correct: 0
  - prompt: "Une aire sous la courbe ROC (AUC) de 0,5 correspond à :"
    options:
      - "un test parfait"
      - "un test qui ne fait pas mieux que le hasard"
      - "un test très spécifique"
    correct: 1
  - prompt: "Pour un test de dépistage d'une maladie grave et curable, on choisira plutôt un seuil qui privilégie :"
    options:
      - "la spécificité, pour limiter les faux positifs"
      - "la sensibilité, pour ne manquer aucun malade"
      - "ni l'une ni l'autre, le seuil n'a pas d'importance"
    correct: 1
---

<!-- step:title="Un seuil à placer sur une échelle continue" -->
Beaucoup de tests ne sont pas « positif / négatif » par nature : ils mesurent une **grandeur continue** — une concentration sanguine, un score, une glycémie. Pour décider, il faut fixer un **seuil** : au-dessus, « positif » ; en dessous, « négatif ».

Le problème est que les malades et les sains ne sont pas parfaitement séparés : leurs distributions se **chevauchent**. Imaginons un marqueur sanguin dont la valeur est en moyenne plus élevée chez les malades, mais avec une zone de recouvrement où l'on trouve les deux.

Où placer la barre ? Tout seuil est un compromis, car chaque déplacement améliore une qualité au détriment de l'autre. La courbe ROC est l'outil qui rend visible ce compromis.
<!-- /step -->

<!-- step:title="Déplacer le seuil : Se contre Sp" -->
Suivons les effets d'un déplacement du seuil.

- **Seuil bas** : on déclare positif au moindre signe. On attrape presque tous les malades (**Se élevée**), mais on classe aussi beaucoup de sains en positifs (**Sp faible**, beaucoup de faux positifs).
- **Seuil haut** : on n'est positif qu'en cas de valeur franchement anormale. On rassure à juste titre les sains (**Sp élevée**), mais on rate des malades aux valeurs modérées (**Se faible**).

Un mini-tableau sur notre marqueur illustre l'arbitrage :

| Seuil | Sensibilité | Spécificité |
|---|---|---|
| Bas (2,0) | 98 % | 55 % |
| Moyen (3,5) | 88 % | 85 % |
| Haut (5,0) | 60 % | 97 % |

On ne peut pas maximiser les deux à la fois : gagner en Se coûte de la Sp, et réciproquement. Le bon seuil dépend de ce que l'on redoute le plus.
<!-- /step -->

<!-- step:title="La courbe ROC" viz="CourbeROC" -->
:::howto
**Comment lire le schéma.** Chaque point de la courbe correspond à **un seuil** : en abscisse le taux de faux positifs ($1 - \text{Sp}$), en ordonnée la sensibilité ($\text{Se}$). Déplacez le seuil : le point glisse le long de la courbe. En bas à gauche, seuil haut (peu de positifs) ; en haut à droite, seuil bas (beaucoup de positifs). La diagonale représente un test sans valeur.
:::

La **courbe ROC** (Receiver Operating Characteristic) balaie tous les seuils possibles et trace, pour chacun, la sensibilité en fonction du taux de faux positifs. Elle résume d'un seul trait le comportement du test sur toute la plage de décision.

Plus la courbe **se rapproche du coin supérieur gauche** (Se = 100 %, faux positifs = 0), meilleur est le test. Une courbe collée à la diagonale traduit un test qui ne distingue pas mieux que le tirage à pile ou face.
<!-- /step -->

<!-- step:title="L'aire sous la courbe (AUC)" -->
Pour résumer la courbe en un seul chiffre, on mesure l'**aire sous la courbe** (AUC, *area under the curve*), comprise entre 0,5 et 1.

$$\text{AUC} = 0{,}5 \ \Rightarrow \text{ test inutile (hasard)} \qquad \text{AUC} = 1 \ \Rightarrow \text{ test parfait}$$

L'AUC a une interprétation élégante : c'est la **probabilité que le test attribue une valeur plus élevée à un malade tiré au hasard qu'à un sain tiré au hasard**. Une AUC de 0,85 signifie que, dans 85 % des paires (un malade, un sain), le malade a bien la valeur la plus haute.

Repères courants : AUC $< 0{,}7$ médiocre, $0{,}7$–$0{,}8$ acceptable, $0{,}8$–$0{,}9$ bonne, $> 0{,}9$ excellente. Atout majeur : l'AUC ne dépend **d'aucun seuil** ni de la prévalence — elle mesure le pouvoir discriminant *global* du test, ce qui permet de comparer deux tests entre eux d'un coup d'œil.

:::pitfall
Une belle AUC ne dispense **pas** de choisir un seuil. Deux tests peuvent avoir la même AUC tout en étant préférables dans des zones différentes de la courbe. Et un test à forte AUC peut rester peu utile en pratique si aucun seuil n'offre simultanément la Se et la Sp requises par la clinique.
:::
<!-- /step -->

<!-- step:title="Choisir le seuil selon le contexte clinique" -->
Le seuil optimal n'est pas une propriété mathématique : il dépend du **coût relatif** des deux erreurs.

- **Maladie grave, curable, que l'on ne veut pas manquer** (dépistage d'un cancer, embolie pulmonaire) : on privilégie la **sensibilité**. Un faux positif entraîne un examen de confirmation, désagréable mais réparable ; un faux négatif peut être fatal. Seuil bas.
- **Décision lourde et irréversible** (chirurgie mutilante, traitement toxique) : on privilégie la **spécificité**, pour ne pas traiter un sujet sain. Seuil haut.

Quand aucune erreur ne prime, un compromis équilibré consiste à choisir le seuil qui maximise l'**indice de Youden** :

$$J = \text{Se} + \text{Sp} - 1$$

C'est le point de la courbe ROC le plus éloigné de la diagonale. Sur notre tableau, le seuil moyen (Se 88 %, Sp 85 %) donne $J = 0{,}73$, meilleur que le seuil bas ($0{,}53$) ou haut ($0{,}57$) — un bon compromis quand le contexte ne penche ni d'un côté ni de l'autre.
<!-- /step -->

<!-- step:title="À retenir" -->
- Pour un test à mesure continue, le **seuil** arbitre entre sensibilité et spécificité : les augmenter simultanément est impossible.
- **Seuil bas** → Se élevée, Sp faible (beaucoup de faux positifs) ; **seuil haut** → l'inverse.
- La **courbe ROC** trace Se en fonction du taux de faux positifs ($1-\text{Sp}$) pour tous les seuils ; plus elle monte vers le coin supérieur gauche, meilleur est le test.
- L'**AUC** (0,5 = hasard, 1 = parfait) mesure le pouvoir discriminant global, indépendamment du seuil et de la prévalence.
- Le **choix du seuil est clinique** : privilégier la Se pour ne rien manquer, la Sp pour éviter les décisions lourdes à tort ; à défaut, maximiser $J = \text{Se} + \text{Sp} - 1$.
<!-- /step -->
