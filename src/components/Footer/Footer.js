import React from 'react';
import {
  AiFillApi,
  AiFillFacebook,
  AiFillGithub,
  AiFillHeart,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail
} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles';
import {Links} from "../../constants/constants";
import {FaCloudflare, FaGooglePlay, FaHackerrank, FaItchIo, FaRaspberryPi} from "react-icons/fa";
import {DiReact} from "react-icons/di";
import {SiLeetcode, SiNgrok} from "react-icons/si";

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>TELEPHONE</LinkTitle>
            <LinkItem href="tel:+660813564982">+66 081-356-4982</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href={Links[6].link}>real.thad.choyrum@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              © {new Date().getFullYear() === 2022 ? "2022" : "2022 - " + new Date().getFullYear()} | ThadDev. Some
              Rights Reserved. <br/> Made with <AiFillHeart size="2rem" color="red"/> using <DiReact size="2rem" color="teal"/>. <br/>
              Hosted on <FaRaspberryPi size="2rem" color="red"/> with <FaCloudflare size="2rem" color="orange"/> and&nbsp;
              <SiNgrok size="2rem" color="blue"/>.
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href={Links[0].link}>
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[1].link}>
              <FaHackerrank size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[2].link}>
              <SiLeetcode size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[3].link}>
              <FaItchIo size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[4].link}>
              <FaGooglePlay size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[5].link}>
              <AiFillFacebook size="3rem"/>
            </SocialIcons>
            <SocialIcons href={Links[6].link}>
              <AiFillMail size="3rem"/>
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
