import React from 'react';
import {NextSeo} from "next-seo";
import {AltLayout} from "../../../layout/AltLayout";
import {Section, SectionText, SectionTitle} from "../../../styles/GlobalComponents";

const PostPage = () => (
  <>
    <NextSeo title="ThadDev's Site - Blog"/>
    <AltLayout>
      <Section>
        <SectionTitle>Blog</SectionTitle>
        <SectionText>Welcome to My Blog! Here is where I share some of my programming journeys. (WIP) </SectionText>
      </Section>
    </AltLayout>
  </>
);

export default PostPage;