<script>
	import { page } from '$app/stores';
    import ArticlePreview from './ArticlePreview.svelte';

	export let articles;
</script>

{#if articles.length === 0}
	<div class="article-preview">No articles are here... yet.</div>
{:else}
    <div>
        {#each articles as article (article.slug)}
            <ArticlePreview {article} user={$page.data.user} />
        {/each}
    </div>
{/if}