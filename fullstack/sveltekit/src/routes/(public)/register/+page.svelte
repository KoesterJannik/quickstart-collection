<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	export let form;
</script>

<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
	<div class="card row col-4">
		<div class="card-body">
			<h3 class="text-center mt-0 mb-2">
				<a href="index.html" class="logo"
					><img src="assets/images/logo-light.png" height="26" alt="logo-img" /></a
				>
			</h3>
			<h5 class="ssstext-center mt-0 text-color"><b>Sign Up</b></h5>

			<form class="form-horizontal mt-3" method="post" action="?/registerUser">
				<div class="form-group mb-3">
					<div class="col-12">
						<input class="form-control" type="email" required placeholder="Email" name="email" />
					</div>
				</div>

				<div class="form-group mb-3">
					<div class="col-12">
						<input class="form-control" type="password" placeholder="Password" name="password" />
					</div>
				</div>

				<div class="form-group text-center mt-4">
					<div class="col-12">
						<button
							class="btn btn-primary btn-block btn-lg waves-effect waves-light w-100"
							type="submit">Register</button
						>
					</div>
				</div>
				{#if form?.errorMessage}<div class="alert alert-danger mt-2" role="alert">
						{form?.errorMessage}
					</div>{/if}
				{#if form?.successMessage}<div class="alert alert-success mt-2" role="alert">
						{form?.successMessage}
					</div>{/if}

				<div class="form-group mt-3 mb-0">
					<div class="col-sm-12 text-center">
						<a href="/login" class="text-color">Already have account?</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
