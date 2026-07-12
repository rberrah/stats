---
id: "b-8-plans-experience"
slug: "b-8-plans-experience"
title: "Plans d'expérience à plusieurs facteurs"
description: "Étudier plusieurs facteurs à la fois : plans factoriels, notion d'interaction, et pourquoi ils battent l'étude un facteur à la fois."
track: "section-B"
order: 28
duration: "13 min"
programItem: "B-8"
tags: ["plans d'expérience", "facteurs", "interaction", "plan factoriel"]
level: "advanced"
sources: ["fisher-1925", "armitage-berry", "schwartz", "consort"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Qu'est-ce qu'une interaction entre deux facteurs ?"
    options:
      - "Le fait que les deux facteurs soient mesurés sur les mêmes sujets."
      - "Le fait que l'effet d'un facteur dépende du niveau de l'autre facteur."
      - "Le fait que les deux facteurs aient le même effet."
    correct: 1
  - prompt: "Quel est l'avantage d'un plan factoriel (croiser les facteurs) par rapport à l'étude d'un seul facteur à la fois ?"
    options:
      - "Il évite d'avoir à calculer des moyennes."
      - "Il est toujours plus rapide même avec beaucoup de facteurs."
      - "Il estime les effets de chaque facteur ET leurs interactions, avec un meilleur rendement des sujets."
    correct: 2
---

<!-- step:title="La vraie vie a plusieurs facteurs" -->
Jusqu'ici, un seul facteur variait (la dose, le traitement). Mais un résultat biologique dépend souvent de **plusieurs facteurs simultanément**. L'efficacité d'un antibiotique dépend de la **dose**, mais peut-être aussi du **moment de prise** (à jeun ou au repas). Un rendement enzymatique dépend de la **température** et du **pH**.

Comment organiser une expérience pour démêler ces influences croisées ? C'est l'objet des **plans d'expérience**. Un plan bien conçu extrait le maximum d'information du minimum de sujets — et révèle des phénomènes qu'une expérience naïve laisserait invisibles.
<!-- /step -->

<!-- step:title="Le vocabulaire de base" -->
Fixons trois mots :

- **Facteur** : une variable que l'expérimentateur fait varier (la dose, la température, le sexe…).
- **Niveau** ou **modalité** : les valeurs prises par un facteur (dose = faible / forte ; repas = à jeun / nourri).
- **Effet** : de combien la réponse change quand on passe d'un niveau à l'autre d'un facteur.

Un plan à deux facteurs, ayant chacun deux niveaux, est un plan « **2 × 2** » : quatre combinaisons de conditions à tester. Trois facteurs à deux niveaux donnent un plan « 2 × 2 × 2 », soit huit combinaisons.
<!-- /step -->

<!-- step:title="L'idée-clé : l'interaction" -->
Le concept qui justifie à lui seul les plans à plusieurs facteurs est l'**interaction**.

:::key
Il y a **interaction** lorsque l'effet d'un facteur **dépend du niveau de l'autre**. Autrement dit, les facteurs ne s'additionnent pas simplement : ils se modifient mutuellement.
:::

Exemple parlant. Un antibiotique gagne 5 points d'efficacité quand on double la dose *chez le patient à jeun* — mais seulement 1 point *chez le patient nourri*. L'effet de la dose **n'est pas le même** selon l'état digestif : dose et repas **interagissent**.

Sans interaction, les effets sont **additifs** : l'effet de la dose est le même quel que soit le repas, on peut les étudier séparément. Avec interaction, étudier un facteur en ignorant l'autre donne une image fausse — la moyenne masque le fait que la réponse change de nature selon le contexte.
<!-- /step -->

<!-- step:title="Pourquoi croiser les facteurs (plan factoriel)" -->
Deux stratégies s'opposent pour étudier deux facteurs.

**Un facteur à la fois** : on fixe le repas « à jeun », on fait varier la dose ; puis on fixe la dose et on fait varier le repas. Simple, mais **on ne teste jamais les combinaisons croisées** — impossible de voir une interaction, et les sujets d'une phase ne servent pas à l'autre.

**Plan factoriel** : on teste **toutes les combinaisons** des niveaux (les 4 cases du 2 × 2). Trois bénéfices majeurs :

1. On estime l'effet de **chaque** facteur.
2. On estime leur **interaction** — impossible autrement.
3. **Meilleur rendement** : chaque sujet contribue à l'estimation des deux effets à la fois. Pour une précision donnée, un plan factoriel demande moins de sujets que deux études séparées.
<!-- /step -->

<!-- step:title="Un mini-exemple 2 × 2" -->
Réponse moyenne (score d'efficacité) d'un antibiotique. Facteurs : dose (faible/forte) et prise (à jeun/nourri).

| | À jeun | Nourri |
|---|---|---|
| **Dose faible** | 20 | 19 |
| **Dose forte** | 30 | 24 |

Lisons les effets :

- Effet de la dose à jeun : $30 - 20 = 10$.
- Effet de la dose nourri : $24 - 19 = 5$.

Ces deux effets diffèrent (10 contre 5) : c'est le signe d'une **interaction** dose × prise. La dose est plus efficace à jeun. Un plan « un facteur à la fois » aurait rapporté un unique « effet dose » moyen (~7,5) en cachant totalement ce contraste cliniquement essentiel.

L'analyse de la variance à deux facteurs (extension de B-7) fournit un test $F$ **pour chaque facteur** et un test $F$ **pour l'interaction**, quantifiant la part de variabilité imputable à chacun.
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Deux écueils symétriques. D'un côté, **conclure sur un facteur en présence d'une interaction forte** : dire « la forte dose est meilleure » est trompeur si ce n'est vrai qu'à jeun. Toujours examiner l'interaction **avant** d'interpréter les effets principaux. De l'autre côté, l'**explosion combinatoire** : 5 facteurs à 3 niveaux, c'est déjà $3^5 = 243$ conditions. Au-delà de quelques facteurs, on recourt à des plans **fractionnaires**, qui ne testent qu'une fraction bien choisie des combinaisons.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Un **facteur** est une variable contrôlée ; ses valeurs sont ses **niveaux** ; son **effet** est la variation de réponse qu'il induit.
- **Interaction** : l'effet d'un facteur **dépend du niveau** d'un autre facteur (les effets ne sont pas additifs).
- Un **plan factoriel** teste toutes les combinaisons de niveaux : il estime chaque effet **et** les interactions, avec un meilleur rendement des sujets qu'une étude « un facteur à la fois ».
- L'ANOVA à plusieurs facteurs donne un test $F$ par facteur **et** un test $F$ pour l'interaction.
- Pièges : interpréter un effet principal en ignorant une interaction ; l'explosion du nombre de conditions (→ plans fractionnaires).
<!-- /step -->
