---
id: "c-1-correlation-regression"
slug: "c-1-correlation-regression"
title: "Corrélation et régression : deux questions distinctes"
description: "Pourquoi mesurer l'intensité d'une liaison et vouloir prédire une variable par une autre sont deux problèmes différents, l'un symétrique, l'autre non."
track: "section-C"
order: 31
duration: "10 min"
programItem: "C-1"
tags: ["corrélation", "régression", "liaison", "quantitatif"]
quiz:
  - prompt: "Vous voulez estimer la pression artérielle d'un patient à partir de son âge. De quel outil relève cette question ?"
    options:
      - "La régression, car on prédit une variable (PAS) à partir de l'autre (âge)"
      - "La corrélation, car les deux variables sont quantitatives"
      - "Aucun des deux : il faut un test du khi-deux"
    correct: 0
  - prompt: "Qu'est-ce qui distingue fondamentalement la corrélation de la régression ?"
    options:
      - "La corrélation décrit une liaison symétrique ; la régression choisit un sens pour prédire"
      - "La corrélation s'applique aux petits échantillons, la régression aux grands"
      - "La corrélation concerne les variables qualitatives, la régression les quantitatives"
    correct: 0
---

<!-- step:title="Deux caractères qui varient ensemble" -->
Chez l'adulte, la pression artérielle systolique (PAS) a tendance à monter avec l'âge. Notez le verbe : elle *tend* à monter, elle ne monte pas mécaniquement. Certains sexagénaires ont une PAS plus basse que des quadragénaires. La liaison existe, mais elle est **statistique**, noyée dans la variabilité.

Dès qu'on observe deux caractères quantitatifs sur les mêmes individus — âge et pression, taille et poids, dose et concentration plasmatique — deux questions très différentes se posent. On les confond presque toujours, et c'est la source d'innombrables erreurs d'interprétation.

- **Première question :** ces deux caractères varient-ils ensemble, et à quel point ? C'est la **corrélation**.
- **Seconde question :** puis-je *prédire* l'un à partir de l'autre, et avec quelle formule ? C'est la **régression**.
<!-- /step -->

<!-- step:title="La corrélation : une liaison symétrique" viz="Correlation" -->
La corrélation répond à une question d'**intensité** : quand l'un augmente, l'autre suit-il fidèlement, ou de façon lâche ?

Le point capital est que cette question est **symétrique**. Demander « l'âge et la PAS varient-ils ensemble ? » revient exactement à demander « la PAS et l'âge varient-ils ensemble ? ». Il n'y a ni cause ni effet, ni variable à expliquer ni variable explicative : juste deux caractères qui dansent plus ou moins en accord. Inverser les rôles ne change rien au résultat.

La corrélation se résume en **un seul nombre**, le coefficient $r$, compris entre $-1$ et $+1$, que le chapitre suivant détaille.

:::howto
**Comment lire le schéma.** Chaque point est un individu (une abscisse, une ordonnée). Faites varier la dispersion du nuage : quand les points se rapprochent d'une ligne, la liaison est forte ; quand ils forment une tache ronde, elle est nulle. Observez qu'échanger les deux axes ne change pas la « forme » de la liaison : c'est la marque de la symétrie.
:::
<!-- /step -->

<!-- step:title="La régression : prédire, donc choisir un sens" -->
La régression pose une tout autre question : connaissant l'âge d'un patient, **quelle PAS puis-je lui prédire** ? Ici, un des deux caractères devient la variable à expliquer (la PAS, notée $y$), l'autre la variable explicative (l'âge, noté $x$).

Ce choix brise la symétrie. Prédire la PAS à partir de l'âge n'est pas le même calcul que prédire l'âge à partir de la PAS — les deux droites obtenues sont différentes. La régression fournit une **formule**, la droite $y = a\,x + b$, qui permet de calculer une valeur attendue.

:::key
**Corrélation = intensité d'une liaison symétrique** (un nombre, $r$). **Régression = prédiction d'une variable par une autre** (une formule, une droite orientée). La première décrit, la seconde prédit.
:::

On peut avoir besoin de l'une sans l'autre : la corrélation dit *s'il vaut la peine* de prédire ; la régression dit *comment* prédire.
<!-- /step -->

<!-- step:title="Un même nuage, deux lectures" -->
Prenons cinq adultes, âge $x$ (ans) et PAS $y$ (mmHg) :

| Âge $x$ | 30 | 40 | 50 | 60 | 70 |
|---|---|---|---|---|---|
| PAS $y$ | 119 | 137 | 131 | 141 | 157 |

Ce même tableau nourrit les deux questions.

- **Lecture corrélation :** les deux colonnes montent globalement de concert. On mesurera plus loin $r \approx 0{,}91$ : une liaison forte, mais pas parfaite (le sujet de 40 ans, à 137 mmHg, dépasse celui de 50 ans à 131).
- **Lecture régression :** on cherchera la droite qui, à chaque âge, propose la meilleure PAS attendue. On trouvera $y = 0{,}80\,x + 97$, soit environ $+0{,}80$ mmHg par année d'âge.

Le même nuage de points sert donc à deux fins : le décrire (corrélation) et s'en servir pour prévoir (régression). Ne jamais confondre la description avec la prédiction.
<!-- /step -->

<!-- step:title="Piège : croire qu'une liaison impose un sens" -->
:::pitfall
Une corrélation forte ne dit **ni** dans quel sens va la causalité, **ni** même qu'il y en a une. Que l'âge et la PAS soient corrélés n'autorise pas à dire « la PAS fait vieillir » : le bon sens tranche ici, mais dans bien des cas il ne le peut pas. La corrélation est symétrique et muette sur la cause ; c'est vous qui, par la connaissance du phénomène, décidez quelle variable explique quelle autre.
:::

Retenez la hiérarchie : d'abord se demander *s'il y a* une liaison et *combien elle est forte* (corrélation), ensuite seulement *comment la modéliser pour prédire* (régression), et jamais en déduire mécaniquement une cause. Le chapitre C-5 reviendra en détail sur ce dernier piège.
<!-- /step -->

<!-- step:title="À retenir" -->
- Face à deux caractères **quantitatifs**, deux questions distinctes : la **corrélation** (intensité de la liaison) et la **régression** (prédiction d'une variable par une autre).
- La **corrélation** est **symétrique** : échanger les deux variables ne change rien ; elle se résume par un seul nombre $r \in [-1 ; +1]$.
- La **régression** est **asymétrique** : on choisit une variable à expliquer et une variable explicative ; elle fournit une droite $y = a\,x + b$ et donc une prédiction.
- Un même nuage de points se lit des deux façons : décrire ($r$) puis, si utile, prédire (la droite).
- Une liaison, même forte, n'implique **ni sens de causalité ni causalité tout court**.
<!-- /step -->
