---
id: "c-3-droite-regression"
slug: "c-3-droite-regression"
title: "La droite de régression : estimation et prédiction"
description: "Comment la méthode des moindres carrés ajuste la droite y = ax + b, ce que valent pente et prédiction, et pourquoi extrapoler hors du domaine observé est dangereux."
track: "section-C"
order: 33
duration: "12 min"
programItem: "C-3"
tags: ["régression", "moindres carrés", "pente", "prédiction", "extrapolation"]
quiz:
  - prompt: "La droite de régression de la PAS sur l'âge est y = 0,80 x + 97 (x en années, y en mmHg). Comment interpréter la pente 0,80 ?"
    options:
      - "En moyenne, la PAS augmente d'environ 0,80 mmHg par année d'âge supplémentaire"
      - "80 % de la PAS est expliquée par l'âge"
      - "À la naissance, la PAS vaut 0,80 mmHg"
    correct: 0
  - prompt: "Pourquoi la méthode s'appelle-t-elle « moindres carrés » ?"
    options:
      - "Elle choisit la droite qui minimise la somme des carrés des écarts verticaux points-droite"
      - "Elle élève la pente au carré pour la rendre positive"
      - "Elle ne garde que les points dont l'écart est le plus petit"
    correct: 0
---

<!-- step:title="Une droite pour résumer la tendance" -->
La corrélation nous a dit *qu'il vaut la peine* de prédire la PAS à partir de l'âge ($r \approx 0{,}91$). Reste à savoir *comment*. On veut une règle : « à tel âge, telle PAS attendue ». Géométriquement, on cherche **la droite qui passe au mieux à travers le nuage**.

Mais « au mieux » selon quel critère ? Une infinité de droites traversent un nuage. Il faut une définition précise du meilleur ajustement — et c'est là qu'intervient la méthode des moindres carrés.

La droite s'écrit :

$$y = a\,x + b$$

où $a$ est la **pente** (de combien $y$ change quand $x$ augmente d'une unité) et $b$ l'**ordonnée à l'origine** (la valeur de $y$ prédite quand $x = 0$).
<!-- /step -->

<!-- step:title="La droite des moindres carrés" viz="Correlation" -->
Pour chaque individu, l'écart vertical entre son point et la droite s'appelle le **résidu** : c'est l'erreur de prédiction pour ce sujet. Une bonne droite rend ces résidus globalement petits.

La méthode des **moindres carrés** choisit la droite qui rend **minimale la somme des carrés des résidus**. Pourquoi les carrés ? Pour que les écarts positifs et négatifs ne s'annulent pas, et pour pénaliser lourdement les grosses erreurs.

Cette droite a deux propriétés remarquables : elle passe toujours par le point moyen $(\bar{x}, \bar{y})$, et sa pente se calcule directement à partir des mêmes sommes que $r$ :

$$a = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}, \qquad b = \bar{y} - a\,\bar{x}$$

:::howto
**Comment lire le schéma.** Faites glisser une droite dans le nuage et observez les segments verticaux (les résidus) qui relient chaque point à la droite. La droite des moindres carrés est celle où la somme de leurs carrés est la plus faible : bougez-la et regardez ce total remonter dès que vous quittez la position optimale.
:::
<!-- /step -->

<!-- step:title="Pente et ordonnée : le calcul" -->
Sur nos cinq adultes, nous avions $\sum (x_i-\bar{x})(y_i-\bar{y}) = 800$ et $\sum (x_i-\bar{x})^2 = 1000$, avec $\bar{x} = 50$ et $\bar{y} = 137$. D'où :

$$a = \dfrac{800}{1000} = 0{,}80 \qquad b = 137 - 0{,}80 \times 50 = 97$$

La droite est donc :

$$y = 0{,}80\,x + 97$$

**La pente est le résultat le plus important.** Ici $a = 0{,}80$ mmHg par année : en moyenne, un an de plus s'accompagne de $+0{,}80$ mmHg de PAS. L'ordonnée $b = 97$ mmHg serait la PAS « prédite » à l'âge $0$ — une valeur formelle, dénuée de sens biologique ici, sur laquelle nous reviendrons.

:::note
Ne confondez pas $a$ et $r$. La **pente** $a$ a une unité (mmHg par an) et dépend des échelles ; le coefficient $r$ est un nombre pur, sans unité. Une pente forte n'implique pas une corrélation forte, et inversement : un nuage très dispersé peut avoir une pente marquée mais un $r$ médiocre.
:::
<!-- /step -->

<!-- step:title="Prédire — et avec quelle incertitude" -->
La droite sert à prédire. Pour un patient de 45 ans :

$$\hat{y} = 0{,}80 \times 45 + 97 = 133 \text{ mmHg}$$

Mais ce $133$ est une **moyenne attendue**, pas une certitude. Les points réels s'écartaient de la droite ; un nouveau patient de 45 ans en fera autant. On mesure cette dispersion résiduelle par l'**écart-type des résidus** :

$$s_{\text{res}} = \sqrt{\dfrac{\sum (y_i - \hat{y}_i)^2}{n-2}} = \sqrt{\dfrac{136}{3}} \approx 6{,}7 \text{ mmHg}$$

Concrètement, la vraie PAS de ce patient a de bonnes chances de tomber à quelques $\pm 13$ mmHg (environ deux écarts-types) autour de $133$. Une prédiction sans son incertitude est trompeuse : elle donne une fausse impression de précision.

:::key
Une prédiction de régression est **une valeur moyenne assortie d'une marge**. L'incertitude est d'autant plus grande que les résidus sont dispersés (petit $r^2$) et que l'on s'éloigne du centre $\bar{x}$ du nuage.
:::
<!-- /step -->

<!-- step:title="Piège : l'extrapolation" -->
La droite $y = 0{,}80\,x + 97$ a été ajustée entre 30 et 70 ans. Rien n'autorise à l'utiliser en dehors.

Prédisons la PAS d'un nouveau-né ($x = 0$) : le modèle annonce $97$ mmHg — plausible par accident. Prédisons celle d'un centenaire ($x = 120$) : $0{,}80 \times 120 + 97 = 193$ mmHg, ou pour un âge de 200 ans, une valeur absurde. La relation n'est linéaire **que dans la plage observée** ; hors de cette plage, on ne sait rien, et la droite ment avec assurance.

:::pitfall
**Extrapoler, c'est prolonger la droite là où aucune donnée ne la soutient.** C'est l'erreur la plus fréquente et la plus grave de la régression : le calcul reste possible, il donne un nombre, mais ce nombre n'a aucune garantie. Ne prédisez jamais hors du domaine des $x$ observés sans le dire explicitement.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- La régression cherche la **droite des moindres carrés** : celle qui minimise la somme des carrés des résidus (écarts verticaux points-droite).
- Elle passe par le point moyen $(\bar{x}, \bar{y})$ ; sa **pente** $a$ dit de combien $y$ varie par unité de $x$, son ordonnée $b$ la valeur prédite en $x = 0$.
- **Pente $a$ ≠ coefficient $r$** : $a$ a une unité et dépend des échelles, $r$ est un nombre pur.
- Une prédiction $\hat{y} = a x + b$ est une **moyenne attendue**, toujours entachée d'incertitude (écart-type des résidus $s_{\text{res}}$).
- **Ne jamais extrapoler** hors de la plage des $x$ observés : la droite y devient une pure spéculation.
<!-- /step -->
