<script lang="ts">
	import { showToast } from '../stores/toastStore';
	import type { User } from '@prisma/client';
	import { enhance } from '$app/forms';
	export let user: User | undefined;
</script>

<div class="container rounded bg-white mt-5 mb-5">
	<div class="row">
		<div class="col-md-3 border-right">
			<div class="d-flex flex-column align-items-center text-center p-3 py-5">
				<img
					alt="dummyImage"
					class="rounded-circle mt-5"
					width="150px"
					src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
				/><span class="font-weight-bold">{user?.email}</span>
				<span> </span>
			</div>
		</div>
		<div class="col-md-5 border-right">
			<div class="p-3 py-5">
				<div class="d-flex justify-content-between align-items-center mb-3">
					<h4 class="text-right">Profile Settings</h4>
				</div>
				<form
					method="post"
					action="/authenticated/profile?/changePassword"
					use:enhance={({ formElement, formData, action, cancel, submitter }) => {
						// `formElement` is this `<form>` element
						// `formData` is its `FormData` object that's about to be submitted
						// `action` is the URL to which the form is posted
						// calling `cancel()` will prevent the submission
						// `submitter` is the `HTMLElement` that caused the form to be submitted

						return async ({ result, update }) => {
							if (result.type == 'success') {
								showToast('Success', 'Password changed successfully');
							}
							// `result` is an `ActionResult` object
							// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
						};
					}}
				>
					<div class="row mt-3">
						<div class="col-md-12">
							<label for="email" class="labels">Email</label><input
								type="email"
								class="form-control"
								placeholder="enter phone number"
								required
								value={user?.email}
								disabled
							/>
						</div>
						<div class="col-md-12">
							<label for="newPassword" class="oldPassword">New Password</label><input
								type="password"
								name="newPassword"
								class="form-control"
								placeholder="New Password"
								min={6}
							/>
						</div>
					</div>

					<div class="mt-5">
						<button class="btn btn-primary profile-button" type="submit">Change Password</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
