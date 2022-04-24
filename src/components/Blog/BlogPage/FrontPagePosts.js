import React from 'react';
import {BlogCard, MainCard} from "./BlogPageStyles";
import {CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Vr,} from "../../Projects/ProjectsStyles";
import {SectionText} from "../../../styles/GlobalComponents";

const FrontPagePosts = ({posts}) => {
  let firstPost = posts[0].id;
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
        <MainCard>
          <p><br/></p>
          <TitleContent>
            <HeaderThree title>
              {posts[0].attributes.title}
            </HeaderThree>
          </TitleContent>
          <Vr/>
          <CardInfo>{posts[0].attributes.description}</CardInfo>
        </MainCard>
        <GridContainer>
          {posts.map(({id, attributes}) => {
            if (id !== firstPost) {
              return (
                <BlogCard>
                  <p><br/></p>
                  <TitleContent>
                    <HeaderThree title>
                      {attributes.title}
                      <Hr/>
                    </HeaderThree>
                  </TitleContent>
                  <CardInfo>{attributes.description}</CardInfo>
                </BlogCard>
              );
            }
          })}
        </GridContainer>
      </>
    );
  }
};

export default FrontPagePosts;
