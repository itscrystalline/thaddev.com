import React from 'react';
import {BlogCard} from "./BlogPageStyles";
import {CardInfo, GridContainer, HeaderThree, Hr, TitleContent,} from "../../Projects/ProjectsStyles";

const FrontPagePosts = ({posts}) => (
  <GridContainer>
    {posts.map(({id, attributes}) => (
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
    ))}
  </GridContainer>
);

export default FrontPagePosts;
