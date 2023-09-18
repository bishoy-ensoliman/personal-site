<script>
	import emoji_notebook from '$lib/images/emoji-notebook.png';
	import emoji_hello from '$lib/images/emoji-hello.png';
	import emoji_mailbox from '$lib/images/emoji-mailbox.png';
	import avatar from '$lib/images/bs.jpeg';
	import control from '$lib/images/control.svg';
	import plane from '$lib/images/plane.svg';
	import rocket from '$lib/images/rocket.svg';
	import pcb from '$lib/images/pcb.svg';
	import Contact from './Contact.svelte';
</script>

<div id="Intro" class="hero-section">
	<div class="hero">
		<div class="hero-promo">
			<img
				src={avatar}
				loading="lazy"
				sizes="(max-width: 479px) 80vw, (max-width: 767px) 60vw, (max-width: 991px) 48vw, 500px"
				alt=""
				class="hero-photo"
			/>
			<div class="bubble _1">
				<img src={emoji_notebook} loading="lazy" alt="" class="bubble-icon _1" />
				<div>SWE</div>
			</div>
			<div class="bubble _2">
				<img src={plane} loading="lazy" alt="" class="bubble-icon _2" />
				<img src={rocket} loading="lazy" alt="" class="bubble-icon _2" />
				<div>ASE</div>
			</div>
			<div class="bubble _3">
				<img src={pcb} loading="lazy" alt="" class="bubble-icon _3" />
				<div>Systems</div>
			</div>
			<div class="bubble _4">
				<img src={emoji_hello} loading="lazy" alt="" class="bubble-icon _4" />
				<div>Hi there!</div>
			</div>
			<div class="bubble _5">
				<img src={control} loading="lazy" alt="" class="bubble-icon _5" />
				<div>Control</div>
			</div>
			<a href="#Contact" class="bubble _6 w-inline-block"
				><img src={emoji_mailbox} loading="lazy" alt="" class="bubble-icon _6" />
				<div>
					<div class="bubble-label">Work with me</div>
					<div>Request a Quote</div>
				</div>
			</a>
		</div>
		<div class="hero-v1-angle" />
	</div>
	<div class="hero-content">
		<div class="wrapper">
			<div class="hero-info">
				<div class="title hero-title">Hi there, I&#x27;m Bishoy</div>
				<h1>
					A <strong>Computer & Systems</strong> Engineer and <strong>Aerospace</strong> Engineering Student
				</h1>
				<p class="hero-description">
					As a Senior Software Engineer at Avi Medical, I work with a team of engineers and
					healthcare professionals to develop and integrate software solutions for medical devices
					and applications. I use my skills in Full-stack Dev, and systems integration to ensure the
					quality, security, and performance of our products.
				</p>
				<p>
					I have a strong background in computer and systems engineering, with a B.Sc. and a M.Sc.
					coursework from Faculty of Engineering, Alexandria University. I have also worked in
					various industries, such as sports, movies, fitness, transportation, and health, using
					different technologies and frameworks, such as Vue.js, React, Angular, Spring-boot,
					Quarkus, and Django. I am always eager to learn new skills and challenge myself, which is
					why I am pursuing a B.Sc. in Aerospace Engineering from Technical University of Munich. My
					goal is to combine my passion for software development and aerospace engineering to create
					innovative and impactful solutions for the world.
				</p>
			</div>
			<div class="panel">
				<a href="mailto:contact@bishoysoliman.com" class="panel-contact w-inline-block">
					<div class="panel-text-label">Let’s get in touch</div>
					<div class="panel-email">contact@bishoysoliman.com</div>
				</a>
				<div class="panel-middle"><a href="#Contact" class="button hero-button w-button" /></div>
				<div class="panel-follow">
					<div class="panel-text-label">Follow me</div>
					<div class="panel-social-links">
						<a
							href="https://www.instagram.com/bishoy.ensoliman/"
							target="_blank"
							class="panel-social-link w-inline-block"
						>
							<div>IG</div>
						</a>
						<a
							href="https://www.linkedin.com/in/bishoy-soliman"
							target="_blank"
							class="panel-social-link w-inline-block"
						>
							<div>IN</div>
						</a>
						<a
							href="https://github.com/bishoy-ensoliman"
							target="_blank"
							class="panel-social-link w-inline-block"
						>
							<div>GH</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Contact form={null} />
