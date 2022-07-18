<script lang="ts">
	import { page } from '$app/stores';
	// Import Windi Global CSS
	import 'virtual:windi.css';
	// Import our CSS
	import '$lib/assets/app.windi.css';

	const websiteTitle = 'v49';
</script>

<svelte:head>
	<!-- Website Title -->
	<title>{websiteTitle}</title>

	<!-- Constant meta tags -->
	<meta name="keywords" content="v49.vc, v49, VC, Paris" />
	<meta name="robots" content="index, follow" />

	<!-- OpenGraph constants -->
	<meta property="og:site_name" content={websiteTitle} />
	<meta property="og:url" content="https://v49.vc{$page.url.pathname}" />
</svelte:head>

<slot />
