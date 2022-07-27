<script>
	export let title = '';
</script>

<slot />

<style>
	:global(ul > li) {
		@apply "!pl-0";
	}
</style>
