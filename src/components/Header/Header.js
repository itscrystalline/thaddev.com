import Link from 'next/link';
import React from 'react';
import {
  AiFillApi,
  AiFillAppstore,
  AiFillFacebook,
  AiFillGithub
} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';
import {FaGooglePlay} from "react-icons/fa";
import {Container, Div1, Div2, Div3, NavLink, SocialIcons, HeaderText} from './HeaderStyles';
import Logo from "../Logo/Logo";
import {Links} from "../../constants/constants.js";

const Header = () => (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white"}}>
            <Logo/> <HeaderText>ThadDev</HeaderText>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#aboutme">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#accomplishments">
            <NavLink>Accomplishments</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href={Links[0].link}>
          <AiFillGithub size="4rem"/>
        </SocialIcons>
        <SocialIcons href={Links[4].link}>
          <FaGooglePlay size="3rem"/>
        </SocialIcons>
        <SocialIcons href={Links[5].link}>
          <AiFillFacebook size="4rem"/>
        </SocialIcons>
        <SocialIcons href="/api-directory">
          <AiFillApi size="4rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
