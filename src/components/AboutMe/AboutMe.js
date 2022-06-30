import React, {useEffect, useRef, useState} from 'react';
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  Name,
  Nickname
} from "./AboutMeStyles";
import {Section, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import {TimeLineData} from "../../constants/constants";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const AboutMe = () => {
  const [activeItem, setActiveItem] = useState(0);
  const router = useRouter();
  const carouselRef = useRef();
  const scroll = (node, left) => {
    return node.scrollTo({left, behavior: 'smooth'});
  }

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  }
// snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const {t} = useTranslation(['aboutme', 'common']);
  return (
    <div>
      <Section id="aboutme">
        <SectionTitle>{t('common:title-aboutme')}</SectionTitle>
        <SectionText>
          <img src="/images/aboutme.svg" alt="aboutmeimage" width="40%" height="auto" style={{float: "right"}}/>
          {/*My Name is <Name>Thad Choyrum</Name>, I am also known
          as <Nickname>Thad</Nickname>, <Nickname>ThadDev</Nickname>,
          &nbsp;<Nickname>MyNameTsThad</Nickname> and <Nickname>IWant2TryHard</Nickname>. I am
          a {getYearsOld(Date.now(), router.locale)} from Thailand,
          and is currently studying at The Princess Chulabhorn Science High School, Chonburi,
          as a {getGrade(Date.now(), router.locale)}<sup>th</sup> grade student. <br/> <br/>
          I have been coding on and off since when I was 9 years old, and have been coding since then.
          I also have a wide range of passion projects, ranging from games to websites to show for my coding skills.
          I have/had been involved in a few hackathons/competitions from different places, both online and
          offline. <br/> <br/>
          Today, I am a self-taught, full-stack programmer, Game developer and designer, capable of many, many things. I have experience with Java,
          Python, C#, Javascript, and a bit of C++ and C.
          <br/> <br/> (left in here for ease of reading)*/}
          {t('about-me-1')} <Name>{t('name')}</Name>, {t('about-me-2')} <Nickname>{t('nickname-1')}</Nickname>,&nbsp;
          <Nickname>{t('nickname-2')}</Nickname>, <Nickname>{t('nickname-3')}</Nickname> {t('common:and')}&nbsp;
          <Nickname>{t('nickname-4')}</Nickname>&nbsp;
          {t('about-me-3') + " " + getYearsOld(Date.now(), router.locale) + " " + t('about-me-4') + getGrade(Date.now(), router.locale)}{router.locale === 'en-US' ?
          <sup>th</sup> : null}
          <br/> <br/>
          {t("about-me-5")}
          <br/> <br/>
          {t("about-me-6")}
        </SectionText>
        <CarouselContainer ref={carouselRef}>
          <>
            {TimeLineData.map((item, index) => {
              return (
                <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
                  <CarouselItem
                    index={index}
                    id={`carousel-item-${index}`}
                    active={activeItem}
                    onClick={(e) => handleClick(e, index)}>
                    <CarouselItemTitle>
                      {item.year}
                      <CarouselItemImg
                        width="208"
                        height="6"
                        viewBox="0 0 208 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                          fill="url(#paint0_linear)"
                          fill-opacity="0.33"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="-4.30412e-10"
                            y1="0.5"
                            x2="208"
                            y2="0.500295"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop
                              offset="0.79478"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </CarouselItemImg>
                    </CarouselItemTitle>
                    <CarouselItemText>{t(item.text)}</CarouselItemText>
                  </CarouselItem>
                </CarouselMobileScrollNode>
              );
            })}
          </>
        </CarouselContainer>
        <CarouselButtons>
          {TimeLineData.map((item, index) => {
            return (
              <CarouselButton
                key={index}
                id={`carousel-button-${index}`}
                active={activeItem === index}
                onClick={(e) => handleClick(e, index)}>
                <CarouselButtonDot active={activeItem}/>
              </CarouselButton>
            );
          })}
        </CarouselButtons>
      </Section>
    </div>
  );
};

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

export default AboutMe;
