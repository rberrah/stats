---
id: "b-5-series-appariees"
slug: "b-5-series-appariees"
title: "Séries appariées : la méthode des couples"
description: "Quand chaque sujet est son propre témoin : analyser les différences intra-paires pour éliminer la variabilité entre sujets."
track: "section-B"
order: 25
duration: "12 min"
programItem: "B-5"
tags: ["séries appariées", "test t apparié", "méthode des couples", "avant-après"]
level: "intermediate"
sources: ["student-1908", "schwartz", "altman", "armitage-berry"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Quel est l'avantage décisif d'un plan apparié (avant/après chez les mêmes sujets) par rapport à deux groupes indépendants ?"
    options:
      - "Il élimine la variabilité entre sujets, qui n'est plus qu'un bruit parasite, et gagne ainsi en puissance."
      - "Il permet d'utiliser deux fois plus de patients."
      - "Il rend inutile toute hypothèse de normalité."
    correct: 0
  - prompt: "Sur quelle grandeur porte réellement le calcul dans un test t apparié ?"
    options:
      - "Sur les deux moyennes prises séparément."
      - "Sur la différence intra-paire d, dont on teste si la moyenne diffère de zéro."
      - "Sur le rapport des variances des deux mesures."
    correct: 1
---

<!-- step:title="Chaque sujet, son propre témoin" -->
On veut évaluer un régime hypocholestérolémiant. Première stratégie : deux groupes indépendants (traités contre témoins), comparés par un test $t$ (B-4). Deuxième stratégie, plus fine : mesurer le cholestérol **chez les mêmes patients avant et après** le régime.

Dans ce second plan, chaque patient sert de **référence à lui-même**. On ne compare plus des personnes différentes entre elles, mais un état à un autre état **chez la même personne**. C'est le principe des **séries appariées**, ou méthode des couples.

Les paires peuvent aussi être des sujets rapprochés artificiellement : jumeaux, œil droit / œil gauche, ou patients appariés sur l'âge et le sexe. L'essentiel est qu'à l'intérieur d'une paire, les deux mesures soient naturellement proches.
<!-- /step -->

<!-- step:title="L'idée-force : neutraliser la variabilité entre sujets" -->
Pourquoi ce plan est-il si puissant ? Parce que la plus grosse source de bruit en biologie, c'est la **différence entre individus**. Un patient peut avoir un cholestérol de base à 2,8 g/L, un autre à 1,6 g/L — un gouffre qui n'a rien à voir avec le traitement.

En comparant chaque patient **à lui-même**, cette variabilité inter-sujets **disparaît purement et simplement** du calcul. Peu importe le niveau de départ : seul compte le **changement individuel**. On isole ainsi l'effet du traitement du bruit qui le masquait.

:::key
Apparier, c'est transformer un problème à deux séries en un problème à **une seule série** : celle des différences intra-paires. Toute la variabilité entre sujets, si gênante, s'annule dans la soustraction.
:::
<!-- /step -->

<!-- step:title="La mécanique : le test t apparié" -->
Pour chaque paire $i$, on calcule la différence :

$$d_i = x_i^{\text{après}} - x_i^{\text{avant}}$$

On ne s'occupe ensuite **que** de ces différences. Question : leur moyenne $\bar{d}$ diffère-t-elle de zéro ? Si le traitement est sans effet, les $d_i$ oscillent autour de 0. Le test devient une simple comparaison d'une moyenne à la valeur théorique 0 (voir B-3) :

$$t = \frac{\bar{d}}{s_d / \sqrt{n}}$$

où $s_d$ est l'écart-type des différences et $n$ le nombre de paires. On compare $t$ à la table de Student à $\nu = n - 1$ degrés de liberté.

Remarquez le nombre de degrés de liberté : $n - 1$, où $n$ est le nombre de **paires**, et non $n_1 + n_2 - 2$ comme dans le test à deux échantillons.
<!-- /step -->

<!-- step:title="Un exemple chiffré" -->
Cholestérol total (g/L) chez 6 patients, avant et après régime :

| Patient | Avant | Après | $d$ |
|---|---|---|---|
| 1 | 2,60 | 2,40 | −0,20 |
| 2 | 2,10 | 2,05 | −0,05 |
| 3 | 2,90 | 2,55 | −0,35 |
| 4 | 1,80 | 1,70 | −0,10 |
| 5 | 2,40 | 2,10 | −0,30 |
| 6 | 2,20 | 2,00 | −0,20 |

Moyenne des différences : $\bar{d} = -1{,}20 / 6 = -0{,}20$ g/L. L'écart-type des $d_i$ vaut environ $s_d \approx 0{,}11$ g/L. Erreur-standard :

$$\frac{s_d}{\sqrt{n}} = \frac{0{,}11}{\sqrt{6}} \approx 0{,}045$$

$$t = \frac{-0{,}20}{0{,}045} \approx -4{,}4$$

Avec $\nu = 5$ degrés de liberté, le seuil à 5 % est 2,57. Comme $|{-4{,}4}| > 2{,}57$, la baisse de 0,20 g/L est **significative** : le régime abaisse réellement le cholestérol.
<!-- /step -->

<!-- step:title="Le gain de puissance, concrètement" -->
Frappant : les cholestérols de base allaient de 1,80 à 2,90 g/L — une dispersion colossale. Un test à deux groupes indépendants aurait noyé la baisse de 0,20 dans cette variabilité et aurait sans doute conclu à la non-significativité.

L'appariement fait s'évaporer cette dispersion : les différences $d_i$, elles, sont toutes serrées entre −0,05 et −0,35. Le signal ressort net. **À effectif égal, un plan apparié est bien plus puissant** — il détecte des effets qu'un plan indépendant manquerait, précisément parce qu'il a supprimé le bruit dominant.
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
Ne traitez **jamais** des données appariées comme deux groupes indépendants : appliquer le test $t$ à deux échantillons sur un « avant/après » gaspille tout l'avantage de l'appariement et **perd de la puissance**. À l'inverse, n'appariez pas artificiellement des sujets qui n'ont rien à voir : l'appariement doit refléter un lien réel (même sujet, jumeaux, membres appariés). Enfin, la condition de normalité porte ici sur les **différences** $d_i$, pas sur les mesures brutes.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- **Série appariée** : chaque sujet (ou paire) est son propre témoin — avant/après, jumeaux, œil droit/gauche…
- On ne calcule qu'une seule série : les **différences intra-paires** $d_i$.
- Le test devient une comparaison de $\bar{d}$ à zéro : $t = \bar{d}/(s_d/\sqrt{n})$, à $\nu = n-1$ degrés de liberté ($n$ = nombre de paires).
- Avantage majeur : la **variabilité entre sujets est éliminée** → gain de puissance à effectif égal.
- Piège : ne pas analyser un plan apparié comme deux groupes indépendants ; la normalité concerne les **différences**.
<!-- /step -->
