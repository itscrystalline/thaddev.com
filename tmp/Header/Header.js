import Link from 'next/link';
import React from 'react';
import {AiFillApi, AiFillFacebook, AiFillGithub, AiFillMail} from 'react-icons/ai';
import {Container, Div1, Div2, Div3, HeaderText, NavLink, SocialIcons} from './HeaderStyles';
import Logo from "../Logo/Logo";
import {Links} from "../../constants/constants.js";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const Header = (props) => {
  const router = useRouter();
  const prependStringLocale = router.locale === "en-US" ? "" : "/" + router.locale;

  const {t} = useTranslation();

  return (
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
  );
};

export default Header;
