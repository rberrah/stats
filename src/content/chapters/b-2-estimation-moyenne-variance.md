---
id: "b-2-estimation-moyenne-variance"
slug: "b-2-estimation-moyenne-variance"
title: "Estimer la moyenne et la variance d'une population"
description: "De l'échantillon à la population : moyenne observée, variance estimée avec (n−1) au dénominateur, et la notion de biais."
track: "section-B"
order: 22
duration: "12 min"
programItem: "B-2"
tags: ["estimation", "moyenne", "variance", "degrés de liberté", "biais"]
level: "beginner"
sources: ["fisher-1922", "armitage-berry", "schwartz"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Pourquoi divise-t-on la somme des carrés des écarts par (n−1) et non par n pour estimer la variance d'une population ?"
    options:
      - "Parce que c'est plus simple à calculer."
      - "Parce que les écarts sont calculés autour de la moyenne observée, ce qui « consomme » un degré de liberté et rendrait l'estimation trop petite si l'on divisait par n."
      - "Parce que n−1 donne toujours un nombre entier."
    correct: 1
  - prompt: "Un estimateur est dit sans biais lorsque :"
    options:
      - "il donne toujours la valeur exacte sur chaque échantillon."
      - "il tombe juste en moyenne, sur l'ensemble des échantillons possibles."
      - "il augmente avec la taille de l'échantillon."
    correct: 1
---

<!-- step:title="Le problème de fond" -->
On ne connaît presque jamais la vraie moyenne $\mu$ ni le vrai écart-type $\sigma$ d'une population : mesurer *tous* les diabétiques de France est impossible. On travaille sur un **échantillon** et on cherche à **deviner** les valeurs de la population à partir de lui. C'est l'**estimation**.

Deux grandeurs nous intéressent : la moyenne (où se situe le centre ?) et la variance (à quel point les valeurs sont-elles dispersées ?). Les estimer correctement conditionne tous les tests qui suivront.
<!-- /step -->

<!-- step:title="Estimer la moyenne : le cas facile" -->
Pour la moyenne, l'intuition tombe juste : la meilleure estimation de la moyenne de la population $\mu$ est tout simplement la **moyenne de l'échantillon** :

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

Prenons la kaliémie de 5 patients : 3,8 — 4,2 — 4,0 — 4,5 — 4,0 mmol/L. Leur somme vaut 20,5, donc

$$\bar{x} = \frac{20{,}5}{5} = 4{,}1 \text{ mmol/L}$$

Cette valeur est un estimateur **sans biais** : si l'on répétait l'échantillonnage un très grand nombre de fois, la moyenne des $\bar{x}$ obtenus tomberait pile sur $\mu$. Rien de subtil ici — la difficulté est ailleurs.
<!-- /step -->

<!-- step:title="Estimer la variance : la surprise du (n−1)" -->
La variance mesure la dispersion : la moyenne des carrés des écarts à la moyenne. On serait tenté d'écrire, très naturellement :

$$\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

Or **cette formule sous-estime systématiquement** la vraie variance. La bonne estimation utilise $(n-1)$ au dénominateur :

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

Sur nos 5 kaliémies, les écarts à 4,1 sont −0,3 ; +0,1 ; −0,1 ; +0,4 ; −0,1. Somme des carrés :

$$0{,}09 + 0{,}01 + 0{,}01 + 0{,}16 + 0{,}01 = 0{,}28$$

$$s^2 = \frac{0{,}28}{5-1} = 0{,}07 \qquad s = \sqrt{0{,}07} \approx 0{,}26 \text{ mmol/L}$$

Diviser par $n = 5$ aurait donné 0,056, soit une dispersion trompeusement plus faible.
<!-- /step -->

<!-- step:title="Pourquoi (n−1) ? Les degrés de liberté" -->
Voici l'idée profonde. Les écarts sont calculés autour de $\bar{x}$, la moyenne **de l'échantillon**, et non autour de la vraie moyenne $\mu$ (qu'on ignore). Or, par construction, les écarts à $\bar{x}$ ont une propriété rigide : **leur somme est toujours nulle**.

$$\sum (x_i - \bar{x}) = 0$$

Conséquence : une fois que vous connaissez $n-1$ de ces écarts, le dernier est entièrement déterminé — il n'a plus aucune liberté. Sur $n$ écarts, seuls $n-1$ sont réellement « libres » : c'est le nombre de **degrés de liberté**.

$\bar{x}$ est, par définition, le point le plus proche possible de *toutes* les données de l'échantillon. Les écarts à $\bar{x}$ sont donc un peu plus petits que les écarts à $\mu$. Diviser par $n-1$ au lieu de $n$ compense exactement ce rétrécissement.

:::note
Retenez l'image : un **degré de liberté** est « dépensé » à chaque quantité déjà estimée sur les données. Ici, on a dépensé $\bar{x}$, il reste $n-1$ degrés pour la variance. Ce comptage réapparaîtra dans tous les tests $t$, $F$ et $\chi^2$.
:::
<!-- /step -->

<!-- step:title="La notion de biais" -->
Un estimateur est **sans biais** s'il tombe juste *en moyenne* : en le calculant sur une infinité d'échantillons, la moyenne de ses valeurs coïncide avec la vraie valeur cherchée.

- $\bar{x}$ est sans biais pour $\mu$.
- $s^2$ avec $(n-1)$ est sans biais pour $\sigma^2$.
- La version avec $n$ est **biaisée** : elle vise trop bas en moyenne.

Attention : « sans biais » ne veut pas dire « exact ». Sur *votre* échantillon précis, $\bar{x}$ peut fort bien s'écarter de $\mu$. Le biais parle du comportement moyen à long terme, pas d'une réalisation isolée.
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Quand $n$ est **grand**, diviser par $n$ ou par $n-1$ ne change presque rien (99 contre 100). Le piège guette sur les **petits échantillons** : avec $n = 4$, diviser par 3 au lieu de 4 augmente l'estimation de 33 %. C'est précisément là que la correction compte le plus — et là que l'oublier fausse le plus les conclusions. Vérifiez toujours que votre calculatrice ou votre logiciel utilise bien la touche « écart-type d'échantillon » ($s$, avec $n-1$) et non « écart-type de population » ($\sigma$, avec $n$).
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- La meilleure estimation de $\mu$ est la moyenne observée $\bar{x}$ : estimateur **sans biais**.
- La variance de la population s'estime par $s^2 = \dfrac{1}{n-1}\sum (x_i-\bar{x})^2$ : le dénominateur est $(n-1)$, pas $n$.
- Raison : les écarts sont pris autour de $\bar{x}$, dont la somme est nulle ; il ne reste que $n-1$ **degrés de liberté**.
- Diviser par $n$ **sous-estime** la variance (estimateur biaisé) ; le biais est surtout sensible quand $n$ est petit.
- **Sans biais** = juste en moyenne sur tous les échantillons, ce qui n'implique pas exact sur un échantillon donné.
<!-- /step -->
