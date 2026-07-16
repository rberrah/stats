---
id: "d-5-spearman"
slug: "d-5-spearman"
title: "Corrélation des rangs de Spearman"
description: "Calculer une corrélation sur les rangs plutôt que sur les valeurs : le coefficient rₛ capte toute liaison monotone, même non linéaire, et résiste aux valeurs extrêmes."
track: "section-D"
order: 45
duration: "11 min"
programItem: "D-5"
tags: ["Spearman", "corrélation", "rangs", "liaison monotone", "Pearson"]
level: "intermediate"
sources: ["spearman-1904", "altman", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Quel type de liaison le coefficient de Spearman rₛ est-il capable de détecter ?"
    options:
      - "Uniquement une liaison strictement linéaire"
      - "Toute liaison monotone, même courbe (non linéaire)"
      - "Uniquement une liaison en forme de U"
    correct: 1
  - prompt: "Comment calcule-t-on le coefficient de Spearman ?"
    options:
      - "En appliquant la formule de Pearson aux rangs des deux variables"
      - "En appliquant la formule de Pearson aux valeurs brutes"
      - "En comptant les paires concordantes moins les discordantes divisé par n"
    correct: 0
---

<!-- step:title="Quand la liaison n'est pas une droite" -->
Le coefficient de corrélation de **Pearson**, noté $r$, mesure à quel point deux variables s'alignent sur une **droite**. C'est un excellent outil… tant que la relation est effectivement linéaire et les données à peu près normales.

Mais la biologie regorge de relations **courbes**. La concentration d'un polluant dans l'eau et son accumulation dans le foie d'un poisson croissent ensemble, mais de façon exponentielle. La dose d'un médicament et son effet suivent souvent une courbe qui s'infléchit. Dans ces cas, les deux variables « montent ensemble » sans jamais former une droite : Pearson, qui ne sait mesurer que l'alignement linéaire, **sous-estime** alors la force de la liaison.

Il nous faut un coefficient qui reconnaisse une relation dès lors qu'elle est **monotone** — c'est-à-dire toujours croissante, ou toujours décroissante — sans exiger qu'elle soit droite. C'est exactement ce que fournit la corrélation des rangs de **Spearman**, notée $r_s$.
<!-- /step -->

<!-- step:title="L'idée : la corrélation de Pearson… sur les rangs" -->
La recette est d'une élégance remarquable. On ne change pas de formule : on change de matière première.

- On **range** séparément les valeurs de $X$ (rang de 1 à $n$) et les valeurs de $Y$.
- On applique ensuite la **formule de Pearson**, mais aux **rangs** au lieu des valeurs brutes.

Pourquoi cela résout notre problème ? Parce qu'une relation courbe mais monotone devient **parfaitement linéaire une fois exprimée en rangs** : si $Y$ augmente toujours quand $X$ augmente, alors le rang de $Y$ augmente exactement en même temps que le rang de $X$, quelle que soit la courbure. Les rangs redressent la courbe.

Dans le cas commode où il n'y a **aucun ex æquo**, la formule de Pearson sur les rangs se simplifie en une expression très maniable, fondée sur les différences de rangs $d = \text{rang}(X) - \text{rang}(Y)$ de chaque paire :

$$r_s = 1 - \frac{6\sum d^{\,2}}{n\,(n^2 - 1)}$$

Comme $r$, le coefficient $r_s$ varie entre $-1$ (liaison monotone décroissante parfaite) et $+1$ (croissante parfaite), $0$ signalant l'absence de tendance monotone.
<!-- /step -->

<!-- step:title="Un exemple chiffré complet" viz="Correlation" -->
On étudie la **bioaccumulation** d'un polluant : sa concentration dans l'eau ($X$, en µg/L) et sa concentration mesurée dans le foie de poissons ($Y$, en mg/kg), sur sept sites.

| Site | $X$ (eau) | $Y$ (foie) | rang $X$ | rang $Y$ | $d$ | $d^2$ |
|---|---|---|---|---|---|---|
| 1 | 2 | 3,1 | 1 | 1 | 0 | 0 |
| 2 | 4 | 5,0 | 2 | 3 | −1 | 1 |
| 3 | 5 | 3,8 | 3 | 2 | +1 | 1 |
| 4 | 8 | 9,5 | 4 | 4 | 0 | 0 |
| 5 | 11 | 22 | 5 | 5 | 0 | 0 |
| 6 | 15 | 60 | 6 | 6 | 0 | 0 |
| 7 | 20 | 150 | 7 | 7 | 0 | 0 |

La relation entre $X$ et $Y$ est fortement **courbe** (les valeurs de $Y$ explosent : 3,1 puis 150). Mais en rangs, elle est presque parfaite : seuls les sites 2 et 3 sont légèrement inversés.

$$\sum d^{\,2} = 0+1+1+0+0+0+0 = 2$$

$$r_s = 1 - \frac{6 \times 2}{7\,(7^2 - 1)} = 1 - \frac{12}{7 \times 48} = 1 - \frac{12}{336} = 1 - 0{,}036 \approx 0{,}96$$

Un $r_s \approx 0{,}96$ : la liaison monotone est presque parfaite.

:::howto
**Comment lire le nuage.** Déplacez les points : tant qu'ils *montent* toujours (sans jamais redescendre), $r_s$ reste proche de $+1$, même si le nuage dessine une courbe et non une droite. Pearson, lui, chuterait dès que la courbure s'accentue.
:::
<!-- /step -->

<!-- step:title="Spearman contre Pearson : la comparaison décisive" -->
Sur ces mêmes données, la corrélation de **Pearson** appliquée aux valeurs brutes vaut environ $0{,}91$ : déjà plus basse que $r_s$, et elle s'effondrerait bien davantage sur une courbure plus prononcée ou en présence d'un point franchement aberrant. Pourquoi cet écart ?

Parce que Pearson est tiré vers le bas par la **courbure** : les points ne s'alignent pas sur une droite, et l'unique valeur géante ($Y = 150$) déforme tout le calcul. Spearman, en travaillant sur les rangs, ignore et la courbure et l'ampleur des écarts : il ne voit que l'ordre, qui, lui, est quasi parfait.

| | Pearson $r$ | Spearman $r_s$ |
|---|---|---|
| Mesure | liaison **linéaire** | liaison **monotone** |
| Calcul sur | les **valeurs** | les **rangs** |
| Sensible aux valeurs extrêmes | oui, beaucoup | non, très peu |
| Suppose la normalité | oui (pour tester $r$) | non |

:::key
Retenez le partage des rôles : **Pearson mesure l'alignement sur une droite**, **Spearman mesure la tendance à monter ou descendre ensemble**. Face à une relation courbe, asymétrique ou parasitée par une valeur extrême, Spearman est le choix robuste.
:::
<!-- /step -->

<!-- step:title="Tester la significativité de rₛ" -->
Un coefficient calculé sur sept sites pourrait n'être qu'un caprice du hasard. On teste donc l'hypothèse nulle « $X$ et $Y$ ne sont liées par aucune tendance monotone » ($r_s = 0$ dans la population).

Pour les petits effectifs, on compare $r_s$ à une **valeur critique** tabulée : on conclut à une liaison significative si $|r_s|$ **dépasse** ce seuil. Pour $n = 7$ au risque bilatéral de 5 %, la table donne un seuil d'environ $0{,}79$ ; notre $r_s \approx 0{,}96$ le franchit largement : la corrélation est **significative**.

Pour de plus grands effectifs, on peut recourir à une approximation (par une loi de Student à $n-2$ degrés de liberté), comme pour Pearson.

:::note
Attention à ne pas confondre **force** et **significativité**. Un $r_s = 0{,}96$ décrit une liaison *forte* ; le test dit seulement si elle est *trop marquée pour être due au hasard*. Sur de très grands échantillons, un $r_s$ modeste peut être significatif ; sur de très petits, un $r_s$ élevé peut ne pas l'être.
:::
<!-- /step -->

<!-- step:title="Piège : monotone ne veut pas dire causal, ni « en cloche »" -->
Deux confusions guettent.

**Spearman ne voit que le monotone.** Une relation **en U** — $Y$ baisse puis remonte quand $X$ croît (comme la mortalité en fonction d'une dose, minimale à dose moyenne) — n'est pas monotone. Spearman y renverra un $r_s$ proche de 0, alors qu'il existe une liaison bien réelle, mais non monotone. Un coefficient nul ne signifie donc **jamais** « aucune relation », seulement « aucune **tendance monotone** ».

:::pitfall
Comme toute corrélation, $r_s \ne$ causalité. Un $r_s$ élevé entre deux variables peut venir d'un **troisième facteur** commun. Et un $r_s \approx 0$ n'exclut pas une liaison forte mais **non monotone** : tracez toujours le nuage de points avant de conclure.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le coefficient de **Spearman** $r_s$ est la corrélation de **Pearson appliquée aux rangs** de $X$ et de $Y$.
- Il capte toute **liaison monotone**, même **courbe** (non linéaire), et résiste aux **valeurs extrêmes** ; il ne suppose aucune normalité.
- Sans ex æquo : $r_s = 1 - \dfrac{6\sum d^{\,2}}{n(n^2-1)}$, où $d$ est la différence de rangs de chaque paire.
- Sur notre exemple ($n = 7$, relation exponentielle) : $\sum d^2 = 2$, d'où $r_s \approx 0{,}96$, bien au-dessus du seuil critique $\approx 0{,}79$ : liaison **significative**.
- **Pearson** mesure l'alignement **linéaire** ; **Spearman** la **tendance monotone**. Un $r_s$ nul signifie « pas de tendance monotone », pas « aucune relation ».
<!-- /step -->
