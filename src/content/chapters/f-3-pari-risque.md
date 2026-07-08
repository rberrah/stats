---
id: "f-3-pari-risque"
slug: "f-3-pari-risque"
title: "Le pari statistique et la notion de risque"
description: "Comment décider entre deux hypothèses à partir d'un échantillon : le raisonnement par l'absurde, l'hypothèse nulle et le risque d'erreur qu'on accepte de courir."
track: "section-F"
order: 3
duration: "10 min"
programItem: "F-3"
tags: ["hypothèse nulle", "test", "risque", "pari", "H0"]
quiz:
  - prompt: "Dans un test statistique, l'hypothèse nulle H0 énonce en général :"
    options:
      - "L'absence de différence : « c'est le hasard qui explique tout »"
      - "L'existence certaine d'un effet du traitement"
      - "Que l'échantillon a été mal tiré au sort"
    correct: 0
  - prompt: "Un test ne montre pas de différence significative (p = 0,30). Que peut-on conclure ?"
    options:
      - "On ne peut pas rejeter H0 : les données sont compatibles avec le hasard, sans le prouver"
      - "H0 est démontrée : il n'y a aucune différence"
      - "Le traitement est certainement inefficace"
    correct: 0
---

<!-- step:title="Décider, c'est parier" -->
Un nouvel antalgique est testé. Dans le groupe traité, la douleur baisse en moyenne un peu plus que dans le groupe placebo. La question brûle les lèvres : **cette différence est-elle réelle, ou n'est-ce qu'un coup de chance de l'échantillonnage ?**

Vous connaissez maintenant le problème (chapitre F-2) : deux échantillons diffèrent toujours un peu, même tirés de la même urne. Donc observer une différence ne suffit *jamais* à prouver qu'elle existe dans la population.

Face à cette incertitude, le statisticien ne cherche pas la vérité absolue : il **parie**. Il fait un pari raisonné, en acceptant d'avance de pouvoir se tromper — mais rarement, et de façon contrôlée. Comprendre ce pari, c'est comprendre l'esprit de tous les tests que vous rencontrerez.
<!-- /step -->

<!-- step:title="Deux hypothèses en présence" -->
Tout test oppose deux affirmations rivales, entre lesquelles il faut trancher.

- L'**hypothèse nulle** $H_0$ : « il n'y a rien à voir ». La différence observée n'est que du bruit d'échantillonnage ; dans la population, l'antalgique ne fait pas mieux que le placebo. C'est l'hypothèse du **hasard seul**.
- L'**hypothèse alternative** $H_1$ : « il se passe quelque chose ». L'antalgique a un effet réel, la différence n'est pas due au seul hasard.

Pourquoi ce nom d'hypothèse « nulle » ? Parce qu'elle énonce presque toujours une *absence* : différence nulle, effet nul, écart nul. C'est l'hypothèse de la prudence, du « statu quo ».

:::key
$H_0$ est l'hypothèse du hasard (« aucune différence réelle »), $H_1$ celle de l'effet (« une différence réelle existe »). Un test met $H_0$ à l'épreuve des données. Il ne cherche pas à *confirmer* $H_0$, mais à voir si les données sont assez surprenantes pour la *rejeter*.
:::
<!-- /step -->

<!-- step:title="Le raisonnement par l'absurde du statisticien" -->
Le mécanisme est celui d'un raisonnement par l'absurde, emprunté à la logique mais teinté de probabilités.

On commence par **supposer $H_0$ vraie** : admettons que le hasard seul soit à l'œuvre. Puis on calcule : *si c'était vrai, quelle serait la probabilité d'observer une différence aussi grande que celle que j'ai sous les yeux ?*

- Si cette probabilité est **confortable**, l'observation est banale sous $H_0$. Le hasard suffit à l'expliquer : on **ne rejette pas** $H_0$.
- Si cette probabilité est **minuscule**, l'observation serait un quasi-miracle sous $H_0$. Plutôt que de croire au miracle, on préfère abandonner l'hypothèse de départ : on **rejette** $H_0$ au profit de $H_1$.

Cette probabilité-clé, « la chance d'observer un écart au moins aussi extrême si $H_0$ est vraie », est le fameux **degré de signification**, noté $p$.

:::note
Le raisonnement ne dit pas « $H_0$ est fausse ». Il dit : « les données seraient trop improbables si $H_0$ était vraie, donc je parie contre $H_0$. » C'est un pari fondé sur l'étonnement, pas une démonstration.
:::
<!-- /step -->

<!-- step:title="Un seuil, un pari, un risque" -->
Reste à fixer la frontière entre « confortable » et « minuscule ». On choisit **à l'avance** un seuil, le **risque de première espèce** $\alpha$, presque toujours pris à $\alpha = 0{,}05$ (5 %).

La règle de décision devient limpide :

$$\text{si } p \le \alpha \Rightarrow \text{on rejette } H_0 \qquad \text{si } p > \alpha \Rightarrow \text{on ne rejette pas } H_0$$

Prenons un exemple chiffré. Vous comparez la fréquence de guérison entre deux traitements et le test renvoie $p = 0{,}013$. Comme $0{,}013 \le 0{,}05$, vous rejetez $H_0$ : la différence est dite **statistiquement significative**.

Mais voici le cœur du pari : ce $p = 0{,}013$ signifie que, *même si $H_0$ était vraie*, un écart aussi marqué surviendrait par pur hasard environ 13 fois sur 1000. Vous rejetez $H_0$ tout en sachant qu'il vous reste une petite chance de vous tromper. En fixant $\alpha = 0{,}05$, vous acceptez d'avance de rejeter $H_0$ à tort dans au plus 5 % des cas où elle est vraie.

:::pitfall
« Significatif » ne veut pas dire « important » ni « certain ». Cela veut dire : « trop improbable pour être attribué au hasard, au seuil qu'on s'est fixé ». Une différence minuscule et sans intérêt clinique peut être significative sur un très grand échantillon ; une différence énorme peut ne pas l'être sur un tout petit.
:::
<!-- /step -->

<!-- step:title="On ne prouve jamais H0" -->
Piège symétrique, tout aussi fréquent. Que faire quand $p = 0{,}30$, donc quand on **ne rejette pas** $H_0$ ?

La tentation est de conclure « il n'y a pas de différence ». C'est une faute. Ne pas rejeter $H_0$ signifie seulement que **les données sont compatibles avec le hasard**, pas que le hasard soit la vraie explication. Peut-être n'y a-t-il aucun effet ; peut-être y en a-t-il un, mais votre échantillon était trop petit pour le détecter.

:::key
L'absence de preuve n'est pas la preuve de l'absence. On peut **rejeter** $H_0$ (conclusion forte : « il y a une différence »), mais on ne peut jamais la **démontrer** (« il n'y a aucune différence »). Le test est une machine à réfuter le hasard, pas à le confirmer.
:::

Ce déséquilibre — rejeter est fort, ne pas rejeter est faible — annonce directement le chapitre suivant : il existe *deux* façons distinctes de se tromper, et elles n'ont ni le même nom, ni le même risque.
<!-- /step -->

<!-- step:title="À retenir" -->
- Décider en statistique, c'est **parier** sur une population à partir d'un échantillon, en acceptant d'avance un risque d'erreur maîtrisé.
- Tout test oppose $H_0$ (le **hasard seul**, aucune différence réelle) à $H_1$ (un **effet réel** existe).
- On raisonne **par l'absurde** : on suppose $H_0$ vraie, puis on calcule le degré de signification $p$ = probabilité d'un écart au moins aussi extrême sous $H_0$.
- Règle : $p \le \alpha \Rightarrow$ on rejette $H_0$ ; $p > \alpha \Rightarrow$ on ne rejette pas. Le seuil $\alpha$ (souvent 5 %) est **fixé à l'avance** : c'est le risque assumé de rejeter $H_0$ à tort.
- **On ne prouve jamais $H_0$.** Rejeter est une conclusion forte ; ne pas rejeter signifie seulement « compatible avec le hasard ». L'absence de preuve n'est pas la preuve de l'absence.
<!-- /step -->
