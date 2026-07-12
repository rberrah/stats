<script>
  import { base } from '$app/paths';
</script>

<article class="about">
  <p class="eyebrow">À propos</p>
  <h1>La biostatistique, pour comprendre et non subir</h1>

  <p class="lede">
    Ce site enseigne les méthodes statistiques utiles en médecine et en biologie —
    des pourcentages aux tests des rangs — en privilégiant l'<strong>intuition</strong> :
    pourquoi un test fonctionne, avant sa formule, avec des schémas que l'on manipule.
  </p>

  <h2>Comment c'est organisé</h2>
  <ul>
    <li><strong>Le cours</strong> — 6 parties, de la démarche statistique jusqu'aux tests non paramétriques.</li>
    <li><strong>Chapitres</strong> — se lisent en défilant ; une visualisation interactive accompagne le texte.</li>
    <li><strong>Fiches</strong> — la synthèse « à retenir » de chaque chapitre, pour réviser vite.</li>
    <li><strong>Entraînement</strong> — QCM et exercices d'application corrigés.</li>
    <li><strong>Glossaire</strong> — les termes clés, reliés depuis les chapitres.</li>
  </ul>

  <h2>La progression</h2>
  <p>
    Le cours suit la progression <strong>classique</strong> de l'enseignement de la biostatistique :
    on part de la variabilité et des fluctuations d'échantillonnage, on en tire le principe des
    tests, puis on décline selon la nature des variables (pourcentages, moyennes, liaisons), avant
    les tests non paramétriques et, enfin, les méthodes modernes d'épidémiologie clinique. Les
    méthodes exposées (écart-réduit, χ², t, F, analyse de la variance, régression, tests des rangs,
    survie) relèvent du <strong>savoir statistique commun</strong>, enseigné partout dans cet ordre.
  </p>
  <p>
    <strong>Tous les textes, exemples chiffrés et visualisations de ce site sont originaux.</strong>
    Aucun contenu n'est repris d'un ouvrage existant.
  </p>

  <h2>Pour aller plus loin</h2>
  <p>Quelques ouvrages de référence, à consulter pour approfondir :</p>
  <ul>
    <li>D. Schwartz, <em>Méthodes statistiques à l'usage des médecins et des biologistes</em>, Médecine-Sciences Flammarion — le classique français de la biostatistique médicale.</li>
    <li>D. G. Altman, <em>Practical Statistics for Medical Research</em>, Chapman &amp; Hall.</li>
    <li>M. Bouyer et al., <em>Épidémiologie : principes et méthodes quantitatives</em>, Lavoisier.</li>
  </ul>

  <h2>Honnête sur ses limites</h2>
  <p>
    Support pédagogique d'entraide : il <strong>ne remplace pas</strong> un cours complet ni les
    ouvrages de référence, et peut contenir des imprécisions — toute correction est bienvenue.
  </p>

  <div class="cta">
    <a class="btn btn-primary" href={`${base}/chapitres`}>Commencer le cours</a>
  </div>
</article>

<style>
  .about { max-width: 720px; }
  h1 { font-size: var(--text-3xl); margin: var(--space-2) 0 var(--space-4); }
  h2 { font-size: var(--text-xl); margin: var(--space-8) 0 var(--space-3); }
  .lede { color: var(--text-secondary); font-size: var(--text-lg); }
  ul { color: var(--text-secondary); padding-left: 1.2em; }
  li { margin-bottom: var(--space-2); }
  p { color: var(--text-secondary); }
  .cta { margin-top: var(--space-8); }
</style>
