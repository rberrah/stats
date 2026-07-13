---
id: "d-1-principe-rangs"
slug: "d-1-principe-rangs"
title: "Le principe des tests non paramétriques : raisonner sur les rangs"
description: "Quand la normalité n'est pas acquise, on remplace les valeurs mesurées par leur rang : une idée simple, robuste aux valeurs extrêmes, au prix d'un peu de puissance."
track: "section-D"
order: 41
duration: "10 min"
programItem: "D-1"
tags: ["non paramétrique", "rangs", "robustesse", "normalité", "ordinal"]
level: "beginner"
sources: ["wilcoxon-1945", "hodges-lehmann-1956", "schwartz", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Dans quelle situation un test non paramétrique fondé sur les rangs est-il particulièrement indiqué ?"
    options:
      - "Petit effectif dont la distribution est douteuse, ou variable ordinale"
      - "Grand échantillon parfaitement gaussien, dont on connaît la variance"
      - "Chaque fois qu'on veut absolument le maximum de puissance"
    correct: 0
  - prompt: "Quel est le principal « prix à payer » des tests sur les rangs quand les données sont réellement gaussiennes ?"
    options:
      - "Ils exigent des effectifs pairs"
      - "Ils sont légèrement moins puissants que le test paramétrique correspondant"
      - "Ils ne fournissent jamais de valeur p"
    correct: 1
---

<!-- step:title="Quand la « courbe en cloche » n'est plus garantie" -->
Les tests que vous avez rencontrés jusqu'ici — le $t$ de Student, l'analyse de variance — reposent tous sur une hypothèse discrète mais lourde de conséquences : les données suivent (au moins approximativement) une loi normale. Tant que cette hypothèse tient, ces tests sont excellents. Mais que faire quand elle vacille ?

Trois situations reviennent sans cesse en biologie et en médecine :

- **Petits effectifs.** Avec six souris par groupe, impossible de vérifier sérieusement la forme de la distribution. La supposer gaussienne relève de l'acte de foi.
- **Distributions manifestement asymétriques.** Concentrations d'un toxique, charges virales, temps de survie : ces grandeurs s'étalent vers le haut et n'ont rien d'une cloche symétrique.
- **Variables ordinales.** Un score de douleur de 0 à 4, un stade tumoral, une échelle « faible / moyen / fort » : on peut les *ordonner*, mais la distance entre deux échelons n'a pas de sens numérique. Calculer une moyenne y serait absurde.

Dans tous ces cas, on aimerait un test qui ne demande **rien** sur la forme de la distribution. C'est précisément ce que promettent les tests dits *non paramétriques*.
<!-- /step -->

<!-- step:title="L'idée centrale : remplacer les valeurs par leur rang" -->
L'astuce est d'une simplicité désarmante. Au lieu de travailler sur les valeurs mesurées, on les **classe de la plus petite à la plus grande**, et on ne garde que leur **rang** : 1 pour la plus petite, 2 pour la suivante, et ainsi de suite.

Une fois cette transformation faite, on raisonne uniquement sur ces rangs. Toute l'information de forme, d'unité, d'échelle disparaît : il ne reste que l'**ordre** des observations.

C'est pour cela qu'on parle de tests « non paramétriques » : ils ne cherchent à estimer aucun paramètre (ni moyenne, ni écart-type d'une loi supposée). Ils se contentent de comparer des positions dans un classement.

:::key
Le fil conducteur de toute cette partie : **on abandonne les valeurs numériques au profit de leurs rangs**. Si l'ordre des observations contient déjà l'essentiel de ce qu'on veut démontrer, alors la forme exacte de la distribution ne nous importe plus.
:::
<!-- /step -->

<!-- step:title="Un mini-exemple : du chiffre au rang" -->
Prenons sept dosages d'une enzyme hépatique (en UI/L) chez sept sujets :

$$3{,}2 \quad 3{,}5 \quad 3{,}8 \quad 4{,}1 \quad 4{,}4 \quad 4{,}6 \quad 28{,}0$$

Le dernier sujet a une valeur aberrante : peut-être une hépatite aiguë, peut-être une erreur de pipetage. Peu importe. Regardez ce que devient la série une fois transformée en rangs :

| Valeur | 3,2 | 3,5 | 3,8 | 4,1 | 4,4 | 4,6 | 28,0 |
|---|---|---|---|---|---|---|---|
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

La valeur monstrueuse de 28,0 ne pèse plus que d'un cran : elle occupe le rang 7, « juste au-dessus » du rang 6. Sur les valeurs brutes, cette observation aurait écrasé la moyenne (qui grimpe à 7,4 alors que six sujets sur sept sont autour de 4). Sur les rangs, elle reprend une place raisonnable.

Voilà le cœur de la méthode : **le rang est indifférent à l'ampleur des écarts**, il ne retient que leur sens.
<!-- /step -->

<!-- step:title="Pourquoi ça marche : la robustesse aux valeurs extrêmes" -->
Cette insensibilité à l'ampleur des écarts est la grande force des tests sur les rangs. Une valeur extrême — qu'elle soit réelle ou parasite — ne peut plus, à elle seule, faire basculer une conclusion. Le rang d'une observation ne dépend que de sa **position** parmi les autres, jamais de sa distance à elles.

Concrètement :

- Une donnée aberrante ne compte que pour un rang de plus ou de moins.
- Aucune hypothèse de normalité n'est nécessaire : la méthode fonctionne quelle que soit la forme de la distribution.
- Les variables ordinales, pour lesquelles on ne dispose de toute façon que d'un ordre, deviennent traitables sans bricolage.

:::note
On dit qu'un test est **robuste** lorsque ses conclusions restent fiables même quand les conditions idéales (normalité, absence de valeurs extrêmes) ne sont pas réunies. Les tests de rangs sont robustes par construction, puisqu'ils jettent l'information numérique dès le départ.
:::
<!-- /step -->

<!-- step:title="Le prix à payer : un peu de puissance" -->
Rien n'est gratuit. En ne gardant que les rangs, on **jette de l'information** : on sait que la septième valeur est la plus grande, mais on oublie qu'elle était très largement la plus grande.

Quand les données sont *réellement* gaussiennes, cette information perdue avait une valeur, et le test paramétrique correspondant ($t$ de Student, ANOVA) en tire un léger avantage : il est un peu plus **puissant**, c'est-à-dire un peu plus apte à détecter une différence qui existe vraiment.

L'écart, cependant, est modeste. Pour des données normales, un test de rangs conserve environ 95 % de la puissance du test paramétrique. Autrement dit : vous perdez très peu quand la normalité est vraie, et vous gagnez énormément (validité, robustesse) quand elle est fausse.

:::key
Marché avantageux : **95 % de la puissance dans le pire des cas** (données parfaitement normales), une protection totale contre la non-normalité dans tous les autres. C'est pourquoi, face au doute, le réflexe non paramétrique est souvent le bon.
:::
<!-- /step -->

<!-- step:title="Piège : les ex æquo" -->
Que faire lorsque deux observations sont **strictement égales** ? On ne peut pas leur attribuer deux rangs différents de façon arbitraire.

La règle est d'attribuer à chacune la **moyenne des rangs** qu'elles se partageraient. Si deux valeurs se disputent les rangs 4 et 5, chacune reçoit le rang $\frac{4+5}{2} = 4{,}5$. Si trois valeurs occupent les rangs 6, 7 et 8, chacune reçoit $\frac{6+7+8}{3} = 7$.

:::pitfall
Les tests de rangs supposent au départ des valeurs toutes distinctes. Une **abondance d'ex æquo** — fréquente avec des variables ordinales à peu d'échelons — fausse légèrement les calculs et impose une correction des formules. Un ou deux ex æquo sont sans conséquence ; une majorité de valeurs égales doit vous alerter.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Les tests **non paramétriques** ne supposent **aucune forme** de distribution : on les emploie face aux petits effectifs, aux distributions asymétriques et aux variables **ordinales**.
- Le principe : **remplacer chaque valeur par son rang** dans le classement général, puis raisonner uniquement sur ces rangs.
- Conséquence majeure : la **robustesse aux valeurs extrêmes**. Une donnée aberrante ne pèse que d'un rang, jamais de son ampleur.
- Le **prix à payer** est une légère perte de puissance (environ 5 %) *lorsque les données sont réellement normales* — un coût faible au regard de la sécurité gagnée.
- Les **ex æquo** reçoivent la **moyenne des rangs** correspondants ; leur abondance doit rester exceptionnelle.
<!-- /step -->
