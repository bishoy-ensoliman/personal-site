<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div id="Contact" class="section">
	<div class="wrapper">
		<div class="info-center section-info">
			<div class="title">Common Questions</div>
			<h2 class="marked-info-heading">Let&#x27;s Work Together</h2>
			<div class="separator" />
		</div>
		<div data-w-id="17fa842d-3220-2cdb-dc22-aab4a789c852" class="contact">
			<div class="w-form">
				<form
					id="email-form"
					name="email-form"
					data-name="Email Form"
					class="contact-form"
					method="POST"
					action="?/sendEmail"
					use:enhance={({ formElement, formData, action, cancel, submitter }) => {
						return async ({ result, update }) => {
							if (result?.type == 'success' && result?.data?.success) {
								form = { success: true };
							} else {
								form = { success: false };
							}
							update();
						};
					}}
				>
					<div class="form-item">
						<label for="Contact-Name" class="form-label">Name *</label><input
							type="text"
							class="input w-input"
							maxlength="256"
							name="Contact-Name"
							data-name="Contact Name"
							placeholder="Your name"
							id="Contact-Name"
							required
						/>
					</div>
					<div class="form-item">
						<label for="Contact-Email" class="form-label">Email *</label><input
							type="email"
							class="input w-input"
							maxlength="256"
							name="Contact-Email"
							data-name="Contact Email"
							placeholder="Contact Email"
							id="Contact-Email"
							required
						/>
					</div>
					<div class="form-item">
						<label for="Contact-Type" class="form-label">Project Type</label>
						<div class="select-wrapper">
							<select
								id="Contact-Type"
								name="Contact-Type"
								data-name="Contact Type"
								class="select w-select"
							>
								<option value="Website">Website</option>
								<option value="Embedded">Embedded</option>
								<option value="Aerospace">Aerospace</option>
								<option value="Automotive">Automotive</option>
								<option value="Mechatronics">Mechatronics</option>
								<option value="System Design">System Design</option>
								<option value="Automatic Control">Automatic Control</option>
							</select>
						</div>
					</div>
					<div class="form-item">
						<label for="Contact-Budget" class="form-label">Budget</label>
						<div class="select-wrapper">
							<select
								id="Contact-Budget"
								name="Contact-Budget"
								data-name="Contact Budget"
								class="select w-select"
							>
								<option value="€2,000 - €5,000">€2,000 - €5,000</option>
								<option value="€5,000 - €10,000">€5,000 - €10,000</option>
								<option value="€10,000+">€10,000+</option>
							</select>
						</div>
					</div>
					<div id="w-node-_1f1ff01b-50be-5a1f-2058-5ed08abfe813-cef63d42" class="form-item">
						<label for="Contact-Message" class="form-label">Message *</label><textarea
							id="Contact-Message"
							name="Contact-Message"
							placeholder="Describe your project..."
							maxlength="50000"
							data-name="Contact Message"
							required
							class="input text-area w-input"
						/>
					</div>
					<input
						type="submit"
						value="Submit Message"
						data-wait="Please wait..."
						id="w-node-_1f1ff01b-50be-5a1f-2058-5ed08abfe817-cef63d42"
						class="button w-button"
					/>
				</form>
				{#if form?.success}
					<div class="form-success w-form-done">
						<div>Thank you! Your submission has been received!</div>
					</div>
				{:else if form}
					<div class="error w-form-fail">
						<div>Oops! Something went wrong while submitting the form.</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
</style>
