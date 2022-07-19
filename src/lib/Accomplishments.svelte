<script>
  import {Links} from "../constants.js";
  import AiFillStar from '../icons/AntDesignIcons/AiFillStar.svelte';
  import axios from 'axios';

  const router = {
    locale: "en-US"
  }

  async function getStats() {
    return await axios.get('https://thaddev.com/api-v1/codingstats/get');
  }

  function commaize(num) {
    //comma every 3 digits
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getEnding(num) {
    if (String(num).slice(-1) === "1") {
      return "st";
    } else if (String(num).slice(-1) === "2") {
      return "nd";
    } else if (String(num).slice(-1) === "3") {
      return "rd";
    } else {
      return "th";
    }
  }

  const stats = getStats();

  const github = Links[0].link;
  const hackerrank = Links[1].link;
  const leetCode = Links[2].link;
  const itch = Links[3].link;
  const googlePlay = Links[4].link;
</script>

<div class="section" id="accomplishments">
  <div class="sectiondivider"></div>
  <p><br/></p>
  <p><br/></p>
  <h2 class="sectiontitle">Statistics & Accomplishments</h2>
  <h3 class="title">
    <a href={github}>Github</a>
  </h3>
  {#await stats}
    <div class="boxes">
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Followers</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Projects</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...
            <AiFillStar size="2rem"/>
          </h5>
          <p class="boxtext">Stars</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Commits</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Pull Requests</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Repositories Contributed to</p>
        </div>
      </a>
    </div>
    <h3 class="title">
      <a href={hackerrank}>HackerRank</a>
    </h3>
    <div class="boxes">
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Badges</p>
        </div>
      </a>
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Verified Skills</p>
        </div>
      </a>
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Questions Completed</p>
        </div>
      </a>
    </div>
    <h4 class="title">
      <a href={hackerrank}>Certificates</a>
    </h4>
    <div class="imageboxes">
      <a href="https://www.hackerrank.com/certificates/671d5ccbdfc6">
        <div class="boxhackerrankimage">
          <img src="/images/js_basic.jpg" alt="javascript (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">JavaScript (Basic)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/6abda86bcec5">
        <div class="boxhackerrankimage">
          <img src="/images/py_basic.jpg" alt="python (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">Python (Basic)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/2353f0513d55">
        <div class="boxhackerrankimage">
          <img src="/images/cs_basic.jpg" alt="csharp (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">C# (Basic)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/c34b530f2385">
        <div class="boxhackerrankimage">
          <img src="/images/js_int.jpg" alt="javascript (intermediate)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">JavaScript (Intermediate)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/f161d7813611">
        <div class="boxhackerrankimage">
          <img src="/images/java_basic.jpg" alt="java (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">Java (Basic)</p>
        </div>
      </a>
    </div>
    <h3 class="title">
      <a href={leetCode}>LeetCode</a>
    </h3>
    <div class="boxes">
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...<sup>th</sup></h5>
          <p class="boxtext">Rank</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...<sup>th</sup></h5>
          <p class="boxtext">Contest Rating</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Contest Global Ranking</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Contests Attended</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">Problems Solved</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">Loading...</h5>
          <p class="boxtext">In Top Contest Ranking</p>
        </div>
      </a>
    </div>
  {:then stat}
    <div class="boxes">
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{stat.data.githubStats.followers}</h5>
          <p class="boxtext">Followers</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{stat.data.githubStats.projects}</h5>
          <p class="boxtext">Projects</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{stat.data.githubStats.stars}
            <AiFillStar size="2rem"/>
          </h5>
          <p class="boxtext">Stars</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{commaize(stat.data.githubStats.commits)}</h5>
          <p class="boxtext">Commits</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{stat.data.githubStats.pulls}</h5>
          <p class="boxtext">Pull Requests</p>
        </div>
      </a>
      <a href={github}>
        <div class="box">
          <h5 class="boxnum">{stat.data.githubStats.contribs}</h5>
          <p class="boxtext">Repositories Contributed to</p>
        </div>
      </a>
    </div>
    <h3 class="title">
      <a href={hackerrank}>HackerRank</a>
    </h3>
    <div class="boxes">
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">{stat.data.hackerrankStats.badges}</h5>
          <p class="boxtext">Badges</p>
        </div>
      </a>
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">{stat.data.hackerrankStats.skills}</h5>
          <p class="boxtext">Verified Skills</p>
        </div>
      </a>
      <a href={hackerrank}>
        <div class="boxhackerrank">
          <h5 class="boxnum">{stat.data.hackerrankStats.questions}</h5>
          <p class="boxtext">Questions Completed</p>
        </div>
      </a>
    </div>
    <h4 class="title">
      <a href={hackerrank}>Certificates</a>
    </h4>
    <div class="imageboxes">
      <a href="https://www.hackerrank.com/certificates/671d5ccbdfc6">
        <div class="boxhackerrankimage">
          <img src="/images/js_basic.jpg" alt="javascript (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">JavaScript (Basic)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/6abda86bcec5">
        <div class="boxhackerrankimage">
          <img src="/images/py_basic.jpg" alt="python (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">Python (Basic)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/2353f0513d55">
        <div class="boxhackerrankimage">
          <img src="/images/cs_basic.jpg" alt="csharp (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">C# (Basic)</p>
        </div>
      </a>
    </div>
    <div class="imageboxes">
      <a href="https://www.hackerrank.com/certificates/2353f0513d55">
        <div class="boxhackerrankimage">
          <img src="/images/js_int.jpg" alt="javascript (intermediate)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">JavaScript (Intermediate)</p>
        </div>
      </a>
      <a href="https://www.hackerrank.com/certificates/f161d7813611">
        <div class="boxhackerrankimage">
          <img src="/images/java_basic.jpg" alt="java (basic)" width="100%" height="80%" loading="lazy"/>
          <p class="boxtext image">Java (Basic)</p>
        </div>
      </a>
    </div>
    <h3 class="title">
      <a href={leetCode}>LeetCode</a>
    </h3>
    <div class="boxes">
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{commaize(stat.data.leetcodeStats.rank)}
            <sup>{getEnding(stat.data.leetcodeStats.rank)}</sup></h5>
          <p class="boxtext">Rank</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{commaize(stat.data.leetcodeStats.contestRating)}
            <sup>{getEnding(stat.data.leetcodeStats.contestRating)}</sup></h5>
          <p class="boxtext">Contest Rating</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{commaize(stat.data.leetcodeStats.contestGlobalRanking)}</h5>
          <p class="boxtext">Contest Global Ranking</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{stat.data.leetcodeStats.contests}</h5>
          <p class="boxtext">Contests Attended</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{stat.data.leetcodeStats.problems}</h5>
          <p class="boxtext">Problems Solved</p>
        </div>
      </a>
      <a href={leetCode}>
        <div class="boxleetcode">
          <h5 class="boxnum">{stat.data.leetcodeStats.topContestRanking}%</h5>
          <p class="boxtext">In Top Contest Ranking</p>
        </div>
      </a>
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<style lang="scss">
  .boxes {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 12px 0 20px;
    @media screen and (max-width: 768px) {
      gap: 16px;
      margin: 20px 0 32px;
      /*grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));*/
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      max-width: 500px;
      margin: 24px auto;
    }
  }

  .box {
    background: #303030;
    border-radius: 12px;
    height: 144px;
    padding: 24px;
    @media screen and (max-width: 1024px) {
      height: 210px;
    }
    @media screen and (max-width: 768px) {
      height: 135px;
      padding: 16px;
    }
    @media screen and (max-width: 640px) {
      height: 110px;
      padding: 12px;

      &:nth-child(2n) {
        grid-row: 2;
      }
    }
  }

  .boxhackerrank {
    background: #22934b;
    border-radius: 12px;
    height: 144px;
    padding: 24px;
    @media screen and (max-width: 1024px) {
      height: 210px;
    }
    @media screen and (max-width: 768px) {
      height: 135px;
      padding: 16px;
    }
    @media screen and (max-width: 640px) {
      height: 110px;
      padding: 12px;

      &:nth-child(2n) {
        grid-row: 2;
      }
    }
  }

  .boxhackerrankimage {
    background: #22934b;
    border-radius: 12px;
    display: compact;
    padding: 24px;
    align-items: center;
    @media screen and (max-width: 640px) {
      &:nth-child(2n) {
        grid-row: 2;
      }
    }
  }

  .boxleetcode {
    background: #ad6800;
    border-radius: 12px;
    height: 144px;
    padding: 24px;
    @media screen and (max-width: 1024px) {
      height: 210px;
    }
    @media screen and (max-width: 768px) {
      height: 135px;
      padding: 16px;
    }
    @media screen and (max-width: 640px) {
      height: 110px;
      padding: 12px;

      &:nth-child(2n) {
        grid-row: 2;
      }
    }
  }

  .boxnum {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 32px;
    }
    @media screen and (max-width: 640px) {
      font-size: 24px;
      line-height: 26px;
    }
  }

  .boxtext {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 20px;
    };
    @media screen and (max-width: 640px) {
      font-size: 18px;
      line-height: 18px;
    }

    .image {
      font-weight: 500;
      font-size: 24px;
      color: rgba(255, 255, 255, 1);
      margin-top: 10px;
      @media screen and (max-width: 768px) {
        font-size: 22px;
        line-height: 22px;
      }
      @media screen and (max-width: 640px) {
        font-size: 20px;
        line-height: 18px;
      }
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
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>