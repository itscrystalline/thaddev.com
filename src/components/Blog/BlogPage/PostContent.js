import React from 'react';
import {SectionDivider, SectionText} from "../../../styles/GlobalComponents";

const PostContent = ({content}) => {
  return (
    <>
      {content === null ? null :
        <>
          <SectionDivider/>
          <p><br/></p><p><br/></p>
          <SectionText dangerouslySetInnerHTML={{__html: content}}/>
        </>
      }
    </>
  );
};

export default PostContent;