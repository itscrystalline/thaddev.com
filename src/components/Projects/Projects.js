import React from 'react';

import {
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  ProjectCard,
  Tag,
  TagList,
  TitleContent,
  UtilityList
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';
import {FaChevronDown} from "react-icons/fa";
import Collapsible from "react-collapsible";
import useWindowSize from "../../styles/GlobalComponents/WindowSize";
import {CollapsableBackground} from "../Gallery/GalleryStyles";
import {useTranslation} from "next-i18next";

const Projects = () => {
  const {height, width} = useWindowSize()
  const {t} = useTranslation(['projects', 'common']);
  if (width > 973) {
    return (
      <Section id="projects">
        <SectionDivider/>
        <p><br/></p>
        <p><br/></p>

        <SectionTitle>{t('common:title-projects')}</SectionTitle>
        <Grid/>
      </Section>
    );
  } else {
    return (
      <Section id="projects">
        <SectionDivider/>
        <p><br/></p>
        <p><br/></p>

        <CollapsableBackground>
          <Collapsible trigger={<SectionTitle>{t('common:title-projects')}&nbsp;&nbsp;&nbsp;<FaChevronDown size="3rem"/></SectionTitle>}
                       transitionTime="400"
                       easing="ease-in-out"
                       lazyRender="true">
            <Grid/>
          </Collapsible>
        </CollapsableBackground>
      </Section>
    );
  }
};

const Grid = () => {
  const {t} = useTranslation(['projects', 'common']);
  return (
    <GridContainer>
      {projects.map(({yt, title, description, tags, source, live, id}) => (
        <ProjectCard key={id}>
          <p><br/></p>
          <TitleContent>
            {yt === "" ? null :
              <>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                  }}
                >
                  <iframe
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src={yt}
                    frameBorder="0"
                  />
                </div>
                <p><br/></p>
              </>
            }
            <HeaderThree title>
              {title}
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>{t(description)} <p><br/></p></CardInfo>
          <div>
            <TitleContent>{t('stack')}</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {source === "" ? null : <ExternalLinks href={source}>{t('code')}</ExternalLinks>}
            {live === "" ? null : <ExternalLinks href={live}>{t('live')}</ExternalLinks>}
          </UtilityList>
        </ProjectCard>
      ))}
    </GridContainer>
  );
};

export default Projects;