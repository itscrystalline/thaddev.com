<script>
	import { projects } from '../constants';

	/**
	 * @type {number}
	 */
	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<div class="section" id="projects">
	<div class="sectiondivider" />
	<br />
	<br />
	<h2 class="sectiontitle">Projects</h2>
	{#if width > 973}
		<section>
			{#each projects as { title, description, tags, source, live, id }}{/each}
		</section>
	{:else}{/if}
</div>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		padding: 3rem;
		place-items: center;
		column-gap: 2rem;
		row-gap: 3rem;

		@media screen and (max-width: 640px) {
			display: flex;
			flex-direction: column;
			padding: 2rem;
			padding-bottom: 0;
		}
	}

	.projectcard {
		transition: 0.2s ease;
		border-radius: 20px;
		box-shadow: 3px 3px 20px #0f0f0f;
		text-align: center;
		width: 400px;

		&:hover {
			box-shadow: 4px 4px 20px #0f0f0f;
			transform: scale(1.01);
		}

		@media screen and (max-width: 640px) {
			width: 100%;
		}
	}
</style>
