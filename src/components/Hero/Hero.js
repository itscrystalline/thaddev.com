import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {BoldHeaderText, LeftSection} from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To&nbsp; <br/>
          <BoldHeaderText>ThadDev</BoldHeaderText>!
        </SectionTitle>
        <SectionText>
          A self-taught, full-stack developer. Has been learning to code since 9 years old.
        </SectionText>
        <Button onClick={() => {
          const loc = window.location.toString().split('#')[0];
          window.location = loc + '#aboutme';
          return false;
        }}>About Me</Button>
      </LeftSection>
    </Section>
)

function getYearsOld(current) {
  var elapsed = current - 1212549780000;
  return Math.floor(elapsed / 31556952000) + ' year old';
}

export default Hero;