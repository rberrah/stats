---
id: "g-3-test-diagnostique"
slug: "g-3-test-diagnostique"
title: "Évaluer un test diagnostique : sensibilité, spécificité, VPP/VPN"
description: "Se et Sp caractérisent le test ; VPP et VPN caractérisent un résultat — et la VPP dépend crucialement de la prévalence."
track: "section-G"
order: 63
duration: "14 min"
programItem: "G-3"
tags: ["sensibilité", "spécificité", "valeur prédictive", "prévalence", "rapport de vraisemblance"]
quiz:
  - prompt: "La sensibilité d'un test est la probabilité que :"
    options:
      - "un sujet réellement malade ait un test positif"
      - "un sujet ayant un test positif soit malade"
      - "un sujet sain ait un test négatif"
    correct: 0
  - prompt: "À sensibilité et spécificité fixées, si la prévalence de la maladie diminue, la valeur prédictive positive (VPP) :"
    options:
      - "augmente"
      - "reste identique"
      - "diminue"
    correct: 2
  - prompt: "Un rapport de vraisemblance positif (LR+) élevé indique qu'un test positif :"
    options:
      - "modifie peu la probabilité de maladie"
      - "augmente fortement la probabilité de maladie"
      - "dépend uniquement de la prévalence"
    correct: 1
---

<!-- step:title="Aucun test n'est parfait" -->
Un test diagnostique classe les patients en « positif » ou « négatif », mais il se trompe dans les deux sens. En confrontant le résultat du test à la vérité (établie par un examen de référence), on obtient quatre cases :

| | Malade | Sain |
|---|---|---|
| Test **positif** | Vrais positifs (VP) | Faux positifs (FP) |
| Test **négatif** | Faux négatifs (FN) | Vrais négatifs (VN) |

Deux erreurs différentes : le **faux négatif** (rassurer à tort un malade) et le **faux positif** (inquiéter et sur-examiner un sujet sain). Évaluer un test, c'est chiffrer ces erreurs — mais il faut deux points de vue distincts, celui du test et celui du patient.
<!-- /step -->

<!-- step:title="Sensibilité et spécificité : les qualités du test" -->
La **sensibilité** (Se) et la **spécificité** (Sp) se lisent *colonne par colonne*, en partant du statut réel du patient.

$$\text{Se} = \dfrac{\text{VP}}{\text{VP} + \text{FN}} \qquad \text{Sp} = \dfrac{\text{VN}}{\text{VN} + \text{FP}}$$

- La **sensibilité** est la capacité à détecter les malades : parmi les malades, quelle proportion le test repère-t-il ?
- La **spécificité** est la capacité à innocenter les sains : parmi les sains, quelle proportion le test rassure-t-il ?

Ces deux qualités sont **intrinsèques au test** : elles ne dépendent pas de la fréquence de la maladie. Un moyen mnémotechnique utile : un test très **sensible** dont le résultat est **négatif** élimine la maladie (peu de FN) ; un test très **spécifique** dont le résultat est **positif** l'affirme (peu de FP).
<!-- /step -->

<!-- step:title="Valeurs prédictives : ce que vaut un résultat" viz="TestDiagnostique" -->
:::howto
**Comment lire le schéma.** La population se répartit entre malades et sains selon la prévalence, puis chaque groupe se scinde en tests positifs et négatifs selon Se et Sp. Faites varier la prévalence : les qualités du test (Se, Sp) ne bougent pas, mais la composition des colonnes « test positif / test négatif » — donc les valeurs prédictives — se transforme sous vos yeux.
:::

Le patient, lui, ne connaît pas son statut : il connaît seulement son **résultat**. Il veut savoir « mon test est positif, quelle est ma probabilité d'être vraiment malade ? ». C'est la **valeur prédictive positive** (VPP), qui se lit *ligne par ligne*.

$$\text{VPP} = \dfrac{\text{VP}}{\text{VP} + \text{FP}} \qquad \text{VPN} = \dfrac{\text{VN}}{\text{VN} + \text{FN}}$$

La VPP répond à la vraie question clinique. Et contrairement à Se et Sp, elle **dépend de la population** dans laquelle on teste.
<!-- /step -->

<!-- step:title="Le point clé : la VPP dépend de la prévalence" -->
Prenons un test de $\text{Se} = 90\,\%$ et $\text{Sp} = 95\,\%$ — d'excellentes qualités. Appliquons-le à **1 000 personnes** dans une population où la maladie touche **10 %** (100 malades, 900 sains) :

- Malades (100) : $90$ VP et $10$ FN.
- Sains (900) : $855$ VN et $45$ FP.

$$\text{VPP} = \dfrac{90}{90 + 45} = \dfrac{90}{135} \approx 67\,\%$$

Un test positif ne donne que deux chances sur trois d'être malade, malgré un test excellent. Refaisons le calcul dans une population de **dépistage** où la prévalence n'est que de **1 %** (10 malades, 990 sains) :

- Malades (10) : $9$ VP, $1$ FN.
- Sains (990) : $\approx 940$ VN, $\approx 50$ FP.

$$\text{VPP} = \dfrac{9}{9 + 50} \approx 15\,\%$$

Le **même test** voit sa VPP s'effondrer de 67 % à 15 % : un test positif devient plus souvent une fausse alerte qu'une vraie maladie, parce que les rares malades sont noyés sous les faux positifs issus de la vaste population saine.

:::key
Se et Sp sont des propriétés du **test** (indépendantes de la prévalence). VPP et VPN dépendent de la **prévalence** : plus la maladie est rare, plus la VPP chute. C'est pourquoi un dépistage de masse produit fatalement beaucoup de faux positifs — et pourquoi un test positif doit être confirmé.
:::
<!-- /step -->

<!-- step:title="Les rapports de vraisemblance" -->
Pour résumer un test en évitant le piège de la prévalence, on utilise les **rapports de vraisemblance** (likelihood ratios), qui combinent Se et Sp en un seul nombre par type de résultat.

$$\text{LR}^{+} = \dfrac{\text{Se}}{1 - \text{Sp}} \qquad \text{LR}^{-} = \dfrac{1 - \text{Se}}{\text{Sp}}$$

Sur notre test ($\text{Se} = 0{,}90$, $\text{Sp} = 0{,}95$) :

$$\text{LR}^{+} = \dfrac{0{,}90}{0{,}05} = 18 \qquad \text{LR}^{-} = \dfrac{0{,}10}{0{,}95} \approx 0{,}11$$

Un $\text{LR}^{+}$ de 18 se lit : un résultat positif est 18 fois plus probable chez un malade que chez un sain — il **fait fortement monter** la probabilité de maladie. Un $\text{LR}^{-}$ de 0,11 fait fortement chuter cette probabilité. Repères usuels : $\text{LR}^{+} > 10$ ou $\text{LR}^{-} < 0{,}1$ modifient nettement le diagnostic ; un LR proche de 1 rend le test inutile. Leur atout : ils s'appliquent à la probabilité *propre* du patient, quelle que soit la prévalence globale.
<!-- /step -->

<!-- step:title="À retenir" -->
- Quatre cases : VP, FP, FN, VN, selon test (ligne) et statut réel (colonne).
- **Se** $= \text{VP}/(\text{VP}+\text{FN})$ (détecter les malades) et **Sp** $= \text{VN}/(\text{VN}+\text{FP})$ (innocenter les sains) : propriétés **intrinsèques** du test.
- **VPP** $= \text{VP}/(\text{VP}+\text{FP})$ et **VPN** $= \text{VN}/(\text{VN}+\text{FN})$ : ce que vaut un résultat pour *ce* patient.
- La **VPP dépend de la prévalence** : plus la maladie est rare, plus un test positif risque d'être un faux positif — d'où la confirmation systématique en dépistage.
- Les **rapports de vraisemblance** ($\text{LR}^{+} = \text{Se}/(1-\text{Sp})$, $\text{LR}^{-} = (1-\text{Se})/\text{Sp}$) résument le test indépendamment de la prévalence.
<!-- /step -->
