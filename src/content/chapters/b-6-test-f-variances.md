---
id: "b-6-test-f-variances"
slug: "b-6-test-f-variances"
title: "Comparaison de deux variances : le test F"
description: "Comparer deux dispersions par le rapport de leurs variances : la statistique F, sa table, et son usage comme test préliminaire."
track: "section-B"
order: 26
duration: "11 min"
programItem: "B-6"
tags: ["test F", "variances", "rapport de variances", "homoscédasticité"]
level: "intermediate"
sources: ["fisher-1925", "brown-forsythe-1974", "welch-1947", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Comment construit-on la statistique F pour comparer deux variances ?"
    options:
      - "En calculant la différence entre la plus grande et la plus petite variance."
      - "En calculant le rapport de la plus grande variance sur la plus petite."
      - "En divisant la somme des deux variances par leur nombre de degrés de liberté."
    correct: 1
  - prompt: "À quoi sert le plus souvent le test F dans la comparaison de deux moyennes ?"
    options:
      - "À remplacer le test t lorsque les effectifs des deux groupes comparés sont vraiment trop petits."
      - "À vérifier au préalable l'égalité des variances, condition d'emploi du test t classique."
      - "À comparer directement les deux moyennes sans passer par le calcul de la statistique t."
    correct: 1
---

<!-- step:title="Comparer des dispersions, pas des centres" -->
Jusqu'ici on comparait des **moyennes** (où se situe le centre ?). Mais parfois la question porte sur la **dispersion** elle-même. Deux automates de dosage donnent la même valeur moyenne de glycémie : très bien. Mais l'un est-il plus **régulier** que l'autre ? Un appareil de laboratoire fiable se juge autant à sa constance qu'à sa justesse.

Comparer deux dispersions revient à comparer deux **variances**. L'outil dédié est le **test F** (du nom de Fisher).
<!-- /step -->

<!-- step:title="L'idée : un rapport, pas une différence" -->
Pour comparer deux moyennes, on faisait une différence. Pour deux variances, on fait un **rapport**. La logique : si les deux populations ont la même variance, le rapport des deux variances observées doit tourner **autour de 1**.

Par convention, on place la **plus grande** variance au numérateur, de sorte que $F \geq 1$ :

$$F = \frac{s_1^2}{s_2^2} \qquad (s_1^2 \geq s_2^2)$$

Attention : forcer la plus grande variance en haut revient à tester $H_1 : \sigma_1^2 \neq \sigma_2^2$, donc en **bilatéral**. Au risque global de 5 %, on lit alors la table **à $\alpha/2 = 2{,}5\,\%$** — sinon le vrai risque de première espèce est doublé (10 %).

- $F$ proche de 1 → les deux variances sont compatibles ; l'écart est du bruit d'échantillonnage.
- $F$ nettement supérieur à 1 (2, 3, 4…) → l'une des dispersions est réellement plus grande.

Toute la question est de savoir à partir de quel seuil $F$ devient « trop grand pour le hasard ».
<!-- /step -->

<!-- step:title="La loi F et sa table" viz="LoiNormale" -->
Sous l'hypothèse d'égalité des variances, $F$ suit une **loi de Fisher-Snedecor**, qui dépend de **deux** nombres de degrés de liberté : celui du numérateur $\nu_1 = n_1 - 1$ et celui du dénominateur $\nu_2 = n_2 - 1$.

La table de $F$ se lit donc à double entrée : une colonne pour $\nu_1$, une ligne pour $\nu_2$. On y trouve le seuil au-delà duquel on rejette l'égalité des variances (typiquement au risque de 5 %).

:::note
Contrairement à la loi de Student, la loi $F$ n'est **pas symétrique** : elle ne prend que des valeurs positives et s'étale vers la droite. C'est logique — un rapport de deux quantités positives est toujours positif.
:::
<!-- /step -->

<!-- step:title="Un exemple chiffré" -->
On mesure la répétabilité de deux techniques de dosage de l'hémoglobine (g/dL).

- Technique A : $n_1 = 13$, variance $s_1^2 = 0{,}36$
- Technique B : $n_2 = 16$, variance $s_2^2 = 0{,}12$

La plus grande variance est celle de A, donc au numérateur :

$$F = \frac{0{,}36}{0{,}12} = 3{,}0$$

avec $\nu_1 = 12$ et $\nu_2 = 15$ degrés de liberté. Comme le test est bilatéral, on lit la table **à 2,5 %** : le seuil vaut alors $F \approx 2{,}96$. Comme $3{,}0 > 2{,}96$, on **rejette** — de justesse — l'égalité : la technique A est significativement plus dispersée (moins reproductible) que la technique B. *(Lu par erreur à 5 %, le seuil serait 2,5 et l'on conclurait bien trop facilement.)*
<!-- /step -->

<!-- step:title="L'usage principal : test préliminaire" -->
Au-delà de son intérêt propre, le test $F$ joue un rôle de **garde-fou avant le test $t$**. Rappelons (B-4) que le test $t$ classique suppose l'**égalité des variances** pour fondre les deux groupes en une variance commune. Comment le vérifier ? Précisément par un test $F$ sur les deux variances.

La démarche enchaînée est donc :

1. **Test $F$** sur les deux variances.
2. Si $F$ **non significatif** (variances compatibles) → test $t$ classique, avec variance commune.
3. Si $F$ **significatif** (variances trop différentes) → variante de Welch, qui n'agrège pas les variances.

:::key
Le test $F$ est le **test préliminaire** qui valide (ou non) la condition d'égalité des variances du test $t$. C'est aussi la brique de base de l'analyse de la variance (B-7), où l'on compare des variances pour trancher sur des moyennes.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Le test $F$ de comparaison de deux variances est **très sensible à la non-normalité** — bien plus que le test $t$ des moyennes. Sur des données franchement asymétriques, il peut conclure à tort à une différence de variances. Par ailleurs, ne l'utilisez pas comme excuse pour tester « tout et n'importe quoi » : enchaîner plusieurs tests préliminaires multiplie les faux positifs. Enfin, pensez à toujours placer la **plus grande** variance au numérateur, sans quoi la lecture de la table est faussée.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Comparer deux **variances** (dispersions) se fait par un **rapport**, pas une différence.
- Statistique : $F = s_1^2 / s_2^2$ avec la **plus grande variance au numérateur** (donc $F \geq 1$).
- La loi $F$ dépend de **deux** degrés de liberté $\nu_1 = n_1-1$ et $\nu_2 = n_2-1$ ; elle est asymétrique et positive.
- $F$ proche de 1 → variances compatibles ; $F$ nettement > 1 → dispersions réellement différentes.
- Usage principal : **test préliminaire** de l'égalité des variances avant un test $t$ ; brique de l'analyse de la variance.
<!-- /step -->
