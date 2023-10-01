<script>
	import { page } from '$app/stores';
  	import ArticleList from '$lib/ArticleList/index.svelte';

	export let data;

	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') ?? 'all';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-page">
	{#if !data.user}
		<div class="banner">
			<div class="container">
				<h1 class="logo-font">conduit</h1>
				<p>A place to share your knowledge.</p>
			</div>
		</div>
	{/if}
	<div class="container page">
		<div class="row">
			<div class="col-md-9">
				<div class="feed-toggle">
					<ul class="nav nav-pills outline-active">
						<li class="nav-item">
							<a href="/?tab=all" class="nav-link" class:active={tab === 'all' && !tag}>
								Global Feed
							</a>
						</li>
					</ul>
				</div>
				
				<ArticleList articles={data.articles} />
			</div>
		</div>
	</div>
</div>