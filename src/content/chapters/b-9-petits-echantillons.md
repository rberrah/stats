---
id: "b-9-petits-echantillons"
slug: "b-9-petits-echantillons"
title: "Petits échantillons et conditions d'application"
description: "Quand n est petit : le rôle décisif de la normalité, la loi de Student et les limites des tests paramétriques."
track: "section-B"
order: 29
duration: "12 min"
programItem: "B-9"
tags: ["petits échantillons", "normalité", "loi de Student", "conditions d'application"]
level: "intermediate"
sources: ["student-1908", "altman-bland-nonsig", "bland-altman-transform", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Pourquoi la normalité des données est-elle plus critique sur un petit échantillon que sur un grand ?"
    options:
      - "Parce que le petit échantillon a toujours une variance plus grande."
      - "Parce que sur un grand échantillon, le théorème central limite rend la moyenne normale même si les données ne le sont pas ; sur un petit, ce secours disparaît."
      - "Parce que la moyenne d'un petit échantillon est biaisée."
    correct: 1
  - prompt: "À quoi sert la loi de Student, avec ses queues plus épaisses que la loi normale ?"
    options:
      - "À rendre les tests plus faciles à réussir."
      - "À compenser l'incertitude sur la variance estimée sur peu de données, en exigeant un t plus grand pour conclure."
      - "À remplacer le calcul de la moyenne."
    correct: 1
---

<!-- step:title="Quand chaque sujet compte double" -->
En recherche clinique, on aimerait toujours des centaines de patients. La réalité impose souvent le contraire : maladie rare, expérience coûteuse, contrainte éthique. On se retrouve à conclure sur **6, 8 ou 10 sujets**.

Or les grands échantillons pardonnent beaucoup : le théorème central limite (B-1) y répare presque tous les défauts. Les **petits échantillons ne pardonnent rien**. Ce chapitre fait le point sur ce qui devient crucial quand $n$ est petit — et sur ce qu'il ne faut plus se permettre.
<!-- /step -->

<!-- step:title="La normalité, secours perdu" -->
Souvenez-vous du théorème central limite : la moyenne d'un échantillon tend vers une loi normale **quelle que soit** la distribution des individus, **pourvu que $n$ soit assez grand**. C'est ce qui autorisait à ne pas trop se soucier de la forme des données brutes.

Sur un petit échantillon, ce filet de sécurité **disparaît**. Avec $n = 6$, la moyenne n'est normale que si les données elles-mêmes le sont, ou presque.

:::key
Grand échantillon : la normalité des **données** importe peu, la moyenne est normale de toute façon (TCL). Petit échantillon : la normalité des **données** devient une vraie condition, car plus rien ne la garantit à sa place.
:::

Conséquence pratique : sur un petit effectif, il faut se demander sérieusement si la grandeur mesurée peut être supposée normale (souvent oui pour une taille, une concentration ; souvent non pour un délai de survie ou un titre d'anticorps, fortement asymétriques).
<!-- /step -->

<!-- step:title="La loi de Student : payer l'incertitude sur la variance" -->
Un second problème surgit. Sur peu de données, non seulement la moyenne est mal connue, mais **la variance $s^2$ elle-même est mal estimée** : avec 5 valeurs, $s$ peut tomber, par malchance, bien trop petit.

Si l'on utilisait la loi normale (qui suppose $\sigma$ connu), on serait trop optimiste. La **loi de Student** corrige exactement cela : elle a la même cloche que la loi normale mais des **queues plus épaisses**, d'autant plus épaisses que $n$ est petit. Elle exige donc un $t$ plus grand pour déclarer une différence — une prudence supplémentaire qui compense l'incertitude sur $s$.

Quelques seuils à 5 % (bilatéral) montrent le prix de la petitesse :

- $\nu = 4 \rightarrow 2{,}78$
- $\nu = 9 \rightarrow 2{,}26$
- $\nu = 30 \rightarrow 2{,}04$
- $\nu \to \infty \rightarrow 1{,}96$ (loi normale)

Avec 5 sujets ($\nu = 4$), il faut $t > 2{,}78$ ; avec un grand échantillon, 1,96 suffit. La loi de Student **est** la loi des petits échantillons.
<!-- /step -->

<!-- step:title="Le prix caché : le manque de puissance" -->
Un petit échantillon a une conséquence redoutable et souvent oubliée : sa **faible puissance**. L'erreur-standard $s/\sqrt{n}$ est grande, l'intervalle de confiance large, le seuil de Student élevé. Résultat : même un effet réel et important a de bonnes chances de **passer inaperçu**.

:::pitfall
Un résultat « non significatif » sur 8 patients ne prouve **pas** l'absence d'effet : il peut simplement refléter un manque de puissance. « Absence de preuve » n'est pas « preuve d'absence ». Conclure « les deux traitements sont équivalents » à partir d'un petit essai non significatif est une faute d'interprétation classique.
:::
<!-- /step -->

<!-- step:title="Quand les conditions ne tiennent pas" -->
Que faire si, sur un petit échantillon, la normalité est manifestement fausse (données très asymétriques, valeur extrême isolée) ? Le test $t$ n'est alors plus fiable. Trois voies :

1. **Transformer les données** (par exemple passer au logarithme) pour les rapprocher de la normalité — fréquent pour les concentrations et les titres.
2. Recourir aux **tests non paramétriques** (Mann-Whitney, Wilcoxon…), qui ne supposent pas la normalité et travaillent sur les rangs plutôt que sur les valeurs.
3. **Augmenter l'effectif** quand c'est possible — le remède le plus radical, qui restaure à la fois la normalité de la moyenne et la puissance.

:::note
Les tests non paramétriques (partie D) sont la parade naturelle aux petits échantillons non normaux. Ils sont un peu moins puissants que le test $t$ *lorsque* la normalité est vraie, mais bien plus sûrs lorsqu'elle est douteuse.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Le piège suprême du petit échantillon est de **surinterpréter**. Deux excès opposés : proclamer un effet spectaculaire à partir de 4 observations (résultat instable, non reproductible) ; ou déclarer une équivalence à partir d'un test non significatif (manque de puissance). Sur petit effectif, gardez la main légère : présentez les intervalles de confiance (larges, donc honnêtes), vérifiez la plausibilité de la normalité, et considérez un test non paramétrique en cas de doute.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Les grands échantillons pardonnent (TCL) ; les **petits échantillons ne pardonnent rien**.
- Sur petit $n$, la **normalité des données** redevient une vraie condition : le théorème central limite ne la remplace plus.
- La **loi de Student**, à queues épaisses, compense l'incertitude sur la variance estimée : elle exige un $t$ plus grand (2,78 pour $\nu=4$ contre 1,96 pour $n$ grand).
- Petit $n$ = **faible puissance** : un résultat non significatif ne prouve pas l'absence d'effet (« absence de preuve » ≠ « preuve d'absence »).
- Si la normalité est douteuse : **transformer** les données, employer un **test non paramétrique**, ou **augmenter l'effectif**.
<!-- /step -->
