import Accomplishments from '../components/Acomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';
import BlogSection from "../components/Blog/BlogSection";
import Gallery from "../components/Gallery/Gallery";
import {NextSeo} from "next-seo";
import {ApolloClient, createHttpLink, gql, InMemoryCache} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';

const Home = (props) => {
  return (<>
    <NextSeo title="ThadDev's Site"/>
    <Layout>
      <Section grid>
        <Hero/>
        <BgAnimation/>
      </Section>
      <Technologies/>
      <Projects/>
      <AboutMe/>
      <Accomplishments data={props.data}/>
      <Gallery/>
      <BlogSection/>
    </Layout>
  </>);
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
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
  })

  return {
    props: {
      data: data
    }
  };
}

export default Home;
