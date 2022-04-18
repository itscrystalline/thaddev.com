import React from 'react';

import {Section, SectionDivider, SectionTitle, Title} from '../../styles/GlobalComponents';
import {
  Box,
  Boxes,
  BoxHackerRank,
  BoxHackerRankImage,
  BoxLeetcode,
  BoxNum,
  BoxText,
  ImageBoxes,
  ImageBoxText,
  SmallTitle
} from './AcomplishmentsStyles';
import {Links} from "../../constants/constants.js";
import {AiFillStar} from "react-icons/ai";
import Image from "next/image";

import js_basic from "../../../public/images/js_basic.jpg";
import js_int from "../../../public/images/js_int.jpg";
import py_basic from "../../../public/images/py_basic.jpg";
import cs_basic from "../../../public/images/cs_basic.jpg";

const Accomplishments = () => {

  const github = Links[0].link;
  const hackerrank = Links[1].link;
  const leetCode = Links[2].link;
  const itch = Links[3].link;
  const googlePlay = Links[4].link;
  return (
      <Section id="accomplishments">
        <SectionDivider/>
        <p><br/></p>
        <p><br/></p>
        <SectionTitle>Statistics & Accomplishments</SectionTitle>
        <Title><a href={github}>Github</a></Title>
        <Boxes>
          <a href={github}>
            <Box key={0}>
              <BoxNum>19</BoxNum>
              <BoxText>Projects</BoxText>
            </Box>
          </a>
          <a href={github}>
            <Box key={1}>
              <BoxNum>3 <AiFillStar size="2rem"/></BoxNum>
              <BoxText>Stars</BoxText>
            </Box>
          </a>
          <a href={github}>
            <Box key={2}>
              <BoxNum>281</BoxNum>
              <BoxText>Commits</BoxText>
            </Box>
          </a>
          <a href={github}>
            <Box key={3}>
              <BoxNum>5</BoxNum>
              <BoxText>Pull Requests</BoxText>
            </Box>
          </a>
        </Boxes>
        <Title><a href={hackerrank}>HackerRank</a></Title>
        <Boxes>
          <a href={hackerrank}>
            <BoxHackerRank key={0}>
              <BoxNum>3</BoxNum>
              <BoxText>Badges</BoxText>
            </BoxHackerRank>
          </a>
          <a href={hackerrank}>
            <BoxHackerRank key={1}>
              <BoxNum>4</BoxNum>
              <BoxText>Verified Skills</BoxText>
            </BoxHackerRank>
          </a>
          <a href={hackerrank}>
            <BoxHackerRank key={2}>
              <BoxNum>225</BoxNum>
              <BoxText>Questions Completed</BoxText>
            </BoxHackerRank>
          </a>
        </Boxes>
        <SmallTitle><a href={hackerrank}>HackerRank Certificates</a></SmallTitle>
        <ImageBoxes>
          <a href="https://www.hackerrank.com/certificates/671d5ccbdfc6">
            <BoxHackerRankImage key={0}>
              <div style={{width: "100%", height: "80%"}}>
                <Image src={js_basic} alt="javascript (basic)"/>
              </div>
              <ImageBoxText>JavaScript (Basic)</ImageBoxText>
            </BoxHackerRankImage>
          </a>
          <a href="https://www.hackerrank.com/certificates/6abda86bcec5">
            <BoxHackerRankImage key={1}>
              <div style={{width: "100%", height: "80%"}}>
                <Image src={py_basic} alt="python (basic)"/>
              </div>
              <ImageBoxText>Python (Basic)</ImageBoxText>
            </BoxHackerRankImage>
          </a>
          <a href="https://www.hackerrank.com/certificates/2353f0513d55">
            <BoxHackerRankImage key={2}>
              <div style={{width: "100%", height: "80%"}}>
                <Image src={cs_basic} alt="csharp (basic)"/>
              </div>
              <ImageBoxText>C# (Basic)</ImageBoxText>
            </BoxHackerRankImage>
          </a>
          <a href="https://www.hackerrank.com/certificates/2353f0513d55">
            <BoxHackerRankImage key={3}>
              <div style={{width: "100%", height: "80%"}}>
                <Image src={js_int} alt="javascript (intermediate)"/>
              </div>
              <ImageBoxText>JavaScript (Intermediate)</ImageBoxText>
            </BoxHackerRankImage>
          </a>
        </ImageBoxes>
        <Title><a href={leetCode}>LeetCode</a></Title>
        <Boxes>
          <a href={leetCode}>
            <BoxLeetcode key={0}>
              <BoxNum>543,549<sup>th</sup></BoxNum>
              <BoxText>Rank</BoxText>
            </BoxLeetcode>
          </a>
          <a href={leetCode}>
            <BoxLeetcode key={1}>
              <BoxNum>1,452<sup>th</sup></BoxNum>
              <BoxText>Contest Rating</BoxText>
            </BoxLeetcode>
          </a>
          <a href={leetCode}>
            <BoxLeetcode key={2}>
              <BoxNum>160,759</BoxNum>
              <BoxText>Global Ranking</BoxText>
            </BoxLeetcode>
          </a>
          <a href={leetCode}>
            <BoxLeetcode key={3}>
              <BoxNum>2</BoxNum>
              <BoxText>Contests Attended</BoxText>
            </BoxLeetcode>
          </a>
          <a href={leetCode}>
            <BoxLeetcode key={4}>
              <BoxNum>74</BoxNum>
              <BoxText>Problems Solved</BoxText>
            </BoxLeetcode>
          </a>
        </Boxes>
      </Section>
  );
};

export default Accomplishments;
