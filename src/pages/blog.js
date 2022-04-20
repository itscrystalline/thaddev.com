import {NextSeo} from "next-seo";
import {AltLayout} from "../layout/AltLayout";
import {Section, SectionText, SectionTitle} from "../styles/GlobalComponents";

const Blog = () => {
  return (
    <>
      <NextSeo title="ThadDev's Site - Blog"/>
      <AltLayout>
        <Section>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>Work In Progress, Please come back later.</SectionText>
        </Section>
      </AltLayout>
    </>
  );
};

export default Blog;