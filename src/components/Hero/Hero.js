import React, {useState} from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {BoldHeaderText, LeftSection} from './HeroStyles';
import ReactiveButton from "reactive-button";

const Hero = (props) => {
  const [state, setState] = useState('idle');
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
          <ReactiveButton color="#0769ff" size="large" shadow rounded buttonState={state} onClick={() => {
          const loc = window.location.toString().split('#')[0];
          window.location = loc + '#aboutme';
          return false;
        }}>About Me</ReactiveButton>
      </LeftSection>
    </Section>
  );
}

function getYearsOld(current) {
  var elapsed = current - 1212549780000;
  return Math.floor(elapsed / 31556952000) + ' year old';
}

export default Hero;