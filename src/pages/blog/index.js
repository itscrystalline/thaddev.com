import {NextSeo} from "next-seo";
import axios from "axios";
import {Section, SectionDivider, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import FrontPagePosts from "../../components/Blog/BlogPage/FrontPagePosts";
import {AltLayout} from "../../layout/AltLayout";

const Index = (props) => {
  return (
    <>
      <NextSeo title="ThadDev's Site - Blog"/>
      <AltLayout>
        <Section>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>Welcome to My Blog! Here is where I share some of my programming journeys.</SectionText>
          <SectionDivider/>
          <p><br/></p>
          <p><br/></p>
          <FrontPagePosts posts={props.posts === undefined ? {} : props.posts.data}/>
          <p><br/></p>
        </Section>
      </AltLayout>
    </>
  );
};

export async function getServerSideProps() {
  const postsRes = await axios.get('http://localhost:1337/api/posts?populate=image');
  return {
    props: {
      posts: postsRes.data
    },
  };
}

export default Index;