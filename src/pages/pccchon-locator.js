import React, {useRef, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {NextSeo} from "next-seo";
import {AltLayout} from "../layout/AltLayout";
import {darkTheme, Section, SectionText, SectionTitle} from "../styles/GlobalComponents";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MapCanvas from "../components/PCCCHONLocator/MapCanvas.tsx";
import {FormControl, MenuItem, Select, ThemeProvider} from "@mui/material";
import ChangeLanguageButton, {LongButton} from "../styles/GlobalComponents/Button";
import axios from "axios";

const PCCCHONLocator = (props) => {
  const router = useRouter();
  const {t} = useTranslation(['pccchon-locator', 'common']);
  const [dots, setDots] = useState([]);
  const [sex, setSex] = useState("");
  const [toFind, setToFind] = useState("");
  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  const handleToFindChange = (event) => {
    setToFind(event.target.value);
  };
  const mapRef = useRef(null);

  return (
    <>
      <NextSeo title="ThadDev's Site - PCCCHON Locator"/>
      <AltLayout noTagLinks>
        <Section>
          <SectionTitle>{t('pccchon-l-title')}</SectionTitle>
          <SectionText>
            {t('pccchon-l-desc')}
          </SectionText>
          <MapCanvas canvasHeight={480} canvasWidth={1280} dots={dots} ref={mapRef} pois={props.pois}/>
          <p><br/> <br/></p>
          <ThemeProvider theme={darkTheme}>
            <FormControl sx={{m: 1, minWidth: 120}} size="small">
              <div>
                <Select
                  placeholder={t('sex')}
                  value={sex}
                  style={{width: "25%", paddingRight: "10px"}}
                  variant="filled"
                  onChange={handleSexChange}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>{t('sex')}</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value={t('sex')}>{t('sex')}</MenuItem>
                  <MenuItem value={t('men')}>{t('men')}</MenuItem>
                  <MenuItem value={t('women')}>{t('women')}</MenuItem>
                </Select>
                <Select
                  style={{width: "75%", "margin-left": "auto", "margin-right": 0}}
                  variant="filled"
                  value={toFind}
                  onChange={handleToFindChange}
                >
                  <MenuItem disabled value={t('target')}>{t('target')}</MenuItem>
                  <MenuItem value="WATER_DISPENER">{t('water-dispenser')}</MenuItem>
                  <MenuItem value="TRASH_CAN">{t('trash-can')}</MenuItem>
                  {sex === t('men') ?
                    <MenuItem value="RESTROOM_MEN">{t('restroom-m')}</MenuItem> :
                    <MenuItem value="RESTROOM_WOMEN">{t('restroom-w')}</MenuItem>
                  }
                </Select>
              </div>
            </FormControl>
            <LongButton onClick={async function () {
              await mapRef.current.findAndDrawPath(toFind)
            }}>{t('find')}</LongButton>
            <p><br/></p>
          </ThemeProvider>
        </Section>
      </AltLayout>
      <ChangeLanguageButton/>
    </>
  )
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export async function getServerSideProps({locale}) {
  const POIs = await axios.get('https://api.thaddev.com/api-v1/locator/getpois');
  return {
    props: {
      pois: POIs.data,
      ...(await serverSideTranslations(locale, ['common', 'pccchon-locator'])),
    },
  };
}

export default PCCCHONLocator;