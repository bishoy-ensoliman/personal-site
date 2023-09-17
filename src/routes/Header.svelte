<script>
	import logo from '$lib/images/Logo.png';
	import cv_file from '$lib/data/Bishoy_Soliman.pdf';
</script>

<div
	data-collapse="medium"
	data-animation="over-right"
	data-duration="400"
	data-doc-height="1"
	role="banner"
	class="nav-bar w-nav"
>
	<a href="/" class="logo-link nav-logo w-nav-brand">
		<div class="logo">
			<img src={logo} alt="BS" class="logo-image" />
		</div>
		<div class="logo-text">B. Soliman</div>
	</a>
	<nav class="nav-menu w-nav-menu nav">
		<!-- <a href="#Works" class="nav-link w-nav-link">Works</a>
		<a href="#Experience" class="nav-link w-nav-link">Experience</a>
		<a href="#Education" class="nav-link w-nav-link">Education</a>
		<a href="#FAQ" class="nav-link w-nav-link">FAQ</a> -->
		<a href="#Contact" class="nav-link w-nav-link">Contact</a>
		<!--<div data-hover="1" data-delay="300" class="nav-dropdown w-dropdown">
			<div class="nav-link nav-link-dropdown w-dropdown-toggle">
				<div>More</div>
			</div>
			<nav class="nav-dropdown-list w-dropdown-list">
				<a href="/template/style-guide" class="nav-dropdown-link w-dropdown-link">Style Guide</a><a
					href="/template/licenses"
					class="nav-dropdown-link w-dropdown-link">Licenses</a
				><a href="/template/changelog" class="nav-dropdown-link w-dropdown-link">Changelog</a>
			</nav>
		</div> -->
	</nav>
	<div class="nav-right">
		<a target="_blank" href={cv_file} class="button nav-button w-button">Download CV</a>
	</div>
	<div class="menu-button w-clearfix w-nav-button">
		<div class="menu-icon">
			<div class="menu-icon-top" />
			<div class="menu-icon-bottom" />
		</div>
	</div>
</div>
<div class="back-to-top">
	<div id="Top" class="top" />
	<a href="#Top" class="top-button w-inline-block">
		<div class="top-button-icon w-icon-dropdown-toggle" />
	</a>
</div>

<style>
	.logo-link {
		-ms-grid-column-span: 1;
		grid-column-end: 2;
		-ms-grid-column: 1;
		grid-column-start: 1;
		-ms-grid-row-span: 1;
		grid-row-end: 2;
		-ms-grid-row: 1;
		grid-row-start: 1;
		-ms-grid-column-align: start;
		justify-self: start;
	}

	.nav {
		-ms-grid-row-align: center;
		align-self: center;
		-ms-grid-column-align: center;
		justify-self: center;
		-ms-grid-column-span: 1;
		grid-column-end: 3;
		-ms-grid-column: 2;
		grid-column-start: 2;
		-ms-grid-row-span: 1;
		grid-row-end: 2;
		-ms-grid-row: 1;
		grid-row-start: 1;
	}
</style>
