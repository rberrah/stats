---
id: "a-1-ecart-reduit"
slug: "a-1-ecart-reduit"
title: "Fluctuations d'échantillonnage d'un pourcentage : l'écart-réduit"
description: "Pourquoi une fréquence observée danse autour de la vraie proportion, et comment l'écart-réduit mesure cette danse."
track: "section-A"
order: 11
duration: "12 min"
programItem: "A-1"
tags: ["pourcentage", "écart-réduit", "fluctuation d'échantillonnage", "loi normale"]
level: "beginner"
sources: ["cochran-sampling", "bland-altman-normal", "schwartz"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Pour une proportion vraie p et un échantillon de taille n, l'écart-type de la fréquence observée f vaut :"
    options:
      - "√(p(1−p)/n)"
      - "p(1−p)/n"
      - "√(p(1−p))"
    correct: 0
  - prompt: "On calcule un écart-réduit z = 2,6. Au repère habituel de 1,96, on retient l'idée que :"
    options:
      - "l'écart est banal, car f est forcément proche de p"
      - "l'écart est trop grand pour une simple fluctuation d'échantillonnage"
      - "le calcul est impossible sans connaître la population entière"
    correct: 1
  - prompt: "Si l'on multiplie la taille de l'échantillon par 4, l'écart-type de f est :"
    options:
      - "multiplié par 2"
      - "inchangé"
      - "divisé par 2"
    correct: 2
---

<!-- step:title="Une même population, des échantillons qui dansent" -->
Imaginez une immense population de bactéries dont **exactement 20 %** résistent à un antibiotique. Ce chiffre, 20 %, est une vérité fixe de la population : on l'appelle $p$.

Vous ne pouvez pas examiner toutes les bactéries. Vous prélevez donc un échantillon, disons 400 colonies, et vous comptez celles qui résistent. Vous trouvez peut-être 78 résistantes, soit 19,5 %. Un collègue refait la même expérience et trouve 85 résistantes, soit 21,25 %. Un troisième trouve 76, soit 19 %.

Aucun ne s'est trompé. Chacun a simplement tiré **un** échantillon parmi une infinité d'échantillons possibles. La fréquence observée $f$ change d'un tirage à l'autre : elle **fluctue** autour de la vraie valeur $p$. C'est la *fluctuation d'échantillonnage*.

La question de tout ce chapitre est simple : **de combien $f$ a-t-elle le droit de s'écarter de $p$ par le seul jeu du hasard ?**
<!-- /step -->

<!-- step:title="L'écart-type d'une fréquence" -->
La théorie donne une réponse remarquablement nette. Si l'on répétait le tirage un très grand nombre de fois, les fréquences observées se répartiraient autour de $p$ avec un écart-type :

$$\sigma_f = \sqrt{\dfrac{p\,(1-p)}{n}}$$

Deux enseignements y sont cachés.

D'abord, plus l'échantillon est grand, plus $f$ colle à $p$ : $n$ est **au dénominateur, sous la racine**. Quadrupler $n$ divise l'écart-type par 2 — il faut donc quatre fois plus de sujets pour être deux fois plus précis.

Ensuite, la dispersion dépend de $p$ lui-même : elle est maximale autour de $p = 0{,}5$ et se resserre vers les valeurs extrêmes.

Reprenons nos bactéries : $p = 0{,}20$ et $n = 400$.

$$\sigma_f = \sqrt{\dfrac{0{,}20 \times 0{,}80}{400}} = \sqrt{0{,}0004} = 0{,}02$$

L'écart-type vaut donc **2 points de pourcentage**. Les fréquences observées se serrent autour de 20 %, la plupart entre 16 % et 24 %.

:::key
L'écart-type d'un pourcentage observé, $\sqrt{p(1-p)/n}$, dit à quel point une fréquence a le droit de fluctuer. On l'appelle aussi *erreur-standard* de la fréquence.
:::
<!-- /step -->

<!-- step:title="L'écart-réduit : compter en écarts-types" viz="EcartReduit" -->
Un écart de « 3 points de pourcentage » est-il beaucoup ? Impossible de répondre dans l'absolu : tout dépend de l'écart-type. La bonne idée est de **mesurer l'écart en nombre d'écarts-types**. C'est l'*écart-réduit*, noté $z$ :

$$z = \dfrac{f - p}{\sqrt{\dfrac{p(1-p)}{n}}}$$

Le numérateur est l'écart brut $f - p$ ; le dénominateur est l'unité de mesure naturelle de cet écart. Le résultat est un nombre sans dimension : « $f$ est à $z$ écarts-types de $p$ ».

Sur nos bactéries, supposons un laboratoire qui observe $f = 0{,}25$ (100 résistantes sur 400) :

$$z = \dfrac{0{,}25 - 0{,}20}{0{,}02} = 2{,}5$$

La fréquence observée est à **2,5 écarts-types** au-dessus de la valeur attendue. Le graphique traduit cet écart-réduit sur la courbe des fluctuations possibles.
<!-- /step -->

<!-- step:title="D'où vient le fameux 1,96 ?" -->
:::howto
**Comment lire le schéma.** La courbe en cloche représente toutes les fréquences que le hasard peut produire autour de $p$. Déplacez $n$ : la cloche se resserre. Déplacez $f$ : le trait vertical se décale et l'écart-réduit affiché change. La zone sombre aux deux extrémités correspond aux 5 % de tirages les plus surprenants.
:::

Dès que $n$ est un peu grand, l'écart-réduit $z$ suit **approximativement une loi normale** centrée sur 0, d'écart-type 1. Le nombre **1,96** n'a alors rien d'arbitraire : on peut le retrouver pas à pas.

**1. L'aire sous la cloche vaut 1**, soit 100 % des tirages possibles. Chaque tranche d'aire est une probabilité.

**2. On veut encadrer les 95 % de tirages les plus banals.** Il faut donc **laisser 5 % de côté** — les plus extrêmes. Comme la cloche est symétrique, on partage ces 5 % en deux queues égales : **2,5 % à droite et 2,5 % à gauche**.

**3. On lit dans la table de la loi normale** la valeur qui laisse exactement **2,5 % au-delà d'elle** : c'est **1,96**. Par symétrie, 2,5 % se trouvent aussi en dessous de $-1{,}96$. Entre les deux : $100 - 2{,}5 - 2{,}5 = 95\ \%$. Voilà le nombre.

C'est pourquoi « **95 % de confiance** » et « **risque de 5 %** » sont les deux faces d'une même pièce : les 5 % abandonnés dans les queues sont précisément le risque de prendre une simple fluctuation pour un vrai écart. Le 1,96 n'est donc que **le repère du niveau 95 %**. Exigez une autre garantie, et il change :

| Niveau de confiance | Risque toléré (bilatéral) | Valeur seuil |
|---|---|---|
| 90 % | 10 % | 1,64 |
| 95 % | 5 % | **1,96** |
| 99 % | 1 % | 2,58 |

Plus on veut être sûr de ne pas se tromper, plus on doit **élargir** l'intervalle : le seuil grimpe. Vous pouvez le vérifier sur le schéma du chapitre B‑1 (loi normale) en amenant les bornes à $\pm 1{,}96$ : l'aire hachurée affiche bien 95 %.

Conséquence : si $f$ n'est qu'une fluctuation autour de $p$, son écart-réduit ne dépasse 1,96 en valeur absolue qu'**une fois sur vingt**. Nos $z = 2{,}5$ franchit ce repère : l'écart entre 25 % et 20 % est difficile à mettre sur le seul compte du hasard — c'est exactement ce raisonnement que le chapitre suivant transformera en **test**.
<!-- /step -->

<!-- step:title="Le piège du petit échantillon" -->
:::pitfall
L'approximation normale n'est bonne que si l'échantillon est assez grand *et* que $p$ n'est pas trop proche de 0 ou de 1. La règle usuelle : $n\,p$ **et** $n(1-p)$ tous deux supérieurs à 5. Sur 12 sujets avec $p = 0{,}05$, on attend moins d'un cas : l'écart-réduit et le seuil 1,96 n'ont plus de sens, et il faudra un calcul exact (voir A-8).
:::

Autre confusion fréquente : ne pas mélanger l'écart-type de la fréquence, $\sqrt{p(1-p)/n}$, avec l'écart-type des individus. Ici chaque bactérie ne prend que deux états (résistante ou non) ; ce qui nous intéresse est la dispersion de la **fréquence**, pas celle d'une mesure continue.
<!-- /step -->

<!-- step:title="À retenir" -->
- Une fréquence observée $f$ **fluctue** autour de la vraie proportion $p$ ; c'est la fluctuation d'échantillonnage, pas une erreur.
- L'écart-type de $f$ vaut $\sqrt{p(1-p)/n}$ : la précision augmente comme $\sqrt{n}$ (quatre fois plus de sujets pour deux fois plus de précision).
- L'**écart-réduit** $z = (f - p)/\sqrt{p(1-p)/n}$ exprime l'écart en nombre d'écarts-types.
- $z$ suit approximativement une **loi normale** ; **95 %** des fluctuations tiennent entre −1,96 et +1,96.
- Un $|z| > 1{,}96$ signale un écart peu compatible avec le seul hasard — à condition que $np$ et $n(1-p)$ dépassent 5.
<!-- /step -->
