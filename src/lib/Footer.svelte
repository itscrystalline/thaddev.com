<script>
  import {Links} from "../constants.js";
  import AiFillHeart from '../icons/AntDesignIcons/AiFillHeart.svelte';
  import DiSvelteColor from '../icons/DevIcons/DiSvelteColor.svelte';
  import FaRaspberryPi from '../icons/FontAwesomeIcons/FaRaspberryPi.svelte';
  import FaCloudflare from '../icons/FontAwesomeIcons/FaCloudflare.svelte';
  import SiNgrok from '../icons/SimpleIcons/SiNgrok.svelte';

  /**
   * @type {number}
   */
  let width = 0;
</script>

<svelte:window bind:innerWidth={width}/>

<div class="section" id="footer">
  <section class="section-footerwrapper">
    <ul class="ul-linklist">
      <div class="div-linkcolumn">
        <h4 class="h4-linktitle">Facebook</h4>
        <a class="a-linkitem" href={Links[5].link}>Thad Choyrum</a>
      </div>
      <div class="div-linkcolumn">
        <h4 class="h4-linktitle">LINE</h4>
        <a class="a-linkitem">@Thad040608</a>
      </div>
      <div class="div-linkcolumn">
        <h4 class="h4-linktitle">Email</h4>
        <a class="a-linkitem" href={Links[6].link}>thad@thaddev.com</a>
      </div>
    </ul>
  </section>
  <div class="div-socialiconscontainer">
    <div class="div-companycontainer">
      <p class="p-slogan">
        © {new Date().getFullYear() === 2022 ? "2022" : "2022 - " + new Date().getFullYear()} | ThadDev.&nbsp;
        <a class={`a-navlink ${width < 768 ? (width < 640 ? "fourteen" : "sixteen" ) : "eighteen"}`}
           href="https://github.com/MyNameTsThad/thaddev.com/blob/master/README.md">Some
          Rights Reserved.</a>
        <br/>
        Made with
        <AiFillHeart size="2rem" color="red"/>
        using
        <DiSvelteColor size="2rem" color="teal"/>
        .
        <br/>
        Hosted on
        <FaRaspberryPi size="2rem" color="red"/>
        with
        <FaCloudflare size="2rem" color="orange"/>
        and&nbsp;
        <SiNgrok size="2rem" color="blue"/>
        .
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .section-footerwrapper {
    width: calc(100vw - 96px);
    max-width: 1040px;
    padding: 2rem 48px 40px;
    margin: 1rem auto;
    box-sizing: content-box;
    @media screen and (max-width: 640px) {
      padding: 0 16px 48px;
      width: calc(100vw - 32px);
    }
  }

  .a-linkitem {
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 16px;
    transition: .3s ease;
    position: relative;
    left: 0;

    &:hover {
      color: #fff;
      left: 6px;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
      display: flex;
    }
    @media screen and (max-width: 640px) {
      font-size: 8px;
      line-height: 14px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }
  }

  .div-socialiconscontainer {
    max-width: 1040px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    @media screen and (max-width: 640px) {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  }

  .div-companycontainer {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin-right: auto;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: baseline;
    }
    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: column;
      margin: 0 0 32px;
      align-items: center;
    }
  }

  .p-slogan {
    color: rgba(255, 255, 255, 0.5);
    min-width: 280px;
    letter-spacing: 0.02em;
    font-size: 18px;
    line-height: 30px;
    padding: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }
    @media screen and (max-width: 640px) {
      line-height: 22px;
      font-size: 14px;
      min-width: 100px;
    }
  }

  .div-socialcontainer {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      justify-content: center;
      padding-right: 16px;
      flex-wrap: wrap;
    }
  }

  .ul-linklist {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: grid;
    grid-template-columns: repeat(3, minmax(85px, 220px));
    gap: 40px;
    padding: 40px 0 28px;
    @media screen and (max-width: 1024px) {
      padding: 32px 0 16px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 32px 0 16px;
      gap: 16px;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      padding: 32px 4px 16px;
      gap: 5px;
    }
  }

  .div-linkcolumn {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    width: 100%;
  }

  .h4-linktitle {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 16px;
    @media screen and (max-width: 640px) {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 8px;
    }
  }

  .a-navlink {
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

    .fourteen {
      font-size: 14px;
    }

    .sixteen {
      font-size: 16px;
    }

    .eighteen {
      font-size: 18px;
    }
  }

  .a-socialicons {
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