---
id: "a-3-intervalle-confiance-pourcentage"
slug: "a-3-intervalle-confiance-pourcentage"
title: "Précision d'un pourcentage : l'intervalle de confiance"
description: "Encadrer la vraie proportion à partir d'une fréquence observée, et en déduire le nombre de sujets nécessaire."
track: "section-A"
order: 13
duration: "12 min"
programItem: "A-3"
tags: ["intervalle de confiance", "précision", "nombre de sujets", "estimation"]
quiz:
  - prompt: "L'intervalle de confiance à 95 % d'un pourcentage f observé sur n sujets est environ :"
    options:
      - "f ± 1,96 × √(f(1−f)/n)"
      - "f ± 1,96 × f(1−f)/n"
      - "f ± 1,96 × n"
    correct: 0
  - prompt: "Un IC à 95 % de [11 % ; 19 %] signifie que :"
    options:
      - "95 % des patients ont la caractéristique étudiée"
      - "il y a 95 % de chances que le prochain patient soit dans cet intervalle"
      - "cet intervalle, construit ainsi, encadre la vraie proportion dans 95 % des études"
    correct: 2
  - prompt: "Pour diviser par deux la largeur d'un intervalle de confiance, il faut environ :"
    options:
      - "multiplier le nombre de sujets par 4"
      - "multiplier le nombre de sujets par 2"
      - "diviser le nombre de sujets par 2"
    correct: 0
---

<!-- step:title="Renverser la question du test" -->
Les chapitres précédents partaient d'une proportion vraie connue ($p$ ou $p_0$) pour prévoir les fluctuations de $f$. En pratique, c'est l'inverse : on **observe** $f$ et l'on ignore $p$.

Un exemple. Un service teste la tolérance d'un nouveau médicament : sur **300 patients**, **45 signalent un effet indésirable**, soit $f = 0{,}15$, c'est-à-dire 15 %.

Annoncer « 15 % » tout court serait malhonnête : ce chiffre repose sur un échantillon et aurait été un peu différent avec 300 autres patients. La vraie question n'est pas « combien exactement ? » mais **« dans quelle fourchette se trouve raisonnablement la vraie proportion ? »**. Cette fourchette est l'*intervalle de confiance*.
<!-- /step -->

<!-- step:title="Construire l'intervalle à 95 %" -->
Le raisonnement reprend l'écart-réduit. On sait que $f$ tombe à moins de 1,96 écart-type de $p$ dans 95 % des échantillons. En renversant cette phrase, on encadre $p$ autour de $f$. Comme on ne connaît pas $p$, on estime l'écart-type avec la fréquence observée elle-même :

$$\text{IC}_{95\%} = f \pm 1{,}96 \sqrt{\dfrac{f(1-f)}{n}}$$

La quantité $\sqrt{f(1-f)/n}$ est l'erreur-standard estimée ; le facteur 1,96 fixe le niveau de confiance à 95 %.

:::recall
**Le 1,96, encore lui.** Il vaut pour une confiance de 95 % parce qu'il laisse 2,5 % de chaque côté de la loi normale (5 % au total). Voulez-vous une fourchette « à 99 % » ? Remplacez 1,96 par **2,58**, et elle s'élargit. À 90 %, prenez **1,64**. L'origine de ces valeurs est détaillée au chapitre A‑1.
:::

Sur nos 300 patients :

$$\sqrt{\dfrac{0{,}15 \times 0{,}85}{300}} = \sqrt{0{,}000425} \approx 0{,}0206$$

$$1{,}96 \times 0{,}0206 \approx 0{,}040$$

$$\text{IC}_{95\%} = 0{,}15 \pm 0{,}040 = [\,0{,}11\ ;\ 0{,}19\,]$$

La vraie fréquence d'effets indésirables se situe **vraisemblablement entre 11 % et 19 %**. La demi-largeur, 4 points, est la *précision* de l'estimation.
<!-- /step -->

<!-- step:title="Ce que l'intervalle veut (et ne veut pas) dire" viz="IntervalleConfiance" -->
:::howto
**Comment lire le schéma.** Chaque trait horizontal est l'intervalle de confiance d'un échantillon différent, tous tirés de la même population. La ligne verticale est la vraie proportion $p$. Faites défiler les échantillons : environ **19 traits sur 20** touchent la ligne ; les rares qui la manquent illustrent les 5 % où l'intervalle « rate » $p$. Augmentez $n$ : les traits raccourcissent.
:::

L'interprétation correcte porte sur la **méthode**, pas sur un intervalle unique : « si l'on répétait l'étude un grand nombre de fois, 95 % des intervalles ainsi construits contiendraient la vraie proportion $p$ ».

:::pitfall
Un IC à 95 % ne signifie **pas** que 95 % des patients sont dans l'intervalle (il porte sur *une proportion*, pas sur des individus), ni que $p$ « a 95 % de chances » d'être dans *cet* intervalle-ci : une fois calculé, l'intervalle contient $p$ ou ne le contient pas. La probabilité qualifie le procédé, pas le résultat obtenu.
:::
<!-- /step -->

<!-- step:title="Lien avec le test, et rôle de la largeur" -->
Intervalle de confiance et test disent la même chose sous deux angles. Si une valeur théorique $p_0$ tombe **en dehors** de l'IC à 95 %, alors le test bilatéral de « $p = p_0$ » est significatif à 5 % — et réciproquement.

Ainsi, notre IC $[11\%\,;\,19\%]$ exclut par exemple 8 % : comparer nos 15 % à une référence de 8 % donnerait un test significatif. Il inclut en revanche 13 % : une référence de 13 % serait compatible avec nos données.

La largeur de l'intervalle mesure la précision, et elle dépend de $n$ sous la racine. Pour **diviser la largeur par deux**, il faut **quadrupler l'effectif** : la précision se paie cher.
<!-- /step -->

<!-- step:title="Combien de sujets pour la précision voulue ?" -->
On peut retourner la formule *avant* l'étude pour dimensionner l'échantillon. Si l'on vise une demi-largeur $i$ (précision souhaitée) autour d'une proportion attendue $f$ :

$$n = \dfrac{1{,}96^2 \; f\,(1-f)}{i^2}$$

Supposons que l'on veuille estimer notre taux d'effets indésirables (attendu autour de 15 %) à **± 3 points** près ($i = 0{,}03$) :

$$n = \dfrac{1{,}96^2 \times 0{,}15 \times 0{,}85}{0{,}03^2} = \dfrac{3{,}84 \times 0{,}1275}{0{,}0009} \approx 544$$

Il faudrait environ **545 patients**. Quand on n'a aucune idée de $f$, on prend le cas le plus défavorable $f = 0{,}5$ (qui maximise $f(1-f)$), ce qui gonfle l'effectif requis.

:::key
La précision d'un pourcentage se pilote *avant* l'étude : fixez la demi-largeur $i$ voulue, et $n = 1{,}96^2 f(1-f)/i^2$ donne le nombre de sujets nécessaire.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Un pourcentage observé s'accompagne toujours de son **intervalle de confiance** : $f \pm 1{,}96\sqrt{f(1-f)/n}$.
- L'IC à 95 % encadre la **vraie proportion** ; l'interprétation porte sur la méthode : 95 % des intervalles ainsi construits contiennent $p$.
- Il ne décrit ni la dispersion des individus, ni une probabilité attachée à l'intervalle une fois calculé.
- IC et test sont deux faces d'une même pièce : $p_0$ hors de l'IC ⇔ test significatif à 5 %.
- Diviser la largeur par 2 exige de **quadrupler $n$** ; on dimensionne l'étude avec $n = 1{,}96^2 f(1-f)/i^2$.
<!-- /step -->
