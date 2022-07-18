<script>
  function getYearsOld(current, locale) {
    const elapsed = current - 1212549780000;
    if (locale === "th-TH") {
      return "อายู " + Math.floor(elapsed / 31556900000) + " ปี";
    } else {
      return Math.floor(elapsed / 31556952000) + ' year old';
    }
  }

  function getGrade(current, locale) {
    const elapsed = current - 1212549780000;
    const age = Math.round(elapsed / 31556952000);
    return locale === "th-TH" ? age - 11 : " " + (age - 5);
  }
</script>

<div class="section" id="aboutme">
  <div class="sectiondivider"></div>
  <p><br/></p>
  <p><br/></p>
  <h2 class="sectiontitle">About Me</h2>
  <p class="sectiontext">
    <img src="/images/aboutme.svg" alt="aboutmeimage" width="40%" height="auto" style="float: right;"/>
    My Name is <b class="name">Thad Choyrum</b>, I am also known
    as <b class="nickname">Thad</b>, <b class="nickname">ThadDev</b>,
    &nbsp;<b class="nickname">MyNameTsThad</b> and <b class="nickname">IWant2TryHard</b>. I am
    a {getYearsOld(Date.now(), "en-US")} from Thailand,
    and is currently studying at The Princess Chulabhorn Science High School, Chonburi,
    as a {getGrade(Date.now(), "en-US")}<sup>th</sup> grade student. <br/> <br/>
    I have been coding on and off since when I was 9 years old, and have been coding since then.
    I also have a wide range of passion projects, ranging from games to websites to show for my coding skills.
    I have/had been involved in a few hackathons/competitions from different places, both online and
    offline. <br/> <br/>
    Today, I am a self-taught, full-stack programmer, Game developer and designer, capable of many, many things. I have experience with Java,
    Python, C#, Javascript, and a bit of C++ and C.
    <br/> <br/>
  </p>
</div>

<style lang="scss">
  .name {
    text-decoration: underline;
    text-decoration-color: #FFAA00;
    background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }

  .nickname {
    color: #FFAA00;
    font-weight: 300;
  }
</style>