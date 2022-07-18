import { resolve } from 'path';
import { defineConfig } from 'vite';
// Plugins
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import WindiCSS from 'vite-plugin-windicss';

const enableSourceMap = process.env.WITH_SOURCEMAPS === 'true';

export default defineConfig({
	build: { sourcemap: enableSourceMap },
	plugins: [WindiCSS({ transformCSS: 'pre' }), imagetools({ removeMetadata: true }), sveltekit()],
	server: {
		// Use Gitpod proxy in the HMR URL when appropriate
		hmr: process.env.GITPOD_HMR_HOST
			? {
					host: process.env.GITPOD_HMR_HOST.replace('https://', ''),
					protocol: 'wss',
					clientPort: 443,
			  }
			: true,
		cors: {
			origin: true, // Mirrors 'Origin' header into the CORS response
			credentials: true, // Sets 'Access-Control-Allow-Credentials' header
		},
	},
});
