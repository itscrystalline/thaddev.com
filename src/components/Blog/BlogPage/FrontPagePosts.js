import React from 'react';
import {BlogCard, MainCard} from "./BlogPageStyles";
import {CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Vr,} from "../../Projects/ProjectsStyles";
import {SectionText} from "../../../styles/GlobalComponents";
import Image from 'next/image'
import Link from "next/link";

const FrontPagePosts = ({posts}) => {
  let firstPost = posts.length === 0 ? -1 : posts[0].id;
  if (posts.length === 0) {
    return (
      <>
        <p><br/></p>
        <p><br/></p>
        <center><SectionText>No posts yet, please come back later.</SectionText></center>
      </>);
  } else {
    return (
      <>
        <Link href={`/blog/posts/${posts[0].id}`}>
          <MainCard>
            <p><br/></p>
            <TitleContent>
              <Image src={"http://localhost:1337" + posts[0].attributes.image.data.attributes.url}
                     alt={posts[0].attributes.image.data.attributes.alternativeText}
                     width={posts[0].attributes.image.data.attributes.width * 0.75}
                     height={posts[0].attributes.image.data.attributes.height * 0.75}/>
              <p><br/></p>
              <HeaderThree title>
                {posts[0].attributes.title}
              </HeaderThree>
            </TitleContent>
            <Vr/>
            <CardInfo>{posts[0].attributes.description}</CardInfo>
          </MainCard>
        </Link>
        <GridContainer>
          {posts.map(({id, attributes}) => {
            if (id !== firstPost) {
              return (
                <Link href={`/blog/posts/${id}`}>
                  <BlogCard>
                    <TitleContent>
                      {attributes.image.data != null ?
                        <><Image src={"http://localhost:1337" + attributes.image.data.attributes.url}
                                 alt={attributes.image.data.attributes.alternativeText}
                                 width={attributes.image.data.attributes.width * 0.75}
                                 height={attributes.image.data.attributes.height * 0.75}/><p><br/></p></>
                        : null}
                      <HeaderThree title>
                        {attributes.title}
                        <Hr/>
                      </HeaderThree>
                    </TitleContent>
                    <CardInfo>{attributes.description}</CardInfo>
                  </BlogCard>
                </Link>
              );
            }
          })}
        </GridContainer>
      </>
    );
  }
};

export default FrontPagePosts;
