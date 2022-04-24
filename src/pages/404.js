import {NextSeo} from "next-seo";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {SectionText, SectionTitle} from "../styles/GlobalComponents";
import {Container} from "../layout/LayoutStyles";

const Page404 = () => (
  <>
    <NextSeo title="ThadDev's Site - 404"/>
    <Container>
      <Header noTagLinks/>
      <Section>
        <SectionTitle main>404</SectionTitle>
        <SectionText>
          The page you were looking for does not exist.
        </SectionText>
      </Section>
      <div style={{bottom: "0", position: "fixed"}}>
        <Footer/>
      </div>
    </Container>
  </>
);

export default Page404;
