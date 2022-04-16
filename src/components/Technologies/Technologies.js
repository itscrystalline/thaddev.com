import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';
import {AiFillApi} from "react-icons/ai";
import {BiServer} from "react-icons/bi";
import {DiReact} from "react-icons/di";
import {MdVideogameAsset} from "react-icons/md";
import {SiMaterialdesignicons} from "react-icons/si";
import {VscSymbolMisc} from "react-icons/vsc";

const Technologies = () => (
    <Section id="tech">
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have experience of working with the following technologies:
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="4rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with React.js, Markdown and JavaFX.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiServer size="4rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with building Web servers using Java.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiFillApi size="4rem"/>
          <ListContainer>
            <ListTitle>API</ListTitle>
            <ListParagraph>
              Experience with building APIs using Java & the Spring Boot framework.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiMaterialdesignicons size="3rem"/>
          <ListContainer>
            <ListTitle>UI/UX and Asset Design</ListTitle>
            <ListParagraph>
              Experience with creating and designing user interfaces with tools like Figma and the JavaFX SceneBuilder.
              Has created multiple assets for My Games and textures for Minecraft mods, using tools like GIMP and Paint.net.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <MdVideogameAsset size="3rem"/>
          <ListContainer>
            <ListTitle>Games & Game Development</ListTitle>
            <ListParagraph>
              Experience with creating games using the Unity Game Engine, with the use of C#. With two currently live
              on the Google Play Store, and one for a game jam on itch.io. Also has some experience with Minecraft Modding
              using the Forge API, and has worked both alone and as a community on Minecraft Mods.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <VscSymbolMisc size="3rem"/>
          <ListContainer>
            <ListTitle>Miscellaneous</ListTitle>
            <ListParagraph>
              Has experienced with creating discord bots using Java with the JDA library, and using JavaScript with the
              Discord.js library. Has also worked with Python for creating scripts for housekeeping tasks, and a bit of
              C and C++ for a school project on home automation with Arduino.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
);

export default Technologies;
