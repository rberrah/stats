---
id: "b-1-loi-normale-moyenne"
slug: "b-1-loi-normale-moyenne"
title: "Fluctuations d'échantillonnage d'une moyenne : la loi normale"
description: "Pourquoi la moyenne d'un échantillon fluctue moins que les individus : erreur-standard et théorème central limite."
track: "section-B"
order: 21
duration: "12 min"
programItem: "B-1"
tags: ["loi normale", "moyenne", "erreur-standard", "théorème central limite"]
level: "beginner"
sources: ["bland-altman-normal", "cochran-sampling", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "La glycémie à jeun d'une population a un écart-type de 0,12 g/L. Quelle est l'erreur-standard de la moyenne pour un échantillon de 36 sujets ?"
    options:
      - "0,02 g/L"
      - "0,12 g/L"
      - "0,72 g/L"
    correct: 0
  - prompt: "Que dit, en substance, le théorème central limite ?"
    options:
      - "Si les individus suivent une loi normale, alors leur moyenne aussi ; sinon aucune des deux ne peut l'être."
      - "La moyenne d'un échantillon suit approximativement une loi normale dès que n est assez grand, même si les individus ne le sont pas."
      - "Plus l'échantillon est grand, plus la distribution des individus eux-mêmes se rapproche d'une loi normale."
    correct: 1
---

<!-- step:title="Un individu n'est pas une moyenne" -->
Imaginez que vous dosiez la ferritine chez des adultes en bonne santé. Un premier sujet affiche 45 µg/L, un deuxième 180, un troisième 90. D'un individu à l'autre, les valeurs sautent dans tous les sens : la **variabilité individuelle** est énorme.

Maintenant, changez de regard. Au lieu de considérer une personne, prenez un **groupe de 25 personnes** et calculez leur ferritine **moyenne**. Refaites l'opération sur un autre groupe de 25, puis un autre encore. Vous obtenez cette fois des nombres beaucoup plus resserrés : peut-être 96, 102, 99, 104…

C'est le fait central de tout ce chapitre : **une moyenne bouge beaucoup moins qu'un individu isolé.** Comprendre *de combien* elle bouge, c'est comprendre toute la statistique des moyennes.
<!-- /step -->

<!-- step:title="Pourquoi la moyenne se stabilise" -->
L'intuition tient en une phrase : dans une moyenne, les écarts se **compensent**. Sur un groupe de 25 sujets, il y a de fortes chances que quelques valeurs élevées soient tempérées par quelques valeurs basses. Les extrêmes ne peuvent plus tirer le résultat tout seuls ; ils se neutralisent partiellement.

Plus le groupe est grand, plus cette compensation est efficace. Une moyenne sur 4 sujets reste sensible à un seul cas atypique ; une moyenne sur 400 l'ignore presque totalement.

:::key
La dispersion des individus est une donnée de la nature (la biologie est variable). La dispersion des **moyennes**, elle, se maîtrise : elle rétrécit à mesure que l'on augmente le nombre de sujets.
:::
<!-- /step -->

<!-- step:title="La distribution des moyennes" viz="LoiNormale" -->
Supposons une population dont la pression artérielle systolique a pour moyenne $\mu = 125$ mmHg et pour écart-type $\sigma = 16$ mmHg. Les individus, pris un à un, s'étalent largement : de 95 à 155 mmHg sans surprise.

Si vous tirez des échantillons de taille $n$ et que vous notez chaque fois la moyenne obtenue, ces moyennes dessinent à leur tour une distribution — **centrée sur la même valeur $\mu = 125$**, mais bien plus étroite. Et cette distribution des moyennes prend une forme régulière en cloche : la **loi normale**.

:::howto
**Comment lire le schéma.** Faites varier la taille $n$ de l'échantillon. La cloche des individus (large) reste fixe ; observez comme la cloche des moyennes se resserre autour du centre quand $n$ augmente. Le centre, lui, ne bouge jamais.
:::
<!-- /step -->

<!-- step:title="L'erreur-standard : σ/√n" -->
On mesure la largeur de la distribution des moyennes par son écart-type, appelé **erreur-standard de la moyenne** (ES). Sa formule est d'une simplicité remarquable :

$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

où $\sigma$ est l'écart-type des individus et $n$ la taille de l'échantillon.

Reprenons la pression artérielle ($\sigma = 16$ mmHg). Pour $n = 64$ sujets :

$$\sigma_{\bar{x}} = \frac{16}{\sqrt{64}} = \frac{16}{8} = 2 \text{ mmHg}$$

Les individus s'étalaient sur ±16 mmHg ; les moyennes d'échantillons de 64 sujets ne s'écartent plus que de ±2 mmHg autour de 125. La précision a été multipliée par 8.

:::note
Le $\sqrt{n}$ est décisif : pour **diviser par deux** l'erreur-standard, il ne faut pas doubler l'effectif mais le **quadrupler**. La précision se paie cher.
:::
<!-- /step -->

<!-- step:title="Le théorème central limite" -->
Un détail magnifique se cache dans l'exemple : nous n'avons jamais eu besoin de supposer que la pression artérielle des individus suivait, elle, une loi normale.

C'est le **théorème central limite** : quelle que soit la forme de la distribution des individus — symétrique, asymétrique, à deux bosses —, la distribution des **moyennes** tend vers une loi normale dès que $n$ est suffisamment grand (en pratique, souvent $n \geq 30$ suffit).

Autrement dit, la loi normale n'est pas une hypothèse à vérifier sur vos données brutes : c'est un cadeau que la moyenne fabrique elle-même. C'est ce qui rend les méthodes de ce chapitre si universelles.
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Ne confondez jamais **écart-type** $\sigma$ et **erreur-standard** $\sigma/\sqrt{n}$. L'écart-type décrit la dispersion des **individus** (une donnée biologique) ; l'erreur-standard décrit la dispersion de la **moyenne** (une propriété de votre échantillon). Publier « moyenne ± ES » en le présentant comme la variabilité des patients fait paraître les données artificiellement homogènes : avec un grand $n$, l'ES devient minuscule alors que les patients, eux, restent tout aussi dispersés.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Une **moyenne** fluctue beaucoup moins qu'un individu, car les écarts se compensent.
- La dispersion des moyennes se mesure par l'**erreur-standard** : $\sigma_{\bar{x}} = \sigma/\sqrt{n}$.
- Pour diviser l'erreur-standard par 2, il faut **quadrupler** l'effectif (rôle du $\sqrt{n}$).
- **Théorème central limite** : la moyenne suit approximativement une loi normale même si les individus ne le font pas, dès que $n$ est assez grand.
- Ne pas confondre écart-type (variabilité des sujets) et erreur-standard (précision de la moyenne).
<!-- /step -->
