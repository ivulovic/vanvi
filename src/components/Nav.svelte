<script>
	export let segment;
</script>

<style>
	.nav-wrapper{
		background-color: var(--dark-main);
	}
	nav {
		display: flex;
		justify-content: space-between;
		max-width: 940px;
		margin: 0 auto;
	}
	nav a{
		display: block;
		color: var(--neutral-main);
		padding: 2rem 1rem;
		text-transform: uppercase;
		text-decoration: none;
		font-weight: 300;
		letter-spacing: 0.1rem;
		font-size: 0.8rem;
	}
	nav li{
		display: inline-block;
	}
	nav ul {
		display: flex;
	}
	[aria-current] {
		color: var(--light);
	}
	.logo{
		color: var(--light);
	}
</style>

<div class="nav-wrapper">
	<nav>
		<div>
			<a class="logo" rel=prefetch href=".">
				VANVI
			</a>
		</div>
		<ul>
			<!-- <li><a rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li> -->
			<li><a rel=prefetch aria-current="{segment === 'music' ? 'page' : undefined}" href="music">music</a></li>
			<li><a rel=prefetch aria-current="{segment === 'events' ? 'page' : undefined}" href="events">events</a></li>
			<li><a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		</ul>
	</nav>
</div>
