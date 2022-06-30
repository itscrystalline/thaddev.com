import React from 'react';
import {AiFillGithub, AiFillHeart} from 'react-icons/ai';

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  NavLink,
  Slogan,
  SocialContainer,
  SocialIcons,
  SocialIconsContainer
} from './FooterStyles';
import {Links} from "../../constants/constants";
import {FaCloudflare, FaGooglePlay, FaHackerrank, FaItchIo, FaRaspberryPi} from "react-icons/fa";
import {DiReact} from "react-icons/di";
import {SiLeetcode, SiNextdotjs, SiNgrok} from "react-icons/si";
import useWindowSize from "../../styles/GlobalComponents/WindowSize";

const Footer = () => {
  const {width, height} = useWindowSize();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Facebook</LinkTitle>
          <LinkItem href={Links[5].link}>Thad Choyrum</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LINE</LinkTitle>
          <LinkItem>@Thad040608</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={Links[6].link}>real.thad.choyrum@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            © {new Date().getFullYear() === 2022 ? "2022" : "2022 - " + new Date().getFullYear()} | ThadDev.&nbsp;
            {width < 768 ? (width < 640 ?
                <NavLink fontSize={14} href="https://github.com/MyNameTsThad/thaddev.com/blob/master/README.md">Some
                  Rights Reserved.</NavLink> :
                <NavLink fontSize={16} href="https://github.com/MyNameTsThad/thaddev.com/blob/master/README.md">Some
                  Rights Reserved.</NavLink>) :
              <NavLink fontSize={18} href="https://github.com/MyNameTsThad/thaddev.com/blob/master/README.md">Some
                Rights Reserved.</NavLink>}
            <br/>
            Made with <AiFillHeart size="2rem" color="red"/> using <DiReact size="2rem" color="teal"/> <SiNextdotjs
            size="2rem"/>.
            <br/>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
