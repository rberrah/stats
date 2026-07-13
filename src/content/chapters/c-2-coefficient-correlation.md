---
id: "c-2-coefficient-correlation"
slug: "c-2-coefficient-correlation"
title: "Le coefficient de corrélation r et son test"
description: "Comment un seul nombre entre −1 et +1 résume l'intensité d'une liaison linéaire, ce que signifie r², et pourquoi juger r sans connaître n n'a aucun sens."
track: "section-C"
order: 32
duration: "12 min"
programItem: "C-2"
tags: ["coefficient de corrélation", "r", "r carré", "test", "linéarité"]
level: "intermediate"
sources: ["schwartz", "altman", "armitage-berry", "asa-pvalue"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Une étude trouve r = 0,70 entre deux dosages. Quelle part de la variance de l'un est « liée » à l'autre ?"
    options:
      - "Environ 49 %, car r² = 0,70² ≈ 0,49"
      - "70 %, puisque r = 0,70"
      - "Environ 84 %, car √0,70 ≈ 0,84"
    correct: 0
  - prompt: "Deux études trouvent le même r = 0,45, l'une sur 8 individus, l'autre sur 200. Que peut-on dire ?"
    options:
      - "Le r n'est peut-être pas significatif sur 8 sujets mais l'est très nettement sur 200"
      - "Les deux liaisons sont identiques, puisque r est le même"
      - "Le r sur 8 sujets est plus fiable car l'échantillon est plus homogène"
    correct: 0
---

<!-- step:title="Résumer un nuage par un seul nombre" -->
Un nuage de points dit tout, mais ne se transmet pas d'un mot. On voudrait un **chiffre unique** qui réponde à : les points serrent-ils une ligne montante, une ligne descendante, ou rien du tout ?

C'est le rôle du **coefficient de corrélation linéaire** $r$ (dit de Bravais-Pearson). Sa lecture tient en trois repères :

- **le signe** dit le sens : $r > 0$, les deux caractères montent ensemble ; $r < 0$, l'un monte quand l'autre baisse ;
- **la valeur absolue** dit la force : proche de $1$, les points s'alignent presque parfaitement ; proche de $0$, le nuage est informe ;
- **les bornes** sont fixes : $r$ est toujours compris entre $-1$ et $+1$, jamais au-delà.

$$-1 \le r \le +1$$
<!-- /step -->

<!-- step:title="Ce que r mesure vraiment : une liaison LINÉAIRE" viz="Correlation" -->
Attention au piège fondamental : $r$ ne mesure pas « une liaison » en général, mais l'alignement sur une **droite**. C'est une mesure de linéarité.

Formellement, $r$ compare la façon dont $x$ et $y$ s'écartent *ensemble* de leurs moyennes (la covariance) à leurs dispersions propres :

$$r = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \;\sum (y_i - \bar{y})^2}} = \dfrac{s_{xy}}{s_{x}\,s_{y}}$$

Quand un point est « haut en $x$ » et « haut en $y$ » en même temps, il pousse $r$ vers le positif ; s'il est « haut en $x$ » mais « bas en $y$ », il le tire vers le négatif. Le dénominateur normalise le tout entre $-1$ et $+1$.

:::howto
**Comment lire le schéma.** Déformez le nuage : un $r$ élevé correspond à des points collés à une droite. Essayez ensuite une forme en U (parabole) : les points sont parfaitement liés, pourtant $r$ tombe vers $0$, car la liaison n'est pas *droite*. La leçon : $r \approx 0$ ne veut pas dire « aucune liaison », mais « aucune liaison linéaire ».
:::
<!-- /step -->

<!-- step:title="r² : la part de variance liée" -->
Le nombre le plus parlant n'est pas $r$ mais son carré, $r^2$. Il s'interprète comme la **fraction de la variabilité de $y$ qui est liée à $x$** (on dit aussi « expliquée » par $x$, au sens statistique) :

$$r^2 = \text{part de la variance de } y \text{ liée à } x$$

Un $r = 0{,}70$ paraît fort ; pourtant $r^2 = 0{,}49$ : moins de la moitié de la variabilité est liée, le reste vient d'autres facteurs. C'est pourquoi doubler $r$ ne double pas la « force » perçue : la relation entre les deux est quadratique.

| $r$ | 0,30 | 0,50 | 0,70 | 0,90 |
|---|---|---|---|---|
| $r^2$ | 0,09 | 0,25 | 0,49 | 0,81 |

:::key
$r^2$ est plus honnête que $r$. Une corrélation « respectable » de $0{,}50$ ne rend compte que du **quart** de la variance. Toujours traduire un $r$ en $r^2$ avant de s'enthousiasmer.
:::
<!-- /step -->

<!-- step:title="Le calcul sur notre exemple" -->
Reprenons les cinq adultes du chapitre C-1 (âge $x$, PAS $y$). Les moyennes valent $\bar{x} = 50$ ans et $\bar{y} = 137$ mmHg. En sommant les écarts à la moyenne, on obtient :

$$\sum (x_i-\bar{x})(y_i-\bar{y}) = 800, \quad \sum (x_i-\bar{x})^2 = 1000, \quad \sum (y_i-\bar{y})^2 = 776$$

d'où

$$r = \dfrac{800}{\sqrt{1000 \times 776}} = \dfrac{800}{880{,}9} \approx 0{,}91$$

La liaison est forte. Et surtout : $r^2 \approx 0{,}82$. Autrement dit, **82 % de la variabilité de la PAS, dans cet échantillon, va de pair avec l'âge** ; les 18 % restants tiennent à tout le reste (poids, hérédité, stress du prélèvement, hasard de mesure).
<!-- /step -->

<!-- step:title="Tester r : tout dépend de n" -->
Un $r$ calculé sur peu de sujets peut être élevé **par pur hasard**. Sur 3 points, il est facile d'obtenir $r = 0{,}8$ sans aucune vraie liaison. La question devient donc : ce $r$ est-il assez grand, *compte tenu de $n$*, pour qu'on écarte l'hypothèse « aucune corrélation dans la population » ?

On teste $r$ par la statistique, qui suit une loi de Student à $n-2$ degrés de liberté :

$$t = \dfrac{r\,\sqrt{n-2}}{\sqrt{1-r^2}}$$

Le seuil de $r$ à partir duquel on conclut à une liaison (au risque $5\,\%$) **s'abaisse quand $n$ grandit** :

| $n$ | 5 | 10 | 30 | 100 |
|---|---|---|---|---|
| $r$ significatif à 5 % | 0,88 | 0,63 | 0,36 | 0,20 |

Sur nos 5 patients, $r = 0{,}91$ dépasse le seuil $0{,}88$ : la liaison est significative ($t \approx 3{,}8$ pour $3$ degrés de liberté). Mais le même $r = 0{,}45$ serait **non significatif sur 8 sujets** et **hautement significatif sur 200** : le chiffre seul ne veut rien dire sans son effectif.
<!-- /step -->

<!-- step:title="Piège : un r trompeur" -->
:::pitfall
Trois façons classiques de se laisser abuser par $r$.
**1. La non-linéarité :** une belle courbe en U donne $r \approx 0$ alors que la liaison est parfaite — $r$ ne voit que les droites.
**2. Les points aberrants :** un seul individu extrême peut créer de toutes pièces un $r$ élevé, ou au contraire en détruire un. Toujours regarder le nuage, jamais le seul chiffre.
**3. La significativité n'est pas la force :** avec $n = 10\,000$, un $r = 0{,}03$ est « significatif » mais totalement négligeable ($r^2 = 0{,}0009$). Significatif ne veut pas dire important.
:::

La règle d'or : **on ne juge jamais $r$ sans avoir vu le nuage de points ni connu $n$.**
<!-- /step -->

<!-- step:title="À retenir" -->
- $r$ résume par un seul nombre l'intensité d'une liaison **linéaire** : signe = sens, valeur absolue = force, toujours entre $-1$ et $+1$.
- $r = 0$ signifie « pas de liaison **linéaire** », pas « pas de liaison » (penser à la courbe en U).
- **$r^2$** est la part de variance de $y$ liée à $x$ : c'est lui qu'il faut interpréter ($r = 0{,}50 \Rightarrow$ seulement 25 % de variance liée).
- Un $r$ ne se juge **jamais sans $n$** : le seuil de significativité baisse quand l'effectif monte ; on teste $r$ par $t = r\sqrt{n-2}/\sqrt{1-r^2}$.
- **Significatif ≠ fort** : sur de très grands échantillons, un $r$ minuscule peut être significatif tout en étant sans portée.
<!-- /step -->
