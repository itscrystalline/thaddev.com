import React from 'react';
import {BlogCard, MainCard} from "./BlogPageStyles";
import {CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Vr,} from "../../Projects/ProjectsStyles";
import {SectionText} from "../../../styles/GlobalComponents";
import Image from 'next/image'
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const FrontPagePosts = ({posts}) => {
  const {t} = useTranslation(['blog', 'common']);
  const router = useRouter();
  let firstPostId = posts.length === 0 ? -1 : posts[posts.length - 1].id;
  let firstPost = posts.length === 0 ? -1 : posts[posts.length - 1];
  if (posts.length === 0) {
    return (
      <>
        <p><br/></p>
        <p><br/></p>
        <center><SectionText>{t('no-posts')}</SectionText></center>
      </>);
  } else {
    return (
      <>
        <Link href={`/blog/posts?id=${firstPostId}`} locale={router.locale}>
          <MainCard>
            <p><br/></p>
            <TitleContent>
              <Image src={"https://thaddev.com/blog/cms-strapi" + firstPost.attributes.image.data.attributes.url}
                     alt={firstPost.attributes.image.data.attributes.alternativeText}
                     width={firstPost.attributes.image.data.attributes.width * 0.75}
                     height={firstPost.attributes.image.data.attributes.height * 0.75}/>
              <p><br/></p>
              <HeaderThree title>
                {router.locale === "en-US" ? firstPost.attributes.title : firstPost.attributes.title_th}
              </HeaderThree>
            </TitleContent>
            <Vr/>
            <CardInfo>{router.locale === "en-US" ? firstPost.attributes.description : firstPost.attributes.description_th}</CardInfo>
          </MainCard>
        </Link>
        <GridContainer>
          {posts.slice(0).reverse().map(({id, attributes}) => {
            if (id !== firstPostId) {
              return (
                <Link href={`/blog/posts?id=${id}`}>
                  <BlogCard>
                    <TitleContent>
                      {attributes.image.data != null ?
                        <><Image src={"https://thaddev.com/blog/cms-strapi" + attributes.image.data.attributes.url}
                                 alt={attributes.image.data.attributes.alternativeText}
                                 width={attributes.image.data.attributes.width * 0.75}
                                 height={attributes.image.data.attributes.height * 0.75}/><p><br/></p></>
                        : null}
                      <HeaderThree title>
                        {router.locale === "en-US" ? attributes.title : attributes.title_th}
                        <Hr/>
                      </HeaderThree>
                    </TitleContent>
                    <CardInfo>{router.locale === "en-US" ? attributes.description : attributes.description_th}</CardInfo>
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
