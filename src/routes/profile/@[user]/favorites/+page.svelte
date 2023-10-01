<script>
	import ArticleList  from '$lib/ArticleList/index.svelte';

	export let data;
</script>

<ArticleList articles={data.articles} />