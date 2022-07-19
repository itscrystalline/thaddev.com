<script>
  import FaChevronDown from '../icons/FontAwesomeIcons/FaChevronDown.svelte';
  import {CollapsibleCard} from 'svelte-collapsible'

  /**
   * @type {number}
   */
  let width = 0;

  const duration = 0.4;
  const easing = 'ease-in-out';
</script>

<svelte:window bind:innerWidth={width}/>

<div class="section" id="gallery">
  <div class="sectiondivider"/>
  <p><br/></p>
  <p><br/></p>
  <div class="collapsablebackground">
    <CollapsibleCard { duration } { easing }>
      <h2 slot='header' class="sectiontitle" style={{cursor: "pointer"}}>Events & Development&nbsp;&nbsp;&nbsp;<FaChevronDown/>
      </h2>
      <div slot='body'>
        <h4 class="title">Thailand TopCoder Competition by GetLinks (2020)</h4>
        <div class="imageboxes">
          <div class="boximage">
            <iframe width={560 * (width >= 768 ? 1 : (parseFloat(width) / 768))} height={315 * (width >= 768 ? 1 : (parseFloat(width) / 768))} src="https://www.youtube.com/embed/Xnjib-OsM5k" loading="lazy"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <p class="imageboxtext">Video from the "Lightning talk" where, I was the youngest person who has top 100 in
              the leaderboard.</p>
          </div>
        </div>
        <div class="imageboxes">
          <div class="boximage">
            <img src="/images/getlinks2.jpg" alt="getlinks2" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">Video from the "Lightning talk" where, I was the youngest person who has top 100 in
              the leaderboard.</p>
          </div>
          <div class="boximage">
            <img src="/images/getlinks3.jpg" alt="getlinks3" width="100%" height="100%" loading="lazy"/>
          </div>
          <div class="boximage">
            <img src="/images/getlinks4.jpg" alt="getlinks4" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">Other shots from the event.</p>
          </div>
          <div class="boximage">
            <img src="/images/getlinks5.jpg" alt="getlinks5" width="100%" height="100%" loading="lazy"/>
          </div>
          <div class="boximage">
            <img src="/images/getlinks6.jpg" alt="getlinks6" width="100%" height="100%" loading="lazy"/>
          </div>
        </div>
        <hr class="hr"/>
        <h4 class="title">VERSO HACK 2022</h4>
        <div class="imageboxes">
          <div class="boximage">
            <img src="/images/versocert.jpg" alt="verso certificate" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">VERSO HACK 2022 Certificate</p>
          </div>
          <div class="boximage">
            <img src="/images/verso1.jpg" alt="verso1" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">Me working with teammates.</p>
          </div>
          <div class="boximage">
            <img src="/images/verso3.jpg" alt="verso2" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">Me working on the app, with me leading the development.</p>
          </div>
          <div class="boximage">
            <img src="/images/verso4.jpg" alt="verso3" width="100%" height="100%" loading="lazy"/>
            <p class="imageboxtext">Me preparing for the final pitch.</p>
          </div>
        </div>
        <hr class="hr"/>
        <h4 class="title">Games</h4>
        <div class="imageboxes">
          <div class="boximage">
            <iframe width={560 * (width >= 768 ? 1 : (parseFloat(width) / 768))} height={315 * (width >= 768 ? 1 : (parseFloat(width) / 768))} src="https://www.youtube.com/embed/p9gJwQmi5VA" loading="lazy"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <p class="imageboxtext">BattleParkour Trailer</p>
          </div>
        </div>
        <hr class="hr"/>
        <div class="imageboxes">
          <div class="boximage">
            <iframe width={560 * (width >= 768 ? 1 : (parseFloat(width) / 768))} height={315 * (width >= 768 ? 1 : (parseFloat(width) / 768))} src="https://www.youtube.com/embed/PGnKGzeVHpc" loading="lazy"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <p class="imageboxtext">Tree Game Demo</p>
          </div>
        </div>
      </div>
    </CollapsibleCard>
  </div>
</div>

<style lang="scss">
  .boximage {
    background: #076bff;
    border-radius: 12px;
    display: compact;
    padding: 24px;
    align-items: center;
    @media screen and (max-width: 640px) {
      &:nth-child(2n) {
        grid-row: 1;
      }
    }
    margin-bottom: 12px;
  }

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

  .imageboxes {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 12px 0 20px;
    @media screen and (max-width: 768px) {
      gap: 16px;
      margin: 12px 0 20px;
      display: contents;
    }
  }

  .imageboxtext {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 1);
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 22px;
    };
    @media screen and (max-width: 640px) {
      font-size: 20px;
      line-height: 18px;
    }
  }

  .hr {
    width: 100px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #ffaa00;
  }
</style>