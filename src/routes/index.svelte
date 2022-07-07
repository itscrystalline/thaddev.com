<script>
	import BgAnimation from '$lib/BGAnimation.svelte';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import Technologies from '$lib/Technologies.svelte';
</script>

<svelte:head>
	<meta content="ThadDev's site" property="og:title" />
	<meta content="ThadDev. Full stack developer." property="og:description" />
	<meta content="https://thaddev.com" property="og:url" />
	<meta content="https://thaddev.com/images/logo.svg" property="og:image" />
	<meta content="#FFAA00" data-react-helmet="true" name="theme-color" />
	<link
		rel="preconnect"
		href="/fonts/JetBrainsMono-Regular.woff2"
		as="font"
		type="font/woff2"
		crossOrigin=""
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Niramit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
	<title>ThadDev's Site</title>
</svelte:head>

<div class="container">
	<Header />
	<div class="section-grid">
		<Hero />
		<BgAnimation />
	</div>
	<Technologies />
</div>

<style lang="scss">
	.container {
		max-width: 1280px;
		width: 100%;
		margin: auto;
	}

	.section-grid {
		display: grid;
		flex-direction: column;
		padding: 32px 48px 0;
		margin: 0 auto;
		max-width: 1140px;
		box-sizing: content-box;
		position: relative;
		overflow: hidden;
		grid-template-columns: 1fr 1fr;

		@media screen and (max-width: 768px) {
			padding: 24px 48px 0;
			flex-direction: column;
		}

		@media screen and (max-width: 640px) {
			padding: 16px 16px 0;

			width: calc(100vw - 32px);
			flex-direction: column;
		}
	}
</style>
