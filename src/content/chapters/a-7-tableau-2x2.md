---
id: "a-7-tableau-2x2"
slug: "a-7-tableau-2x2"
title: "Le tableau 2 × 2 et la comparaison de plusieurs pourcentages"
description: "Le cas particulier du tableau à 1 degré de liberté, son équivalence avec l'écart-réduit de deux pourcentages et la correction de continuité."
track: "section-A"
order: 17
duration: "13 min"
programItem: "A-7"
tags: ["tableau 2x2", "khi-deux", "correction de Yates", "comparaison de pourcentages"]
level: "intermediate"
sources: ["yates-1934", "pearson-1900", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le χ² d'un tableau 2 × 2 possède combien de degrés de liberté ?"
    options:
      - "1"
      - "2"
      - "4"
    correct: 0
  - prompt: "Quel lien existe entre l'écart-réduit z de deux pourcentages (A-4) et le χ² du tableau 2 × 2 correspondant ?"
    options:
      - "χ² = z²"
      - "χ² = 2z"
      - "il n'y a aucun lien"
    correct: 0
  - prompt: "La correction de continuité (Yates) sur un tableau 2 × 2 a pour effet de :"
    options:
      - "augmenter le χ² et faciliter le rejet de H0"
      - "diminuer le χ² et rendre le test plus prudent"
      - "changer le nombre de degrés de liberté"
    correct: 1
---

<!-- step:title="Le tableau le plus fréquent" -->
Le tableau **2 × 2** — deux lignes, deux colonnes — est de loin le plus rencontré : exposé / non exposé croisé avec malade / non malade, traité / témoin croisé avec succès / échec.

Prenons une étude de cohorte sur un facteur de risque :

| | Malades | Non malades | Total |
|---|---|---|---|
| Exposés | 40 | 60 | 100 |
| Non exposés | 25 | 75 | 100 |
| **Total** | **65** | **135** | **200** |

La proportion de malades est de **40 % chez les exposés** contre **25 % chez les non exposés**. On veut tester si l'exposition est **liée** à la maladie. C'est le χ² d'indépendance du chapitre précédent, appliqué à un tableau minimal — un cas si central qu'il mérite un chapitre à lui seul.
<!-- /step -->

<!-- step:title="Un seul degré de liberté" -->
Appliquons la règle des degrés de liberté à ce format :

$$\text{ddl} = (l-1)(c-1) = (2-1)(2-1) = 1$$

**Une seule** case est libre. Dès que les quatre totaux (marges) sont fixés et qu'une case est connue, les trois autres se déduisent par soustraction. Tout le tableau tient dans un unique nombre.

Les effectifs attendus sous indépendance se calculent comme avant, par le produit des marges. Pour la case « exposés / malades » :

$$C = \dfrac{100 \times 65}{200} = 32{,}5$$

Par symétrie, les quatre attendus valent 32,5 ; 67,5 ; 32,5 ; 67,5. Chaque case s'écarte de son attendu de $\pm 7{,}5$.
<!-- /step -->

<!-- step:title="Calcul du χ² et formule directe" viz="KhiDeux" -->
:::howto
**Comment lire le schéma.** Les quatre cases s'écartent toutes du même montant, 7,5, mais leurs contributions $(O-C)^2/C$ diffèrent : les cases « malades » (attendu 32,5) pèsent plus que les cases « non malades » (attendu 67,5), car diviser par un plus petit attendu amplifie l'écart relatif.
:::

$$\chi^2 = \dfrac{(40-32{,}5)^2}{32{,}5} + \dfrac{(60-67{,}5)^2}{67{,}5} + \dfrac{(25-32{,}5)^2}{32{,}5} + \dfrac{(75-67{,}5)^2}{67{,}5}$$

$$\chi^2 = 1{,}73 + 0{,}83 + 1{,}73 + 0{,}83 \approx 5{,}13$$

Pour un tableau 2 × 2 de cases $a, b, c, d$, une **formule directe** évite de passer par les attendus :

$$\chi^2 = \dfrac{N\,(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}$$

Avec $a=40,\ b=60,\ c=25,\ d=75$ et $N=200$ : $ad - bc = 3000 - 1500 = 1500$, d'où

$$\chi^2 = \dfrac{200 \times 1500^2}{100 \times 100 \times 65 \times 135} = \dfrac{450\,000\,000}{87\,750\,000} \approx 5{,}13$$

Pour 1 ddl, le seuil à 5 % est **3,84**. Comme $5{,}13 > 3{,}84$, l'association exposition–maladie est **significative**.
<!-- /step -->

<!-- step:title="Le pont avec la comparaison de deux pourcentages" -->
Ce test 2 × 2 est *exactement* la comparaison de deux pourcentages du chapitre A-4. Vérifions. Proportions : $f_1 = 0{,}40$ (exposés), $f_2 = 0{,}25$ (non exposés), pourcentage commun $p_c = 65/200 = 0{,}325$.

$$z = \dfrac{0{,}40 - 0{,}25}{\sqrt{0{,}325 \times 0{,}675 \times (\tfrac{1}{100} + \tfrac{1}{100})}} = \dfrac{0{,}15}{0{,}0662} \approx 2{,}26$$

Et $z^2 = 2{,}26^2 \approx 5{,}13 = \chi^2$. Ce n'est pas une coïncidence :

:::key
Sur un tableau 2 × 2, le χ² (à 1 ddl) est le **carré de l'écart-réduit** de la comparaison des deux pourcentages : $\chi^2 = z^2$. Les deux tests donnent toujours la même conclusion. De même, le seuil 3,84 vaut $1{,}96^2$.
:::
<!-- /step -->

<!-- step:title="La correction de continuité" -->
Le χ² est une loi **continue** que l'on applique à des effectifs **entiers** ; l'approximation surestime un peu la signification, surtout pour de petits effectifs. La **correction de continuité de Yates** rend le test plus prudent en rapprochant chaque écart de zéro d'une demi-unité :

$$\chi^2_{\text{c}} = \dfrac{N\,\big(|ad - bc| - \tfrac{N}{2}\big)^2}{(a+b)(c+d)(a+c)(b+d)}$$

Sur notre tableau : $|ad-bc| - N/2 = 1500 - 100 = 1400$, d'où

$$\chi^2_{\text{c}} = \dfrac{200 \times 1400^2}{87\,750\,000} \approx 4{,}47$$

Le χ² corrigé (4,47) est plus faible que le brut (5,13) mais reste au-dessus de 3,84 : la conclusion tient. La correction ne change la décision que dans les cas limites.

:::pitfall
La correction de Yates n'est utile que pour des effectifs **modestes**. Sur de grands tableaux, elle ne change presque rien ; sur de **très petits** effectifs (attendu < 5), elle ne suffit plus, et le χ² lui-même n'est plus valide : il faut alors le **test exact de Fisher** (A-8).
:::
<!-- /step -->

:::pitfall
**Données appariées : le χ² 2×2 est faux.** Tout ceci suppose **deux groupes indépendants**. Si le même sujet est compté deux fois — un pourcentage mesuré **avant puis après** chez les mêmes patients, ou deux tests appliqués à chaque malade — les lignes ne sont plus indépendantes. On utilise alors le **test de McNemar**, qui ne regarde que les **paires discordantes** (les sujets qui ont changé de statut) : $\chi^2 = (b-c)^2/(b+c)$ sur ces seules cases. Confondre les deux, c'est comparer des sujets à eux-mêmes comme s'ils étaient étrangers.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le tableau **2 × 2** est un χ² d'indépendance à **1 degré de liberté** ; une seule case y est libre.
- Formule directe : $\chi^2 = N(ad-bc)^2 / [(a+b)(c+d)(a+c)(b+d)]$ ; seuil à 5 % : **3,84**.
- Il est **équivalent** à la comparaison de deux pourcentages : $\chi^2 = z^2$, mêmes conclusions.
- La **correction de continuité** (Yates) diminue le χ² et rend le test plus prudent pour les effectifs modestes.
- Effectifs attendus trop faibles (< 5) : ni le χ², ni Yates ne conviennent → test exact de Fisher.
- **Mesures appariées** (mêmes sujets avant/après) : ni χ² ni Fisher, mais **McNemar** sur les paires discordantes.
<!-- /step -->
