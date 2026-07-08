---
id: "g-5-schemas-etude"
slug: "g-5-schemas-etude"
title: "Schémas d'étude : cohorte, cas-témoins, essai randomisé"
description: "Prospectif ou rétrospectif, quelle mesure de risque chaque schéma autorise, et pourquoi la randomisation seule casse la confusion."
track: "section-G"
order: 65
duration: "14 min"
programItem: "G-5"
tags: ["cohorte", "cas-témoins", "essai randomisé", "facteur de confusion", "niveaux de preuve"]
quiz:
  - prompt: "Dans une étude cas-témoins, on part :"
    options:
      - "de l'exposition, pour observer qui développe la maladie"
      - "de la maladie, pour rechercher l'exposition dans le passé"
      - "d'un tirage au sort du traitement"
    correct: 1
  - prompt: "La mesure de risque directement accessible dans une étude de cohorte est :"
    options:
      - "l'odds ratio uniquement"
      - "le risque relatif"
      - "la valeur prédictive positive"
    correct: 1
  - prompt: "Ce qui distingue fondamentalement l'essai randomisé des études observationnelles est :"
    options:
      - "sa taille d'échantillon plus grande"
      - "le tirage au sort de l'exposition, qui équilibre les facteurs de confusion"
      - "l'absence de groupe témoin"
    correct: 1
---

<!-- step:title="La question dicte le schéma" -->
Toute étude épidémiologique relie une **exposition** (facteur de risque, traitement) à un **événement** (maladie, guérison, décès). Ce qui change d'un schéma à l'autre, c'est le **sens** dans lequel on parcourt cette relation et la façon dont on constitue les groupes.

Deux axes structurent tout :

- **Prospectif** (on part de l'exposition et l'on attend l'événement) contre **rétrospectif** (on part de l'événement et l'on remonte l'exposition passée).
- **Observationnel** (on constate l'exposition telle qu'elle est) contre **expérimental** (on l'attribue par tirage au sort).

Trois grands schémas en découlent : la cohorte, le cas-témoins et l'essai randomisé. Chacun s'impose dans un contexte, et chacun ne donne pas la même mesure de risque.
<!-- /step -->

<!-- step:title="La cohorte : du facteur vers la maladie" -->
Dans une **étude de cohorte**, on sélectionne des sujets selon leur **exposition** (fumeurs vs non-fumeurs), puis on les **suit dans le temps** pour compter qui développe la maladie. Elle est le plus souvent **prospective**.

Comme on connaît la taille de chaque groupe exposé et la survenue des événements, on peut calculer le **risque** dans chaque groupe, donc directement le **risque relatif** (RR) et l'incidence.

$$\text{RR} = \dfrac{\text{risque chez les exposés}}{\text{risque chez les non-exposés}}$$

Ses limites : elle est **longue et coûteuse**, et devient impraticable pour une maladie **rare** (il faudrait suivre des dizaines de milliers de sujets pendant des années pour observer assez de cas). Elle brille au contraire pour une exposition rare ou pour étudier plusieurs maladies à la fois.
<!-- /step -->

<!-- step:title="Le cas-témoins : de la maladie vers le passé" -->
L'**étude cas-témoins** inverse la logique : on recrute des sujets **déjà malades** (les cas) et des sujets sains comparables (les témoins), puis on recherche **rétrospectivement** leur exposition passée.

Comme c'est l'investigateur qui fixe *combien* de cas et de témoins il recrute, la proportion de malades est artificielle : on **ne peut pas** calculer de risque ni de RR. En revanche, le **produit en croix** du tableau reste valide : on calcule un **odds ratio** (OR), qui approche le RR quand la maladie est rare (chapitre G-2).

$$\text{OR} = \dfrac{a \times d}{b \times c}$$

Son grand avantage : c'est le schéma de choix pour les maladies **rares** et il est **rapide et peu coûteux** (pas de suivi). Sa faiblesse : le recueil rétrospectif de l'exposition expose au **biais de mémoire** (un malade se souvient mieux de ses expositions) et au choix délicat des témoins.
<!-- /step -->

<!-- step:title="Le facteur de confusion, ennemi de l'observation" -->
Cohorte et cas-témoins sont **observationnelles** : elles constatent les expositions telles qu'elles se présentent. D'où leur faille commune, le **facteur de confusion** — une variable liée à la fois à l'exposition et à la maladie, qui crée une fausse association.

:::pitfall
Une étude observe que les gros buveurs de café ont plus de cancers du poumon. Le café est-il en cause ? Non : les buveurs de café fument aussi davantage, et c'est le **tabac** — associé au café *et* au cancer — qui explique tout. Le tabac est ici le facteur de confusion. Sans précaution, l'association « café–cancer » n'est qu'un mirage.
:::

On peut tenter de corriger les facteurs de confusion **connus** (appariement, ajustement statistique), mais jamais ceux qu'on **ignore**. C'est la limite de fond de toute étude observationnelle : elle établit des **associations**, difficilement des **causes**.
<!-- /step -->

<!-- step:title="L'essai randomisé : casser la confusion par le hasard" -->
L'**essai randomisé contrôlé** (ECR) est **expérimental** : l'investigateur **attribue le traitement par tirage au sort**. C'est ce détail qui change tout.

En répartissant les sujets au hasard entre le groupe traité et le groupe témoin, la randomisation équilibre en moyenne **tous** les facteurs de confusion entre les groupes — non seulement ceux qu'on connaît (âge, sévérité), mais aussi **ceux qu'on ignore**. Aucune autre méthode ne le permet. Les deux groupes ne diffèrent alors que par le traitement, si bien qu'une différence d'événements peut lui être **attribuée causalement**.

:::key
La randomisation est le seul outil qui neutralise les facteurs de confusion **inconnus**. C'est pourquoi l'essai randomisé est la référence pour démontrer qu'un traitement *cause* un bénéfice, là où une cohorte ne montre qu'une association.
:::

On y ajoute souvent le **double aveugle** (ni le patient ni le médecin ne savent qui reçoit quoi) pour écarter l'effet placebo et les biais d'évaluation. Ses limites : coût, durée, et surtout l'**éthique** — on ne peut pas tirer au sort une exposition nocive (on ne randomise pas des gens à fumer).
<!-- /step -->

<!-- step:title="Niveaux de preuve : à chacun sa place" -->
Ces schémas se hiérarchisent en **niveaux de preuve** selon leur résistance aux biais, des plus solides aux plus fragiles :

1. Méta-analyses et revues systématiques d'essais randomisés
2. Essai randomisé contrôlé de bonne qualité
3. Étude de cohorte
4. Étude cas-témoins
5. Séries de cas, études descriptives
6. Avis d'expert, raisonnement physiopathologique

Mais « niveau de preuve » n'est pas « à utiliser toujours ». Le bon schéma est celui qu'impose la question :

- Maladie **rare** ou exposition ancienne : le **cas-témoins** s'impose (un ECR serait impossible).
- Évaluer l'**efficacité d'un traitement** : l'**ECR** est la référence.
- Exposition **non éthiquement randomisable** (tabac, polluant) : on se rabat sur la **cohorte**, faute de mieux.

:::note
Un ECR mal conduit peut valoir moins qu'une grande cohorte rigoureuse : la hiérarchie classe les *schémas*, pas la qualité d'exécution de chaque étude. On juge toujours les deux.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- **Cohorte** : on part de l'**exposition** et l'on suit dans le temps → risque et **risque relatif** ; coûteuse, inadaptée aux maladies rares.
- **Cas-témoins** : on part de la **maladie** et l'on remonte l'exposition → **odds ratio** seulement ; rapide, idéale pour les maladies rares, mais sujette au biais de mémoire.
- Les deux sont **observationnelles** et exposées au **facteur de confusion** (association ≠ causalité).
- L'**essai randomisé** attribue le traitement au hasard : la randomisation équilibre les facteurs de confusion **connus et inconnus** → preuve **causale**.
- Les **niveaux de preuve** (méta-analyse d'ECR > ECR > cohorte > cas-témoins > série de cas > avis d'expert) hiérarchisent les schémas, mais le bon schéma reste celui qu'impose la question.
<!-- /step -->
