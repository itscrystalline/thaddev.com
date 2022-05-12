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

const Projects = () => {
  const {height, width} = useWindowSize()
  if (width > 973) {
    return (
      <Section id="projects">
        <SectionDivider/>
        <p><br/></p>
        <p><br/></p>

        <SectionTitle>Projects</SectionTitle>
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
          <Collapsible trigger={<SectionTitle>Projects&nbsp;&nbsp;&nbsp;<FaChevronDown size="3rem"/></SectionTitle>}
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

const Grid = () => (
  <GridContainer>
    {projects.map(({title, description, tags, source, live, id}) => (
      <ProjectCard key={id}>
        <p><br/></p>
        <TitleContent>
          <HeaderThree title>
            {title}
            <Hr/>
          </HeaderThree>
        </TitleContent>
        <CardInfo>{description} <p><br/></p></CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          {source === "" ? null : <ExternalLinks href={source}>Code</ExternalLinks>}
          {live === "" ? null : <ExternalLinks href={live}>Visit</ExternalLinks>}
        </UtilityList>
      </ProjectCard>
    ))}
  </GridContainer>
);

export default Projects;