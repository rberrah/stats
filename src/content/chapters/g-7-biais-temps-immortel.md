---
id: "g-7-biais-temps-immortel"
slug: "g-7-biais-temps-immortel"
title: "Le biais de temps immortel"
description: "Une période de suivi pendant laquelle l'événement ne peut pas survenir par construction, attribuée à tort au groupe exposé, qui surestime le bénéfice apparent d'un traitement."
track: "section-G"
order: 67
duration: "12 min"
programItem: "G-7"
tags: ["biais de temps immortel", "études observationnelles", "survie", "exposition dépendante du temps"]
quiz:
  - prompt: "Qu'appelle-t-on « temps immortel » dans une étude de survie ?"
    options:
      - "la durée de vie moyenne des patients traités"
      - "une période de suivi pendant laquelle, par construction, l'événement ne peut pas survenir"
      - "le temps écoulé après le décès"
    correct: 1
  - prompt: "Dans quel sens le biais de temps immortel fausse-t-il le résultat ?"
    options:
      - "il surestime le bénéfice du traitement"
      - "il sous-estime le bénéfice du traitement"
      - "il n'a aucun effet sur l'estimation"
    correct: 0
  - prompt: "Quelle solution corrige ce biais ?"
    options:
      - "augmenter la taille de l'échantillon"
      - "traiter l'exposition comme une variable dépendante du temps"
      - "exclure tous les patients décédés"
    correct: 1
---

<!-- step:title="Une intuition trompeuse" -->
Beaucoup d'études observationnelles célèbres ont « prouvé » qu'un traitement prolongeait la vie… avant qu'on ne découvre que le bénéfice était une **illusion de comptage**. Le coupable porte un nom saisissant : le **biais de temps immortel**.

L'idée de départ paraît raisonnable : on compare la survie des patients qui ont **reçu** un médicament à celle de ceux qui ne l'ont pas reçu. Le piège est caché dans une évidence : pour avoir eu le temps de **recevoir** le traitement, un patient a d'abord dû **rester en vie** assez longtemps. Cette exigence, purement logique, fabrique un avantage qui n'a rien de thérapeutique.
<!-- /step -->

<!-- step:title="Définition" -->
Le **temps immortel** est un intervalle de suivi pendant lequel, **par construction de l'étude**, l'événement étudié (souvent le décès) **ne peut pas** survenir.

Il apparaît typiquement **entre l'inclusion et l'exposition** : un patient est classé « exposé » à partir du moment où il reçoit le traitement, mais on lui attribue rétrospectivement tout le temps écoulé **depuis son entrée** dans l'étude. Or, pendant cette période initiale, il était nécessairement vivant — sinon il n'aurait jamais atteint le traitement.

:::key
Le temps immortel est une période **garantie sans événement**, attribuée à tort au groupe exposé. Comme ce groupe accumule du temps de suivi « gratuit » sans décès, sa survie apparaît meilleure — indépendamment de tout effet réel du traitement.
:::
<!-- /step -->

<!-- step:title="L'exemple type, chiffré" -->
Prenons une cohorte fictive de patients suivis après le diagnostic d'une maladie chronique. Un médicament d'entretien n'est délivré qu'à ceux qui reviennent en consultation, en moyenne **90 jours** après le diagnostic.

- **Groupe « traité »** : patients ayant obtenu au moins une délivrance du médicament.
- **Groupe « non traité »** : les autres.

Le classement se fait **a posteriori**, sur toute la période depuis le diagnostic. Conséquence : pour figurer dans le groupe « traité », un patient devait être **vivant au 90ᵉ jour**. Ceux qui sont décédés dans les trois premiers mois tombent tous, mécaniquement, dans le groupe « non traité ».

Supposons qu'aucun des deux médicaments n'ait le moindre effet. On observe malgré tout :

$$\text{Survie à 1 an}: \quad \text{traités} = 82\,\%, \quad \text{non traités} = 68\,\%$$

Un écart de **14 points** en faveur du traitement… entièrement produit par les 90 jours « immortels » offerts au groupe traité. Le médicament n'a rien fait : il a seulement servi d'**étiquette** apposée aux survivants.
<!-- /step -->

<!-- step:title="Pourquoi le biais gonfle toujours le bénéfice" -->
Le sens de l'erreur n'est pas aléatoire : il est **toujours** favorable au groupe exposé.

Deux mécanismes agissent dans la même direction :

1. **Décès mal attribués.** Les patients morts avant de recevoir le traitement sont versés dans le groupe non traité, qui hérite ainsi d'un surcroît de décès précoces.
2. **Temps de suivi mal attribué.** Le groupe traité se voit créditer d'un temps de suivi sans risque (les jours précédant le traitement), ce qui **abaisse artificiellement** son taux d'événements par personne-temps.

Le résultat combine donc un numérateur allégé et un dénominateur alourdi côté traités : le **hazard ratio** apparent (chapitre G-9) plonge en dessous de 1, suggérant une protection fictive.

:::pitfall
Plus le délai avant l'exposition est long, plus le temps immortel est grand, et plus le « bénéfice » fabriqué est spectaculaire. Un traitement lent à instaurer paraîtra, à tort, le plus efficace.
:::
<!-- /step -->

<!-- step:title="Comment l'éviter" -->
Le biais vient d'une **erreur de découpage du temps**, pas d'un manque de données. Les remèdes agissent sur la façon de compter.

- **Faire partir l'horloge à l'exposition.** Le suivi d'un patient traité commence le jour où il reçoit réellement le traitement, pas à l'inclusion. On efface ainsi la période immortelle.
- **Traiter l'exposition comme une variable dépendante du temps.** Le patient est compté « non exposé » tant qu'il n'a pas reçu le médicament, puis « exposé » ensuite. Le même individu contribue successivement aux deux groupes, chaque jour étant attribué à son statut **réel** ce jour-là. C'est la solution de référence dans le modèle de Cox.
- **Design par cibles émulées (landmark analysis).** On fixe une date-repère (par exemple 90 jours) et l'on ne conserve que les patients **vivants** à cette date, en les classant selon leur traitement reçu **avant** elle. Les deux groupes partent alors du même point, sans temps immortel.

:::note
Augmenter l'effectif ne sert à rien : comme tout biais (chapitre G-6), le temps immortel est une erreur **systématique**. Seule une définition correcte du temps de suivi le corrige.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le **temps immortel** est une période de suivi pendant laquelle l'événement ne **peut pas** survenir par construction, souvent entre l'inclusion et l'exposition.
- Attribué à tort au groupe exposé, il lui offre du temps sans risque et lui retire les décès précoces : il **surestime** toujours le bénéfice du traitement.
- Signature : le groupe « traité » doit avoir **survécu** assez longtemps pour être traité, donc être classé comme tel.
- Correction : faire **débuter le suivi à l'exposition**, modéliser l'exposition comme **dépendante du temps**, ou utiliser une **analyse landmark**.
- C'est un piège **classique des études observationnelles** ; un plus grand échantillon ne le corrige jamais.
<!-- /step -->
