import React from 'react';
import Link from 'next/link';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {BoldHeaderText, LeftSection} from './HeroStyles';
import {Button} from "../../styles/GlobalComponents/Button";
import {useTranslation} from "next-i18next";

const Hero = (props) => {
  const {t} = useTranslation(['hero', 'common']);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {t('hero-1')}&nbsp; <br/>
          <BoldHeaderText>ThadDev</BoldHeaderText>!
        </SectionTitle>
        <SectionText>
          {t('hero-2')}
        </SectionText>
        <Link href="#aboutme"><Button>{t('common:title-aboutme')}</Button></Link>
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