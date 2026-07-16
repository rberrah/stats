---
id: "d-3-wilcoxon-apparie"
slug: "d-3-wilcoxon-apparie"
title: "Séries appariées : le test T de Wilcoxon"
description: "Pour des mesures avant/après sur les mêmes sujets : calculer les différences intra-paires, ranger leurs valeurs absolues, sommer les rangs par signe — l'équivalent non paramétrique du t apparié."
track: "section-D"
order: 43
duration: "11 min"
programItem: "D-3"
tags: ["Wilcoxon apparié", "séries appariées", "avant-après", "rangs signés", "T"]
level: "intermediate"
sources: ["wilcoxon-1945", "hodges-lehmann-1956", "altman"]
reviewed_on: "2026-07-09"
quiz:
  - prompt: "Dans le test T de Wilcoxon pour séries appariées, sur quoi porte le classement en rangs ?"
    options:
      - "Sur les valeurs de départ, avant tout calcul de différence"
      - "Sur les valeurs absolues des différences intra-paires (hors différences nulles)"
      - "Sur les différences en gardant leur signe pour le classement"
    correct: 1
  - prompt: "Que fait-on d'une paire dont la différence avant/après est exactement nulle ?"
    options:
      - "On lui attribue le rang 1 d'office"
      - "On la compte deux fois, une positive et une négative"
      - "On l'écarte de l'analyse et on réduit l'effectif d'autant"
    correct: 2
---

<!-- step:title="Deux mesures sur le même sujet" -->
Certaines expériences ne comparent pas deux groupes de sujets, mais deux mesures prises sur **les mêmes sujets** : une pression artérielle avant et après un traitement, une douleur mesurée à gauche et à droite chez chaque patient, un dosage réalisé le matin puis le soir. On parle de **séries appariées**.

Cet appariement est une chance : chaque sujet est **son propre témoin**. La variabilité entre individus (l'un a naturellement une tension plus haute que l'autre) s'annule, puisqu'on ne regarde que ce qui a **changé** chez chacun.

Sur données normales, ce cas relève du **$t$ apparié**. Quand la normalité des différences est douteuse ou l'effectif petit, on lui substitue le **test T de Wilcoxon pour séries appariées** — à ne pas confondre avec le Mann-Whitney du chapitre précédent, qui, lui, concerne des groupes indépendants.
<!-- /step -->

<!-- step:title="L'idée : ranger les différences signées" -->
Le raisonnement se fait en quatre gestes.

1. **Calculer la différence** $d$ pour chaque paire (par exemple après moins avant).
2. **Écarter les différences nulles** : un sujet qui n'a pas bougé n'apporte aucune information sur le sens du changement. On réduit l'effectif $n$ en conséquence.
3. **Ranger les valeurs absolues** $|d|$, de la plus petite (rang 1) à la plus grande. On oublie provisoirement le signe.
4. **Rattacher le signe à chaque rang**, puis sommer séparément :
   - $W_+$ = somme des rangs des différences **positives**,
   - $W_-$ = somme des rangs des différences **négatives**.

Si le traitement n'avait aucun effet, hausses et baisses se répartiraient au hasard, et $W_+$ serait proche de $W_-$. Si le traitement agit dans un sens, l'une des deux sommes s'effondre.

La statistique de test est la **plus petite des deux** :

$$T = \min(W_+,\, W_-)$$
<!-- /step -->

<!-- step:title="Un exemple chiffré complet" -->
On mesure la **pression artérielle systolique** (mmHg) chez huit patients hypertendus, avant puis après quatre semaines d'un nouveau traitement.

| Patient | Avant | Après | $d$ (après − avant) | $|d|$ |
|---|---|---|---|---|
| 1 | 158 | 149 | −9 | 9 |
| 2 | 145 | 142 | −3 | 3 |
| 3 | 162 | 150 | −12 | 12 |
| 4 | 150 | 151 | +1 | 1 |
| 5 | 171 | 155 | −16 | 16 |
| 6 | 148 | 141 | −7 | 7 |
| 7 | 165 | 165 | 0 | — |
| 8 | 155 | 150 | −5 | 5 |

Le patient 7 n'a pas bougé : on **l'écarte**. Il reste $n = 7$ paires exploitables.

**Rangs des valeurs absolues** (de la plus petite à la plus grande) :

| $|d|$ | 1 | 3 | 5 | 7 | 9 | 12 | 16 |
|---|---|---|---|---|---|---|---|
| Signe | + | − | − | − | − | − | − |
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

Une seule différence est positive (patient 4, rang 1). D'où :

$$W_+ = 1 \qquad W_- = 2+3+4+5+6+7 = 27$$

Contrôle : $W_+ + W_- = 28 = \frac{7 \times 8}{2}$. ✓ La statistique retenue est $T = \min(1,\,27) = 1$.
<!-- /step -->

<!-- step:title="La décision : lire la table du T de Wilcoxon" -->
Un $T$ **petit** signifie que presque tous les changements vont dans le même sens : effet net. Un $T$ **grand** (proche de la moitié de $\frac{n(n+1)}{2}$) signifie que hausses et baisses s'équilibrent : pas d'effet.

Comme pour Mann-Whitney, on compare $T$ à une **valeur critique** tabulée. La règle est identique :

:::key
On rejette l'hypothèse nulle (« le traitement ne change rien ») lorsque le $T$ observé est **inférieur ou égal** à la valeur critique de la table, pour l'effectif $n$ retenu.
:::

Pour $n = 7$, au risque bilatéral $\alpha = 0{,}05$, la table donne une valeur critique de **2**. Notre $T = 1 \le 2$ : on **rejette** l'hypothèse nulle. Le traitement abaisse significativement la pression artérielle. Six patients sur huit ont vu leur tension baisser, un seul est monté — et de 1 mmHg —, un n'a pas bougé ; les baisses concentrent l'essentiel des rangs, ce que le hasard seul expliquerait mal.
<!-- /step -->

<!-- step:title="Ce que le T apparié capte (et ce qu'il ignore)" -->
Le test T de Wilcoxon est plus fin qu'un simple **test des signes**, qui se contenterait de compter combien de patients montent et combien descendent (ici 1 contre 6). En rangeant les différences par **amplitude**, Wilcoxon tient compte du fait que les baisses observées sont, pour la plupart, **importantes** (−9, −12, −16) tandis que la seule hausse est **minuscule** (+1). Cette prise en compte de l'ampleur relative lui confère plus de puissance que le test des signes.

Il reste néanmoins non paramétrique : il n'utilise pas la **valeur** exacte des différences, seulement leur **classement**. Une baisse de 16 mmHg ne compte pas « comme 16 » mais « comme la plus grande » : elle reçoit le rang 7, un point c'est tout.

:::note
Hiérarchie de finesse pour des données appariées : **test des signes** (compte seulement les sens) < **T de Wilcoxon** (tient compte de l'ordre des amplitudes) < **$t$ apparié** (utilise les valeurs exactes, mais exige la normalité des différences).
:::
<!-- /step -->

<!-- step:title="Piège : la symétrie et le sens de la différence" -->
Deux précautions valent d'être soulignées.

**Le sens de la soustraction n'a aucune importance** pour la décision : que vous calculiez « après − avant » ou « avant − après », vous ne faites qu'échanger $W_+$ et $W_-$. Or $T$ est le **minimum** des deux : il ne change pas. En revanche, pour *interpréter* le résultat (le traitement fait-il baisser ou monter ?), gardez en tête la convention choisie.

:::pitfall
Ne jetez pas les paires nulles « pour ne pas réduire l'effectif » : les conserver fausserait les rangs. À l'inverse, méfiez-vous d'un test appliqué à des différences fortement **asymétriques** — le T de Wilcoxon suppose une distribution des différences à peu près symétrique autour de sa médiane. Si cette symétrie manque manifestement, le test des signes, plus modeste mais plus sûr, reprend l'avantage.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Le test **T de Wilcoxon apparié** est l'équivalent non paramétrique du **$t$ apparié** : deux mesures sur **les mêmes sujets** (avant / après).
- Méthode : calculer les **différences** $d$, **écarter les nulles**, **ranger les $|d|$**, puis sommer les rangs par signe en $W_+$ et $W_-$ ; la statistique est $T = \min(W_+, W_-)$.
- Sur notre exemple ($n = 7$ après exclusion d'une paire nulle) : $W_+ = 1$, $W_- = 27$, donc $T = 1$ ; valeur critique $= 2$ à 5 % bilatéral, on **rejette** l'hypothèse nulle.
- Décision : **rejet si $T \le$ valeur critique** de la table.
- Il est **plus puissant que le test des signes** (il tient compte de l'amplitude des différences) mais suppose leur distribution à peu près **symétrique**.
<!-- /step -->
