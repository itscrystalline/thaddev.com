import React from 'react';
import Link from 'next/link';
import {Section, SectionDivider, SectionTitle} from "../../styles/GlobalComponents";
import {Button} from "../../styles/GlobalComponents/Button";

const BlogSection = () => {
  return (
    <Section>
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <SectionTitle>Blog</SectionTitle>
      <Link href="blog/"><Button>Blog »</Button></Link>
      <p><br/></p>
    </Section>
  );
};



export default BlogSection;
