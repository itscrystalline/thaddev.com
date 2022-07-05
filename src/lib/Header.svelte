<script>
    import Logo from "./Logo.svelte";
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
    import MdMail from 'svelte-icons/md/MdMail.svelte';
    import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
    import FaPlug from 'svelte-icons/fa/FaPlug.svelte'
    const Links = [
        {name: 'Github', link: 'https://github.com/MyNameTsThad'},
        {name: 'Hackerrank', link: 'https://www.hackerrank.com/ThadDev'},
        {name: 'LeetCode', link: 'https://leetcode.com/ThadDev'},
        {name: 'itch.io', link: 'https://mynametsthad.itch.io'},
        {name: 'Google Play', link: 'https://play.google.com/store/apps/developer?id=ThadDev'},
        {name: 'Facebook', link: 'https://www.facebook.com/thad.gaming.37'},
        {name: 'Email', link: 'mailto:real.thad.choyrum@gmail.com'}
    ];
</script>

<style lang="scss">
    .header-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 2rem;
        padding: 1rem;
        padding-top: 2rem;

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
        background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2rem;
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

<div class="header-container">
    <div class="div1">
        <a href="/" style="display: flex; alignItems: center; color: white;">
            <Logo />&nbsp;&nbsp;&nbsp;&nbsp;<span class="headertext">ThadDev</span>
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
        <a class="socialicons" href={Links[0].link}><DiGithubBadge/></a>
        <a class="socialicons" href={Links[6].link}><MdMail /></a>
        <a class="socialicons" href={Links[5].link}><FaFacebook /></a>
        <a class="socialicons" href="/api-directory/"><FaPlug /></a>
    </div>
 </div>
