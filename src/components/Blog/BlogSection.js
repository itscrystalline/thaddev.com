import React from 'react';
import Link from 'next/link';
import {LongButton} from "../../styles/GlobalComponents/Button";

const BlogSection = () => {
  return (
    <>
      <p><br/></p>
      <p><br/></p>
      <p><br/></p>
      <p><br/></p>
      <div style={{width: "50%", margin: "0 auto"}}>
        <Link href="blog/"><LongButton>Blog »</LongButton></Link>
      </div>
      <p><br/></p>
    </>
  );
};



export default BlogSection;
