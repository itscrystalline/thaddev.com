import React from 'react';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';
import {AiFillApi} from "react-icons/ai";
import {BiServer} from "react-icons/bi";
import {DiReact} from "react-icons/di";
import {MdVideogameAsset} from "react-icons/md";
import {SiMaterialdesignicons} from "react-icons/si";
import {VscSymbolMisc} from "react-icons/vsc";
import {useTranslation} from "next-i18next";

const Technologies = () => {
  const {t} = useTranslation(['technologies', 'common']);
  return (
    <Section id="tech">
      <SectionTitle>{t('common:title-technologies')}</SectionTitle>
      <SectionText>
        {t('technologies-1')}
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="4rem"/>
          <ListContainer>
            <ListTitle>{t('frontend')}</ListTitle>
            <ListParagraph>
              {t('frontend-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiServer size="4rem"/>
          <ListContainer>
            <ListTitle>{t('backend')}</ListTitle>
            <ListParagraph>
              {t('backend-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiFillApi size="4rem"/>
          <ListContainer>
            <ListTitle>{t('api')}</ListTitle>
            <ListParagraph>
              {t('api-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiMaterialdesignicons size="3rem"/>
          <ListContainer>
            <ListTitle>{t('ui')}</ListTitle>
            <ListParagraph>
              {t('ui-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <MdVideogameAsset size="3rem"/>
          <ListContainer>
            <ListTitle>{t('gamedev')}</ListTitle>
            <ListParagraph>
              {t('gamedev-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <VscSymbolMisc size="3rem"/>
          <ListContainer>
            <ListTitle>{t('misc')}</ListTitle>
            <ListParagraph>
              {t('misc-p')}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
