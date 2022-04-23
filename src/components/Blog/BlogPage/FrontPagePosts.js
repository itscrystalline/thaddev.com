import React from 'react';
import {BlogCard, MainCard} from "./BlogPageStyles";
import {CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Vr,} from "../../Projects/ProjectsStyles";

const FrontPagePosts = ({posts}) => (
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
        if (id !== 1) {
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

export default FrontPagePosts;
