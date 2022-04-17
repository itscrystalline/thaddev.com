import React from "react";
import Link from 'next/link';
import {Section, SectionDivider, SectionTitle} from "../../styles/GlobalComponents";
import {ImageBoxes, ImageBoxText, SmallTitle} from "../Acomplishments/AcomplishmentsStyles";
import {BoxImage} from "./GalleryStyles";
import Collapsible from "react-collapsible";
import {Hr} from "../Projects/ProjectsStyles";

const Gallery = () => (
    <Section id="gallery">
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <Collapsible trigger={<Link href="#gallery"><SectionTitle>Events & Development Gallery</SectionTitle></Link>}
                   transitionTime="200"
                   easing="ease-in-out">
        <SmallTitle>Thailand TopCoder Competition by GetLinks (2020)</SmallTitle>
        <ImageBoxes>
          <BoxImage>
            <iframe width="448" height="252" src="https://www.youtube.com/embed/Xnjib-OsM5k"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <ImageBoxText>Video from the "Lightning talk" because I was the youngest person who has top 100 in the
              leaderboard.</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <ImageBoxes>
          <BoxImage>
            <img src="images/getlinks2.jpg" alt="getlinks2" width="100%" height="auto"/>
            <ImageBoxText>Shots from the "Lightning talk".</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/getlinks3.jpg" alt="getlinks3" width="100%" height="auto"/>
          </BoxImage>
          <BoxImage>
            <img src="images/getlinks4.jpg" alt="getlinks4" width="100%" height="auto"/>
            <ImageBoxText>Other shots from the event.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/getlinks5.jpg" alt="getlinks5" width="100%" height="auto"/>
          </BoxImage>
          <BoxImage>
            <img src="images/getlinks6.jpg" alt="getlinks6" width="100%" height="auto"/>
          </BoxImage>
        </ImageBoxes>
        <Hr/>
        <SmallTitle>VERSO HACK 2022</SmallTitle>
        <ImageBoxes>
          <BoxImage>
            <img src="images/verso1.jpg" alt="verso1" width="100%" height="auto"/>
            <ImageBoxText>Me working with teammates.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/verso2.jpg" alt="verso2" width="100%" height="auto"/>
            <ImageBoxText>Me also working with teammates.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/verso3.jpg" alt="verso3" width="100%" height="auto"/>
            <ImageBoxText>Me working on the project.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/verso4.jpg" alt="verso4" width="100%" height="auto"/>
            <ImageBoxText>Me preparing for the final pitch.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/verso5.jpg" alt="verso5" width="100%" height="auto"/>
            <ImageBoxText>The certificate I got.</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/versocert.png" alt="verso5" width="100%" height="auto"/>
            <ImageBoxText>VERSO HACK 2022 Certificate</ImageBoxText>
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
          <BoxImage>
            <img src="images/battleparkour1.png" alt="battleparkour1" width="100%" height="auto"/>
            <ImageBoxText>BattleParkour</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/battleparkour2.png" alt="battleparkour2" width="100%" height="auto"/>
            <ImageBoxText>BattleParkour</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
        <Hr/>
        <ImageBoxes>
          <BoxImage>
            <img src="images/tree1.png" alt="treegame1" width="100%" height="auto"/>
            <ImageBoxText>Tree Game</ImageBoxText>
          </BoxImage>
          <BoxImage>
            <img src="images/tree2.png" alt="treegame2" width="100%" height="auto"/>
            <ImageBoxText>Tree Game</ImageBoxText>
          </BoxImage>
        </ImageBoxes>
      </Collapsible>
    </Section>
);

export default Gallery;