import React, {useEffect, useState} from 'react';
import {NavLink, SocialIcons} from "../Hero/HeroStyles";
import {AiFillMail} from "react-icons/ai";
import {Links} from "../../constants/constants";

const normal = {
  "z-index": "9998",
  "width": "100%",
  "max-width": "1920px",
  "padding": "30px 30px",
  "transition": "top 0.3s",
  "display": "flex",
  "align-items": "center",
}

const sticky = {
  "position": "fixed",
  "background-color": "#191919"
}

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollDist = 51;

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
          <NavLink fontSize={20} href="#">Home</NavLink>
          <NavLink fontSize={20} href="#aboutme">About Me</NavLink>
          <NavLink fontSize={20} href="#tech">Technologies</NavLink>
          <NavLink fontSize={20} href="#projects">Projects</NavLink>

          <div style={{
            "float": "right"
          }}>
            <SocialIcons href={Links[6].link}>
              <AiFillMail size="4rem"/>
            </SocialIcons>
          </div>
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
          <NavLink fontSize={20} href="#">Home</NavLink>
          <NavLink fontSize={20} href="#aboutme">About Me</NavLink>
          <NavLink fontSize={20} href="#tech">Technologies</NavLink>
          <NavLink fontSize={20} href="#projects">Projects</NavLink>

          <div style={{
            "float": "right"
          }}>
            <SocialIcons href={Links[6].link}>
              <AiFillMail size="4rem"/>
            </SocialIcons>
          </div>
        </div>
      </div>
    );
  }

};

export default Header;
