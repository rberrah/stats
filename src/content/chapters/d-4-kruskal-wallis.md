---
id: "d-4-kruskal-wallis"
slug: "d-4-kruskal-wallis"
title: "Plusieurs groupes : le test de Kruskal-Wallis"
description: "Étendre Mann-Whitney à K groupes indépendants : classer toutes les valeurs, comparer les rangs moyens de chaque groupe, en déduire la statistique H — l'équivalent non paramétrique de l'analyse de variance."
track: "section-D"
order: 44
duration: "12 min"
programItem: "D-4"
tags: ["Kruskal-Wallis", "K groupes", "ANOVA", "rangs", "H", "test non paramétrique"]
level: "intermediate"
sources: ["kruskal-wallis-1952", "mann-whitney-1947", "altman", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Le test de Kruskal-Wallis est l'équivalent non paramétrique de quel test paramétrique ?"
    options:
      - "L'analyse de variance (ANOVA) à un facteur"
      - "Le t de Student pour deux groupes indépendants"
      - "Le test du khi-deux d'indépendance entre variables"
    correct: 0
  - prompt: "À quelle loi compare-t-on la statistique H pour décider, et avec combien de degrés de liberté (K groupes) ?"
    options:
      - "À une loi normale centrée réduite, sans degré de liberté"
      - "À une loi du khi-deux à K − 1 degrés de liberté"
      - "À une loi du khi-deux à N − 1 degrés de liberté"
    correct: 1
---

<!-- step:title="Au-delà de deux groupes" -->
Mann-Whitney compare deux groupes indépendants. Mais que faire lorsqu'il y en a **trois, quatre ou davantage** ? Trois régimes alimentaires, quatre doses d'un principe actif, cinq laboratoires d'analyse : on veut savoir si **au moins l'un des groupes** se distingue des autres.

Le réflexe naïf serait de multiplier les Mann-Whitney deux à deux. C'est un piège bien connu : chaque comparaison porte son propre risque $\alpha$, et à force de les cumuler, le risque global d'une fausse alarme explose. C'est exactement le problème qui, pour les données normales, justifiait l'**analyse de variance** (ANOVA) plutôt que des $t$ de Student répétés.

Le test de **Kruskal-Wallis** est la réponse non paramétrique : un **test global unique**, l'équivalent sur les rangs de l'ANOVA à un facteur.
<!-- /step -->

<!-- step:title="L'idée : comparer les rangs moyens" -->
Le principe prolonge naturellement celui de Mann-Whitney.

1. On **réunit toutes les observations** des $K$ groupes en une seule série, et on les classe de 1 à $N$ (l'effectif total).
2. Pour chaque groupe $i$, on calcule la **somme des rangs** $R_i$, puis son **rang moyen** $\bar{R}_i = R_i / n_i$.
3. Si tous les groupes étaient semblables, leurs rangs moyens seraient tous proches du rang moyen général $\frac{N+1}{2}$. S'ils diffèrent, certains groupes auront un rang moyen nettement plus haut ou plus bas.

La statistique $H$ mesure précisément l'**écartement** des rangs moyens de groupe autour de la valeur centrale :

$$H = \frac{12}{N(N+1)} \sum_{i=1}^{K} \frac{R_i^{\,2}}{n_i} \;-\; 3\,(N+1)$$

Plus les groupes se ressemblent, plus $H$ est petit. Plus ils se séparent, plus $H$ enfle.
<!-- /step -->

<!-- step:title="Un exemple chiffré complet" -->
On mesure l'**activité d'une enzyme** (en UI/L) chez des rats soumis à **trois régimes** (A, B, C), quatre rats par régime.

- Régime A : 12 · 15 · 18 · 21
- Régime B : 20 · 24 · 27 · 30
- Régime C : 28 · 33 · 36 · 40

**Classement des douze valeurs réunies** ($N = 12$) :

| Valeur | 12 | 15 | 18 | 20 | 21 | 24 | 27 | 28 | 30 | 33 | 36 | 40 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Groupe | A | A | A | B | A | B | B | C | B | C | C | C |
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

**Sommes des rangs par groupe :**

$$R_A = 1+2+3+5 = 11 \qquad R_B = 4+6+7+9 = 26 \qquad R_C = 8+10+11+12 = 41$$

Contrôle : $R_A + R_B + R_C = 78 = \frac{12 \times 13}{2}$. ✓ Les rangs moyens $\frac{11}{4} = 2{,}75$, $\frac{26}{4} = 6{,}5$ et $\frac{41}{4} = 10{,}25$ montent nettement de A vers C.
<!-- /step -->

<!-- step:title="Le calcul de H et la décision" -->
On applique la formule. D'abord la somme centrale :

$$\sum_{i} \frac{R_i^{\,2}}{n_i} = \frac{11^2}{4} + \frac{26^2}{4} + \frac{41^2}{4} = \frac{121 + 676 + 1681}{4} = \frac{2478}{4} = 619{,}5$$

Puis :

$$H = \frac{12}{12 \times 13}\times 619{,}5 \;-\; 3 \times 13 = \frac{619{,}5}{13} - 39 = 47{,}65 - 39 = 8{,}65$$

(car $\frac{12}{12 \times 13} = \frac{1}{13}$, et $\frac{619{,}5}{13} = 47{,}65$).

**Comment décider ?** Pour un effectif suffisant, $H$ suit approximativement une **loi du khi-deux** à $K-1$ degrés de liberté. Ici $K = 3$, donc **2 degrés de liberté**.

:::key
On rejette l'hypothèse nulle (« les $K$ groupes ont la même distribution ») lorsque $H$ **dépasse** la valeur critique du khi-deux à $K-1$ degrés de liberté.
:::

Au risque $\alpha = 0{,}05$, le khi-deux à 2 degrés de liberté vaut **5,99**. Notre $H = 8{,}65 > 5{,}99$ : on **rejette**. Les trois régimes n'ont pas le même effet sur l'activité enzymatique.
<!-- /step -->

<!-- step:title="Ce que H dit et ne dit pas" -->
Le test de Kruskal-Wallis est un test **global** : il répond à la question « **au moins un** groupe diffère-t-il des autres ? », sans préciser **lequel**. Exactement comme l'ANOVA, un résultat significatif ouvre la porte mais ne désigne pas le coupable.

Pour identifier quels groupes diffèrent, on procède ensuite à des **comparaisons deux à deux** (par exemple des tests de Mann-Whitney), **assorties d'une correction** du risque $\alpha$ pour compenser leur multiplicité — le même souci de rigueur que pour les comparaisons post-ANOVA.

:::note
Cohérence de la famille : pour $K = 2$ groupes seulement, le test de Kruskal-Wallis redonne exactement la même décision que le test de Mann-Whitney. Kruskal-Wallis n'est rien d'autre que la **généralisation de Mann-Whitney à $K$ groupes**.
:::
<!-- /step -->

<!-- step:title="Piège : effectifs trop petits et ex æquo" -->
Deux limites méritent l'attention.

L'approximation par le **khi-deux** n'est fiable que si les effectifs ne sont pas trop faibles (en pratique, au moins cinq observations par groupe est confortable ; avec quatre par groupe comme dans notre exemple, on reste prudent et l'on peut recourir à des tables exactes). Pour des groupes minuscules, des tables spécifiques existent.

:::pitfall
Comme tous les tests de rangs, Kruskal-Wallis souffre des **ex æquo** : de nombreuses valeurs égales imposent une **correction** de la statistique $H$ (division par un facteur qui la rehausse légèrement). Et surtout, ne cédez jamais à la tentation des Mann-Whitney répétés **sans correction** : c'est précisément l'erreur que Kruskal-Wallis est fait pour éviter.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le test de **Kruskal-Wallis** compare **$K$ groupes indépendants** : c'est l'équivalent non paramétrique de l'**ANOVA à un facteur** et la généralisation de **Mann-Whitney**.
- Méthode : **classer ensemble** les $N$ valeurs, calculer les sommes de rangs $R_i$, puis $H = \dfrac{12}{N(N+1)} \sum_i \dfrac{R_i^{\,2}}{n_i} - 3(N+1)$.
- Sur notre exemple (3 régimes, 4 rats chacun) : $R_A = 11$, $R_B = 26$, $R_C = 41$, d'où $H \approx 8{,}65$.
- Décision : comparer $H$ à un **khi-deux à $K-1$ degrés de liberté**. Ici $8{,}65 > 5{,}99$ : on **rejette**.
- C'est un test **global** : un résultat significatif appelle des **comparaisons deux à deux corrigées** pour savoir quels groupes diffèrent.
<!-- /step -->
