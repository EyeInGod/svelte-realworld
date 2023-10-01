<script>
    import Comment from "./Comment.svelte";
    import CommentInput from "./CommentInput.svelte";

    export let comments;
	export let user;
</script>

<div class="col-xs-12 col-md-8 offset-md-2">
    {#if user}
		<div>
			<CommentInput {user} />
		</div>
	{:else}
		<p>
			<a href="/login">Sign in</a>
			or
			<a href="/register">sign up</a>
			to add comments on this article.
		</p>
	{/if}

	{#each comments as comment (comment.id)}
		<Comment {comment} {user} />
	{/each}
</div>