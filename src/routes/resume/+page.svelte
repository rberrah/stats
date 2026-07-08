<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import ChoixTest from '$lib/components/ui/ChoixTest.svelte';

  // Tableau de référence rapide (le « résumé » figé, en complément de l'assistant).
  const table = [
    { but: 'Comparer un % à une valeur théorique', vars: '1 qualitative', test: 'Écart-réduit', slug: 'a-2-principe-des-tests' },
    { but: 'Comparer deux %', vars: '2 qualitatives', test: 'χ² (2×2) / comparaison de %', slug: 'a-4-comparaison-deux-pourcentages' },
    { but: 'Liaison entre deux caractères qualitatifs', vars: '2 qualitatives', test: 'χ² d\'indépendance', slug: 'a-6-chi2-independance' },
    { but: 'Petits effectifs (attendus < 5)', vars: '2 qualitatives', test: 'Test exact de Fisher', slug: 'a-8-test-exact-fisher' },
    { but: 'Comparer 2 moyennes (normales)', vars: 'qualitative × quantitative', test: 'Test t de Student', slug: 'b-4-test-t-student' },
    { but: 'Comparer 2 moyennes appariées', vars: 'quantitative appariée', test: 't apparié (couples)', slug: 'b-5-series-appariees' },
    { but: 'Comparer ≥ 3 moyennes', vars: 'qualitative × quantitative', test: 'ANOVA (F)', slug: 'b-7-analyse-variance' },
    { but: 'Comparer 2 variances', vars: 'quantitative', test: 'Test F', slug: 'b-6-test-f-variances' },
    { but: 'Comparer 2 groupes (non normal)', vars: 'quantitative / ordinale', test: 'Mann-Whitney', slug: 'd-2-mann-whitney-wilcoxon' },
    { but: 'Comparer ≥ 3 groupes (non normal)', vars: 'quantitative / ordinale', test: 'Kruskal-Wallis', slug: 'd-4-kruskal-wallis' },
    { but: 'Liaison entre 2 quantitatives (linéaire)', vars: '2 quantitatives', test: 'Corrélation r / régression', slug: 'c-2-coefficient-correlation' },
    { but: 'Liaison monotone (non normale)', vars: '2 quantitatives / ordinales', test: 'Spearman', slug: 'd-5-spearman' },
    { but: 'Estimer un % avec précision', vars: '1 qualitative', test: 'Intervalle de confiance', slug: 'a-3-intervalle-confiance-pourcentage' },
    { but: 'Mesurer un risque (exposition→maladie)', vars: 'épidémiologie', test: 'Risque relatif / odds ratio', slug: 'g-2-risque-relatif-odds-ratio' },
    { but: 'Évaluer un test diagnostique', vars: 'épidémiologie', test: 'Se, Sp, VPP/VPN, ROC', slug: 'g-3-test-diagnostique' },
    { but: 'Comparer la survie de groupes', vars: 'délai + censure', test: 'Kaplan-Meier + log-rank', slug: 'g-8-survie-kaplan-meier' },
    { but: 'Effet ajusté sur le risque (survie)', vars: 'délai + covariables', test: 'Modèle de Cox (HR)', slug: 'g-9-modele-cox' },
    { but: 'Prédire une variable binaire', vars: 'quantitatives/qualitatives → binaire', test: 'Régression logistique', slug: 'g-10-regression-logistique' }
  ];
</script>

<header class="head">
  <p class="eyebrow">Résumé</p>
  <h1>Quel test choisir ?</h1>
  <p class="lede">
    Le point d'arrivée de tout le cours : dites ce que vous voulez faire et la nature de vos
    variables, l'assistant vous <strong>propose le test adapté</strong> et vous renvoie au chapitre
    correspondant. En dessous, un tableau de référence pour retrouver un test d'un coup d'œil.
  </p>
</header>

<section class="tool">
  <ChoixTest />
</section>

<section class="ref">
  <h2>Tableau de référence</h2>
  <div class="scroll">
    <table>
      <thead><tr><th>Objectif</th><th>Variables</th><th>Test</th><th>Cours</th></tr></thead>
      <tbody>
        {#each table as r}
          <tr>
            <td>{r.but}</td>
            <td class="vars">{r.vars}</td>
            <td class="test">{r.test}</td>
            <td><a href={`${base}/chapitres/${r.slug}`}>→</a></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style>
  .head { max-width: 760px; margin-bottom: var(--space-6); }
  .eyebrow { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-pk); margin: 0 0 var(--space-2); }
  h1 { font-size: var(--text-3xl); margin: 0 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); line-height: 1.6; }
  .tool { max-width: 720px; margin-bottom: var(--space-12); }
  .ref { max-width: 900px; }
  .ref h2 { font-size: var(--text-xl); margin: 0 0 var(--space-4); }
  .scroll { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
  th, td { border-bottom: 1px solid var(--border-subtle); padding: var(--space-2) var(--space-3); text-align: left; vertical-align: top; }
  thead th { font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); }
  .vars { color: var(--text-muted); font-size: var(--text-xs); white-space: nowrap; }
  .test { font-weight: 600; }
  td a { color: var(--accent-pk); text-decoration: none; font-weight: 700; font-size: var(--text-lg); }
  td a:hover { filter: brightness(1.1); }
</style>
