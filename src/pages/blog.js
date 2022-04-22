import {NextSeo} from "next-seo";
import {AltLayout} from "../layout/AltLayout";
import {Section, SectionDivider, SectionText, SectionTitle} from "../styles/GlobalComponents";

const Blog = (props) => {
  return (
    <>
      <NextSeo title="ThadDev's Site - Blog"/>
      <AltLayout>
        <Section>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>Welcome to My Blog! Here is where I share some of my programming journeys. (WIP) </SectionText>
          <SectionDivider/>
          <p><br/></p>
          <p><br/></p>
          {/*<FrontPagePosts posts={props.posts.data}/>*/}
          <p><br/></p>
        </Section>
      </AltLayout>
    </>
  );
};

/*export async function getServerSideProps() {
  const postsRes = await axios.get('http://localhost:1337/api/posts');
  return {
    props: {
      posts: postsRes.data
    },
  };
}*/

export default Blog;