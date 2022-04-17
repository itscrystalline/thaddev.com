import {Suspense} from 'react'
import dynamic from "next/dynamic";

import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';

const Technologies = dynamic(
    () => import('../components/Technologies/Technologies'),
    {suspense: true}
);
const Projects = dynamic(
    () => import('../components/Projects/Projects'),
    {suspense: true}
);
const AboutMe = dynamic(
    () => import('../components/AboutMe/AboutMe'),
    {suspense: true}
);
const Accomplishments = dynamic(
    () => import('../components/Acomplishments/Accomplishments'),
    {suspense: true}
);
const Gallery = dynamic(
    () => import("../components/Gallery/Gallery"),
    {suspense: true}
);
const BlogSection = dynamic(
    () => import("../components/Blog/BlogSection"),
    {suspense: true}
);

const Home = () => {
  return (
      <Layout>
        <Section grid>
          <Hero/>
          <BgAnimation/>
        </Section>
        <Suspense fallback={<div/>}>
          <Technologies/>
          <Projects/>
        </Suspense>
        <Suspense fallback={<div/>}>
          <AboutMe/>
          <Accomplishments/>
        </Suspense>
        <Suspense fallback={<div/>}>
          <Gallery/>
          <BlogSection/>
        </Suspense>
      </Layout>
  );
}

export default Home;
