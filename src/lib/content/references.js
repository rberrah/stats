// @ts-nocheck
// RÉFÉRENCES — pool FERMÉ, à IDENTIFIANTS STABLES ET VÉRIFIÉS.
//
// Chaque entrée porte un identifiant qui résout vers UN SEUL document, pour toujours :
//   doi  -> https://doi.org/<doi>
//   pmid -> https://pubmed.ncbi.nlm.nih.gov/<pmid>/
//   isbn -> https://search.worldcat.org/isbn/<isbn>
//   url  -> page officielle (agence, éditeur) pour les documents institutionnels
// AUCUN lien de recherche : une recherche n'est ni stable, ni univoque, donc pas une citation.
// Chaque DOI a été RÉSOLU contre Crossref et son titre confronté au titre attendu (2026-07).
//
// `citable: false` — LIENS UTILES, PAS DES SOURCES.
//   Le site d'une institution ne soutient aucune affirmation : son contenu change et
//   n'affirme rien de vérifiable. Ces entrées restent en bibliographie, mais un chapitre
//   qui les cite dans `sources:` fait ÉCHOUER le smoke test.
//
// Les chapitres se rattachent au pool via `sources: [<id>, ...]` dans leur frontmatter.
// Un id inconnu — ou non citable — fait ÉCHOUER le smoke test.

/** @typedef {{id:string, kind:string, title:string, authors?:string, where?:string, doi?:string, pmid?:string, isbn?:string, url:string, citable?:boolean}} Reference */

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
      { id: 'collett-survival', kind: 'book', title: 'Modelling Survival Data in Medical Research', authors: 'Collett D.', where: 'Chapman & Hall/CRC', isbn: '9781032252858', url: 'https://search.worldcat.org/isbn/9781032252858' },
      { id: 'cochran-sampling', kind: 'book', title: 'Sampling Techniques (théorie de l’échantillonnage, marge d’erreur, taille d’échantillon)', authors: 'Cochran W.G.', where: '3e éd., Wiley 1977', isbn: '9780471162407', url: 'https://search.worldcat.org/isbn/9780471162407' }
    ]
  },
  {
    id: 'fondateurs',
    title: 'Articles fondateurs',
    items: [
      { id: 'student-1908', kind: 'article', title: 'The Probable Error of a Mean (naissance du test t)', authors: '“Student” (Gosset W.S.)', where: 'Biometrika, 1908', doi: '10.1093/biomet/6.1.1', url: 'https://doi.org/10.1093/biomet/6.1.1' },
      { id: 'pearson-1900', kind: 'article', title: 'On the criterion that a given system of deviations… (naissance du χ²)', authors: 'Pearson K.', where: 'Philosophical Magazine, 1900', doi: '10.1080/14786440009463897', url: 'https://doi.org/10.1080/14786440009463897' },
      { id: 'fisher-1922', kind: 'article', title: 'On the mathematical foundations of theoretical statistics (estimation, degrés de liberté, vraisemblance)', authors: 'Fisher R.A.', where: 'Phil. Trans. R. Soc. A, 1922', doi: '10.1098/rsta.1922.0009', url: 'https://doi.org/10.1098/rsta.1922.0009' },
      { id: 'fisher-1925', kind: 'book', title: 'Statistical Methods for Research Workers (origine du seuil de 5 %)', authors: 'Fisher R.A.', where: 'Oliver & Boyd — 1re éd. 1925 ; ISBN de la 14e éd. (1970)', isbn: '9780050021705', url: 'https://search.worldcat.org/isbn/9780050021705' },
      { id: 'fisher-1935-exact', kind: 'article', title: 'The Logic of Inductive Inference (le test exact, la loi hypergéométrique à marges fixées)', authors: 'Fisher R.A.', where: 'J. R. Stat. Soc., 1935', doi: '10.2307/2342435', url: 'https://doi.org/10.2307/2342435' },
      { id: 'neyman-pearson-1933', kind: 'article', title: 'On the problem of the most efficient tests of statistical hypotheses (α, β et la puissance)', authors: 'Neyman J. & Pearson E.S.', where: 'Phil. Trans. R. Soc. A, 1933', doi: '10.1098/rsta.1933.0009', url: 'https://doi.org/10.1098/rsta.1933.0009' },
      { id: 'wilson-1927', kind: 'article', title: 'Probable Inference, the Law of Succession, and Statistical Inference (l’intervalle de confiance d’une proportion)', authors: 'Wilson E.B.', where: 'JASA, 1927', doi: '10.1080/01621459.1927.10502953', url: 'https://doi.org/10.1080/01621459.1927.10502953' },
      { id: 'yates-1934', kind: 'article', title: 'Contingency Tables Involving Small Numbers and the χ² Test (la correction de continuité)', authors: 'Yates F.', where: 'J. R. Stat. Soc. Suppl., 1934', doi: '10.2307/2983604', url: 'https://doi.org/10.2307/2983604' },
      { id: 'welch-1947', kind: 'article', title: 'The generalization of Student’s problem when several different population variances are involved (le test t de Welch)', authors: 'Welch B.L.', where: 'Biometrika, 1947', doi: '10.1093/biomet/34.1-2.28', url: 'https://doi.org/10.1093/biomet/34.1-2.28' },
      { id: 'brown-forsythe-1974', kind: 'article', title: 'Robust Tests for the Equality of Variances (la fragilité du test F devant la non-normalité)', authors: 'Brown M.B. & Forsythe A.B.', where: 'JASA, 1974', doi: '10.1080/01621459.1974.10482955', url: 'https://doi.org/10.1080/01621459.1974.10482955' },
      { id: 'shapiro-wilk-1965', kind: 'article', title: 'An analysis of variance test for normality (le test de Shapiro-Wilk)', authors: 'Shapiro S.S. & Wilk M.B.', where: 'Biometrika, 1965', doi: '10.1093/biomet/52.3-4.591', url: 'https://doi.org/10.1093/biomet/52.3-4.591' },
      { id: 'galton-1886', kind: 'article', title: 'Regression Towards Mediocrity in Hereditary Stature (l’acte de naissance de la régression)', authors: 'Galton F.', where: 'J. Anthropol. Inst., 1886', doi: '10.2307/2841583', url: 'https://doi.org/10.2307/2841583' },
      { id: 'spearman-1904', kind: 'article', title: 'The Proof and Measurement of Association between Two Things', authors: 'Spearman C.', where: 'Am. J. Psychol., 1904', doi: '10.2307/1412159', url: 'https://doi.org/10.2307/1412159' },
      { id: 'wilcoxon-1945', kind: 'article', title: 'Individual Comparisons by Ranking Methods', authors: 'Wilcoxon F.', where: 'Biometrics Bulletin, 1945', doi: '10.2307/3001968', url: 'https://doi.org/10.2307/3001968' },
      { id: 'mann-whitney-1947', kind: 'article', title: 'On a Test of Whether one of Two Random Variables is Stochastically Larger', authors: 'Mann H.B. & Whitney D.R.', where: 'Ann. Math. Statist., 1947', doi: '10.1214/aoms/1177730491', url: 'https://doi.org/10.1214/aoms/1177730491' },
      { id: 'kruskal-wallis-1952', kind: 'article', title: 'Use of Ranks in One-Criterion Variance Analysis', authors: 'Kruskal W.H. & Wallis W.A.', where: 'JASA, 1952', doi: '10.1080/01621459.1952.10483441', url: 'https://doi.org/10.1080/01621459.1952.10483441' },
      { id: 'hodges-lehmann-1956', kind: 'article', title: 'The Efficiency of Some Nonparametric Competitors of the t-Test (les 95 % de puissance des tests de rangs)', authors: 'Hodges J.L. & Lehmann E.L.', where: 'Ann. Math. Statist., 1956', doi: '10.1214/aoms/1177728261', url: 'https://doi.org/10.1214/aoms/1177728261' },
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
      { id: 'youden-1950', kind: 'article', title: 'Index for rating diagnostic tests (l’indice de Youden, J = Se + Sp − 1)', authors: 'Youden W.J.', where: 'Cancer, 1950', doi: '10.1002/1097-0142(1950)3:1<32::AID-CNCR2820030106>3.0.CO;2-3', pmid: '15405679', url: 'https://doi.org/10.1002/1097-0142(1950)3:1<32::AID-CNCR2820030106>3.0.CO;2-3' },
      { id: 'deeks-altman-lr', kind: 'article', title: 'Diagnostic tests 4: likelihood ratios (rapports de vraisemblance)', authors: 'Deeks J.J. & Altman D.G.', where: 'BMJ, 2004', doi: '10.1136/bmj.329.7458.168', pmid: '15258077', url: 'https://doi.org/10.1136/bmj.329.7458.168' },
      { id: 'laupacis-nnt', kind: 'article', title: 'An assessment of clinically useful measures of the consequences of treatment (NNT)', authors: 'Laupacis A., Sackett D.L. & Roberts R.S.', where: 'N. Engl. J. Med., 1988', doi: '10.1056/NEJM198806303182605', pmid: '3374545', url: 'https://doi.org/10.1056/NEJM198806303182605' }
    ]
  },
  {
    id: 'mesure',
    title: 'Mesure, distribution & bonnes pratiques (Statistics Notes du BMJ)',
    items: [
      { id: 'bland-altman-normal', kind: 'article', title: 'Statistics Notes: The normal distribution', authors: 'Altman D.G. & Bland J.M.', where: 'BMJ, 1995', doi: '10.1136/bmj.310.6975.298', pmid: '7866172', url: 'https://doi.org/10.1136/bmj.310.6975.298' },
      { id: 'bland-altman-transform', kind: 'article', title: 'Statistics Notes: Transforming data (la transformation logarithmique)', authors: 'Bland J.M. & Altman D.G.', where: 'BMJ, 1996', doi: '10.1136/bmj.312.7033.770', pmid: '8605469', url: 'https://doi.org/10.1136/bmj.312.7033.770' },
      { id: 'bland-altman-measurement-error', kind: 'article', title: 'Statistics Notes: Measurement error (exactitude et précision)', authors: 'Bland J.M. & Altman D.G.', where: 'BMJ, 1996', doi: '10.1136/bmj.312.7047.1654', pmid: '8664723', url: 'https://doi.org/10.1136/bmj.312.7047.1654' },
      { id: 'bland-altman-1986', kind: 'article', title: 'Statistical methods for assessing agreement between two methods of clinical measurement', authors: 'Bland J.M. & Altman D.G.', where: 'The Lancet, 1986', doi: '10.1016/S0140-6736(86)90837-8', pmid: '2868172', url: 'https://doi.org/10.1016/S0140-6736(86)90837-8' }
    ]
  },
  {
    id: 'biais',
    title: 'Biais & épidémiologie clinique',
    items: [
      { id: 'suissa-immortal', kind: 'article', title: 'Immortal time bias in pharmacoepidemiology (le biais de temps immortel)', authors: 'Suissa S.', where: 'Am. J. Epidemiol., 2008', doi: '10.1093/aje/kwm324', pmid: '18056625', url: 'https://doi.org/10.1093/aje/kwm324' },
      { id: 'sackett-bias', kind: 'article', title: 'Bias in analytic research (catalogue des biais)', authors: 'Sackett D.L.', where: 'J. Chronic Dis., 1979', doi: '10.1016/0021-9681(79)90012-2', pmid: '447779', url: 'https://doi.org/10.1016/0021-9681(79)90012-2' },
      { id: 'hill-criteria', kind: 'article', title: 'The Environment and Disease: Association or Causation? (critères de Bradford Hill)', authors: 'Hill A.B.', where: 'Proc. R. Soc. Med., 1965', doi: '10.1177/003591576505800503', pmid: '14283879', url: 'https://doi.org/10.1177/003591576505800503' },
      { id: 'strobe', kind: 'guideline', title: 'STROBE statement — guidelines for reporting observational studies', authors: 'von Elm E., Altman D.G., Egger M. et al.', where: 'The Lancet, 2007', doi: '10.1016/S0140-6736(07)61602-X', pmid: '18064739', url: 'https://doi.org/10.1016/S0140-6736(07)61602-X' },
      { id: 'consort', kind: 'guideline', title: 'CONSORT 2010 Statement — updated guidelines for reporting parallel group randomised trials', authors: 'Schulz K.F., Altman D.G. & Moher D.', where: 'BMJ, 2010', doi: '10.1136/bmj.c332', pmid: '20332509', url: 'https://doi.org/10.1136/bmj.c332' },
      { id: 'cochrane', kind: 'guideline', title: 'Cochrane Handbook for Systematic Reviews of Interventions', authors: 'Higgins J.P.T., Thomas J. et al. (dir.)', where: 'Cochrane', url: 'https://training.cochrane.org/handbook' }
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
    id: 'liens',
    title: 'Liens utiles (ne sont pas des sources)',
    note: 'Le site d’une institution ne soutient aucune affirmation : son contenu change et n’affirme rien de vérifiable. Ces liens sont donnés pour aller plus loin — aucun chapitre ne s’en sert comme source.',
    items: [
      { id: 'has', kind: 'site', citable: false, title: 'HAS — Haute Autorité de Santé (guides méthodologiques)', url: 'https://www.has-sante.fr' },
      { id: 'spf', kind: 'site', citable: false, title: 'Santé publique France — méthodes et surveillance épidémiologique', url: 'https://www.santepubliquefrance.fr' },
      { id: 'equator', kind: 'site', citable: false, title: 'EQUATOR Network — guides de publication (STROBE, CONSORT, STARD…)', url: 'https://www.equator-network.org' }
    ]
  }
];

/** Index plat : id → référence. */
export const refById = (() => {
  const idx = {};
  for (const g of referenceGroups) for (const it of g.items) idx[it.id] = it;
  return idx;
})();

/** Tous les identifiants du pool. */
export const allRefIds = Object.keys(refById);

/** Les identifiants réellement CITABLES : un lien utile n'est pas une source. */
export const citableRefIds = allRefIds.filter((id) => refById[id].citable !== false);

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
