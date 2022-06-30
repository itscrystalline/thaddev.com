import React from "react";
import {Layout} from '../layout/Layout';
import {NextSeo} from "next-seo";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import HeroHeader from "../components/Hero/HeroHeader";
import html2canvas from 'html2canvas';
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

class Home extends React.Component {
  componentDidMount() {
    html2canvas(document.body).then(function (canvas) {
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.bottom = '0';
      canvas.style.right = '0';
      canvas.style.zIndex = '-1';
      // StackBlur.canvasRGBA(canvas, 0, 0, canvas.width, canvas.height, 10);
      canvas.style.filter = "blur(75px)";
      document.body.prepend(canvas);
    })
  }

  //console.log(router.locale);
  render() {
    return (<>
      <NextSeo title="ThadDev's Site"/>
      <Layout>
        {/*<Section grid>
        <Hero/>
        <BgAnimation/>
      </Section>
      <Technologies/>
      <Projects/>
      <AboutMe/>
      <Accomplishments data={props.data}/>
      <Gallery/>
      <BlogSection/>*/}
        <HeroHeader/>
        <AboutMe/>
        <Technologies/>
        <Projects/>
        <Footer/>
      </Layout>
    </>);
  }
}

export async function getServerSideProps({locale}) {
  /*const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql`
        {
            user(login: "MyNameTsThad") {
                followers {
                    totalCount
                }
                repositories(last: 100) {
                    totalCount
                    nodes {
                        stargazerCount
                    }
                }
                contributionsCollection {
                    totalCommitContributions
                    totalPullRequestContributions
                    totalRepositoriesWithContributedCommits
                }
            }
        }
    `
  })*/

  return {
    props: {
      /*data: data,*/
      ...(await serverSideTranslations(locale, ['common', 'aboutme', 'accomplishments', 'blog', 'footer', 'gallery', 'header', 'hero', 'projects', 'technologies'])),
    }
  };
}

export default Home;
