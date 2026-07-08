---
id: "e-2-nature-information"
slug: "e-2-nature-information"
title: "Qualitatif ou quantitatif ? aléatoire ou contrôlé ?"
description: "Bien qualifier chaque variable avant tout calcul, et distinguer ce que l'expérimentateur fixe de ce qu'il laisse au hasard : deux questions qui commandent le choix de la méthode."
track: "section-E"
order: 52
duration: "11 min"
programItem: "E-2"
tags: ["variable qualitative", "variable quantitative", "aléatoire", "contrôlé", "corrélation", "régression"]
quiz:
  - prompt: "On code le groupe sanguin en 1 (O), 2 (A), 3 (B), 4 (AB). Peut-on calculer une « moyenne » de groupe sanguin ?"
    options:
      - "Non : les chiffres ne sont qu'des étiquettes, la variable reste qualitative"
      - "Oui, puisque ce sont désormais des nombres"
      - "Oui, mais seulement si les effectifs sont grands"
    correct: 0
  - prompt: "Un expérimentateur fixe lui-même les doses testées (10, 20, 40 mg) et mesure la réponse. Pour modéliser réponse en fonction de la dose, il utilise :"
    options:
      - "Une corrélation, car les deux variables fluctuent au hasard"
      - "Une régression, car la dose est contrôlée et la réponse aléatoire"
      - "Un test du χ², car la dose a plusieurs niveaux"
    correct: 1
---

<!-- step:title="Nommer avant de calculer" -->
Avant de choisir un test, avant même de tracer un graphique, il faut savoir **de quoi on parle**. Chaque colonne de votre tableau de données est une variable, et chaque variable a une *nature*. Se tromper sur cette nature, c'est se tromper sur tout le reste.

Deux questions suffisent à cadrer chaque variable :

1. Est-elle **qualitative** ou **quantitative** ?
2. Est-elle **aléatoire** (subie, observée) ou **contrôlée** (fixée par l'expérimentateur) ?

La première commande le choix du test. La seconde, plus subtile et souvent oubliée, commande le choix entre corrélation et régression, et jusqu'à la façon de concevoir l'expérience. Prenons-les l'une après l'autre.
<!-- /step -->

<!-- step:title="Qualitatif ou quantitatif : quatre types à reconnaître" -->
Une variable **qualitative** classe les individus dans des catégories ; une variable **quantitative** leur attribue un nombre qui a un sens de grandeur. Chaque famille se subdivise :

**Qualitatif :**
- **Nominal** : des catégories sans ordre. Groupe sanguin, sexe, présence ou absence d'un symptôme. On ne peut que compter des effectifs.
- **Ordinal** : des catégories *ordonnées*, mais sans distance mesurable entre elles. Stade d'un cancer (I, II, III, IV), intensité d'une douleur (nulle / faible / modérée / intense). L'ordre existe, mais l'écart I→II n'égale pas forcément l'écart III→IV.

**Quantitatif :**
- **Discret** : des nombres entiers issus d'un comptage. Nombre de crises par mois, nombre de globules dans un champ.
- **Continu** : toute valeur d'un intervalle est possible. Glycémie, taille, pression artérielle, concentration.

:::key
La bonne question n'est pas « y a-t-il des chiffres ? » mais « ces chiffres se comportent-ils comme des grandeurs ? ». Un numéro de dossier est un nombre, mais additionner deux numéros de dossier n'a aucun sens : c'est du qualitatif déguisé.
:::
<!-- /step -->

<!-- step:title="Le piège des faux nombres" -->
L'erreur la plus fréquente consiste à traiter en quantitatif ce qui est en réalité qualitatif, simplement parce que des chiffres apparaissent.

**Les codes numériques.** On code souvent le sexe en 0/1, le groupe sanguin en 1/2/3/4, la région en 1/2/3. Ces chiffres sont de pures **étiquettes**. Calculer une « moyenne de groupe sanguin » de 2,3 ne veut strictement rien dire. Ces variables restent **nominales** : on compte des effectifs, on croise dans un tableau, on fait un χ².

**Les scores ordinaux.** Une douleur cotée de 0 à 4 est ordinale : l'ordre est réel, mais rien ne garantit que passer de 3 à 4 « coûte » autant que passer de 0 à 1. En toute rigueur, on ne fait pas la moyenne d'un ordinal ; on le traite par des méthodes de **rangs** (Mann-Whitney, Spearman).

:::pitfall
Faire la moyenne d'une variable ordinale (un stade, un score de satisfaction) est une facilité tentante mais trompeuse : elle suppose que les écarts entre niveaux sont égaux, ce qui est rarement vrai. Le résultat a l'air d'un nombre solide et n'en est pas un.
:::
<!-- /step -->

<!-- step:title="Aléatoire ou contrôlé : qui décide de la valeur ?" -->
Passons à la seconde question, plus fine. Pour une variable donnée, demandez-vous : sa valeur est-elle **subie** (le hasard de la nature la fixe) ou **imposée** par l'expérimentateur ?

- Une variable **aléatoire** est observée telle qu'elle vient : la glycémie d'un patient, sa pression, son âge. L'expérimentateur ne la choisit pas, il la constate. Elle fluctue d'un sujet à l'autre selon le hasard biologique.
- Une variable **contrôlée** (ou fixée) est décidée d'avance par le protocole : les doses 10, 20 et 40 mg d'un médicament que *vous* administrez, les temps de prélèvement 0 h, 2 h, 6 h que *vous* planifiez. Ces valeurs ne fluctuent pas au hasard : elles sont posées par l'expérimentateur.

Une même grandeur peut être aléatoire dans une étude et contrôlée dans une autre. La dose est aléatoire si vous observez ce que des patients prennent spontanément ; elle est contrôlée si vous l'assignez vous-même.

:::note
Le caractère aléatoire ou contrôlé n'est pas une propriété de la grandeur physique, mais du **rôle qu'elle joue dans votre protocole**. C'est vous qui, en concevant l'étude, rendez une variable contrôlée ou la laissez aléatoire.
:::
<!-- /step -->

<!-- step:title="Conséquence n°1 : corrélation ou régression ?" -->
Cette distinction tranche un choix que beaucoup confondent.

**Les deux variables sont aléatoires → corrélation.** Vous mesurez sur chaque sujet la taille *et* le poids, deux grandeurs subies. Aucune n'est « la cause » posée par vous. On mesure alors la **force du lien** par le coefficient de corrélation $r$, où les deux variables jouent un rôle **symétrique** : corréler taille et poids ou poids et taille donne le même $r$.

**Une variable est contrôlée, l'autre aléatoire → régression.** Vous fixez la dose (contrôlée) et mesurez la réponse (aléatoire). Le lien n'est plus symétrique : la dose *explique* la réponse, pas l'inverse. On ajuste une **droite de régression** $y = a\,x + b$ pour prédire la réponse $y$ à partir de la dose $x$.

:::pitfall
Calculer un coefficient de corrélation sur des $x$ que l'on a choisis soi-même (des doses fixées, par exemple) donne un $r$ trompeur : sa valeur dépend de l'étendue des doses que vous avez décidé de tester, pas d'un lien « naturel » entre les variables. Quand $x$ est contrôlé, on décrit le lien par la **pente** de régression, pas par $r$.
:::
<!-- /step -->

<!-- step:title="Conséquence n°2 : le plan d'expérience" -->
Fixer une variable au lieu de la subir change aussi la puissance et la portée de l'étude.

En **contrôlant** un facteur, l'expérimentateur gagne deux choses. D'abord il peut **écarter les valeurs** (tester 10 et 40 mg plutôt que 10 et 12) pour rendre un effet plus visible. Ensuite il peut **équilibrer** les groupes et, par tirage au sort de l'affectation, casser les facteurs de confusion : c'est l'essai contrôlé randomisé.

À l'inverse, une étude purement **observationnelle** (tout est aléatoire, on ne fait que constater) est plus proche de la réalité mais plus fragile : les liens observés peuvent venir d'un facteur tiers non maîtrisé. C'est toute la différence entre « la dose *provoque* la réponse » (expérience contrôlée) et « la dose est *associée* à la réponse » (observation).

:::key
Contrôler une variable, c'est troquer un peu de naturel contre beaucoup de pouvoir de preuve : on isole l'effet, on écarte la confusion, on renforce la causalité. Observer sans contrôler reste utile, mais ne prouve que des *associations*.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Avant tout calcul, **qualifiez chaque variable** : qualitative (nominale / ordinale) ou quantitative (discrète / continue).
- Des chiffres ne font pas une variable quantitative : codes numériques et scores ordinaux restent **qualitatifs** ; n'en faites pas la moyenne à la légère.
- Distinguez le **contrôlé** (valeur fixée par l'expérimentateur) de l'**aléatoire** (valeur subie) : c'est un rôle dans le protocole, pas une propriété de la grandeur.
- Deux variables aléatoires → **corrélation** (lien symétrique, coefficient $r$). Une variable contrôlée + une aléatoire → **régression** (on prédit $y$ à partir de $x$).
- Contrôler un facteur (doses fixées, randomisation) renforce la preuve **causale** ; observer sans contrôler n'établit que des **associations**.
<!-- /step -->
