<script>
	import { navigating } from '$app/stores';
	import Nav from './Nav.svelte';
  	import PreloadingIndicator from './PreloadingIndicator.svelte';
	import './styles.css';
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<div class="app">
	<Nav />
	<main>
		<slot />
	</main>
</div>