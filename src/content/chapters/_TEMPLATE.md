---
id: "discipline-sujet"
slug: "discipline-sujet"
title: "Titre du chapitre"
description: "Une phrase qui résume le chapitre (affichée dans les listes)."
track: "section-IV"    # parcours : "transversal" ou "section-I".."section-V"
programItem: "IV-22"   # item du programme officiel (voir programme.js), ex. "IV-22"
theme: "Hématologie"   # sous-thème d'affichage
order: 20              # ordre d'affichage au sein du parcours
duration: "10 min"
tags: ["mot-clé"]
prerequisites: []      # slugs d'autres chapitres (affichés en « Rappels »)
glossary: []           # termes du glossaire (src/lib/content/glossary.js)
quiz:
  - prompt: "Question de vérification ?"
    options:
      - "Bonne réponse"
      - "Distracteur 1"
      - "Distracteur 2"
    correct: 0
---

<!-- step:title="Pourquoi ce chapitre" -->
Le problème posé, en une ou deux phrases, et pourquoi il compte pour l'internat.
<!-- /step -->

<!-- step:title="L'essentiel" -->
Les faits/valeurs à connaître. Encadrés disponibles :

:::key
Point clé à mémoriser.
:::

Formule éventuelle (KaTeX) : $$ y = a\,x + b $$
<!-- /step -->

<!-- step:title="Comment raisonner" viz="ClassifAnemie" -->
La démarche, appuyée sur un schéma manipulable. Renseignez `viz="<clé>"` avec le nom
d'un composant de `src/lib/components/visualizations/` (ou retirez-le pour un chapitre texte).

:::howto
**Comment lire le schéma.** Expliquez ce que l'étudiant doit manipuler et observer.
:::
<!-- /step -->

<!-- step:title="En pratique" -->
Un ou deux exemples concrets.

:::clinical
Mise en perspective clinique.
:::
<!-- /step -->

<!-- step:title="Piège classique" -->
:::pitfall
L'erreur fréquente à éviter.
:::
<!-- /step -->

<!-- step:title="À retenir" -->
- Point 1
- Point 2
- Point 3
<!-- /step -->
