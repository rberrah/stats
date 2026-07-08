import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	trailingSlash: 'always',
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// Déploiement GitHub Pages en repo « projet » : servi sous /internat.
			// En CI, définir BASE_PATH=/internat ; en dev local, laisser vide.
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			// Les URLs de chapitres sont dérivées automatiquement (voir
			// src/routes/chapitres/[slug]/+page.js). `*` explore les liens restants.
			entries: ['*']
		}
	}
};

export default config;
