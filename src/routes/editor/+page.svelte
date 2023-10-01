<script>
    import Editor from './Editor.svelte';

    export let form;
</script>

<Editor
	article={{
		title: '',
		description: '',
		body: '',
		tagList: []
	}}
	errors={form?.errors}
/>