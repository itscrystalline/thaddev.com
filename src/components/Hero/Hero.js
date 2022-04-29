import React from 'react';
import Link from 'next/link';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {BoldHeaderText, LeftSection} from './HeroStyles';
import {Button} from "../../styles/GlobalComponents/Button";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To&nbsp; <br/>
          <BoldHeaderText>ThadDev</BoldHeaderText>!
        </SectionTitle>
        <SectionText>
          A self-taught, full-stack developer. Has been learning to code since 9 years old.
        </SectionText>
        <Link href="#aboutme"><Button>About Me</Button></Link>
        <p><br/></p>
      </LeftSection>
    </Section>
  );
}

function getYearsOld(current) {
  var elapsed = current - 1212549780000;
  return Math.floor(elapsed / 31556952000) + ' year old';
}

export default Hero;