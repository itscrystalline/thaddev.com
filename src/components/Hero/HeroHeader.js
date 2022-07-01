import React from 'react';
import Link from "next/link";
import Logo from "../Logo/Logo";
import {BoldHeaderText} from "./HeroStyles";
import {AdaptiveButton} from "../../styles/GlobalComponents/Button";
import {AiFillGithub} from "react-icons/ai";
import {Links} from "../../constants/constants.js";
import {FaGooglePlay, FaHackerrank, FaItchIo} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";
import {SiLeetcode} from "react-icons/si";
import Header from "../Header/Header";

const HeroHeader = () => {

  return (
    <div style={{
      "min-height": "720px",
      "position": "relative",
      "overflow": "hidden",
      "width": "100%",
      "display": "flex",
      "align-items": "center",
      "flex-direction": "column",
    }}>
      <Header/>
      <div style={{"position": "absolute"}}>
        <div style={{
          "display": "flex",
          "align-items": "center",
          "flex-direction": "column",
          "padding-top": "200px",
          "padding-bottom": "120px",
        }}>
          <Logo/><BoldHeaderText>ThadDev</BoldHeaderText>
          <div style={{"display": "flex", "flex-direction": "row", paddingBottom: "25px"}}>
            <div style={{"padding-left": "5px", "padding-right": "5px"}}>
              <Link href={Links[0].link}>
                <AdaptiveButton padding="15px" background="#1c2128" shadowColor="#12151a" hoverShadowColor="#171b21"
                                activeShadowColor="#0e1114" activeBorderColor="#242a33"
                                regularText={<AiFillGithub/>} hoveringText={<><AiFillGithub/> Github <FiArrowRight/></>}
                />
              </Link>
            </div>
            <div style={{"padding-left": "5px", "padding-right": "5px"}}>
              <Link href={Links[1].link}>
                <AdaptiveButton padding="15px" background="#1ba94c" shadowColor="#189945" hoverShadowColor="#1aa148"
                                activeShadowColor="#189442" activeBorderColor="#1db350"
                                regularText={<FaHackerrank/>}
                                hoveringText={<><FaHackerrank/> HackerRank <FiArrowRight/></>}
                />
              </Link>
            </div>
            <div style={{"padding-left": "5px", "padding-right": "5px"}}>
              <Link href={Links[2].link}>
                <AdaptiveButton padding="15px" background="#ffa116" shadowColor="#f09715" hoverShadowColor="#f79c16"
                                activeShadowColor="#eb9415" activeBorderColor="#eb900c"
                                regularText={<SiLeetcode/>} hoveringText={<><SiLeetcode/> LeetCode <FiArrowRight/></>}
                />
              </Link>
            </div>
            <div style={{"padding-left": "5px", "padding-right": "5px"}}>
              <Link href={Links[3].link}>
                <AdaptiveButton padding="15px" background="#b73a4f" shadowColor="#a83549" hoverShadowColor="#b0384c"
                                activeShadowColor="#a33446" activeBorderColor="#c23e53"
                                regularText={<FaItchIo/>} hoveringText={<><FaItchIo/> Itch.io <FiArrowRight/></>}
                />
              </Link>
            </div>
            <div style={{"padding-left": "5px", "padding-right": "5px"}}>
              <Link href={Links[4].link}>
                <AdaptiveButton padding="15px" background="#00c3ff" shadowColor="#00b7f0" hoverShadowColor="#00bdf7"
                                activeShadowColor="#00b4eb" activeBorderColor="#00d4ff"
                                regularText={<FaGooglePlay/>}
                                hoveringText={<><FaGooglePlay/> Google Play <FiArrowRight/></>}
                />
              </Link>
            </div>
          </div>
          <div style={{"padding-left": "5px", "padding-right": "5px"}}>
            <Link href="#aboutme">
              <AdaptiveButton padding="30px" background="linear-gradient(270deg, #0DA9FF 0%, #0026FF 100%)"
                              shadowColor="#092bd7" hoverShadowColor="#052aea"
                              activeShadowColor="#052aea" activeBorderColor="#1aa2f3"
                              regularText={<>About Me</>} hoveringText={<>About Me »</>}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
