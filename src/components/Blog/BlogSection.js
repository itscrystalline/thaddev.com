import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {BiChevronRight} from "react-icons/bi";

const BlogSection = () => (
    <Section>
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <SectionTitle>Blog</SectionTitle>
      <SectionText>The blog is currently under construction! Please come back later.</SectionText>
      <Button onClick={() => {
        const loc = window.location.toString().split('#')[0];
        window.location = loc + 'blog/';
        return false;
      }}>Blog <BiChevronRight/></Button>
    </Section>
);



export default BlogSection;
