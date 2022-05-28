import React from 'react';
import Link from 'next/link';
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
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Accomplishments = ({data}) => {
  const github = Links[0].link;
  const hackerrank = Links[1].link;
  const leetCode = Links[2].link;
  const itch = Links[3].link;
  const googlePlay = Links[4].link;
  const {userFollowers, userRepos, userStars, totalCommits, totalPRs, totalContribs} = analyze(data);

  const {t} = useTranslation(['accomplishments', 'common']);
  const router = useRouter()

  return (
    <Section id="accomplishments">
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <SectionTitle>{t('common:title-accomplishments')}</SectionTitle>
      <Title><Link href={github}>Github</Link></Title>
      <Boxes>
        <Link href={github}>
          <Box key={0}>
            <BoxNum>{userFollowers}</BoxNum>
            <BoxText>{t('gh-follower') + (router.locale === "en-US" ? (userFollowers > 1 ? "s" : "") : "")}</BoxText>
          </Box>
        </Link>
        <Link href={github}>
          <Box key={1}>
            <BoxNum>{userRepos}</BoxNum>
            <BoxText>{t('gh-projects')}</BoxText>
          </Box>
        </Link>
        <Link href={github}>
          <Box key={2}>
            <BoxNum>{userStars} <AiFillStar size="2rem"/></BoxNum>
            <BoxText>{t('gh-stars')}</BoxText>
          </Box>
        </Link>
        <Link href={github}>
          <Box key={3}>
            <BoxNum>{totalCommits}</BoxNum>
            <BoxText>{t('gh-commits')}</BoxText>
          </Box>
        </Link>
        <Link href={github}>
          <Box key={4}>
            <BoxNum>{totalPRs}</BoxNum>
            <BoxText>{t('gh-pullrequests')}</BoxText>
          </Box>
        </Link>
        <Link href={github}>
          <Box key={5}>
            <BoxNum>{totalContribs}</BoxNum>
            <BoxText>{t('gh-repos')}</BoxText>
          </Box>
        </Link>
      </Boxes>
      <Title><Link href={hackerrank}>HackerRank</Link></Title>
      <Boxes>
        <Link href={hackerrank}>
          <BoxHackerRank key={0}>
            <BoxNum>3</BoxNum>
            <BoxText>{t('hr-badges')}</BoxText>
          </BoxHackerRank>
        </Link>
        <Link href={hackerrank}>
          <BoxHackerRank key={1}>
            <BoxNum>5</BoxNum>
            <BoxText>{t('hr-verifiedskills')}</BoxText>
          </BoxHackerRank>
        </Link>
        <Link href={hackerrank}>
          <BoxHackerRank key={2}>
            <BoxNum>225</BoxNum>
            <BoxText>{t('hr-questions')}</BoxText>
          </BoxHackerRank>
        </Link>
      </Boxes>
      <SmallTitle><Link href={hackerrank}>{t('hr-certs')}</Link></SmallTitle>
      <ImageBoxes>
        <Link href="https://www.hackerrank.com/certificates/671d5ccbdfc6">
          <BoxHackerRankImage key={0}>
            <img src="/images/js_basic.jpg" alt="javascript (basic)" width="100%" height="80%" loading="lazy"/>
            <ImageBoxText>JavaScript (Basic)</ImageBoxText>
          </BoxHackerRankImage>
        </Link>
        <Link href="https://www.hackerrank.com/certificates/6abda86bcec5">
          <BoxHackerRankImage key={1}>
            <img src="/images/py_basic.jpg" alt="python (basic)" width="100%" height="80%" loading="lazy"/>
            <ImageBoxText>Python (Basic)</ImageBoxText>
          </BoxHackerRankImage>
        </Link>
        <Link href="https://www.hackerrank.com/certificates/2353f0513d55">
          <BoxHackerRankImage key={2}>
            <img src="/images/cs_basic.jpg" alt="csharp (basic)" width="100%" height="80%" loading="lazy"/>
            <ImageBoxText>C# (Basic)</ImageBoxText>
          </BoxHackerRankImage>
        </Link>
      </ImageBoxes>
      <ImageBoxes>
        <Link href="https://www.hackerrank.com/certificates/2353f0513d55">
          <BoxHackerRankImage key={3}>
            <img src="/images/js_int.jpg" alt="javascript (intermediate)" width="100%" height="80%" loading="lazy"/>
            <ImageBoxText>JavaScript (Intermediate)</ImageBoxText>
          </BoxHackerRankImage>
        </Link>
        <Link href="https://www.hackerrank.com/certificates/f161d7813611">
          <BoxHackerRankImage key={4}>
            <img src="/images/java_basic.jpg" alt="java (basic)" width="100%" height="80%" loading="lazy"/>
            <ImageBoxText>Java (Basic)</ImageBoxText>
          </BoxHackerRankImage>
        </Link>
      </ImageBoxes>
      <Title><Link href={leetCode}>LeetCode</Link></Title>
      <Boxes>
        <Link href={leetCode}>
          <BoxLeetcode key={0}>
            <BoxNum>230,043{router.locale === "en-US" ? <sup>th</sup> : null}</BoxNum>
            <BoxText>{t('lc-rank')}</BoxText>
          </BoxLeetcode>
        </Link>
        <Link href={leetCode}>
          <BoxLeetcode key={1}>
            <BoxNum>1,515{router.locale === "en-US" ? <sup>th</sup> : null}</BoxNum>
            <BoxText>{t('lc-contestrating')}</BoxText>
          </BoxLeetcode>
        </Link>
        <Link href={leetCode}>
          <BoxLeetcode key={2}>
            <BoxNum>101,651</BoxNum>
            <BoxText>{t('lc-contestglobalranking')}</BoxText>
          </BoxLeetcode>
        </Link>
        <Link href={leetCode}>
          <BoxLeetcode key={3}>
            <BoxNum>6</BoxNum>
            <BoxText>{t('lc-contestsattended')}</BoxText>
          </BoxLeetcode>
        </Link>
        <Link href={leetCode}>
          <BoxLeetcode key={4}>
            <BoxNum>197</BoxNum>
            <BoxText>{t('lc-problemssolved')}</BoxText>
          </BoxLeetcode>
        </Link>
        <Link href={leetCode}>
          <BoxLeetcode key={5}>
            <BoxNum>38.39%</BoxNum>
            <BoxText>{t('lc-topranking')}</BoxText>
          </BoxLeetcode>
        </Link>
      </Boxes>
    </Section>
  );
};

function analyze(data) {
  const userFollowers = data.user.followers.totalCount;
  const userRepos = data.user.repositories.totalCount;
  let userStars = 0;
  for (let i = 0; i < data.user.repositories.nodes.length; i++) {
    userStars += data.user.repositories.nodes[i].stargazerCount;
  }
  const totalCommits = data.user.contributionsCollection.totalCommitContributions;
  const totalPRs = data.user.contributionsCollection.totalPullRequestContributions;
  const totalContribs = data.user.contributionsCollection.totalRepositoriesWithContributedCommits;
  return {
    userFollowers,
    userRepos,
    userStars,
    totalCommits,
    totalPRs,
    totalContribs,
  };
}

export default Accomplishments;
