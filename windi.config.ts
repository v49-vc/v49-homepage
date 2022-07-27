import colors from 'windicss/colors';
import defaultTheme from 'windicss/defaultTheme';
import { defineConfig } from 'windicss/helpers';
// Plugins
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import typographyPlugin from 'windicss/plugin/typography';

const config = defineConfig({
	extract: {
		include: ['./src/**/*.{html,js,svelte,ts}'],
		exclude: ['node_modules', '.git', 'excluded', 'dist', '*.config.{ts,js}'],
	},
	theme: {
		screens: {
			xxs: '350px',
			xs: '475px',
			...defaultTheme.screens,
		},

		extend: {
			screens: {
				hoverable: { raw: '(hover: hover)' },
				// => @media (orientation: portrait) { ... }
			},
			colors: {
				// Palette: https://coolors.co/5ed394-1c2335-334061-eeeeee-ffffff
				accent: { DEFAULT: '#5ED394', dark: '#5ED394' },
				light: { DEFAULT: '#EEEEEE', alt: colors.white },
				dark: { DEFAULT: '#334061', alt: '#1C2335' },
			},
		},
	},
	darkMode: 'media',
	plugins: [typographyPlugin(), aspectRatioPlugin],
	shortcuts: {
		'small-caps': {
			'font-variant': 'small-caps',
		},
	},
});

module.exports = config;
