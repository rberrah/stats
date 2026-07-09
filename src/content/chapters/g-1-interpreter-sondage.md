---
id: "g-1-interpreter-sondage"
slug: "g-1-interpreter-sondage"
title: "Interpréter un sondage : marge d'erreur et taille d'échantillon"
description: "Ce que signifie « ± 3 points », pourquoi la précision suit 1/√n, et pourquoi un gros échantillon mal recruté reste faux."
track: "section-G"
order: 61
duration: "12 min"
programItem: "G-1"
tags: ["sondage", "marge d'erreur", "intervalle de confiance", "taille d'échantillon", "biais de sélection"]
quiz:
  - prompt: "Un sondage donne 52 % sur 1 000 personnes, « marge d'erreur ± 3 points ». Cela signifie que :"
    options:
      - "la vraie proportion est très probablement comprise entre 49 % et 55 %"
      - "52 % des personnes interrogées se sont trompées de 3 points"
      - "le sondage est faux à 3 %"
    correct: 0
  - prompt: "Pour diviser par deux la marge d'erreur d'un sondage, il faut environ :"
    options:
      - "doubler le nombre de personnes interrogées"
      - "quadrupler le nombre de personnes interrogées"
      - "interroger deux fois moins de personnes"
    correct: 1
  - prompt: "Un sondage en ligne recueille 50 000 réponses spontanées. Sa principale faiblesse est :"
    options:
      - "une marge d'erreur beaucoup trop grande"
      - "un échantillon non représentatif de la population cible"
      - "un nombre de sujets insuffisant"
    correct: 1
---

<!-- step:title="Un chiffre de sondage n'est jamais un point" -->
« 52 % des personnes interrogées sont favorables à la mesure. » Le chiffre paraît net, mais il repose sur un **échantillon** : on n'a pas interrogé la population entière, seulement quelques centaines ou milliers de personnes tirées au sort.

Si l'on recommençait le sondage le lendemain, avec 1 000 autres personnes, on trouverait peut-être 50 %, ou 54 %. Le vrai pourcentage de la population — celui qu'on obtiendrait en interrogeant *tout le monde* — reste inconnu. Le sondage ne livre pas ce vrai chiffre : il livre une **fourchette** qui l'encadre raisonnablement.

C'est exactement l'intervalle de confiance d'un pourcentage. Un sondage sérieux ne dit donc jamais « 52 % » tout court, mais « 52 %, à ± 3 points près ».
<!-- /step -->

<!-- step:title="La marge d'erreur, ou pourquoi 1/√n" -->
La demi-largeur de l'intervalle de confiance à 95 % d'un pourcentage $f$ observé sur $n$ personnes s'écrit :

$$m = 1{,}96 \sqrt{\dfrac{f(1-f)}{n}}$$

:::recall
**Pourquoi 1,96 ?** C'est le repère du niveau **95 %** dans la loi normale : il laisse 2,5 % des tirages dans chaque queue, soit $2 \times 2{,}5 = 5\ \%$ de risque au total. Pour une confiance de 90 % on prendrait 1,64, pour 99 % on prendrait 2,58. La construction pas à pas est détaillée au chapitre A‑1 (« D'où vient le fameux 1,96 ? »).
:::

Le produit $f(1-f)$ est maximal quand $f = 0{,}5$ (où il vaut $0{,}25$). C'est le cas **le plus défavorable**, celui que les instituts annoncent par prudence. En y remplaçant $f$ par $0{,}5$ :

$$m_{\max} = 1{,}96 \sqrt{\dfrac{0{,}25}{n}} = \dfrac{1{,}96 \times 0{,}5}{\sqrt{n}} = \dfrac{0{,}98}{\sqrt{n}} \approx \dfrac{1}{\sqrt{n}}$$

Voilà la fameuse règle : **la marge d'erreur d'un sondage vaut environ $1/\sqrt{n}$**. Pour $n = 1\,000$ personnes :

$$m \approx \dfrac{1}{\sqrt{1\,000}} = \dfrac{1}{31{,}6} \approx 0{,}032$$

soit **± 3 points**. C'est d'où vient ce chiffre récurrent : il n'est pas choisi, il découle mécaniquement des 1 000 interrogés.
<!-- /step -->

<!-- step:title="Ce que « ± 3 points » veut vraiment dire" viz="IntervalleConfiance" -->
:::howto
**Comment lire le schéma.** Chaque trait horizontal est l'intervalle de confiance d'un sondage différent, tous menés dans la même population. La ligne verticale est le vrai pourcentage, inconnu en pratique. Faites défiler les sondages : environ **19 sur 20** encadrent la ligne ; le rare qui la manque illustre le « sondage malchanceux ». Augmentez $n$ : les traits se resserrent autour de la vérité.
:::

Sur nos 52 % à ± 3 points, l'intervalle est $[49\%\,;\,55\%]$. L'interprétation correcte porte sur la **méthode** : si l'on répétait le sondage un grand nombre de fois, 95 % des fourchettes ainsi construites contiendraient le vrai pourcentage.

Conséquence directe : donner « 52 % contre 48 % » comme un écart tranché est abusif si les deux intervalles se chevauchent. Ici $[49\%\,;\,55\%]$ recouvre 50 % : on ne peut pas conclure qu'une majorité est acquise.
<!-- /step -->

<!-- step:title="Combien de personnes pour quelle précision ?" -->
On retourne la formule *avant* le sondage pour choisir l'effectif. En visant une marge $m$ dans le cas le plus défavorable :

$$n \approx \dfrac{1}{m^2}$$

Le tableau se lit alors d'un coup d'œil :

| Personnes interrogées ($n$) | Marge d'erreur ($\approx 1/\sqrt{n}$) |
|---|---|
| 400 | ± 5 points |
| 1 000 | ± 3 points |
| 2 500 | ± 2 points |
| 10 000 | ± 1 point |

La leçon est cruelle : gagner en précision coûte de plus en plus cher. Pour passer de ± 3 à ± 1,5 point, il ne faut pas doubler l'échantillon mais le **quadrupler** (de 1 000 à 4 000), car $n$ varie comme $1/m^2$.

:::key
La marge d'erreur d'un sondage vaut environ $1/\sqrt{n}$. Diviser la marge par deux exige de quadrupler l'échantillon : c'est pourquoi presque tous les sondages tournent autour de 1 000 personnes (± 3 points), un bon compromis coût/précision.
:::
<!-- /step -->

<!-- step:title="Le piège qui compte vraiment : la représentativité" -->
La marge d'erreur ne mesure qu'une chose : la **fluctuation d'échantillonnage** d'un tirage *au hasard* dans la bonne population. Elle ne dit rien sur une erreur bien plus dangereuse : un échantillon qui **ne ressemble pas** à la population cible.

:::pitfall
Un gros échantillon **mal recruté** est plus trompeur qu'un petit échantillon bien tiré, car sa marge d'erreur minuscule donne une fausse assurance. Un sondage en ligne à réponse spontanée peut réunir 50 000 avis (marge annoncée ± 0,4 point) et se tromper de 20 points : seuls les gens motivés, connectés et intéressés répondent. La marge d'erreur mesure le hasard du tirage, **jamais** le biais de sélection.
:::

L'exemple historique : en 1936, un magazine américain prédit la défaite de Roosevelt à partir de 2 millions de bulletins renvoyés — mais recrutés parmi les abonnés au téléphone et à l'automobile, plus aisés que la moyenne. Roosevelt fut réélu triomphalement. Deux millions de réponses biaisées ne valent pas 1 000 réponses représentatives. C'est pourquoi les instituts sérieux **redressent** leurs échantillons (par quotas d'âge, sexe, profession, région) pour coller à la structure de la population.
<!-- /step -->

<!-- step:title="À retenir" -->
- Un pourcentage de sondage s'accompagne toujours d'une **marge d'erreur** : la demi-largeur de son intervalle de confiance à 95 %.
- Dans le cas le plus défavorable, cette marge vaut environ **$1/\sqrt{n}$** ; d'où le « ± 3 points » d'un sondage sur 1 000 personnes.
- « 52 % ± 3 » signifie que le vrai pourcentage est vraisemblablement dans $[49\%\,;\,55\%]$ ; deux chiffres dont les intervalles se chevauchent ne sont pas départageables.
- On dimensionne le sondage avec $n \approx 1/m^2$ : diviser la marge par 2 exige de **quadrupler** l'effectif.
- La marge d'erreur ne capture que le hasard du tirage ; le **biais de représentativité** (échantillon ≠ population cible) est le vrai danger, et un gros échantillon mal recruté reste faux.
<!-- /step -->
