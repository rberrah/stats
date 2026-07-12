// @ts-nocheck
// RÉFÉRENCES — pool FERMÉ, à IDENTIFIANTS STABLES ET VÉRIFIÉS.
//
// Chaque entrée porte un identifiant qui résout vers UN SEUL document, pour toujours :
//   doi  -> https://doi.org/<doi>
//   pmid -> https://pubmed.ncbi.nlm.nih.gov/<pmid>/
//   isbn -> https://search.worldcat.org/isbn/<isbn>
//   url  -> page officielle (agence, éditeur, projet) pour les recommandations et outils
// AUCUN lien de recherche : une recherche n'est ni stable, ni univoque, donc pas une citation.
// Chaque identifiant a été RÉSOLU et son titre vérifié (2026-07).
//
// Les chapitres s'y rattachent via `sources: [<id>, ...]` dans leur frontmatter.
// Un id inconnu — ou un lien de recherche — fait ÉCHOUER le smoke test.

/** @typedef {{id:string, kind:string, title:string, authors?:string, where?:string, doi?:string, pmid?:string, isbn?:string, url:string}} Reference */

export const referenceGroups = [
  {
    id: 'livres',
    title: 'Ouvrages de référence',
    items: [
      { id: 'schwartz', kind: 'book', title: 'Méthodes statistiques à l’usage des médecins et des biologistes', authors: 'Schwartz D.', where: 'Médecine-Sciences Flammarion — le classique français', isbn: '9782257123268', url: 'https://search.worldcat.org/isbn/9782257123268' },
      { id: 'altman', kind: 'book', title: 'Practical Statistics for Medical Research', authors: 'Altman D.G.', where: 'Chapman & Hall/CRC', isbn: '9780412276309', url: 'https://search.worldcat.org/isbn/9780412276309' },
      { id: 'armitage-berry', kind: 'book', title: 'Statistical Methods in Medical Research', authors: 'Armitage P., Berry G. & Matthews J.N.S.', where: 'Blackwell', doi: '10.1002/9780470773666', isbn: '9780632052578', url: 'https://doi.org/10.1002/9780470773666' },
      { id: 'bouyer', kind: 'book', title: 'Épidémiologie : principes et méthodes quantitatives', authors: 'Bouyer J. et al.', where: 'Lavoisier / Inserm', isbn: '9782743011673', url: 'https://search.worldcat.org/isbn/9782743011673' },
      { id: 'ancelle', kind: 'book', title: 'Statistique — Épidémiologie', authors: 'Ancelle T.', where: 'Maloine', isbn: '9782224036645', url: 'https://search.worldcat.org/isbn/9782224036645' },
      { id: 'rothman', kind: 'book', title: 'Modern Epidemiology', authors: 'Rothman K.J., Greenland S. & Lash T.L.', where: 'Wolters Kluwer', isbn: '9780781755641', url: 'https://search.worldcat.org/isbn/9780781755641' },
      { id: 'hosmer-lemeshow', kind: 'book', title: 'Applied Logistic Regression', authors: 'Hosmer D.W. & Lemeshow S.', where: 'Wiley', doi: '10.1002/9781118548387', isbn: '9780470582473', url: 'https://doi.org/10.1002/9781118548387' },
      { id: 'collett-survival', kind: 'book', title: 'Modelling Survival Data in Medical Research', authors: 'Collett D.', where: 'Chapman & Hall/CRC', isbn: '9781032252858', url: 'https://search.worldcat.org/isbn/9781032252858' }
    ]
  },
  {
    id: 'fondateurs',
    title: 'Articles fondateurs',
    items: [
      { id: 'student-1908', kind: 'article', title: 'The Probable Error of a Mean (naissance du test t)', authors: '“Student” (Gosset W.S.)', where: 'Biometrika, 1908', doi: '10.1093/biomet/6.1.1', url: 'https://doi.org/10.1093/biomet/6.1.1' },
      { id: 'pearson-1900', kind: 'article', title: 'On the criterion that a given system of deviations… (naissance du χ²)', authors: 'Pearson K.', where: 'Philosophical Magazine, 1900', doi: '10.1080/14786440009463897', url: 'https://doi.org/10.1080/14786440009463897' },
      { id: 'fisher-1925', kind: 'book', title: 'Statistical Methods for Research Workers (origine du seuil de 5 %)', authors: 'Fisher R.A.', where: 'Oliver & Boyd — 1re éd. 1925 ; ISBN de la 14e éd. (1970)', isbn: '9780050021705', url: 'https://search.worldcat.org/isbn/9780050021705' },
      { id: 'wilcoxon-1945', kind: 'article', title: 'Individual Comparisons by Ranking Methods', authors: 'Wilcoxon F.', where: 'Biometrics Bulletin, 1945', doi: '10.2307/3001968', url: 'https://doi.org/10.2307/3001968' },
      { id: 'mann-whitney-1947', kind: 'article', title: 'On a Test of Whether one of Two Random Variables is Stochastically Larger', authors: 'Mann H.B. & Whitney D.R.', where: 'Ann. Math. Statist., 1947', doi: '10.1214/aoms/1177730491', url: 'https://doi.org/10.1214/aoms/1177730491' },
      { id: 'kruskal-wallis-1952', kind: 'article', title: 'Use of Ranks in One-Criterion Variance Analysis', authors: 'Kruskal W.H. & Wallis W.A.', where: 'JASA, 1952', doi: '10.1080/01621459.1952.10483441', url: 'https://doi.org/10.1080/01621459.1952.10483441' },
      { id: 'spearman-1904', kind: 'article', title: 'The Proof and Measurement of Association between Two Things', authors: 'Spearman C.', where: 'Am. J. Psychol., 1904', doi: '10.2307/1412159', url: 'https://doi.org/10.2307/1412159' },
      { id: 'kaplan-meier-1958', kind: 'article', title: 'Nonparametric Estimation from Incomplete Observations (courbe de Kaplan-Meier)', authors: 'Kaplan E.L. & Meier P.', where: 'JASA, 1958', doi: '10.1080/01621459.1958.10501452', url: 'https://doi.org/10.1080/01621459.1958.10501452' },
      { id: 'mantel-1966', kind: 'article', title: 'Evaluation of survival data and two new rank order statistics (test du log-rank)', authors: 'Mantel N.', where: 'Cancer Chemother. Rep., 1966', pmid: '5910392', url: 'https://pubmed.ncbi.nlm.nih.gov/5910392/' },
      { id: 'cox-1972', kind: 'article', title: 'Regression Models and Life-Tables (modèle de Cox)', authors: 'Cox D.R.', where: 'J. R. Stat. Soc. B, 1972', doi: '10.1111/j.2517-6161.1972.tb00899.x', url: 'https://doi.org/10.1111/j.2517-6161.1972.tb00899.x' }
    ]
  },
  {
    id: 'diagnostic',
    title: 'Tests diagnostiques & mesures de risque',
    items: [
      { id: 'hanley-mcneil-1982', kind: 'article', title: 'The meaning and use of the area under a ROC curve (AUC)', authors: 'Hanley J.A. & McNeil B.J.', where: 'Radiology, 1982', doi: '10.1148/radiology.143.1.7063747', pmid: '7063747', url: 'https://doi.org/10.1148/radiology.143.1.7063747' },
      { id: 'deeks-altman-lr', kind: 'article', title: 'Diagnostic tests 4: likelihood ratios (rapports de vraisemblance)', authors: 'Deeks J.J. & Altman D.G.', where: 'BMJ, 2004', doi: '10.1136/bmj.329.7458.168', pmid: '15258077', url: 'https://doi.org/10.1136/bmj.329.7458.168' },
      { id: 'altman-bland-notes', kind: 'article', title: 'Statistics Notes (série pédagogique du BMJ)', authors: 'Altman D.G. & Bland J.M.', where: 'BMJ, 1994–2011', doi: '10.1136/bmj.311.7003.485', pmid: '7647644', url: 'https://doi.org/10.1136/bmj.311.7003.485' },
      { id: 'laupacis-nnt', kind: 'article', title: 'An assessment of clinically useful measures of the consequences of treatment (NNT)', authors: 'Laupacis A., Sackett D.L. & Roberts R.S.', where: 'N. Engl. J. Med., 1988', doi: '10.1056/NEJM198806303182605', pmid: '3374545', url: 'https://doi.org/10.1056/NEJM198806303182605' }
    ]
  },
  {
    id: 'biais',
    title: 'Biais & épidémiologie clinique',
    items: [
      { id: 'suissa-immortal', kind: 'article', title: 'Immortal time bias in pharmacoepidemiology (le biais de temps immortel)', authors: 'Suissa S.', where: 'Am. J. Epidemiol., 2008', doi: '10.1093/aje/kwm324', pmid: '18056625', url: 'https://doi.org/10.1093/aje/kwm324' },
      { id: 'sackett-bias', kind: 'article', title: 'Bias in analytic research (catalogue des biais)', authors: 'Sackett D.L.', where: 'J. Chronic Dis., 1979', doi: '10.1016/0021-9681(79)90012-2', pmid: '447779', url: 'https://doi.org/10.1016/0021-9681(79)90012-2' },
      { id: 'hill-criteria', kind: 'article', title: 'The Environment and Disease: Association or Causation? (critères de Bradford Hill)', authors: 'Hill A.B.', where: 'Proc. R. Soc. Med., 1965', doi: '10.1177/003591576505800503', pmid: '14283879', url: 'https://doi.org/10.1177/003591576505800503' },
      { id: 'strobe', kind: 'guideline', title: 'STROBE — Strengthening the Reporting of Observational Studies in Epidemiology', authors: 'von Elm E. et al.', where: '2007', url: 'https://www.strobe-statement.org' },
      { id: 'consort', kind: 'guideline', title: 'CONSORT — recommandations de publication des essais randomisés', authors: 'Schulz K.F., Altman D.G. & Moher D.', where: '2010', url: 'https://www.consort-statement.org' }
    ]
  },
  {
    id: 'interpretation',
    title: 'Interprétation & pièges des tests',
    items: [
      { id: 'asa-pvalue', kind: 'guideline', title: 'ASA Statement on p-Values: Context, Process, and Purpose', authors: 'Wasserstein R.L. & Lazar N.A.', where: 'The American Statistician, 2016', doi: '10.1080/00031305.2016.1154108', url: 'https://doi.org/10.1080/00031305.2016.1154108' },
      { id: 'sterne-smith', kind: 'article', title: 'Sifting the evidence — what’s wrong with significance tests?', authors: 'Sterne J.A.C. & Davey Smith G.', where: 'BMJ, 2001', doi: '10.1136/bmj.322.7280.226', pmid: '11159626', url: 'https://doi.org/10.1136/bmj.322.7280.226' },
      { id: 'ioannidis-2005', kind: 'article', title: 'Why Most Published Research Findings Are False', authors: 'Ioannidis J.P.A.', where: 'PLoS Medicine, 2005', doi: '10.1371/journal.pmed.0020124', pmid: '16060722', url: 'https://doi.org/10.1371/journal.pmed.0020124' },
      { id: 'altman-bland-nonsig', kind: 'article', title: 'Absence of evidence is not evidence of absence', authors: 'Altman D.G. & Bland J.M.', where: 'BMJ, 1995', doi: '10.1136/bmj.311.7003.485', pmid: '7647644', url: 'https://doi.org/10.1136/bmj.311.7003.485' }
    ]
  },
  {
    id: 'institutions',
    title: 'Institutions & ressources',
    items: [
      { id: 'cochrane', kind: 'site', title: 'Cochrane Handbook for Systematic Reviews of Interventions', url: 'https://training.cochrane.org/handbook' },
      { id: 'has', kind: 'site', title: 'HAS — Haute Autorité de Santé (guides méthodologiques)', url: 'https://www.has-sante.fr' },
      { id: 'spf', kind: 'site', title: 'Santé publique France — méthodes et surveillance épidémiologique', url: 'https://www.santepubliquefrance.fr' },
      { id: 'equator', kind: 'site', title: 'EQUATOR Network — guides de publication (STROBE, CONSORT, STARD…)', url: 'https://www.equator-network.org' }
    ]
  }
];

/** Index plat : id → référence. */
export const refById = (() => {
  const idx = {};
  for (const g of referenceGroups) for (const it of g.items) idx[it.id] = it;
  return idx;
})();

/** Tous les identifiants valides (pool fermé). */
export const allRefIds = Object.keys(refById);

/** Étiquette courte de l'identifiant, à afficher à côté de la source. */
export function refIdentifier(r) {
  if (!r) return '';
  if (r.doi) return 'DOI ' + r.doi;
  if (r.pmid) return 'PMID ' + r.pmid;
  if (r.isbn) return 'ISBN ' + r.isbn;
  return '';
}

/** @param {string[]|undefined} ids */
export function resolveSources(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => refById[id]).filter(Boolean);
}
