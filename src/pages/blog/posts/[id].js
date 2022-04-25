import React from 'react';
import {NextSeo} from "next-seo";
import {AltLayout} from "../../../layout/AltLayout";
import {Section, SectionSubText, SectionText, SectionTitle} from "../../../styles/GlobalComponents";
import axios from "axios";
import Image from "next/image";
import {AiFillCalendar} from "react-icons/all";

const PostPage = (props) => {
  const published = new Date(props.post.data.attributes.publishedAt).toLocaleString();
  const updated = new Date(props.post.data.attributes.updatedAt).toLocaleString();
  return (
    <>
      <NextSeo title="ThadDev's Site - Blog"/>
      <AltLayout>
        <Section>
          <Image src={"http://localhost:1337" + props.post.data.attributes.image.data.attributes.url}
                 alt={props.post.data.attributes.image.data.attributes.alternativeText}
                 width={props.post.data.attributes.image.data.attributes.width}
                 height={props.post.data.attributes.image.data.attributes.height}/>
          <p><br/></p>
          <SectionSubText>
            <AiFillCalendar size="2rem"/> Posted at {published} {published !== updated ? <>(Updated
            at {updated})</> : null}
          </SectionSubText>
          <SectionTitle>{props.post.data.attributes.title}</SectionTitle>
          <SectionText>{props.post.data.attributes.description}</SectionText>
        </Section>
      </AltLayout>
    </>
  );
};

export async function getStaticProps({params}) {
  const post = await axios.get(`http://localhost:1337/api/posts/${params.id}?populate=image`);
  //console.log(post.data);
  return {
    props: {
      post: post.data
    },
  };
}

export async function getStaticPaths() {
  const posts = await axios.get("http://localhost:1337/api/posts");
  const paths = posts.data.data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false
  };
}

export default PostPage;