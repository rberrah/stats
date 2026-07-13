---
id: "b-7-analyse-variance"
slug: "b-7-analyse-variance"
title: "Comparaison de plusieurs moyennes : l'analyse de la variance"
description: "Comparer trois moyennes ou plus sans multiplier les tests t : inflation du risque, décomposition inter/intra et statistique F."
track: "section-B"
order: 27
duration: "14 min"
programItem: "B-7"
tags: ["analyse de la variance", "ANOVA", "test F", "inflation alpha", "variance inter-intra"]
level: "intermediate"
sources: ["fisher-1925", "sterne-smith", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Pourquoi ne pas comparer 4 moyennes en faisant tous les tests t deux à deux ?"
    options:
      - "Parce que le test t est réservé à deux groupes de même effectif."
      - "Parce que multiplier les tests gonfle le risque global de conclure à tort à au moins une différence (inflation de α)."
      - "Parce que le test t ne fonctionne pas avec plus de 30 sujets."
    correct: 1
  - prompt: "Sur quoi repose la décision dans une analyse de la variance ?"
    options:
      - "Sur le rapport F = variance inter-groupes / variance intra-groupes."
      - "Sur la différence entre la plus grande et la plus petite moyenne."
      - "Sur la somme de toutes les moyennes."
    correct: 0
---

<!-- step:title="Trois groupes, et le test t ne suffit plus" -->
On compare l'effet de **trois** doses d'un anti-inflammatoire (faible, moyenne, forte) sur la CRP. Il y a maintenant trois moyennes. Le réflexe serait d'enchaîner les tests $t$ deux à deux : faible vs moyenne, faible vs forte, moyenne vs forte.

Mauvaise idée. Et avec quatre groupes, ce serait **six** comparaisons ; avec cinq groupes, **dix**. Le problème n'est pas seulement le nombre de calculs : c'est que **multiplier les tests détraque le risque d'erreur**. Il faut une méthode qui tranche la question d'un seul coup : **toutes ces moyennes sont-elles égales, oui ou non ?** C'est l'**analyse de la variance** (ANOVA).
<!-- /step -->

<!-- step:title="Le vrai danger : l'inflation du risque α" -->
Chaque test à 5 % accepte 5 % de chances de conclure à tort à une différence. Un seul test : risque 5 %, acceptable. Mais si vous faites **plusieurs** tests indépendants, les risques s'accumulent. Pour $k$ comparaisons, le risque de se tromper **au moins une fois** est :

$$\alpha_{\text{global}} = 1 - (1 - 0{,}05)^k$$

- 3 comparaisons : $1 - 0{,}95^3 \approx 14\%$
- 6 comparaisons : $1 - 0{,}95^6 \approx 26\%$
- 10 comparaisons : $1 - 0{,}95^{10} \approx 40\%$

:::pitfall
Avec quatre groupes et six tests $t$, vous avez plus d'**une chance sur quatre** de crier « différence ! » alors qu'il n'y en a aucune. C'est l'**inflation du risque α**. Multiplier les tests, c'est multiplier les faux positifs — le péché statistique le plus courant.
:::
<!-- /step -->

<!-- step:title="L'idée géniale : juger des moyennes… par des variances" -->
Le nom surprend : pourquoi parler de *variance* pour comparer des *moyennes* ? Voici l'intuition, magnifique de simplicité.

On mesure la dispersion des données de **deux façons** :

- La **variance intra-groupe** : à quel point les individus s'écartent de la moyenne de **leur propre** groupe. C'est le bruit de fond, la variabilité naturelle, présente de toute façon.
- La **variance inter-groupes** : à quel point les moyennes des groupes s'écartent **les unes des autres** (autour de la moyenne générale).

Si les groupes ont tous la même vraie moyenne, ces deux variances mesurent la même chose : leur rapport tourne autour de 1. Mais si les moyennes diffèrent réellement, la variance **inter** gonfle — les moyennes s'éloignent bien plus que le simple bruit ne l'expliquerait.

$$F = \frac{\text{variance inter-groupes}}{\text{variance intra-groupe}}$$

Un $F$ grand signale que les écarts **entre** groupes dépassent les fluctuations **à l'intérieur** des groupes : les moyennes ne sont pas toutes égales.
<!-- /step -->

<!-- step:title="La décomposition de la variance" viz="AnalyseVariance" -->
Le cœur de l'ANOVA est une identité comptable : la variabilité **totale** des données se scinde exactement en deux morceaux additifs.

$$SC_{\text{totale}} = SC_{\text{inter}} + SC_{\text{intra}}$$

($SC$ = somme des carrés des écarts.) On divise chaque somme de carrés par ses degrés de liberté pour obtenir une variance moyenne (un « carré moyen », $CM$) :

$$F = \frac{CM_{\text{inter}}}{CM_{\text{intra}}} = \frac{SC_{\text{inter}} / (k-1)}{SC_{\text{intra}} / (N-k)}$$

où $k$ est le nombre de groupes et $N$ l'effectif total. On compare ce $F$ à la table de Fisher avec $\nu_1 = k-1$ et $\nu_2 = N-k$ degrés de liberté.

:::howto
**Comment lire le schéma.** Faites varier l'écart entre les moyennes des groupes. Quand les moyennes se rapprochent, la part **inter** se réduit et $F$ tombe vers 1. Quand elles s'écartent, la barre **inter** grandit et $F$ franchit le seuil : la différence devient significative. La dispersion **intra** (le bruit) reste, elle, à peu près constante.
:::
<!-- /step -->

<!-- step:title="Un exemple chiffré" -->
CRP (mg/L) sous trois doses, 5 patients par groupe :

- Dose faible : moyenne 12
- Dose moyenne : moyenne 9
- Dose forte : moyenne 6
- Moyenne générale : 9

Supposons les calculs conduisant à $SC_{\text{inter}} = 90$ et $SC_{\text{intra}} = 72$, avec $k = 3$ groupes et $N = 15$ sujets.

$$CM_{\text{inter}} = \frac{90}{k-1} = \frac{90}{2} = 45 \qquad CM_{\text{intra}} = \frac{72}{N-k} = \frac{72}{12} = 6$$

$$F = \frac{45}{6} = 7{,}5$$

Avec $\nu_1 = 2$ et $\nu_2 = 12$, le seuil à 5 % vaut environ **3,9**. Comme $7{,}5 > 3{,}9$, on rejette l'égalité : **au moins une** des trois doses diffère des autres.
<!-- /step -->

<!-- step:title="Ce que l'ANOVA dit… et ne dit pas" -->
L'analyse de la variance répond par **oui ou non** à une question globale : « toutes les moyennes sont-elles égales ? » Un $F$ significatif indique qu'**il existe** au moins une différence — mais **il ne dit pas laquelle**.

Pour identifier *quels* groupes diffèrent, on procède ensuite à des **comparaisons post-hoc** (tests de Tukey, de Bonferroni…), justement conçues pour maîtriser l'inflation du risque α. L'ordre est immuable :

:::key
D'abord l'**ANOVA globale** (un seul $F$, risque maîtrisé). **Seulement si** elle est significative, on explore les paires par des comparaisons post-hoc corrigées. Jamais l'inverse, et jamais des tests $t$ bruts en série.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Comparer 3 moyennes ou plus par des tests $t$ répétés **gonfle le risque α** (14 % pour 3 comparaisons, ~40 % pour 10).
- L'**analyse de la variance** tranche d'un seul test la question « toutes les moyennes sont-elles égales ? ».
- Elle **décompose la variabilité totale** en une part **inter-groupes** (écart entre moyennes) et une part **intra-groupe** (bruit) : $SC_{\text{totale}} = SC_{\text{inter}} + SC_{\text{intra}}$.
- Statistique : $F = CM_{\text{inter}} / CM_{\text{intra}}$, comparée à la table de Fisher ($\nu_1 = k-1$, $\nu_2 = N-k$).
- Un $F$ significatif dit qu'**une** différence existe, pas laquelle → **comparaisons post-hoc** ensuite, jamais des $t$ bruts.
<!-- /step -->
