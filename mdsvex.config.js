import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {Parameters<typeof import('mdsvex').mdsvex>[0]} */
const mdsvexConfig = {
	extensions: ['.svelte.md'],
	layout: './src/lib/markdown/DefaultLayout.svelte',
	smartypants: { dashes: 'oldschool' },
	remarkPlugins: [require('remark-math'), require('remark-abbr')],
	rehypePlugins: [
		require('rehype-katex-svelte'),
		require('rehype-slug'),
		[
			require('rehype-autolink-headings'),
			{
				behavior: 'append',
				properties: {},
				content: {
					type: 'element',
					tagName: 'span',
					properties: { className: ['anchor-sign'] },
					children: [],
				},
			},
		],
	],
};

export { mdsvexConfig };
