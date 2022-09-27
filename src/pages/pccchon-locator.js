import React, {useRef, useState} from "react";
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
  const {t} = useTranslation(['pccchon-locator', 'common']);
  const [sex, setSex] = useState("");
  const [toFind, setToFind] = useState("");
  let [targetPos, setTargetPos] = useState(null);
  let [clickPos, setClickPos] = useState(null);

  const handleClick = (clickpos) => {
    clickPos = clickpos
    setClickPos(clickpos)
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  const handleToFindChange = (event) => {
    setToFind(event.target.value);
  };
  const mapRef = useRef(null);

  const resetTarget = () => {
    setTargetPos(null);
  }

  return (
    <>
      <NextSeo title="ThadDev's Site - PCCCHON Locator"/>
      <AltLayout noTagLinks>
        <Section>
          <SectionTitle>{t('pccchon-l-title')}</SectionTitle>
          <SectionText>
            {t('pccchon-l-desc')}
          </SectionText>
          <MapCanvas canvasHeight={480} canvasWidth={1280} ref={mapRef} pois={props.pois} targetPos={targetPos}
                     resetTarget={resetTarget} handleClick={handleClick}/>
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
                  <MenuItem value="WATER_DISPENSER">{t('water-dispenser')}</MenuItem>
                  <MenuItem value="TRASH_CAN">{t('trash-can')}</MenuItem>
                  {sex === t('men') ?
                    <MenuItem value="RESTROOM_MEN">{t('restroom-m')}</MenuItem> :
                    <MenuItem value="RESTROOM_WOMEN">{t('restroom-w')}</MenuItem>
                  }
                </Select>
              </div>
            </FormControl>
            <LongButton onClick={async () => {
              if (clickPos !== null) {
                console.log("finding path...")
                const path = await axios.get('https://api.thaddev.com/api-v1/locator/shortest?targetType=' + toFind + '&posX=' + clickPos.x + '&posY=' + clickPos.y)
                const data = path.data
                mapRef.current.refreshMap({x: data.x, y: data.y})
              }
            }}>{t('find')}</LongButton>
            <p><br/></p>
          </ThemeProvider>
        </Section>
      </AltLayout>
      <ChangeLanguageButton/>
    </>
  )
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