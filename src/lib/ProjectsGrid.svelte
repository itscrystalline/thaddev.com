<script>
  import {projects} from '../constants.js';
</script>


<section>
  {#each projects as {title, description, tags, source, live, id}}
    <div class="projectcard">
      <p><br/></p>
      <div class="titlecontent">
        <h3 class="headerthree title">
          <h3 style="font-size: 3rem;">{title}</h3>
          <hr class="hr"/>
        </h3>
      </div>
      <p>{description}<br/></p>
      <div>
        <div class="titlecontent">Stack</div>
        <ul class="taglist">
          {#each tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      </div>
      <ul class="utilitylist">
        {#if source !== ""}
          <a href={source}>Code</a>
        {/if}
        {#if live !== ""}
          <a href={live}>Live</a>
        {/if}
      </ul>
    </div>
  {/each}
</section>

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
      padding: 2rem 2rem 0;
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

  .titlecontent {
    font-size: medium;
    text-align: center;
    z-index: 20;
    width: 100%;
    font-weight: bold;
    align-items: center;
    margin: auto;
    padding: 2rem;
  }

  .headerthree {
    font-weight: bold;
    color: #bbbbbb;
    padding: .5rem 0;
    font-size: 2rem;
    width: 100%;

    .title {
      font-size: 3rem;
    }
  }

  .hr {
    width: 100px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #ffaa00;
  }

  .vr {
    width: 3px;
    height: 100px;
    margin: auto;
    border: 10px #1f1f1f;
    background: #ffaa00;
    display: flex;
  }

  p {
    width: 100%;
    font-size: 16px;
    padding: 0 50px;
    color: #e4e6e7;
    line-height: 24px;
    text-align: center;
    margin: auto;

    @media screen and (max-width: 640px) {
      padding: .3rem
    }
  }

  .taglist {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
  }

  .utilitylist {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
  }

  li {
    color: #d8bfbf;
    font-size: 1.5rem;
  }

  a {
    color: #d2d2d2;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem 1.5rem;
    background: #1279B3;
    border-radius: 15px;
    transition: 0.5s;

    &:hover {
      background: #0DA9FF;
      font-weight: bold;
    }
  }
</style>
