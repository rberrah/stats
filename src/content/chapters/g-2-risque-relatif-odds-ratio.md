---
id: "g-2-risque-relatif-odds-ratio"
slug: "g-2-risque-relatif-odds-ratio"
title: "Mesurer un risque : risque relatif, odds ratio, NNT"
description: "À partir d'un tableau 2 × 2 : risques, risque relatif, odds ratio, réductions absolue et relative, et nombre de sujets à traiter."
track: "section-G"
order: 62
duration: "14 min"
programItem: "G-2"
tags: ["risque relatif", "odds ratio", "réduction du risque", "NNT", "tableau 2x2"]
level: "intermediate"
sources: ["laupacis-nnt", "rothman", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Un traitement fait passer le risque d'événement de 12 % à 8 %. La réduction relative du risque (RRR) est de :"
    options:
      - "4 %"
      - "33 %"
      - "50 %"
    correct: 1
  - prompt: "Le nombre de sujets à traiter (NNT) se calcule comme :"
    options:
      - "1 divisé par la réduction absolue du risque"
      - "1 divisé par la réduction relative du risque"
      - "le risque relatif multiplié par 100"
    correct: 0
  - prompt: "L'odds ratio est une bonne approximation du risque relatif surtout quand :"
    options:
      - "l'échantillon est très grand"
      - "l'événement étudié est rare dans les deux groupes"
      - "les deux groupes ont la même taille"
    correct: 1
---

<!-- step:title="Deux groupes, combien d'événements ?" -->
Comparer un risque, c'est d'abord dresser un tableau 2 × 2 : un groupe **exposé** (ou traité), un groupe de référence, et pour chacun le nombre de sujets qui subissent l'événement.

Prenons un essai fictif d'un traitement préventif de l'infarctus, suivi 5 ans :

| | Infarctus | Pas d'infarctus | Total |
|---|---|---|---|
| Traitement | 80 | 920 | 1 000 |
| Placebo | 120 | 880 | 1 000 |

Le **risque** dans un groupe est simplement la proportion de sujets qui subissent l'événement :

$$R_{\text{trait}} = \dfrac{80}{1\,000} = 0{,}08 \quad ; \quad R_{\text{plac}} = \dfrac{120}{1\,000} = 0{,}12$$

Soit **8 % sous traitement contre 12 % sous placebo**. Tout le reste — risque relatif, odds ratio, NNT — n'est qu'une façon de résumer l'écart entre ces deux chiffres.
<!-- /step -->

<!-- step:title="Risque relatif et odds ratio" -->
Le **risque relatif** (RR) est le rapport des deux risques : combien de fois l'événement est-il plus (ou moins) fréquent sous traitement ?

$$\text{RR} = \dfrac{R_{\text{trait}}}{R_{\text{plac}}} = \dfrac{0{,}08}{0{,}12} \approx 0{,}67$$

Un RR de 0,67 signifie que le risque sous traitement vaut les deux tiers du risque sous placebo. Un $\text{RR} = 1$ signifierait « aucun effet » ; $\text{RR} > 1$, un facteur de risque ; $\text{RR} < 1$, un facteur protecteur.

L'**odds ratio** (OR) compare non pas les risques mais les *cotes* (odds), c'est-à-dire le rapport « événements / non-événements » dans chaque groupe :

$$\text{cote}_{\text{trait}} = \dfrac{80}{920} \approx 0{,}087 \quad ; \quad \text{cote}_{\text{plac}} = \dfrac{120}{880} \approx 0{,}136$$

$$\text{OR} = \dfrac{80/920}{120/880} = \dfrac{80 \times 880}{120 \times 920} \approx 0{,}64$$

Le raccourci « produit en croix » $\text{OR} = ad/bc$ tombe directement à partir des quatre cases du tableau.
<!-- /step -->

<!-- step:title="Réduction absolue et réduction relative" -->
Deux façons d'exprimer le bénéfice, souvent confondues à dessein dans la communication.

La **réduction relative du risque** (RRR) est la part de risque supprimée :

$$\text{RRR} = 1 - \text{RR} = 1 - 0{,}67 = 0{,}33 = 33\,\%$$

La **réduction absolue du risque** (RRA) est la simple différence des deux risques :

$$\text{RRA} = R_{\text{plac}} - R_{\text{trait}} = 0{,}12 - 0{,}08 = 0{,}04 = 4 \text{ points}$$

Les deux décrivent le *même* essai. « Le traitement réduit le risque de 33 % » (relatif) impressionne bien plus que « il fait gagner 4 points » (absolu) — pourtant c'est la même chose.

:::pitfall
La réduction **relative** est presque toujours mise en avant car elle paraît spectaculaire, mais elle masque le niveau de risque de départ. Passer de 2 % à 1 % ou de 40 % à 20 % donne la même RRR de 50 %, alors que le bénéfice réel (RRA de 1 point contre 20 points) n'a rien de comparable. Exigez toujours la réduction **absolue**.
:::
<!-- /step -->

<!-- step:title="Le nombre de sujets à traiter (NNT)" -->
La réduction absolue se traduit en une grandeur très parlante au lit du patient : le **nombre de sujets à traiter** (NNT), c'est-à-dire combien de personnes il faut traiter pour éviter *un* événement.

$$\text{NNT} = \dfrac{1}{\text{RRA}} = \dfrac{1}{0{,}04} = 25$$

Autrement dit : il faut traiter **25 patients pendant 5 ans** pour éviter un infarctus. Plus le NNT est petit, plus le traitement est efficace en pratique. Un NNT de 25 est correct pour une prévention ; certaines interventions ont un NNT de 3 (très efficaces), d'autres de plusieurs centaines (bénéfice marginal).

:::key
Le NNT est l'inverse de la réduction **absolue** du risque : $\text{NNT} = 1/\text{RRA}$. Il exprime l'effort clinique à consentir pour un bénéfice, et remet la RRR spectaculaire à sa juste échelle.
:::
<!-- /step -->

<!-- step:title="Quand l'odds ratio colle au risque relatif" -->
Sur notre exemple, $\text{RR} = 0{,}67$ et $\text{OR} = 0{,}64$ : très proches. Ce n'est pas un hasard.

Quand l'événement est **rare**, le nombre de non-événements est presque égal au total, donc la cote $\approx$ le risque, et l'OR $\approx$ le RR. À l'inverse, quand l'événement est **fréquent**, l'OR s'écarte du RR et l'**exagère** systématiquement (il s'en éloigne toujours de 1).

Vérifions sur un événement fréquent : risques 60 % et 40 %.

$$\text{RR} = \dfrac{0{,}60}{0{,}40} = 1{,}5 \quad \text{mais} \quad \text{OR} = \dfrac{0{,}60/0{,}40}{0{,}40/0{,}60} = \dfrac{1{,}5}{0{,}667} = 2{,}25$$

L'OR (2,25) est bien plus grand que le RR (1,5). Pourquoi alors utiliser l'OR ? Parce qu'il se calcule même quand on ne connaît pas les risques — notamment dans les études **cas-témoins** (chapitre G-5), où le RR est inaccessible.
<!-- /step -->

<!-- step:title="À retenir" -->
- Tout part des deux **risques**, $R = $ événements $/$ total dans chaque groupe.
- **Risque relatif** $\text{RR} = R_1/R_2$ (rapport des risques) ; **odds ratio** $\text{OR} = ad/bc$ (rapport des cotes). $=1$ : pas d'effet.
- **RRR** $= 1 - \text{RR}$ (impressionnante mais trompeuse) ; **RRA** $=$ différence des risques (honnête, dépend du risque de base).
- **NNT** $= 1/\text{RRA}$ : nombre de patients à traiter pour éviter un événement — la mesure la plus clinique.
- $\text{OR} \approx \text{RR}$ **quand l'événement est rare** ; sur événement fréquent, l'OR exagère. L'OR reste indispensable dans les études cas-témoins.
<!-- /step -->
