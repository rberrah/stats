---
id: "a-6-chi2-independance"
slug: "a-6-chi2-independance"
title: "Le χ² d'indépendance et le tableau de contingence"
description: "Tester le lien entre deux caractères qualitatifs : effectifs attendus sous indépendance et degrés de liberté du tableau croisé."
track: "section-A"
order: 16
duration: "14 min"
programItem: "A-6"
tags: ["khi-deux", "indépendance", "tableau de contingence", "effectifs attendus"]
quiz:
  - prompt: "Dans un tableau de contingence, l'effectif attendu d'une case sous l'hypothèse d'indépendance vaut :"
    options:
      - "(total de sa ligne × total de sa colonne) / effectif total"
      - "(total de sa ligne + total de sa colonne) / effectif total"
      - "effectif total / nombre de cases"
    correct: 0
  - prompt: "Pour un tableau à l lignes et c colonnes, le nombre de degrés de liberté est :"
    options:
      - "l × c"
      - "(l − 1)(c − 1)"
      - "l + c − 1"
    correct: 1
  - prompt: "Un χ² d'indépendance significatif signifie que :"
    options:
      - "les deux caractères sont indépendants"
      - "les deux caractères sont liés (non indépendants)"
      - "l'un des caractères cause l'autre"
    correct: 1
---

<!-- step:title="Croiser deux caractères qualitatifs" -->
Le χ² d'ajustement comparait une répartition à une théorie **connue d'avance**. Mais la question la plus courante en biologie est autre : **deux caractères qualitatifs sont-ils liés ?**

Exemple. On soupçonne que le taux d'**infection nosocomiale** dépend du **centre hospitalier**. On dispose de trois centres, chacun avec 200 patients suivis :

| Centre | Infection : oui | Infection : non | Total |
|---|---|---|---|
| Centre 1 | 20 | 180 | 200 |
| Centre 2 | 30 | 170 | 200 |
| Centre 3 | 40 | 160 | 200 |
| **Total** | **90** | **510** | **600** |

Ce tableau croisé s'appelle un **tableau de contingence**. Les taux d'infection observés sont 10 %, 15 % et 20 % : ils *semblent* croître. Mais ces écarts sont-ils réels, ou de simples fluctuations ? Ici, aucune répartition théorique n'est donnée : elle devra être **construite** à partir des données.
<!-- /step -->

<!-- step:title="Les effectifs attendus sous indépendance" -->
L'hypothèse nulle est l'**indépendance** : le taux d'infection est le même partout, et seul le hasard crée les différences entre centres.

Sous cette hypothèse, le taux commun est le taux global : $90 / 600 = 15\%$. Si chaque centre suivait ce taux, on attendrait, pour ses 200 patients, $200 \times 15\% = 30$ infections. On généralise par la règle du produit des marges :

$$C_{ij} = \dfrac{(\text{total de la ligne } i) \times (\text{total de la colonne } j)}{N}$$

Par exemple, pour la case « Centre 1 / oui » : $C = (200 \times 90)/600 = 30$. Le tableau des effectifs **attendus** devient :

| Centre | Oui (attendu) | Non (attendu) |
|---|---|---|
| Centre 1 | 30 | 170 |
| Centre 2 | 30 | 170 |
| Centre 3 | 30 | 170 |

L'écart entre observé et attendu saute aux yeux : le centre 1 compte 20 infections là où l'indépendance en prévoit 30 ; le centre 3 en compte 40.
<!-- /step -->

<!-- step:title="Calcul du χ² et degrés de liberté" viz="KhiDeux" -->
:::howto
**Comment lire le schéma.** Chaque case du tableau contribue au χ² par son $(O-C)^2/C$. Les cases où l'observé s'éloigne le plus de l'attendu (ici les centres 1 et 3) « allument » les contributions les plus fortes ; le centre 2, pile sur l'attendu, ne contribue pas. Le total se compare au seuil de la loi du χ² à $(l-1)(c-1)$ degrés de liberté.
:::

On applique la même formule qu'au chapitre précédent, sur les six cases :

$$\chi^2 = \sum \dfrac{(O-C)^2}{C}$$

$$\chi^2 = \underbrace{\dfrac{(20-30)^2}{30} + \dfrac{(180-170)^2}{170}}_{\text{centre 1}} + \underbrace{0 + 0}_{\text{centre 2}} + \underbrace{\dfrac{(40-30)^2}{30} + \dfrac{(160-170)^2}{170}}_{\text{centre 3}}$$

$$\chi^2 = (3{,}33 + 0{,}59) + 0 + (3{,}33 + 0{,}59) \approx 7{,}84$$

Les degrés de liberté d'un tableau de contingence dépendent de sa forme. Une fois les totaux (marges) fixés, seules $(l-1)$ lignes et $(c-1)$ colonnes sont libres :

$$\text{ddl} = (l-1)(c-1) = (3-1)(2-1) = 2$$
<!-- /step -->

<!-- step:title="Conclusion" -->
Pour 2 degrés de liberté, le seuil de la table à 5 % est **5,99**. Notre $\chi^2 = 7{,}84$ le dépasse : on **rejette l'indépendance** (degré de signification $p \approx 0{,}02$).

Autrement dit, le taux d'infection **dépend** du centre : les différences entre 10 %, 15 % et 20 % sont trop marquées pour n'être que du bruit.

:::pitfall
Rejeter l'indépendance établit un **lien**, pas une **cause**. Le centre 3 n'a pas forcément « plus mauvaises pratiques » : il recrute peut-être des patients plus graves, plus âgés, plus longtemps hospitalisés. Le χ² dit qu'il existe une association ; il ne dit ni son sens ni son mécanisme. Un facteur de confusion peut tout expliquer.
:::
<!-- /step -->

<!-- step:title="Le χ² d'indépendance est un test global" -->
:::note
Un χ² significatif sur un tableau de plusieurs lignes indique qu'*au moins un* écart est réel, sans préciser lequel. Pour localiser la source de l'association, on inspecte les contributions individuelles $(O-C)^2/C$ : ici, ce sont les centres 1 et 3 qui portent tout le poids, le centre 2 étant neutre.
:::

La démarche est identique quelle que soit la taille du tableau : construire les attendus par le produit des marges, sommer les $(O-C)^2/C$, et comparer au seuil pour $(l-1)(c-1)$ degrés de liberté. Le prochain chapitre examine le cas le plus courant et le plus simple : le tableau **2 × 2**.
<!-- /step -->

<!-- step:title="À retenir" -->
- Un **tableau de contingence** croise deux caractères qualitatifs ; $H_0$ est leur **indépendance**.
- Effectif attendu d'une case : $C = (\text{total ligne} \times \text{total colonne})/N$ (produit des marges).
- On calcule $\chi^2 = \sum (O-C)^2/C$ sur toutes les cases.
- Degrés de liberté : $\text{ddl} = (l-1)(c-1)$ ; on compare au seuil de la table (5,99 pour 2 ddl).
- Un χ² significatif prouve une **association**, pas une causalité ; c'est un test **global** qu'il faut ensuite localiser via les contributions.
<!-- /step -->
