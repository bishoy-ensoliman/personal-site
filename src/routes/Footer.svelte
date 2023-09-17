<script>
	import instagram_white from '$lib/images/instagram-white.svg';
	import github_white from '$lib/images/github_white.svg';
	import linkedin_white from '$lib/images/linkedin_white.svg';
	const year = new Date().getFullYear();
</script>

<div class="footer-section">
	<div class="wrapper">
		<div class="footer">
			<div class="footer-block">
				<div class="footer-contact-text">Say Hi</div>
				<a href="mailto:contact@bishoysoliman.com" class="footer-email">contact@bishoysoliman.com</a
				>
			</div>
			<div class="footer-block second">
				<div class="social-buttons">
					<a
						href="https://www.instagram.com/bishoy.ensoliman/"
						target="_blank"
						class="social-button instagram-color w-inline-block"
						><img src={instagram_white} loading="lazy" alt="IG" /></a
					>
					<a
						href="https://www.linkedin.com/in/bishoy-soliman"
						target="_blank"
						class="social-button instagram-color w-inline-block"
						><img src={linkedin_white} loading="lazy" alt="LinkedIn" /></a
					>
					<a
						href="https://github.com/bishoy-ensoliman"
						target="_blank"
						class="social-button instagram-color w-inline-block"
						><img src={github_white} loading="lazy" alt="Github" /></a
					>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div>
			© {year}, <span class="footer-bottom-link">Bishoy Soliman</span>. All rights reserved.
		</div>
	</div>
</div>

<style>
</style>
