---
id: "d-2-mann-whitney-wilcoxon"
slug: "d-2-mann-whitney-wilcoxon"
title: "Deux groupes indépendants : Mann-Whitney et Wilcoxon"
description: "Classer toutes les valeurs ensemble, sommer les rangs d'un groupe, en déduire la statistique U (ou W) : l'équivalent non paramétrique du t de Student sur deux échantillons."
track: "section-D"
order: 42
duration: "12 min"
programItem: "D-2"
tags: ["Mann-Whitney", "Wilcoxon", "rangs", "deux groupes", "U", "test non paramétrique"]
level: "intermediate"
sources: ["mann-whitney-1947", "wilcoxon-1945", "altman", "schwartz"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Pour le test de Mann-Whitney, sur quel ensemble effectue-t-on le classement des observations ?"
    options:
      - "Sur chaque groupe séparément, puis on compare les deux classements"
      - "Sur les deux groupes réunis en une seule série ordonnée"
      - "Uniquement sur le groupe dont l'effectif est le plus grand"
    correct: 1
  - prompt: "Avec une table de Mann-Whitney, on rejette l'hypothèse nulle d'égalité des deux groupes lorsque :"
    options:
      - "U observé est inférieur ou égal à la valeur critique de la table"
      - "U observé est supérieur ou égal à la valeur critique de la table"
      - "U observé est exactement égal à n₁ × n₂"
    correct: 0
---

<!-- step:title="La question et l'intuition" -->
Vous voulez comparer **deux groupes indépendants** : un traitement contre un témoin, des hommes contre des femmes, une souche bactérienne contre une autre. Sur des données normales, vous utiliseriez le $t$ de Student. Mais si les effectifs sont petits ou la distribution douteuse, il vous faut son cousin non paramétrique : le test de **Mann-Whitney** (aussi appelé test de la somme des rangs de **Wilcoxon** — c'est le même test, sous deux noms historiques).

L'intuition est limpide. Imaginez que vous mélangiez toutes les valeurs des deux groupes et que vous les rangiez de la plus petite à la plus grande. Si les deux groupes sont semblables, leurs valeurs seront **entrelacées** : petits et grands rangs se répartissent équitablement entre les deux. Mais si un groupe a systématiquement des valeurs plus élevées, il **monopolisera les grands rangs**, et l'autre les petits.

Toute la mécanique du test consiste à mesurer ce déséquilibre.
<!-- /step -->

<!-- step:title="La recette en trois gestes" -->
1. **Classer ensemble.** On réunit les $n_1 + n_2$ observations en une seule série, et on leur attribue un rang de 1 (la plus petite) à $n_1 + n_2$ (la plus grande).
2. **Sommer les rangs d'un groupe.** On additionne les rangs appartenant à l'un des groupes, disons le groupe A : c'est la somme $R_A$, base historique du test de Wilcoxon.
3. **Calculer U.** On en déduit la statistique de Mann-Whitney :

$$U_A = R_A - \frac{n_A\,(n_A+1)}{2}$$

Le terme soustrait, $\frac{n_A(n_A+1)}{2}$, est la somme minimale que le groupe A pourrait atteindre (s'il occupait tous les plus petits rangs). $U_A$ mesure donc de combien le groupe A « dépasse » ce plancher.

On calcule de même $U_B$ pour l'autre groupe, et l'on dispose d'un garde-fou pratique :

$$U_A + U_B = n_A \times n_B$$

La statistique de test retenue est la **plus petite des deux** : $U = \min(U_A, U_B)$.
<!-- /step -->

<!-- step:title="Un exemple chiffré, du début à la fin" -->
On compare le **temps de cicatrisation** (en jours) d'une plaie standardisée chez la souris, sous une pommade **test** (groupe A) et une pommade **témoin** (groupe B), six animaux par groupe.

- Groupe A (test) : 4 · 6 · 7 · 9 · 10 · 12
- Groupe B (témoin) : 8 · 11 · 13 · 14 · 16 · 18

**Étape 1 — classement des douze valeurs réunies :**

| Valeur | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Groupe | A | A | A | B | A | A | B | A | B | B | B | B |
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

**Étape 2 — somme des rangs de chaque groupe :**

$$R_A = 1+2+3+5+6+8 = 25 \qquad R_B = 4+7+9+10+11+12 = 53$$

Vérification : $R_A + R_B = 78 = \frac{12 \times 13}{2}$. ✓

**Étape 3 — statistiques U :**

$$U_A = 25 - \frac{6 \times 7}{2} = 25 - 21 = 4 \qquad U_B = 53 - 21 = 32$$

Contrôle : $U_A + U_B = 4 + 32 = 36 = 6 \times 6$. ✓ On retient $U = \min(4,\,32) = 4$.
<!-- /step -->

<!-- step:title="La décision : lire la table" -->
Que signifie $U = 4$ ? Un $U$ **petit** traduit un fort déséquilibre : l'un des groupes accapare les petits rangs, l'autre les grands. Un $U$ **grand** (proche de $\frac{n_A n_B}{2} = 18$ ici) traduirait au contraire un mélange harmonieux, donc des groupes semblables.

Pour trancher sur petits effectifs, on compare $U$ à une **valeur critique** lue dans la table de Mann-Whitney. La règle de décision est :

:::key
On rejette l'hypothèse nulle (« les deux groupes ont la même distribution ») lorsque le $U$ observé est **inférieur ou égal** à la valeur critique de la table.
:::

Pour $n_A = n_B = 6$, au risque bilatéral $\alpha = 0{,}05$, la table donne une valeur critique de **5**. Or notre $U = 4 \le 5$ : on **rejette** l'hypothèse nulle. La pommade test accélère bel et bien la cicatrisation — un résultat obtenu sans jamais supposer la moindre normalité.
<!-- /step -->

<!-- step:title="Grands effectifs : l'approximation normale" -->
Les tables s'arrêtent vers $n = 20$. Au-delà, on n'en a plus besoin : quand les effectifs grandissent, la statistique $U$ se comporte comme une loi normale. On la centre et on la réduit :

$$Z = \frac{U - \mu_U}{\sigma_U}, \qquad \mu_U = \frac{n_A\,n_B}{2}, \qquad \sigma_U = \sqrt{\frac{n_A\,n_B\,(n_A+n_B+1)}{12}}$$

On compare alors $|Z|$ à 1,96 (seuil bilatéral à 5 %), exactement comme pour un écart réduit. Le test de rangs rejoint ainsi le formalisme familier des grands échantillons.

:::note
Mann-Whitney et Wilcoxon-somme-des-rangs désignent **le même test** : Wilcoxon (1945) l'a formulé via la somme des rangs $R$, Mann et Whitney (1947) via la statistique $U$. Les deux sont reliées par la formule de l'étape 2 et conduisent rigoureusement à la même décision.
:::
<!-- /step -->

<!-- step:title="Piège : ne pas le confondre avec le Wilcoxon apparié" -->
Le nom de Wilcoxon recouvre **deux tests distincts**, et les mélanger est l'erreur classique.

- Le test présenté ici (somme des rangs de Wilcoxon = Mann-Whitney) compare **deux groupes indépendants** : deux lots d'animaux différents, deux populations séparées.
- Le test **T de Wilcoxon pour séries appariées** (chapitre suivant) s'applique quand les deux mesures portent sur **les mêmes individus** (avant / après).

:::pitfall
Avant / après chez les mêmes patients ? → Wilcoxon **apparié**. Deux groupes de patients **différents** ? → Mann-Whitney. Appliquer Mann-Whitney à des données appariées gaspille l'information du couplage et fait chuter la puissance.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le test de **Mann-Whitney** (= somme des rangs de **Wilcoxon**) est l'équivalent non paramétrique du **$t$ de Student** pour **deux groupes indépendants**.
- Méthode : **classer ensemble** les $n_1+n_2$ valeurs, **sommer les rangs** d'un groupe ($R_A$), en déduire $U_A = R_A - \frac{n_A(n_A+1)}{2}$, retenir $U = \min(U_A, U_B)$.
- Sur notre exemple ($6$ contre $6$) : $R_A = 25$, $U = 4$ ; valeur critique $= 5$ à 5 % bilatéral, donc **on rejette** l'hypothèse nulle.
- Décision sur petits effectifs : **rejet si $U \le$ valeur critique** de la table. Sur grands effectifs : **approximation normale** via $Z$.
- Ne jamais confondre avec le **Wilcoxon apparié** : ici les groupes sont **indépendants**.
<!-- /step -->
