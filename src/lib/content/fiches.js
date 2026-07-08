// @ts-nocheck
// FICHES de synthèse (révision « dernière ligne droite »), inspirées des fiches
// de l'utilisateur (Tutorat CSP / Last Minute). Format condensé : blocs de points.
// `section` = section du programme (I..V) ; `chapter` = cours détaillé associé.

/** @typedef {{titre:string, points:string[]}} Bloc */
/** @typedef {{id:string, titre:string, section:string, theme:string, chapter?:string, blocs:Bloc[]}} Fiche */

/** @type {Fiche[]} */
export const fiches = [
  {
    id: 'fiche-anemies', titre: 'Anémies : démarche diagnostique', section: 'IV', theme: 'Hématologie', chapter: 'hemato-anemies',
    blocs: [
      { titre: 'Définition', points: [
        'Anémie : Hb < 130 g/L (homme), < 120 (femme), < 110 (grossesse).',
        'Hémoconcentration (déshydratation) → masque ; hémodilution (grossesse) → fausse anémie.',
        'Mécanisme : central (défaut de production) vs périphérique (perte/consommation).'
      ] },
      { titre: 'Constantes', points: [
        'VGM = Ht/GR (N 80–100 fL) ; TCMH = Hb/GR (27–32 pg) ; CCMH = Hb/Ht (32–35 %).',
        'Réticulocytes N 20–80 G/L ; seuil de régénération > 120 G/L.'
      ] },
      { titre: 'Microcytaire (VGM < 80)', points: [
        'Bilan ferrique. Ferritine effondrée → carence martiale (fer ↓, CS ↓, TF/CTF ↑, hypochromie, CRP N).',
        'Ferritine N/↑ → inflammation (CRP ↑, TF ↓), thalassémie (électrophorèse Hb), sidéroblastique.'
      ] },
      { titre: 'Macrocytaire (VGM > 100) arégénératif', points: [
        'Doser B12 (200–900 pg/mL) et folates. Mégaloblastose (trouble synthèse ADN).',
        'B12 : Biermer (Ac anti-FI), signes neuro. Folates : grossesse, alcool, antifoliques.',
        'Non mégaloblastique : alcool, hypothyroïdie, myélodysplasie.'
      ] },
      { titre: 'Régénératif (> 120)', points: [
        'Hémorragie aiguë ou hémolyse (bili. libre ↑, LDH ↑, haptoglobine ↓, test de Coombs).'
      ] }
    ]
  },
  {
    id: 'fiche-paludisme', titre: 'Paludisme', section: 'IV', theme: 'Parasitologie', chapter: 'parasito-paludisme',
    blocs: [
      { titre: 'Agent / vecteur', points: [
        'Plasmodium (falciparum = le plus grave). Vecteur : anophèle femelle, piqûre nocturne.'
      ] },
      { titre: 'Clinique', points: [
        'Fièvre au retour de zone d’endémie (Afrique subsaharienne +++), frissons.',
        'Biologie : thrombopénie (évocatrice), anémie hémolytique, splénomégalie, ictère.'
      ] },
      { titre: 'Diagnostic (URGENCE < 2 h)', points: [
        'Frottis sanguin + goutte épaisse (± TDR). Parasitémie.',
        'Jamais la sérologie pour le diagnostic d’urgence.'
      ] },
      { titre: 'Gravité (falciparum)', points: [
        'Neuropaludisme, IRA, hypoglycémie, acidose, parasitémie élevée → artésunate IV.'
      ] },
      { titre: 'Traitement / prévention', points: [
        'Accès simple falciparum : ACT (artéméther-luméfantrine…).',
        'Prévention : chimioprophylaxie + protection anti-vectorielle.'
      ] }
    ]
  }
];

export const ficheSections = [...new Set(fiches.map((f) => f.section))];
