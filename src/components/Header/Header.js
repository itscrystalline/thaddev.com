import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiFillApi, AiFillFacebook, AiFillGithub, AiFillMail} from 'react-icons/ai';
import {Container, Div1, Div2, Div3, HeaderText, NavLink, SocialIcons} from './HeaderStyles';
import Logo from "../Logo/Logo";
import {Links} from "../../constants/constants.js";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const normal = {
  "z-index": "9998",
  "width": "100%",
  "max-width": "1280px",
  "transition": "top 0.3s",
  "align-items": "center",
}

const sticky = {
  "position": "fixed",
  "background-color": "#191919"
}

const Header = (props) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollDist = 51;

  const router = useRouter();
  const prependStringLocale = router.locale === "en-US" ? "" : "/" + router.locale;

  const {t} = useTranslation();

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > scrollDist) { // if scroll down hide the navbar
        setShow(false);
      } else { // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (show) {
    return (
      <div style={{
        ...normal, top: show ? '-100px' : '0px'
      }}>
        <div style={{
          "width": "100%",
          "margin": "0 auto"
        }}>
          <Container>
            <Div1>
              <Link href="/">
                <a style={{display: "flex", alignItems: "center", color: "white"}}>
                  <Logo/>&nbsp;&nbsp;&nbsp;&nbsp;<HeaderText>ThadDev</HeaderText>
                </a>
              </Link>
            </Div1>
            {props.noTagLinks ? null :
              <Div2>
                <li>
                  <NavLink href="#tech" fontSize={16}>{t('title-technologies')}</NavLink>
                </li>
                <li>
                  <NavLink href="#projects" fontSize={16}>{t('title-projects')}</NavLink>
                </li>
                <li>
                  <NavLink href="#aboutme" fontSize={16}>{t('title-aboutme')}</NavLink>
                </li>
                <li>
                  <NavLink href="#accomplishments" fontSize={16}>{t('title-accomplishments-short')}</NavLink>
                </li>
                <li>
                  <NavLink href="#gallery" fontSize={16}>{t('title-gallery-short')}</NavLink>
                </li>
              </Div2>
            }
            <Div3>
              <SocialIcons href={Links[0].link}>
                <AiFillGithub size="4rem"/>
              </SocialIcons>
              <SocialIcons href={Links[6].link}>
                <AiFillMail size="4rem"/>
              </SocialIcons>
              <SocialIcons href={Links[5].link}>
                <AiFillFacebook size="4rem"/>
              </SocialIcons>
              <SocialIcons href={prependStringLocale + "/api-directory/"}>
                <AiFillApi size="4rem"/>
              </SocialIcons>
            </Div3>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{
        ...normal, ...sticky, top: show ? '-100px' : '0px'
      }}>
        <div style={{
          "width": "100%",
          "margin": "0 auto"
        }}>
          <Container>
            <Div1>
              <Link href="/">
                <a style={{display: "flex", alignItems: "center", color: "white"}}>
                  <Logo/>&nbsp;&nbsp;&nbsp;&nbsp;<HeaderText>ThadDev</HeaderText>
                </a>
              </Link>
            </Div1>
            {props.noTagLinks ? null :
              <Div2>
                <li>
                  <NavLink href="#tech" fontSize={16}>{t('title-technologies')}</NavLink>
                </li>
                <li>
                  <NavLink href="#projects" fontSize={16}>{t('title-projects')}</NavLink>
                </li>
                <li>
                  <NavLink href="#aboutme" fontSize={16}>{t('title-aboutme')}</NavLink>
                </li>
                <li>
                  <NavLink href="#accomplishments" fontSize={16}>{t('title-accomplishments-short')}</NavLink>
                </li>
                <li>
                  <NavLink href="#gallery" fontSize={16}>{t('title-gallery-short')}</NavLink>
                </li>
              </Div2>
            }
            <Div3>
              <SocialIcons href={Links[0].link}>
                <AiFillGithub size="4rem"/>
              </SocialIcons>
              <SocialIcons href={Links[6].link}>
                <AiFillMail size="4rem"/>
              </SocialIcons>
              <SocialIcons href={Links[5].link}>
                <AiFillFacebook size="4rem"/>
              </SocialIcons>
              <SocialIcons href={prependStringLocale + "/api-directory/"}>
                <AiFillApi size="4rem"/>
              </SocialIcons>
            </Div3>
          </Container>
        </div>
      </div>
    );
  }
};

export default Header;
