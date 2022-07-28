<script lang="ts">
	import { page } from '$app/stores';
	// Import Windi Global CSS
	import 'virtual:windi.css';
	// Import our CSS
	import '$lib/assets/app.windi.css';
	import { copyrightStartYear } from '$lib/globals/constants';
	import { urlForAsset } from '$lib/globals/vite-constants';

	const websiteTitle = 'v49';

	const currentYear = new Date().getFullYear();
	$: copyrightString =
		currentYear === copyrightStartYear
			? `${copyrightStartYear}`
			: `${copyrightStartYear} — ${currentYear}`;
</script>

<svelte:head>
	<!-- Website Title -->
	<title>{websiteTitle}</title>

	<!-- Font -->
	<link
		href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Open+Sans:wght@400;500;600;700&family=Oswald:wght@700&display=swap"
		rel="stylesheet"
	/>

	<!-- Constant meta tags -->
	<meta name="keywords" content="v49.vc, v49, VC, Paris" />
	<meta name="robots" content="index, follow" />

	<!-- OpenGraph constants -->
	<meta property="og:site_name" content={websiteTitle} />
	<meta property="og:url" content={urlForAsset($page.url.pathname).href} />

	<meta name="title" property="title" content={websiteTitle} />
	<meta property="og:title" content={websiteTitle} />

	<!-- OpenGraph property that are specific to the landing page -->
	<meta
		name="description"
		property="og:description"
		content="Official website of v49, a Paris-based VC."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={urlForAsset('/opengraph/opengraph.png').href} />
	<meta property="og:image:alt" content="v49 logo" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main class="flex flex-col items-center">
	<header class="text-center mt-10">
		<h1 class="text-7xl font-josefin font-extrabold">v49</h1>
	</header>
	<main class="max-w-screen-md mx-4 prose-xl leading-6">
		<slot />
	</main>
	<footer class="mt-10">
		&copy;&nbsp;Copyright {copyrightString} v49.vc
	</footer>
</main>
