// @ts-nocheck
// RÉFÉRENCES — pool FERMÉ de sources reconnues : ouvrages de référence, articles
// FONDATEURS (Student, Pearson, Fisher, Kaplan-Meier, Cox…), recommandations
// méthodologiques (STROBE, CONSORT, ASA) et institutions.
//
// Chaque entrée porte un `id` stable. Les chapitres s'y rattachent via
// `sources: [<id>, ...]` dans leur frontmatter. Un id inconnu fait ÉCHOUER le
// smoke test : impossible d'inventer une source.
//
// kind: 'book' | 'article' | 'guideline' | 'site'

/** @typedef {{id:string, title:string, authors?:string, where?:string, url:string, kind:string}} Reference */
/** @typedef {{id:string, title:string, items:Reference[]}} ReferenceGroup */

const search = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const pubmed = (q) => `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(q)}`;

/** @type {ReferenceGroup[]} */
export const referenceGroups = [
  {
    id: 'livres',
    title: 'Ouvrages de référence',
    items: [
      { id: 'schwartz', kind: 'book', title: 'Méthodes statistiques à l’usage des médecins et des biologistes', authors: 'Schwartz D.', where: 'Médecine-Sciences Flammarion — le classique français', url: search('Schwartz Méthodes statistiques à l usage des médecins et des biologistes Flammarion') },
      { id: 'altman', kind: 'book', title: 'Practical Statistics for Medical Research', authors: 'Altman D.G.', where: 'Chapman & Hall/CRC', url: search('Altman Practical Statistics for Medical Research') },
      { id: 'armitage-berry', kind: 'book', title: 'Statistical Methods in Medical Research', authors: 'Armitage P., Berry G. & Matthews J.N.S.', where: 'Blackwell', url: search('Armitage Berry Matthews Statistical Methods in Medical Research') },
      { id: 'bouyer', kind: 'book', title: 'Épidémiologie : principes et méthodes quantitatives', authors: 'Bouyer J. et al.', where: 'Lavoisier / Inserm', url: search('Bouyer Épidémiologie principes et méthodes quantitatives Lavoisier') },
      { id: 'ancelle', kind: 'book', title: 'Statistique — Épidémiologie', authors: 'Ancelle T.', where: 'Maloine', url: search('Ancelle Statistique Épidémiologie Maloine') },
      { id: 'rothman', kind: 'book', title: 'Modern Epidemiology', authors: 'Rothman K.J., Greenland S. & Lash T.L.', where: 'Wolters Kluwer', url: search('Rothman Greenland Lash Modern Epidemiology') },
      { id: 'hosmer-lemeshow', kind: 'book', title: 'Applied Logistic Regression', authors: 'Hosmer D.W. & Lemeshow S.', where: 'Wiley', url: search('Hosmer Lemeshow Applied Logistic Regression') },
      { id: 'collett-survival', kind: 'book', title: 'Modelling Survival Data in Medical Research', authors: 'Collett D.', where: 'Chapman & Hall/CRC', url: search('Collett Modelling Survival Data in Medical Research') }
    ]
  },
  {
    id: 'fondateurs',
    title: 'Articles fondateurs',
    items: [
      { id: 'student-1908', kind: 'article', title: 'The Probable Error of a Mean (naissance du test t)', authors: '“Student” (Gosset W.S.)', where: 'Biometrika, 1908', url: search('Student 1908 The Probable Error of a Mean Biometrika Gosset') },
      { id: 'pearson-1900', kind: 'article', title: 'On the criterion that a given system of deviations… (naissance du χ²)', authors: 'Pearson K.', where: 'Philosophical Magazine, 1900', url: search('Karl Pearson 1900 chi square criterion given system of deviations') },
      { id: 'fisher-1925', kind: 'book', title: 'Statistical Methods for Research Workers (origine du seuil de 5 %)', authors: 'Fisher R.A.', where: 'Oliver & Boyd, 1925', url: search('Fisher Statistical Methods for Research Workers 1925') },
      { id: 'wilcoxon-1945', kind: 'article', title: 'Individual Comparisons by Ranking Methods', authors: 'Wilcoxon F.', where: 'Biometrics Bulletin, 1945', url: search('Wilcoxon 1945 Individual Comparisons by Ranking Methods Biometrics Bulletin') },
      { id: 'mann-whitney-1947', kind: 'article', title: 'On a Test of Whether one of Two Random Variables is Stochastically Larger', authors: 'Mann H.B. & Whitney D.R.', where: 'Ann. Math. Statist., 1947', url: search('Mann Whitney 1947 test whether one of two random variables stochastically larger') },
      { id: 'kruskal-wallis-1952', kind: 'article', title: 'Use of Ranks in One-Criterion Variance Analysis', authors: 'Kruskal W.H. & Wallis W.A.', where: 'JASA, 1952', url: search('Kruskal Wallis 1952 use of ranks in one-criterion variance analysis JASA') },
      { id: 'spearman-1904', kind: 'article', title: 'The Proof and Measurement of Association between Two Things', authors: 'Spearman C.', where: 'Am. J. Psychol., 1904', url: search('Spearman 1904 proof and measurement of association between two things') },
      { id: 'kaplan-meier-1958', kind: 'article', title: 'Nonparametric Estimation from Incomplete Observations (courbe de Kaplan-Meier)', authors: 'Kaplan E.L. & Meier P.', where: 'JASA, 1958', url: search('Kaplan Meier 1958 nonparametric estimation from incomplete observations JASA') },
      { id: 'mantel-1966', kind: 'article', title: 'Evaluation of survival data and two new rank order statistics (test du log-rank)', authors: 'Mantel N.', where: 'Cancer Chemother. Rep., 1966', url: pubmed('Mantel evaluation of survival data and two new rank order statistics log-rank') },
      { id: 'cox-1972', kind: 'article', title: 'Regression Models and Life-Tables (modèle de Cox)', authors: 'Cox D.R.', where: 'J. R. Stat. Soc. B, 1972', url: search('Cox 1972 Regression Models and Life-Tables Journal Royal Statistical Society') }
    ]
  },
  {
    id: 'diagnostic',
    title: 'Tests diagnostiques & mesures de risque',
    items: [
      { id: 'hanley-mcneil-1982', kind: 'article', title: 'The meaning and use of the area under a ROC curve (AUC)', authors: 'Hanley J.A. & McNeil B.J.', where: 'Radiology, 1982', url: pubmed('Hanley McNeil meaning and use of the area under a receiver operating characteristic ROC curve') },
      { id: 'deeks-altman-lr', kind: 'article', title: 'Diagnostic tests 4: likelihood ratios (rapports de vraisemblance)', authors: 'Deeks J.J. & Altman D.G.', where: 'BMJ, 2004', url: pubmed('Deeks Altman diagnostic tests 4 likelihood ratios BMJ 2004') },
      { id: 'altman-bland-notes', kind: 'article', title: 'Statistics Notes (série pédagogique du BMJ)', authors: 'Altman D.G. & Bland J.M.', where: 'BMJ, 1994–2011', url: pubmed('Altman Bland statistics notes BMJ series') },
      { id: 'laupacis-nnt', kind: 'article', title: 'An assessment of clinically useful measures of the consequences of treatment (NNT)', authors: 'Laupacis A., Sackett D.L. & Roberts R.S.', where: 'N. Engl. J. Med., 1988', url: pubmed('Laupacis Sackett Roberts assessment of clinically useful measures consequences of treatment number needed to treat') }
    ]
  },
  {
    id: 'biais',
    title: 'Biais & épidémiologie clinique',
    items: [
      { id: 'suissa-immortal', kind: 'article', title: 'Immortal time bias in pharmacoepidemiology (le biais de temps immortel)', authors: 'Suissa S.', where: 'Am. J. Epidemiol., 2008', url: pubmed('Suissa immortal time bias in pharmacoepidemiology American Journal of Epidemiology 2008') },
      { id: 'sackett-bias', kind: 'article', title: 'Bias in analytic research (catalogue des biais)', authors: 'Sackett D.L.', where: 'J. Chronic Dis., 1979', url: pubmed('Sackett bias in analytic research journal of chronic diseases 1979') },
      { id: 'hill-criteria', kind: 'article', title: 'The Environment and Disease: Association or Causation? (critères de Bradford Hill)', authors: 'Hill A.B.', where: 'Proc. R. Soc. Med., 1965', url: pubmed('Bradford Hill the environment and disease association or causation') },
      { id: 'strobe', kind: 'guideline', title: 'STROBE — Strengthening the Reporting of Observational Studies in Epidemiology', authors: 'von Elm E. et al.', where: '2007', url: 'https://www.strobe-statement.org' },
      { id: 'consort', kind: 'guideline', title: 'CONSORT — recommandations de publication des essais randomisés', authors: 'Schulz K.F., Altman D.G. & Moher D.', where: '2010', url: 'https://www.consort-statement.org' }
    ]
  },
  {
    id: 'interpretation',
    title: 'Interprétation & pièges des tests',
    items: [
      { id: 'asa-pvalue', kind: 'guideline', title: 'ASA Statement on p-Values: Context, Process, and Purpose', authors: 'Wasserstein R.L. & Lazar N.A.', where: 'The American Statistician, 2016', url: search('Wasserstein Lazar ASA statement on p-values context process purpose American Statistician 2016') },
      { id: 'sterne-smith', kind: 'article', title: 'Sifting the evidence — what’s wrong with significance tests?', authors: 'Sterne J.A.C. & Davey Smith G.', where: 'BMJ, 2001', url: pubmed('Sterne Davey Smith sifting the evidence what is wrong with significance tests BMJ') },
      { id: 'ioannidis-2005', kind: 'article', title: 'Why Most Published Research Findings Are False', authors: 'Ioannidis J.P.A.', where: 'PLoS Medicine, 2005', url: pubmed('Ioannidis why most published research findings are false PLoS Medicine 2005') },
      { id: 'altman-bland-nonsig', kind: 'article', title: 'Absence of evidence is not evidence of absence', authors: 'Altman D.G. & Bland J.M.', where: 'BMJ, 1995', url: pubmed('Altman Bland absence of evidence is not evidence of absence BMJ 1995') }
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

/** @param {string[]|undefined} ids */
export function resolveSources(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => refById[id]).filter(Boolean);
}
