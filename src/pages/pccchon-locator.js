import React from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {NextSeo} from "next-seo";
import {AltLayout} from "../layout/AltLayout";
import {darkTheme, Section, SectionText, SectionTitle} from "../styles/GlobalComponents";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MapCanvas from "../components/PCCCHONLocator/MapCanvas.tsx";
import {TextField, ThemeProvider} from "@mui/material";

const PCCCHONLocator = () => {
  const router = useRouter();
  const {t} = useTranslation(['pccchon-locator', 'common']);
  return (
    <>
      <NextSeo title="ThadDev's Site - PCCCHON Locator"/>
      <AltLayout noTagLinks>
        <Section>
          <SectionTitle>{t('pccchon-l-title')}</SectionTitle>
          <SectionText>
            {t('pccchon-l-desc')}
          </SectionText>
          <MapCanvas canvasHeight={640} canvasWidth={1280}/>
          <p><br/> <br/></p>
          <ThemeProvider theme={darkTheme}>
            <TextField id="filled-basic" label="Student ID" variant="filled" style={{width: "20%"}}/>
          </ThemeProvider>
        </Section>
      </AltLayout>
    </>
  )
}

export async function getServerSideProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'pccchon-locator'])),
    },
  };
}

export default PCCCHONLocator;