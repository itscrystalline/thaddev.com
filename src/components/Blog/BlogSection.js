import React from 'react';
import {Section, SectionDivider} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {BiChevronRight} from "react-icons/bi";

const BlogSection = () => (
    <Section>
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <Button onClick={() => {
        const loc = window.location.toString().split('#')[0];
        window.location = loc + 'blog/';
        return false;
      }}>Blog <BiChevronRight/></Button>
    </Section>
);



export default BlogSection;
