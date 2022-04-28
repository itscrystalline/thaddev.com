import React, {useState} from 'react';
import {Section, SectionDivider} from "../../styles/GlobalComponents";
import {BiChevronRight} from "react-icons/bi";
import ReactiveButton from "reactive-button";

const BlogSection = () => {
  const [state, setState] = useState('idle');
  return (
    <Section>
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>
      <ReactiveButton color="#0769ff" size="large" shadow rounded buttonState={state} onClick={() => {
        const loc = window.location.toString().split('#')[0];
        window.location = loc + 'blog/';
        return false;
      }} disabled={false}>Blog <BiChevronRight/></ReactiveButton>
    </Section>
  );
};



export default BlogSection;
