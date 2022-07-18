import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import { mdsvexConfig } from './mdsvex.config.js';

const enableSourceMap = process.env.WITH_SOURCEMAPS === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess({ sourceMap: enableSourceMap })],

	kit: {
		adapter: adapter({
			fallback: '200.html',
		}),
		// Note: 'always' is not supported with `fallback: '200.html'`
		trailingSlash: 'never',
		prerender: {
			default: true, // Prerender all pages by default
		},
		version: {
			name: process.env.VITE_APP_VERSION || Date.now().toString(),
			// Poll every 10 minutes for a new version
			pollInterval: 10 * 60_000,
		},
	},
};

export default config;
