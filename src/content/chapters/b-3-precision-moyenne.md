---
id: "b-3-precision-moyenne"
slug: "b-3-precision-moyenne"
title: "Précision d'une moyenne ; comparaison à une valeur théorique"
description: "Intervalle de confiance d'une moyenne, comparaison à une valeur de référence, et calcul du nombre de sujets nécessaires."
track: "section-B"
order: 23
duration: "13 min"
programItem: "B-3"
tags: ["intervalle de confiance", "moyenne", "précision", "nombre de sujets"]
quiz:
  - prompt: "Un intervalle de confiance à 95 % d'une moyenne vaut [4,3 ; 4,9] mmol/L. Interprétation correcte ?"
    options:
      - "95 % des patients ont une valeur entre 4,3 et 4,9."
      - "Il y a 95 % de chances que le prochain patient soit dans cet intervalle."
      - "La vraie moyenne de la population est plausiblement comprise entre 4,3 et 4,9 ; ce procédé capture la vraie valeur dans 95 % des échantillons."
    correct: 2
  - prompt: "Pour diviser par deux la largeur d'un intervalle de confiance d'une moyenne, il faut :"
    options:
      - "multiplier le nombre de sujets par quatre."
      - "doubler le nombre de sujets."
      - "doubler l'écart-type."
    correct: 0
---

<!-- step:title="Une moyenne sans sa précision ne veut rien dire" -->
Un laboratoire annonce que la CRP moyenne de son échantillon de patients est de 8 mg/L. Question immédiate : **à quel point peut-on s'y fier ?** Si l'échantillon comptait 4 patients, cette moyenne est fragile ; s'il en comptait 900, elle est solide.

Donner une moyenne sans indiquer sa précision, c'est donner une adresse sans le numéro de rue. L'outil qui exprime cette précision est l'**intervalle de confiance** : une fourchette de valeurs plausibles pour la vraie moyenne $\mu$ de la population.
<!-- /step -->

<!-- step:title="Construire l'intervalle de confiance" viz="IntervalleConfiance" -->
On sait (chapitre B-1) que la moyenne observée $\bar{x}$ fluctue autour de $\mu$ avec une erreur-standard $s/\sqrt{n}$. L'intervalle de confiance à 95 % encadre $\bar{x}$ de part et d'autre :

$$\bar{x} \pm t \cdot \frac{s}{\sqrt{n}}$$

Le coefficient $t$ vient de la table de Student, avec $n-1$ degrés de liberté. Pour un grand échantillon, $t \approx 2$ (précisément 1,96) ; pour un petit échantillon, $t$ est un peu plus grand (par exemple 2,26 pour $n = 10$).

:::howto
**Comment lire le schéma.** Chaque trait horizontal est l'intervalle de confiance d'un échantillon différent. La ligne verticale marque la vraie moyenne $\mu$. Observez que la plupart des intervalles la traversent, mais pas tous : en moyenne, **1 sur 20** la manque. C'est exactement ce que signifie « 95 % ».
:::
<!-- /step -->

<!-- step:title="Un exemple chiffré" -->
On mesure la glycémie à jeun chez $n = 25$ volontaires. On trouve $\bar{x} = 5{,}2$ mmol/L et $s = 0{,}6$ mmol/L. L'erreur-standard vaut :

$$\frac{s}{\sqrt{n}} = \frac{0{,}6}{\sqrt{25}} = \frac{0{,}6}{5} = 0{,}12 \text{ mmol/L}$$

Pour $n-1 = 24$ degrés de liberté, la table donne $t \approx 2{,}06$. D'où la demi-largeur :

$$2{,}06 \times 0{,}12 \approx 0{,}25 \text{ mmol/L}$$

L'intervalle de confiance à 95 % est donc :

$$5{,}2 \pm 0{,}25 \;\Rightarrow\; [\,4{,}95\;;\;5{,}45\,] \text{ mmol/L}$$

On peut affirmer, avec 95 % de confiance, que la vraie glycémie moyenne de cette population est comprise entre 4,95 et 5,45 mmol/L.
<!-- /step -->

<!-- step:title="Comparer à une valeur théorique" -->
Souvent, on veut savoir si une moyenne s'écarte d'une **valeur de référence** connue $\mu_0$ : la norme d'un dosage, une valeur cible, un standard réglementaire.

La règle est simple et se lit directement sur l'intervalle de confiance :

:::key
Si la valeur de référence $\mu_0$ **tombe à l'intérieur** de l'intervalle de confiance, l'écart observé est compatible avec le hasard : rien ne prouve une différence. Si $\mu_0$ **tombe en dehors**, l'écart est significatif au risque de 5 %.
:::

Suite de l'exemple : la valeur de référence de glycémie à jeun est $\mu_0 = 5{,}0$ mmol/L. Elle **appartient** à l'intervalle [4,95 ; 5,45]. Conclusion : la glycémie moyenne de cet échantillon ne diffère pas significativement de la norme. Formellement, cela revient à calculer $t = (\bar{x}-\mu_0)/(s/\sqrt{n})$ et à le comparer à la table — les deux approches donnent toujours la même décision.
<!-- /step -->

<!-- step:title="Combien de sujets faut-il ?" -->
La demi-largeur de l'intervalle est $i = t \cdot s/\sqrt{n}$. Fixez d'abord la précision $i$ que vous voulez atteindre, puis renversez la formule pour trouver l'effectif :

$$n \approx \left(\frac{t \cdot s}{i}\right)^2$$

Exemple : vous visez une glycémie moyenne connue à ±0,10 mmol/L près (donc $i = 0{,}10$), en supposant $s \approx 0{,}6$ et $t \approx 2$ :

$$n \approx \left(\frac{2 \times 0{,}6}{0{,}10}\right)^2 = 12^2 = 144 \text{ sujets}$$

Remarquez le carré : viser une précision **deux fois** plus fine (passer de 0,20 à 0,10) exige **quatre fois** plus de sujets. La précision d'une moyenne est un luxe coûteux — c'est encore le $\sqrt{n}$ à l'œuvre.
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
L'intervalle de confiance à 95 % **ne contient pas 95 % des patients**. Il encadre la **moyenne** de la population, pas les individus. Un IC très étroit (grand $n$) coexiste parfaitement avec des patients très dispersés : il dit seulement qu'on connaît bien le centre, pas que tout le monde est proche du centre. Pour décrire l'étalement des individus, c'est l'écart-type $s$ qu'il faut citer, pas l'intervalle de confiance de la moyenne.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Une moyenne se donne toujours avec sa **précision** : l'intervalle de confiance $\bar{x} \pm t\,s/\sqrt{n}$.
- Le coefficient $t$ (table de Student, $n-1$ ddl) vaut environ 2 pour un grand échantillon, un peu plus pour un petit.
- **Comparaison à une référence** $\mu_0$ : si $\mu_0$ est dans l'IC, pas de différence significative ; si elle est dehors, différence au risque de 5 %.
- **Nombre de sujets** : $n \approx (t\,s/i)^2$ ; diviser la largeur par 2 exige de **quadrupler** l'effectif.
- L'IC de la moyenne encadre le **centre** de la population, jamais l'étalement des individus.
<!-- /step -->
