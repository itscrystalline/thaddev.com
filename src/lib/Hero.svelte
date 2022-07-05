<script>

</script>

<style lang="scss">
    .hero-section {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0 auto;
        max-width: 1140px;
        box-sizing: content-box;
        position: relative;
        overflow: hidden;
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 768px) {
            padding: 24px 48px 0;
            flex-direction: column;
        }

        @media screen and (max-width: 640px) {
            padding: 0;

            width: calc(100vw - 32px);
            flex-direction: column;
        }
    }

    .leftsection{
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
    
    .sectiontitle {
        font-family: Plus Jakarta Sans, sans-serif, Niramit, sans-serif;
        font-size-adjust: 0.534;
        font-weight: 800;
        font-size: 65px;
        line-height: 82px;
        width: auto;
        max-width: 90%;
        background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 16px;
        padding: 58px 0 16px;

        @media screen and (max-width: 768px) {
            font-size: 56px;
            line-height: 46px;
            margin-bottom: 12px;
            padding: 40px 0 12px;
        }

        @media screen and (max-width: 640px) {
            font-size: 32px;
            line-height: 40px;
            font-size: 28px;
            line-height: 42px;
            margin-bottom: 8px;
            padding: 16px 0 8px;
            max-width: 90%;
        }
    }

    .boldheader {
        text-decoration: underline;
        text-decoration-color: #FF8800;
        text-decoration-thickness: 4px;
        text-decoration-style: double;
        background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
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

    .sectiontext {
        font-size-adjust: 0.534;
        font-family: Plus Jakarta Sans, sans-serif, Niramit, sans-serif;
        max-width: 1140px;
        font-size: 24px;
        line-height: 40px;
        font-weight: 300;
        padding-bottom: 3.6rem;
        color: rgba(255, 255, 255, 0.5);


        @media screen and (max-width: 768px) {
            max-width: 670px;
            font-size: 20px;
            line-height: 32px;
            padding-bottom: 24px;
        }

        @media screen and (max-width: 640px) {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 16px;
        }
    }
</style>

<div class="hero-section">
    <div class="leftsection">
        <h2 class="sectiontitle">
            Welcome To&nbsp; <br/>
            <span class="boldheader">ThadDev</span>!
        </h2>
        <p class="sectiontext">
            A self-taught, full-stack developer. Has been learning to code since 9 years old.
        </p>
        <p><br/></p>
    </div>
</div>