<script>
  import AiFillApi from '../icons/AntDesignIcons/AiFillApi.svelte';
  import AiFillFacebook from '../icons/AntDesignIcons/AiFillFacebook.svelte';
  import AiFillGithub from '../icons/AntDesignIcons/AiFillGithub.svelte';
  import AiFillMail from '../icons/AntDesignIcons/AiFillMail.svelte';

  import Logo from './Logo.svelte';

  const Links = [
    {name: 'Github', link: 'https://github.com/MyNameTsThad'},
    {name: 'Hackerrank', link: 'https://www.hackerrank.com/ThadDev'},
    {name: 'LeetCode', link: 'https://leetcode.com/ThadDev'},
    {name: 'itch.io', link: 'https://mynametsthad.itch.io'},
    {name: 'Google Play', link: 'https://play.google.com/store/apps/developer?id=ThadDev'},
    {name: 'Facebook', link: 'https://www.facebook.com/thad.gaming.37'},
    {name: 'Email', link: 'mailto:real.thad.choyrum@gmail.com'}
  ];

  let y = 0;
  let scrollBounds = 150;
</script>

<svelte:window bind:scrollY="{y}"/>

<div class={y < scrollBounds ? "header-container" : "header-container-sticky"} style={y < scrollBounds ? 'top: -50px;' : 'top: 0px;'}>
  <div class="div1">
    <a href="/" style="display: flex; alignItems: center; color: white;">
      <Logo/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="headertext">ThadDev</span>
    </a>
  </div>
  <div class="div2">
    <li>
      <a class="navlink" href="#tech">Technologies</a>
    </li>
    <li>
      <a class="navlink" href="#projects">Projects</a>
    </li>
    <li>
      <a class="navlink" href="#aboutme">About Me</a>
    </li>
    <li>
      <a class="navlink" href="#accomplishments">Accomplishments</a>
    </li>
    <li>
      <a class="navlink" href="#gallery">Gallery</a>
    </li>
  </div>
  <div class="div3">
    <a class="socialicons" href={Links[0].link}>
      <AiFillGithub/>
    </a>
    <a class="socialicons" href={Links[6].link}>
      <AiFillMail/>
    </a>
    <a class="socialicons" href={Links[5].link}>
      <AiFillFacebook/>
    </a>
    <a class="socialicons" href="/api-directory/">
      <AiFillApi/>
    </a>
  </div>
</div>

<style lang="scss">
  .header-container {
    z-index: 9998;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 2rem 1rem 1rem;
    transition: top 0.3s;

    @media screen and (max-width: 640px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 60px);
      grid-column-gap: 0.5rem;
      grid-row-gap: 0.5rem;
    }
  }

  .header-container-sticky {
    z-index: 9998;
    position: fixed;
    background-color: #191919;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 2rem 1rem 1rem;
    transition: top 0.3s;

    @media screen and (max-width: 640px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 60px);
      grid-column-gap: 0.5rem;
      grid-row-gap: 0.5rem;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 640px) {
      grid-area: 1 / 1 / 2 / 3;
    }
  }

  .div2 {
    grid-area: 1 / 2 / 2 / 5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 1156px) {
      display: none;
      grid-area: 2 / 2 / 3 / 5;
    }
  }

  .div3 {
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 640px) {
      align-items: center;
      grid-area: 1 / 4 / 2 / 6;
    }
  }

  .headertext {
    background: linear-gradient(89.97deg, #ffaa00 1.84%, #ff8800 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: bold;
  }

  .navlink {
    font-size: 16px;
    font-size-adjust: 0.55;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;

    &:hover {
      font-size: 16.5px;
      color: #ffaa00;
      opacity: 1;
      cursor: pointer;
    }

    @media screen and (max-width: 1156px) {
      font-size: 2rem;

      &:hover {
        font-size: 16.5px;
        color: #ffaa00;
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  .socialicons {
    transition: 0.2s ease;
    color: white;
    border-radius: 50px;
    padding: 12px;
    width: 60px;
    height: 60px;

    &:hover {
      color: #ff8800;
      background-color: #1f1f1f;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
</style>
