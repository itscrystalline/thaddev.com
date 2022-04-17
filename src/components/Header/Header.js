import Link from 'next/link';
import React from 'react';
import {AiFillApi, AiFillFacebook, AiFillGithub, AiFillMail} from 'react-icons/ai';
import {Container, Div1, Div2, Div3, HeaderText, NavLink, SocialIcons} from './HeaderStyles';
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
          <NavLink href="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink href="#accomplishments">Accomplishments</NavLink>
        </li>
      </Div2>
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
        <SocialIcons href="api-directory">
          <AiFillApi size="4rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
