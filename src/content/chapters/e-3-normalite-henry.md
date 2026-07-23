---
id: "e-3-normalite-henry"
slug: "e-3-normalite-henry"
title: "Épreuve graphique de normalité (droite de Henry)"
description: "Comment vérifier d'un coup d'œil qu'une distribution est à peu près normale, reconnaître la forme d'un écart, et en tirer les bonnes conséquences pratiques."
track: "section-E"
order: 53
duration: "11 min"
programItem: "E-3"
tags: ["normalité", "droite de Henry", "QQ-plot", "distribution", "test paramétrique"]
level: "intermediate"
sources: ["shapiro-wilk-1965", "bland-altman-normal", "bland-altman-transform", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Sur une droite de Henry, les points s'alignent bien sur la droite. Qu'en concluez-vous ?"
    options:
      - "La distribution est compatible avec une loi normale"
      - "La distribution est nettement asymétrique à droite"
      - "Les queues de la distribution sont trop épaisses"
    correct: 0
  - prompt: "Vos données donnent une droite de Henry nettement incurvée (en forme de S ou d'arc). Le réflexe pratique le plus prudent est :"
    options:
      - "Appliquer le test t sans correction, on le dit robuste"
      - "Envisager une transformation (log) ou un test non paramétrique"
      - "Augmenter l'effectif de l'échantillon pour rétablir la normalité"
    correct: 1
---

<!-- step:title="Pourquoi vérifier la normalité" -->
Beaucoup de tests classiques — le test t, l'ANOVA, la corrélation de Pearson — reposent sur une hypothèse : la variable quantitative étudiée suit à peu près une **loi normale**, la fameuse courbe en cloche. Si cette hypothèse est grossièrement fausse, le test peut donner un résultat trompeur.

Comment savoir si vos données sont « à peu près normales » ? On pourrait tracer un histogramme, mais l'œil juge mal une cloche : selon le nombre de barres choisi, la même série paraît normale ou bosselée. Il faut un outil plus fiable.

L'idée géniale est de transformer le problème : plutôt que de reconnaître une *courbe*, faisons en sorte qu'une distribution normale se traduise par une simple **droite**. L'œil humain repère un alignement bien mieux qu'une cloche. C'est tout le principe de la **droite de Henry**, cousine du **QQ-plot** des logiciels modernes.
<!-- /step -->

<!-- step:title="L'idée de la droite de Henry" -->
Le principe tient en une phrase : on porte en regard les valeurs **observées** et les valeurs que l'on **attendrait** si les données étaient parfaitement normales.

Concrètement, on range les mesures par ordre croissant. Pour chaque valeur, on calcule sa **fréquence cumulée** (quelle proportion de l'échantillon lui est inférieure). On reporte alors ces fréquences non pas sur une échelle ordinaire, mais sur une **échelle gaussienne** graduée en écarts-réduits : la médiane vaut $z = 0$, un point au niveau « 84 % cumulé » correspond à $z = 1$, etc.

Le miracle : si la variable est vraiment normale, la relation entre valeurs observées et écarts-réduits attendus est **linéaire**. Les points s'alignent sur une droite. Toute la question devient donc : *mes points forment-ils une droite ?*

:::recall
L'**écart-réduit** $z$ mesure la distance à la moyenne en nombre d'écarts-types : $z = (x - \mu)/\sigma$. Sur une loi normale, chaque valeur de fréquence cumulée correspond à un $z$ précis (68 % des valeurs entre $z = -1$ et $z = +1$). La droite de Henry exploite exactement cette correspondance.
:::
<!-- /step -->

<!-- step:title="Lire le graphique" viz="LoiNormale" -->
Observez la courbe en cloche et sa fonction de répartition. La droite de Henry n'est rien d'autre que cette répartition « redressée » : ce qui est une courbe en S sur une échelle ordinaire devient une ligne droite dès qu'on gradue l'axe vertical en écarts-réduits.

Repérez sur la loi normale les repères clés — la moyenne au centre, les points à $\pm 1$ et $\pm 2$ écarts-types — puis imaginez que l'on « étire » l'axe des fréquences cumulées pour transformer le S en droite : c'est le passage de la cloche à la droite de Henry.

:::howto
**Comment lire le schéma.** Faites varier la moyenne et l'écart-type de la loi normale et observez deux choses. La **moyenne** déplace le centre : sur une droite de Henry, elle fixe le point où la droite croise $z = 0$. L'**écart-type** étale ou resserre la cloche : sur la droite de Henry, il commande la **pente**. Changer moyenne et écart-type déplace et incline la droite, mais ne la *courbe* jamais : une vraie loi normale reste droite quelle que soit son échelle.
:::
<!-- /step -->

<!-- step:title="À quoi ressemble un écart" -->
Une droite parfaite n'existe jamais : quelques points s'écartent toujours un peu, surtout aux extrémités où les données sont rares. On ne cherche pas la perfection, mais l'absence de **courbure systématique**. Trois signatures typiques :

- **Une courbe en arc (concave ou convexe)** : la distribution est **asymétrique**. Une longue traîne vers les grandes valeurs (fréquente pour les concentrations, les temps de survie, les enzymes) incurve nettement la droite. C'est l'écart le plus courant en biologie.
- **Une forme en S (deux courbures opposées)** : les **queues** de la distribution sont trop épaisses ou trop fines. Un S marqué signale des extrémités plus lourdes qu'une normale (plus de valeurs très hautes et très basses qu'attendu).
- **Un ou deux points isolés loin de la droite**, aux extrémités : des **valeurs aberrantes** (outliers) possibles, à examiner une par une — erreur de saisie, sujet atypique, ou vraie valeur rare.

:::pitfall
Ne confondez pas le bruit inévitable des extrémités avec un vrai défaut. Sur un petit échantillon, les tout premiers et tout derniers points dansent beaucoup, même pour des données parfaitement normales. C'est la **tendance générale** des points centraux qui compte, pas le frétillement des bouts.
:::
<!-- /step -->

<!-- step:title="Conséquences pratiques" -->
Le verdict graphique vous oriente vers l'une de trois attitudes.

**La droite est correcte** → vous pouvez utiliser sereinement les tests paramétriques (t, ANOVA, Pearson). C'est le cas le plus confortable.

**La droite est courbée par asymétrie** → deux options. Soit une **transformation** qui symétrise les données : le **logarithme** est le grand classique pour les traînes à droite (concentrations, titres, temps). Après passage au log, retracez la droite : souvent elle se redresse et le test paramétrique redevient légitime. Soit, si la transformation ne suffit pas, un **test non paramétrique** (Mann-Whitney, Wilcoxon, Kruskal-Wallis, Spearman) qui ne suppose aucune normalité.

**Présence de valeurs aberrantes** → ne les supprimez jamais par confort. Vérifiez d'abord la saisie ; si la valeur est réelle, préférez une méthode robuste ou non paramétrique plutôt que de l'effacer.

:::note
Le rôle de l'effectif. Sur **petit échantillon**, la normalité est difficile à juger (peu de points, beaucoup de bruit) mais c'est justement là qu'elle importe le plus, car le test t y est sensible. Sur **grand échantillon**, le test t devient robuste aux écarts modérés à la normalité : un petit défaut n'est plus dramatique.
:::
<!-- /step -->

<!-- step:title="Graphique ou test formel ?" -->
Il existe aussi des tests *numériques* de normalité (Shapiro-Wilk, Kolmogorov-Smirnov) qui rendent un p. Pourquoi préférer souvent l'épreuve graphique ?

Parce que ces tests ont un défaut symétrique et gênant. Sur un **petit échantillon**, ils manquent de puissance et laissent passer des écarts nets. Sur un **très grand échantillon**, ils deviennent hypersensibles et déclarent « non normal » le moindre écart sans conséquence pratique. Le p seul ne dit pas si l'écart est *grave*.

La droite de Henry, elle, montre la **forme** et l'**ampleur** de l'écart : vous voyez s'il s'agit d'une légère asymétrie sans importance ou d'une distribution franchement bimodale. Le mieux est de combiner les deux : le test pour objectiver, le graphique pour juger.

:::key
La normalité ne se décrète pas, elle se **regarde**. La droite de Henry transforme une cloche difficile à juger en une droite facile à lire : alignés = normal, courbés = à corriger ou à contourner.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Les tests paramétriques (t, ANOVA, Pearson) supposent une distribution **à peu près normale** ; il faut le vérifier.
- La **droite de Henry** (ou QQ-plot) porte les valeurs observées face aux écarts-réduits attendus sous normalité : une loi normale donne une **droite**.
- **Points alignés** = compatible avec la normale ; **arc** = asymétrie ; **S** = queues anormales ; **points isolés aux bouts** = valeurs aberrantes possibles.
- Face à un écart : tenter une **transformation** (souvent le **log** pour les traînes à droite), sinon basculer vers un **test non paramétrique**.
- Le graphique montre la *forme* de l'écart ; les tests formels (Shapiro) ne donnent qu'un p, trompeur sur très petit ou très grand échantillon. Combinez les deux.
<!-- /step -->
