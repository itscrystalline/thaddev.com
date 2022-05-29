import React, {useEffect, useState} from 'react';
import {NextSeo} from "next-seo";
import {AltLayout} from "../../../layout/AltLayout";
import {Section, SectionSubText, SectionText, SectionTitle} from "../../../styles/GlobalComponents";
import axios from "axios";
import Image from "next/image";
import {AiFillCalendar} from "react-icons/ai";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {NavLink} from "../../../components/Header/HeaderStyles";
import {marked} from 'marked';
import PostContent from "../../../components/Blog/BlogPage/PostContent";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import ChangeLanguageButton from "../../../styles/GlobalComponents/Button";

const PostPage = (props) => {
  const router = useRouter()
  const queries = router.query
  const id = queries.id

  const [post, setPost] = useState(null);

  const {t} = useTranslation('blog', 'common');

  useEffect(() => {
    async function getPostData() {
      const postData = await getPost(id);
      setPost(postData);
    }

    getPostData();
  }, []);

  if (post === null || post === undefined) {
    return (
      <>
        <NextSeo title="ThadDev's Site - Blog"/>
        <AltLayout>
          <Section>
            <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/`}><SectionSubText><BiLeftArrow/> Back to
              Blog</SectionSubText></NavLink>
            <div style={{"margin-left": "0", "margin-right": "auto"}}>
              <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${id - 1}`}
                       locale={router.locale}><SectionSubText><BiLeftArrow/> Previous post</SectionSubText></NavLink>
            </div>
            <div style={{"margin-left": "auto", "margin-right": "0"}}>
              <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${id + 1}`}
                       locale={router.locale}><SectionSubText>Next
                post <BiRightArrow/></SectionSubText></NavLink>
            </div>
            <p><br/></p>
            <p><br/></p>
            <center><SectionText>{t('loading')}</SectionText></center>
          </Section>
        </AltLayout>
        <ChangeLanguageButton/>
      </>
    )
  } else {
    if (post.id === -1) {
      return (
        <>
          <NextSeo title="ThadDev's Site - Blog"/>
          <AltLayout>
            <Section>
              <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/`}><SectionSubText><BiLeftArrow/> Back
                to Blog</SectionSubText></NavLink>
              <div style={{"margin-left": "0", "margin-right": "auto"}}>
                <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${id - 1}`}
                         locale={router.locale}><SectionSubText><BiLeftArrow/> Previous post</SectionSubText></NavLink>
              </div>
              <div style={{"margin-left": "auto", "margin-right": "0"}}>
                <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${id + 1}`}
                         locale={router.locale}><SectionSubText>Next
                  post <BiRightArrow/></SectionSubText></NavLink>
              </div>
              <p><br/></p>
              <p><br/></p>
              <center><SectionText>{t('404')}</SectionText></center>
            </Section>
          </AltLayout>
          <ChangeLanguageButton/>
        </>
      )
    } else {
      const published = new Date(post.post.data.attributes.publishedAt).toLocaleString(router.locale);
      const updated = new Date(post.post.data.attributes.updatedAt).toLocaleString(router.locale);

      const htmlContent = marked.parse(post.post.data.attributes.content === null ? "" : (router.locale === "en-US" ? post.post.data.attributes.content : post.post.data.attributes.content_th));
      return (
        <>
          <NextSeo title="ThadDev's Site - Blog"/>
          <AltLayout>
            <Section>
              <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/`}><SectionSubText><BiLeftArrow/> Back
                to Blog</SectionSubText></NavLink>
              <div style={{"margin-left": "0", "margin-right": "auto"}}>
                <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${parseInt(post.id) - 1}`}
                         locale={router.locale}><SectionSubText><BiLeftArrow/> Previous post</SectionSubText></NavLink>
              </div>
              <div style={{"margin-left": "auto", "margin-right": "0"}}>
                <NavLink href={`/${router.locale === 'en-US' ? '' : 'th-TH/'}blog/posts?id=${parseInt(post.id) + 1}`}
                         locale={router.locale}><SectionSubText>Next
                  post <BiRightArrow/></SectionSubText></NavLink>
              </div>
              <p><br/></p>
              <Image src={"https://thaddev.com/blog/cms-strapi" + post.post.data.attributes.image.data.attributes.url}
                     alt={post.post.data.attributes.image.data.attributes.alternativeText}
                     width={post.post.data.attributes.image.data.attributes.width * 0.9}
                     height={post.post.data.attributes.image.data.attributes.height * 0.9}/>
              <p><br/></p>
              <SectionSubText>
                <AiFillCalendar
                  size="2rem"/> {t('postedat')} {published} {published !== updated ? <>({t('updatedat')} {updated})</> : null}
              </SectionSubText>
              <SectionTitle>{router.locale === "en-US" ? post.post.data.attributes.title : post.post.data.attributes.title_th}</SectionTitle>
              <SectionText>{router.locale === "en-US" ? post.post.data.attributes.description : post.post.data.attributes.description_th}</SectionText>
              <PostContent content={htmlContent}/>
            </Section>
          </AltLayout>
          <ChangeLanguageButton/>
        </>
      );
    }
  }
};

export async function getServerSideProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    }
  };
}

async function getPost(id) {
  try {
    const post = await axios.get(`https://thaddev.com/blog/cms-strapi/api/posts/${id}?populate=image`);
    if (post.status.toString().startsWith('4') || post.status.toString().startsWith('5')) {
      return {
        post: null,
        id: -1
      };
    }
    return {
      post: post.data,
      id: id,
    };
  } catch (err) {
    return {
      post: null,
      id: -1
    };
  }
}

export default PostPage;
