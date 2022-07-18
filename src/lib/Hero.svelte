<div class="section row nopadding" id="hero">
  <div class="leftsection">
    <h2 class="sectiontitle main">
      Welcome To&nbsp; <br/>
      <span class="boldheader">ThadDev</span>!
    </h2>
    <p class="sectiontext">
      A self-taught, full-stack developer. Has been learning to code since 9 years old.
    </p>
    <a href="#aboutme">
      <button class="button">About Me</button>
    </a>
    <p><br /></p>
  </div>
</div>

<style lang="scss">
  @import '$lib/../src/styles/buttons.scss';

  .leftsection {
    width: 100%;
    @media screen and (max-width: 640px) {
      width: 80%;
      display: flex;
      flex-direction: column;

      margin: 0 auto;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;

      margin: 0 auto;
    }
  }

  .boldheader {
    text-decoration: underline;
    text-decoration-color: #ff8800;
    text-decoration-thickness: 4px;
    text-decoration-style: double;
    background: linear-gradient(89.97deg, #ffaa00 1.84%, #ff8800 102.67%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 66px;
    line-height: 105px;

    @media screen and (max-width: 768px) {
      font-size: 48px;
      line-height: 28px;
      margin-bottom: 12px;
      padding: 0;
    }

    @media screen and (max-width: 640px) {
      font-size: 32px;
      line-height: 40px;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 8px;
      padding: 0;
      max-width: 100%;
    }
  }
</style>
