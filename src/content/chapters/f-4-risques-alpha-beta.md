---
id: "f-4-risques-alpha-beta"
slug: "f-4-risques-alpha-beta"
title: "Deux façons de se tromper : les risques α et β"
description: "Le tableau décision × réalité, le risque α de crier au loup, le risque β de rater une vraie différence, la puissance et le rôle décisif de l'effectif."
track: "section-F"
order: 4
duration: "11 min"
programItem: "F-4"
tags: ["risque alpha", "risque beta", "puissance", "effectif", "erreur"]
level: "beginner"
sources: ["schwartz", "altman", "altman-bland-nonsig", "sterne-smith"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Un traitement est en réalité efficace, mais le test conclut « pas de différence significative ». De quelle erreur s'agit-il ?"
    options:
      - "Une erreur de deuxième espèce (risque β) : on rate une vraie différence"
      - "Une erreur de première espèce (risque α) : on crie au loup à tort"
      - "Un biais de sélection dans l'échantillon"
    correct: 0
  - prompt: "À seuil α fixé, quel est le moyen le plus direct d'augmenter la puissance d'un test ?"
    options:
      - "Augmenter l'effectif de l'échantillon"
      - "Diminuer le risque α en dessous de 0,01"
      - "Répéter le test jusqu'à obtenir p < 0,05"
    correct: 0
---

<!-- step:title="Se tromper, mais de deux manières" -->
Au chapitre F-3, on a vu qu'un test peut se tromper : rejeter $H_0$ alors qu'elle est vraie. Mais l'erreur inverse existe aussi : ne *pas* rejeter $H_0$ alors qu'elle est fausse.

Ces deux fautes n'ont rien à voir l'une avec l'autre. L'une consiste à **voir un effet qui n'existe pas**, l'autre à **manquer un effet qui existe**. Les confondre, c'est se condamner à mal lire tout résultat de test.

Pensez au détecteur de fumée. Il peut sonner alors qu'il n'y a pas de feu (fausse alerte), ou rester muet alors que la maison brûle (détection manquée). Aucun réglage ne supprime les deux dangers à la fois : c'est exactement la tension que gère le statisticien.
<!-- /step -->

<!-- step:title="Le tableau 2×2 : décision contre réalité" viz="RisquesAlphaBeta" -->
Croisons ce qu'on **décide** (rejeter ou non $H_0$) avec ce qui est **vrai** dans la population (nous l'ignorons, mais la nature, elle, le sait). Quatre cases apparaissent.

|  | $H_0$ vraie (aucun effet) | $H_0$ fausse (effet réel) |
|---|---|---|
| **On ne rejette pas $H_0$** | Décision correcte | **Erreur β** (on rate l'effet) |
| **On rejette $H_0$** | **Erreur α** (fausse alerte) | Décision correcte (puissance) |

Les deux diagonales opposées sont les deux erreurs :

- **Erreur de première espèce**, de risque $\alpha$ : rejeter $H_0$ alors qu'elle est vraie. On annonce un effet qui n'existe pas — on **crie au loup**.
- **Erreur de deuxième espèce**, de risque $\beta$ : ne pas rejeter $H_0$ alors qu'elle est fausse. On passe à côté d'un effet réel — on **rate le loup**.

La case en bas à droite, « rejeter $H_0$ quand elle est effectivement fausse », est le succès qu'on recherche : détecter un vrai effet. Sa probabilité, $1-\beta$, s'appelle la **puissance**.
<!-- /step -->

<!-- step:title="Comment lire le schéma" -->
:::howto
**Comment lire le schéma.** Chaque colonne correspond à un état *vrai* de la nature, décrit par une courbe des résultats possibles du test : à gauche le monde où $H_0$ est vraie, à droite le monde où $H_1$ l'est. La ligne verticale est le **seuil de décision** fixé par $\alpha$. Déplacez ce seuil et observez : l'aire $\alpha$ (fausse alerte, sous la courbe de $H_0$) et l'aire $\beta$ (effet manqué, sous la courbe de $H_1$) varient **en sens inverse**. Écartez maintenant les deux courbes ou resserrez-les — cela revient à augmenter l'effectif : les deux aires diminuent *ensemble*. Vous tenez là tout le drame de la décision statistique.
:::
<!-- /step -->

<!-- step:title="L'antagonisme α / β" -->
Voici la loi cruelle du test : à effectif fixé, **on ne peut pas réduire $\alpha$ et $\beta$ en même temps**. Ils sont antagonistes.

Reprenez le seuil de décision. Le rendre plus sévère (exiger un $p$ encore plus petit, par exemple $\alpha = 0{,}01$ au lieu de $0{,}05$) diminue les fausses alertes : moins de fois où l'on crie au loup à tort. Mais du même coup, il devient plus difficile de rejeter $H_0$, même quand elle est fausse : on rate davantage de vrais effets, donc $\beta$ **augmente** et la puissance baisse.

À l'inverse, un seuil laxiste attrape presque tous les vrais effets ($\beta$ petit) mais multiplie les fausses alertes ($\alpha$ grand). Le curseur $\alpha$ ne supprime pas le risque : il le **déplace** d'un plateau de la balance à l'autre.

:::pitfall
Croire qu'on rend un test « meilleur » en abaissant simplement $\alpha$. On ne fait que troquer un risque contre l'autre. Un test à $\alpha = 0{,}001$ ne se trompe presque jamais en criant au loup… mais il laisse passer une foule de vrais effets. Choisir $\alpha$, c'est décider *quelle erreur coûte le plus cher* dans le contexte étudié.
:::
<!-- /step -->

<!-- step:title="La sortie de secours : augmenter l'effectif" -->
Existe-t-il un moyen de gagner sur les deux tableaux ? Oui, un seul, et il ne coûte que des données : **augmenter l'effectif $n$**.

Souvenez-vous de l'erreur standard du chapitre F-2 : elle décroît en $1/\sqrt{n}$. Plus l'échantillon est grand, moins les estimations fluctuent, plus les deux « mondes » ($H_0$ et $H_1$) se distinguent nettement. Sur le schéma, les courbes s'éloignent l'une de l'autre : on peut alors placer le seuil de façon à réduire $\alpha$ **et** $\beta$ à la fois.

Un mini-exemple. On veut détecter une baisse de tension artérielle de 5 mmHg (écart-type 10 mmHg), au seuil $\alpha = 0{,}05$.

- Avec $n = 20$ par groupe, la puissance $1-\beta$ n'est que d'environ **0,35** : près de deux fois sur trois, on rate cet effet pourtant réel.
- Avec $n = 100$ par groupe, la puissance grimpe à environ **0,94** : on ne le rate plus qu'une fois sur seize.

Même effet, même seuil : seul l'effectif a changé. C'est pourquoi toute étude sérieuse **calcule sa taille à l'avance**, pour viser une puissance suffisante (souvent 80 % ou 90 %).

:::key
$\alpha$ et $\beta$ sont antagonistes **à effectif fixé**. Le seul levier qui les fait baisser tous les deux est l'**augmentation de $n$**. Un résultat non significatif sur un petit échantillon ne prouve rien : il peut simplement trahir un manque de puissance.
:::
<!-- /step -->

<!-- step:title="Piège classique : la puissance oubliée" -->
Une étude conclut « pas de différence significative » ($p = 0{,}22$) entre deux traitements et en déduit qu'ils sont équivalents. Mais elle ne comptait que 15 patients par groupe.

Avant de conclure à l'équivalence, il faut demander : **le test avait-il seulement la puissance de détecter une différence utile ?** Si $1-\beta$ valait 0,30, l'étude était quasiment condamnée à ne rien trouver, effet réel ou non. Son silence n'est pas une preuve d'équivalence, c'est un aveu de faiblesse.

:::note
« Non significatif » avec une faible puissance = résultat *non concluant*, pas résultat *négatif*. Pour affirmer une équivalence, on utilise des méthodes dédiées (tests d'équivalence, intervalles de confiance) et une puissance calculée en conséquence.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Un test peut se tromper de **deux façons distinctes**, résumées par le tableau décision × réalité.
- **Risque $\alpha$** (première espèce) : rejeter $H_0$ à tort, *voir un effet qui n'existe pas* — la fausse alerte, contrôlée par le seuil (souvent 5 %).
- **Risque $\beta$** (deuxième espèce) : ne pas rejeter $H_0$ à tort, *rater un effet réel*. La **puissance** $1-\beta$ est la probabilité de détecter un vrai effet.
- À effectif fixé, $\alpha$ et $\beta$ sont **antagonistes** : durcir le seuil baisse $\alpha$ mais monte $\beta$, et inversement. Le seuil déplace le risque, il ne le supprime pas.
- Le seul moyen de réduire les deux à la fois est d'**augmenter l'effectif $n$** (l'erreur standard décroît en $1/\sqrt{n}$). D'où le calcul du nombre de sujets *avant* l'étude.
- Un résultat non significatif sur un petit échantillon est **non concluant**, pas négatif : toujours se demander si la puissance était suffisante.
<!-- /step -->
