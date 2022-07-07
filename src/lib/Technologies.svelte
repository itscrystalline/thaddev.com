<script>
	import DiSvelte from '../icons/DevIcons/DiSvelte.svelte';
	import BiServer from '../icons/BoxIcons/BiServer.svelte';
	import AiFillApi from '../icons/AntDesignIcons/AiFillApi.svelte';
	import SiMaterialdesignicons from '../icons/SimpleIcons/SiMaterialdesignicons.svelte';
	import MdVideogameAsset from '../icons/MaterialDesignIcons/MdVideogameAsset.svelte';
	import VscSymbolMisc from '../icons/VSCodeIcons/VscSymbolMisc.svelte';
</script>

<div class="section" id="tech">
	<div class="sectiondivider" />
	<br />
	<br />
	<h2 class="sectiontitle">Technologies</h2>
	<p class="sectiontext">I have experience of working with the following technologies:</p>
	<ul>
		<li>
			<DiSvelte />
			<div class="listcontainer">
				<h4>Front-End</h4>
				<p>Experience with Svelte, React.js, Markdown and JavaFX.</p>
			</div>
		</li>
		<li>
			<BiServer />
			<div class="listcontainer">
				<h4>Back-End</h4>
				<p>Experience with building Web servers using the Spring Boot framework using Java.</p>
			</div>
		</li>
		<li>
			<AiFillApi />
			<div class="listcontainer">
				<h4>API</h4>
				<p>Experience with building APIs using Java & the Spring Boot framework.</p>
			</div>
		</li>
		<li>
			<SiMaterialdesignicons />
			<div class="listcontainer">
				<h4>UI/UX and Asset Design</h4>
				<p>
					Experience with creating and designing user interfaces with tools like Figma and the
					JavaFX SceneBuilder. Has created multiple assets for My Games and textures for Minecraft
					mods, using tools like GIMP and Paint.net.
				</p>
			</div>
		</li>
		<li>
			<MdVideogameAsset />
			<div class="listcontainer">
				<h4>Games & Game Development</h4>
				<p>
					Experience with designing and creating games using the Unity Game Engine, with the use of
					C#. With two currently live on the Google Play Store, and one for a game jam on itch.io.
					Also has some experience with Minecraft Modding using the Forge API and Fabric API, and
					has worked both alone and as a community on Minecraft Mods.
				</p>
			</div>
		</li>
		<li>
			<VscSymbolMisc />
			<div class="listcontainer">
				<h4>Miscellaneous</h4>
				<p>
					Has experienced with creating discord bots using Java with the JDA library, and using
					JavaScript with the Discord.js library. Has also worked with Python for creating scripts
					for housekeeping tasks, and a bit of C and C++ for a school project on home automation
					with Arduino.
				</p>
			</div>
		</li>
	</ul>
</div>

<style lang="scss">
	ul {
		list-style-type: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
		margin: 3rem 0;

		@media screen and (max-width: 1024px) {
			margin: 64px 0;
		}

		@media screen and (max-width: 768px) {
			margin: 64px 0;
			gap: 24px;
		}

		@media screen and (max-width: 640px) {
			display: flex;
			flex-direction: column;
			margin: 32px 0;
		}
	}

	li {
		max-width: 320px;
		display: flex;
		flex-direction: column;

		@media screen and (max-width: 768px) {
			max-width: 203px;
		}

		@media screen and (max-width: 640px) {
			margin-bottom: 14px;
			max-width: 320px;
			flex-direction: row;
		}
	}

	h4 {
		font-size-adjust: 0.534;
		font-family: Plus Jakarta Sans, sans-serif, Niramit, sans-serif;
		font-weight: 700;
		font-size: 28px;
		line-height: 32px;
		letter-spacing: 0.02em;
		color: #ffffff;
		margin-bottom: 8px;

		@media screen and (max-width: 768px) {
			font-size: 24px;
			line-height: 28px;
		}

		@media screen and (max-width: 640px) {
			font-size: 20px;
			line-height: 28px;
			letter-spacing: 0.02em;
			margin-bottom: 4px;
		}
	}

	p {
		font-size: 18px;
		line-height: 30px;
		color: rgba(255, 255, 255, 0.75);

		@media screen and (max-width: 768px) {
			font-size: 16px;
			line-height: 28px;
		}

		@media screen and (max-width: 640px) {
			font-size: 14px;
			line-height: 22px;
		}
	}

	.listcontainer {
		display: flex;
		flex-direction: column;

		@media screen and (max-width: 640px) {
			display: flex;
			margin-left: 18px;
		}
	}
</style>
