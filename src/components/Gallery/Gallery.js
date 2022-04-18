import React from "react";
import {Section, SectionDivider, SectionTitle} from "../../styles/GlobalComponents";
import {ImageBoxes, ImageBoxText, SmallTitle} from "../Acomplishments/AcomplishmentsStyles";
import {BoxImage} from "./GalleryStyles";
import Collapsible from "react-collapsible";
import {Hr} from "../Projects/ProjectsStyles";
import {FaChevronDown} from "react-icons/fa";
import Image from "next/image";

import getlinks2 from "../../../public/images/getlinks2.jpg";
import getlinks3 from "../../../public/images/getlinks3.jpg";
import getlinks4 from "../../../public/images/getlinks4.jpg";
import getlinks5 from "../../../public/images/getlinks5.jpg";
import getlinks6 from "../../../public/images/getlinks5.jpg";

import versocert from "../../../public/images/versocert.jpg";
import verso1 from "../../../public/images/verso1.jpg";
import verso3 from "../../../public/images/verso3.jpg";
import verso4 from "../../../public/images/verso4.jpg";

import tree1 from "../../../public/images/tree1.png";
import tree2 from "../../../public/images/tree2.png";

const Gallery = () => (
    <Section id="gallery">
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>

      <Collapsible trigger={<div style={{cursor: "pointer"}}><SectionTitle>Events & Development <FaChevronDown
          size="3rem"/></SectionTitle></div>}
                   transitionTime="400"
                   easing="ease-in-out"
                   lazyRender="true">
        <SmallTitle>Thailand TopCoder Competition by GetLinks (2020)</SmallTitle>
        <ImageBoxes>
          <BoxImage>
            <iframe width="448" height="252" src="https://www.youtube.com/embed/Xnjib-OsM5k"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <ImageBoxText>Video from the "Lightning talk" where, I was the youngest person who has top 100 in the
              leaderboard.</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <ImageBoxes>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={getlinks2} alt="getlinks2"/>
            </div>
            <ImageBoxText>Shots from the "Lightning talk".</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={getlinks3} alt="getlinks3"/>
            </div>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={getlinks4} alt="getlinks4"/>
            </div>
            <ImageBoxText>Other shots from the event.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={getlinks5} alt="getlinks5"/>
            </div>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={getlinks6} alt="getlinks6"/>
            </div>
          </BoxImage>
        </ImageBoxes>
        <Hr/>
        <SmallTitle>VERSO HACK 2022</SmallTitle>
        <ImageBoxes>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={versocert} alt="verso certificate"/>
            </div>
            <ImageBoxText>VERSO HACK 2022 Certificate</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <ImageBoxes>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={verso1} alt="verso1"/>
            </div>
            <ImageBoxText>Me working with teammates.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={verso3} alt="verso3"/>
            </div>
            <ImageBoxText>Me working on the app, with me leading the development.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={verso4} alt="verso4"/>
            </div>
            <ImageBoxText>Me preparing for the final pitch.</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <p><br/></p>
        <Hr/>
        <SmallTitle>Games</SmallTitle>
        <ImageBoxes>
          <BoxImage>
            <iframe width="448" height="252" src="https://www.youtube.com/embed/p9gJwQmi5VA"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <ImageBoxText>BattleParkour Trailer</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <Hr/>
        <ImageBoxes>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={tree1} alt="treegame1"/>
            </div>
            <ImageBoxText>Tree Game</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <div style={{width: "100%", height: "auto"}}>
              <Image src={tree2} alt="treegame2"/>
            </div>
            <ImageBoxText>Tree Game</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
      </Collapsible>
    </Section>
);

export default Gallery;