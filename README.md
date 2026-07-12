# Stat & Biologie

Cours **interactif de biostatistique** à l'usage des médecins et des biologistes.
Explications courtes, visualisations manipulables (loi normale, risques α/β, χ²,
corrélation…), exercices et QCM corrigés — pour **comprendre** le raisonnement, pas
seulement appliquer une formule.

Construit sur la même architecture que les autres sites (SvelteKit + adapter-static),
**français uniquement**. La progression suit l'ordre classique de l'enseignement de la
biostatistique ; **tout le contenu (textes, exemples chiffrés, visualisations) est original**.
Des ouvrages de référence sont cités en bibliographie dans la page « À propos ».

## Démarrage

```bash
npm install
npm run dev        # serveur local
npm run test       # validate + smoke (cohérence du contenu)
npm run check      # svelte-check (types)
npm run build      # build statique dans /build
```

## Plan (6 parties)

- **F — Fondations** : variabilité, population/échantillon, pari statistique, risques α/β.
- **A — Deux variables qualitatives** : écart-réduit, tests, intervalle de confiance, χ², Fisher.
- **B — Qualitative × quantitative** : loi normale, test t, séries appariées, test F, ANOVA.
- **C — Deux variables quantitatives** : corrélation, régression, variance liée, corrélations partielles.
- **D — Tests non paramétriques** : Mann-Whitney, Wilcoxon, Kruskal-Wallis, Spearman.
- **E — Stratégie & synthèse** : choisir le bon test, normalité, α/β/puissance.

## Ajouter du contenu

1. **Un chapitre** — copiez `src/content/chapters/_TEMPLATE.md`, remplissez le frontmatter
   (`slug`, `title`, `track`, `order`, `programItem`, `quiz`…) et les blocs `<!-- step … -->`.
   L'URL `/chapitres/<slug>` est générée automatiquement au build.
2. **Le plan** — éditez `src/lib/content/programme.js` (parties et items) ; `tracks.js` en dérive.
3. **Une visualisation** — déposez un composant `.svelte` dans
   `src/lib/components/visualizations/` puis référencez-le avec `viz="<NomDuFichier>"`
   dans une étape (registre automatique).
4. **Exercices / glossaire** — `src/lib/content/exercises.js` et `glossary.js`.

Encadrés : `:::key`, `:::pitfall`, `:::howto`, `:::note`, `:::recall` … `:::`.
Formules LaTeX rendues au build par KaTeX (`$inline$`, `$$bloc$$`).

## Déploiement (GitHub Pages, repo « projet »)

Servi sous `/stats`. En CI, `BASE_PATH=/stats` avant `npm run build` (voir
`.github/workflows/deploy.yml`), puis publication du dossier `build/`.

> Support pédagogique — ne remplace pas un cours complet ni les ouvrages de référence.
