<script context="module" lang="ts">
	// Constants
	import { copyrightStartYear } from '$lib/globals/constants';
</script>

<script lang="ts">
	const pageTitle = 'v49';
	const currentYear = new Date().getFullYear();
	$: copyrightString =
		currentYear === copyrightStartYear
			? `${copyrightStartYear}`
			: `${copyrightStartYear} — ${currentYear}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" property="title" content={pageTitle} />
	<meta property="og:title" content={pageTitle} />

	<!-- OpenGraph property that are specific to the landing page -->
	<meta
		name="description"
		property="og:description"
		content="Official website of v49, a Paris-based VC."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://v49.vc/favicon/opengraph.png" />
	<meta property="og:image:alt" content="v49 logo" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter OpenGraph constants -->
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

Hello v49

<footer class="w-full">
	&copy;&nbsp;Copyright {copyrightString} v49.vc
</footer>
