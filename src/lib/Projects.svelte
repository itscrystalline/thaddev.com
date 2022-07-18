<script>
  import { projects } from '../constants.js';
  import ProjectsGrid from "./ProjectsGrid.svelte";
  import FaChevronDown from '../icons/FontAwesomeIcons/FaChevronDown.svelte';
  import { CollapsibleCard } from 'svelte-collapsible'

  /**
   * @type {number}
   */
  let width = 0;

  const duration = 0.4;
  const easing = 'ease-in-out';
</script>

<svelte:window bind:innerWidth={width}/>

<div class="section" id="projects">
  <div class="sectiondivider"/>
  <p><br /></p>
  <p><br /></p>
  {#if width > 973}
    <h2 class="sectiontitle">Projects</h2>
    <ProjectsGrid />
  {:else}
    <div class="collapsablebackground">
      <CollapsibleCard { duration } { easing } >
        <h2 slot='header' class="sectiontitle" style={{cursor: "pointer"}}>Projects&nbsp;&nbsp;&nbsp;<FaChevronDown /></h2>
        <div slot='body'>
          <ProjectsGrid />
        </div>
      </CollapsibleCard>
    </div>
  {/if}
</div>

<style lang="scss">
  .collapsablebackground {
    border-radius: 25px;
    background: #252525;
    padding: 20px;
    transition: 0.25s ease-in-out;

    &:hover {
      background: #272727;
    }

    &:active {
      background: #2a2a2a;
    }
  }
</style>
