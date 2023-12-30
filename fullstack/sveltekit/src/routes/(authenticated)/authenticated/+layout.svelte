<script>
	import { NAVLINKS, PROFILE_LINKS } from './../../../lib/links';

	import { toastMessage } from '../../../stores/toastStore';
	import { page } from '$app/stores';
	import HomeIcon from '../../../components/icons/HomeIcon.svelte';

	let isCollapsed = false;

	export let data;

	function toggleSidebar() {
		isCollapsed = !isCollapsed;
	}
	console.log($page.url.pathname);
</script>

<div class="toast-container position-fixed top-0 end-0 p-3">
	<div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="toast-header">
			<strong class="me-auto">{$toastMessage.title}</strong>
			<small>Now</small>
			<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
		</div>
		<div class="toast-body">
			{$toastMessage.message}
		</div>
	</div>
</div>
<div class="app-container">
	<div>
		<div class="top-shell bg-dark">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<svg
				on:click={toggleSidebar}
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				fill="currentColor"
				class="bi bi-list"
				viewBox="0 0 16 16"
				style="cursor: pointer;"
			>
				<path
					fill-rule="evenodd"
					d="M2.5 11.5A.5.5 0 0 0 3 12h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5zm0-4A.5.5 0 0 0 3 8h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5zm0-4A.5.5 0 0 0 3 4h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0-.5.5z"
				/>
			</svg>
		</div>
		<div
			class={`d-flex flex-column flex-shrink-0 ${isCollapsed ? '' : 'p-3'} text-white bg-dark`}
			style="width: {isCollapsed ? '0' : '280px'}; height: 100vh; overflow: hidden; "
		>
			<a
				href="/"
				class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
				<span class="fs-4">Sidebar</span>
			</a>
			<hr />
			<ul class="nav nav-pills flex-column mb-auto">
				{#each NAVLINKS as link}
					<li class="nav-item">
						<a
							href={link.href}
							class={`nav-link d-flex align-items-center ${
								$page.url.pathname == link.href && 'active'
							}`}
							aria-current="page"
						>
							<span class="me-2">
								<svelte:component this={link.icon} />
							</span>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
			<hr />
			<div class="dropdown">
				<a
					href="#"
					class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
					id="dropdownUser1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<img
						src="https://github.com/mdo.png"
						alt=""
						width="32"
						height="32"
						class="rounded-circle me-2"
					/>
					<strong>
						{data?.user?.email}
					</strong>
				</a>
				<ul
					class="dropdown-menu dropdown-menu-dark text-small shadow"
					aria-labelledby="dropdownUser1"
				>
					{#each PROFILE_LINKS as link}
						<li><a class="dropdown-item" href={link.href}>{link.name}</a></li>
					{/each}

					<li><hr class="dropdown-divider" /></li>
					<li><a class="dropdown-item" href="#">Sign out</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.app-container {
		display: flex;
	}
	.content {
		flex-grow: 1;
		padding: 1rem;
	}
	.top-shell {
		display: flex;
		justify-content: start;
		padding: 1rem;

		color: #fff;
	}
	@media (max-width: 767px) {
		.d-flex {
			flex-direction: column;
		}
		.p-3 {
			padding: 1rem !important;
		}
		.bg-dark {
			width: 100%;
			height: auto;
		}
	}
</style>
