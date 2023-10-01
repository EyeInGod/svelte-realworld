<script>
	import Editor from './../Editor.svelte';

	export let data;
	export let form;
</script>

<Editor article={data.article} errors={form?.errors} />