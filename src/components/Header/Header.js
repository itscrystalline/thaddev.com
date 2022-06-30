import React, {useEffect, useState} from 'react';
import {SocialIcons} from "../Hero/HeroStyles";
import {AiFillMail} from "react-icons/ai";
import {Links} from "../../constants/constants";

const normal = {
  "z-index": "9998",
  "width": "100%",
  "max-width": "1920px",
  "padding": "30px 30px",
  "transition": "top 0.2s"
}

const sticky = {
  "position": "fixed",
}

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollDist = 102;

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
        ...normal, top: show ? '-60px' : '0px'
      }}>
        <div style={{
          "float": "right"
        }}>
          <SocialIcons href={Links[6].link}>
            <AiFillMail size="4rem"/>
          </SocialIcons>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{
        ...normal, ...sticky, top: show ? '-60px' : '0px'
      }}>
        <div style={{
          "float": "right"
        }}>
          <SocialIcons href={Links[6].link}>
            <AiFillMail size="4rem"/>
          </SocialIcons>
        </div>
      </div>
    );
  }

};

export default Header;
