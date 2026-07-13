---
id: "g-9-modele-cox"
slug: "g-9-modele-cox"
title: "Le modèle de Cox et le hazard ratio"
description: "Passer de deux courbes à un modèle : le risque instantané, le modèle à risques proportionnels de Cox, le hazard ratio et son interprétation, l'ajustement et l'hypothèse des risques proportionnels."
track: "section-G"
order: 69
duration: "14 min"
programItem: "G-9"
tags: ["modèle de Cox", "hazard ratio", "risque instantané", "risques proportionnels", "ajustement"]
level: "advanced"
sources: ["cox-1972", "collett-survival", "suissa-immortal"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Un hazard ratio de 0,70 signifie que le groupe exposé a, à chaque instant :"
    options:
      - "un risque instantané réduit de 30 % par rapport au groupe de référence"
      - "une survie de 70 % à la fin de l'étude"
      - "un risque augmenté de 70 %"
    correct: 0
  - prompt: "Que suppose l'hypothèse des risques proportionnels ?"
    options:
      - "que le hazard ratio est constant au cours du temps"
      - "que les deux groupes ont exactement la même survie"
      - "que le risque instantané est nul au départ"
    correct: 0
  - prompt: "Quel avantage majeur le modèle de Cox offre-t-il par rapport au test du log-rank ?"
    options:
      - "il ne nécessite aucune donnée de survie"
      - "il permet d'ajuster l'effet sur plusieurs covariables et de le quantifier par un HR"
      - "il supprime la censure"
    correct: 1
---

<!-- step:title="Du test à la mesure d'effet" -->
Le test du log-rank (chapitre G-8) répond à une question binaire : les deux courbes diffèrent-elles ? Mais il ne dit **ni de combien**, ni comment tenir compte de l'**âge**, du **stade** ou des autres caractéristiques des patients.

Or en clinique, on veut un **chiffre** : « ce traitement réduit le risque de tel pourcentage, à âge et sévérité comparables ». Il faut passer d'une comparaison de courbes à un **modèle** qui relie la survie à une ou plusieurs variables. C'est le rôle du modèle de **Cox**.
<!-- /step -->

<!-- step:title="Le risque instantané h(t)" -->
La brique de base n'est plus la survie cumulée $S(t)$ mais le **risque instantané** — le *hazard* — noté $h(t)$.

Intuitivement, $h(t)$ est la « vitesse » à laquelle l'événement frappe **à l'instant $t$**, parmi ceux qui y sont encore exposés (les survivants à $t$). C'est un taux conditionnel : « sachant qu'on est arrivé vivant jusqu'à $t$, quelle est l'intensité du risque juste maintenant ? »

$$h(t) \approx \frac{\text{probabilité d'événement dans un petit intervalle après } t}{\text{durée de cet intervalle}}$$

Ce n'est pas une probabilité (il peut dépasser 1) mais un **taux** par unité de temps. Là où $S(t)$ décrit le **cumul** des survivants, $h(t)$ décrit le **danger du moment**.
<!-- /step -->

<!-- step:title="Le modèle à risques proportionnels de Cox" -->
Cox propose une écriture élégante. Le risque d'un individu se décompose en deux facteurs :

$$h(t) = h_0(t) \times \exp(\beta_1 x_1 + \beta_2 x_2 + \dots + \beta_k x_k)$$

- $h_0(t)$ est le **risque de base** : le risque instantané d'un individu de référence (toutes covariables à 0). Il varie librement avec le temps — le modèle ne lui impose **aucune forme**.
- Le second facteur, exponentiel, **multiplie** ce risque de base selon les caractéristiques $x_1, \dots, x_k$ du patient.

L'astuce est là : l'effet des covariables **multiplie** le risque de base sans changer sa forme dans le temps. On appelle cela un modèle **semi-paramétrique** — on estime les $\beta$ sans jamais spécifier $h_0(t)$.

:::key
Dans le modèle de Cox, une covariable agit comme un **coefficient multiplicatif** constant sur le risque instantané. Deux individus voient leurs risques dans un **rapport fixe** à tout instant : c'est l'hypothèse des risques proportionnels.
:::
<!-- /step -->

<!-- step:title="Le hazard ratio (HR)" viz="SurvieKaplanMeier" -->
Comparons deux patients ne différant que par une variable (traité $x=1$ vs témoin $x=0$). Le risque de base $h_0(t)$ se **simplifie** dans le rapport :

$$\text{HR} = \frac{h_0(t)\,e^{\beta \cdot 1}}{h_0(t)\,e^{\beta \cdot 0}} = e^{\beta}$$

Le **hazard ratio** est donc $e^{\beta}$, un nombre unique, indépendant du temps. Son interprétation :

- $\text{HR} = 1$ : aucun effet, mêmes risques.
- $\text{HR} < 1$ : effet **protecteur**. Un $\text{HR} = 0{,}70$ signifie un risque instantané **réduit de 30 %** ($1 - 0{,}70$) dans le groupe traité, à tout instant.
- $\text{HR} > 1$ : effet **délétère**. Un $\text{HR} = 1{,}40$ correspond à un risque **augmenté de 40 %**.

Exemple original. Un essai sur un anticoagulant donne $\text{HR} = 0{,}70$ pour la récidive thrombotique, avec un intervalle de confiance à 95 % de $[0{,}55 ; 0{,}89]$. Comme l'intervalle **ne contient pas 1**, la réduction de 30 % est **significative**.

:::howto
**Comment lire le schéma.** Deux courbes de Kaplan-Meier avec un HR < 1 : la courbe du groupe traité reste **au-dessus** de celle du témoin. Un HR constant se traduit par un **écartement régulier** des courbes ; si elles se **croisent**, les risques ne sont plus proportionnels et un HR unique perd son sens.
:::
<!-- /step -->

<!-- step:title="L'ajustement sur des covariables" -->
La force du modèle de Cox est d'inclure **plusieurs** variables simultanément. Chaque $\beta$ — donc chaque HR — s'interprète « **toutes choses égales par ailleurs** », c'est-à-dire à valeur fixée des autres covariables.

C'est l'outil pour neutraliser les **facteurs de confusion** (chapitre G-6). Supposons un HR **brut** de 0,60 pour un traitement, très flatteur. Mais les patients traités étaient plus **jeunes** et moins **sévères**. En ajustant sur l'âge et le stade, le HR remonte à **0,82** : une partie du bénéfice apparent venait de la confusion. Le HR **ajusté** est l'estimation honnête de l'effet propre du traitement.

$$\text{HR}_{\text{ajusté}} = 0{,}82 \quad \text{(âge et stade tenus constants)}$$

On peut aussi ajuster sur une exposition **dépendante du temps**, ce qui est la parade au biais de temps immortel (chapitre G-7).
<!-- /step -->

<!-- step:title="L'hypothèse des risques proportionnels" -->
Tout repose sur une hypothèse : le **HR est constant** dans le temps. Le rapport des risques entre deux groupes ne doit pas dériver au fil du suivi.

Elle est **violée** quand, par exemple, un traitement protège au début puis perd son effet, ou quand les courbes de survie se **croisent**. Un HR unique n'aurait alors plus de sens — il moyennerait des effets opposés.

Comment la vérifier ?

- Inspecter les courbes de Kaplan-Meier : elles doivent s'écarter **régulièrement**, sans se croiser.
- Examiner les **résidus de Schoenfeld** : ils ne doivent pas montrer de tendance temporelle.
- Tracer $\ln(-\ln \hat{S}(t))$ contre le temps : des courbes **parallèles** confirment la proportionnalité.

:::pitfall
Un HR de 0,70 sur toute l'étude peut **masquer** un effet qui protège fortement au début puis s'inverse. Toujours confronter le HR aux courbes de Kaplan-Meier : le chiffre unique ne remplace pas le regard sur la dynamique.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le modèle de **Cox** passe des courbes à un **modèle** du risque instantané $h(t) = h_0(t)\,e^{\beta_1 x_1 + \dots}$, sans imposer de forme au risque de base.
- Le **hazard ratio** vaut $\text{HR} = e^{\beta}$ : $\text{HR} = 0{,}70$ signifie **−30 %** de risque instantané, $\text{HR} > 1$ un risque accru ; $\text{HR} = 1$ pas d'effet.
- Un intervalle de confiance du HR qui **exclut 1** rend l'effet significatif.
- L'**ajustement** multivarié neutralise les **facteurs de confusion** et fournit un HR « toutes choses égales par ailleurs ».
- Tout repose sur l'**hypothèse des risques proportionnels** (HR constant dans le temps) : à vérifier ; des courbes qui se **croisent** l'invalident.
<!-- /step -->
