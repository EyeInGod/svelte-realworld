<script lang="ts">
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a class="navbar-brand" href="/">Svelte Conduit</a>

        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            {#if $page.data.user}
                <li class="nav-item">
                    <a href="{base}/editor" class="nav-link" class:active={$page.url.pathname === '/editor'}>
                        <i class="icon-compose" />New Post
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{base}/settings" class="nav-link" class:active={$page.url.pathname === '/settings'}>
                        <i class="icon-compose" />Settings
                    </a>
                </li>

                <li class="nav-item">
					<a href="{base}/profile/@{$page.data.user.username}" class="nav-link">
						{$page.data.user.username}
					</a>
				</li>
            {:else}
                <li class="nav-item">
                    <a href="{base}/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
                        <i class="icon-compose" />Sign in
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{base}/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
                        <i class="icon-compose" />Sign up
                    </a>
                </li>
            {/if}
        </ul>
    </div>
</nav>
