import Accomplishments from '../components/Acomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';
import {Head} from "next/document";

const Home = () => {
  return (
      <Layout>
        <Section grid>
          <Hero/>
          <BgAnimation/>
        </Section>
        <Technologies/>
        <Projects/>
        <AboutMe/>
        <Accomplishments/>
      </Layout>
  );
}

export default Home;
