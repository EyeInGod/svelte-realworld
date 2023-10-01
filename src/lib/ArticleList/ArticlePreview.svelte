<script>
	import { enhance } from '$app/forms';

	export let article;
	export let user;
</script>

<div class="article-preview">
	<div class="article-meta">
		<a href="/profile/@{article.author.username}">
			<img src={article.author.image} alt={article.author.username} />
		</a>

        <div class="info">
			<a class="author" href="/profile/@{article.author.username}">{article.author.username}</a>
			<span class="date">{new Date(article.createdAt).toDateString()}</span>
		</div>
    </div>

    <a href="/article/{article.slug}" class="preview-link">
		<h1>{article.title}</h1>
		<p>{article.description}</p>
		<span>Read more...</span>
		<ul class="tag-list">
			{#each article.tagList as tag}
				<li class="tag-default tag-pill tag-outline"><a href="/?tag={tag}">{tag}</a></li>
			{/each}
		</ul>
	</a>
</div>