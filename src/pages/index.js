import {Layout} from '../layout/Layout';
import {NextSeo} from "next-seo";
import {ApolloClient, createHttpLink, gql, InMemoryCache} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';
import {createTheme} from "@mui/material";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const theme = createTheme({
  palette: {
    primary: {
      main: '#19a0f3',
    },
    secondary: {
      main: '#1f1f1f'
    },
  },
});

const Home = (props) => {
  //console.log(router.locale);
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
    </Layout>
  </>);
}

export async function getServerSideProps({locale}) {
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
      data: data,
      ...(await serverSideTranslations(locale, ['common', 'aboutme', 'accomplishments', 'blog', 'footer', 'gallery', 'header', 'hero', 'projects', 'technologies'])),
    }
  };
}

export default Home;
