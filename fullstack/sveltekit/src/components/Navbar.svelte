<script>
	import { page } from '$app/stores';
	import { navLinks } from '../routes/links';
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each navLinks as link}
					<li class="nav-item">
						<a class={`nav-link ${$page.url.pathname == link.path && 'active'}`} href={link.path}
							>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
