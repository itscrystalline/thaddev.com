import React from "react";
import {Section, SectionDivider, SectionTitle} from "../../styles/GlobalComponents";
import {ImageBoxes, ImageBoxText, SmallTitle} from "../Acomplishments/AcomplishmentsStyles";
import {BoxImage, CollapsableBackground} from "./GalleryStyles";
import Collapsible from "react-collapsible";
import {Hr} from "../Projects/ProjectsStyles";
import {FaChevronDown} from "react-icons/fa";
import {useTranslation} from "next-i18next";

const Gallery = () => {
  const {t} = useTranslation(['gallery', 'common']);
  return (
    <Section id="gallery">
      <SectionDivider/>
      <p><br/></p>
      <p><br/></p>

      <CollapsableBackground>
        <Collapsible
          trigger={<div style={{cursor: "pointer"}}><SectionTitle>{t('common:title-gallery')}&nbsp;&nbsp;&nbsp;
            <FaChevronDown
              size="3rem"/></SectionTitle></div>}
          transitionTime="400"
          easing="ease-in-out">
          <SmallTitle>{t('topcoder') + " " + t('common:by')} GetLinks (2020)</SmallTitle>
          <ImageBoxes>
            <BoxImage>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/Xnjib-OsM5k`}
                  frameBorder="0"
                />
              </div>
              <ImageBoxText>{t('topcoder-lightning-talk')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
          <ImageBoxes>
            <BoxImage>
              <img src="/images/getlinks2.jpg" alt="getlinks2" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('topcoder-lightning-talk-shots')}</ImageBoxText>
            </BoxImage>
            <BoxImage>
              <img src="/images/getlinks3.jpg" alt="getlinks3" width="100%" height="100%" loading="lazy"/>
            </BoxImage>
            <BoxImage>
              <img src="/images/getlinks4.jpg" alt="getlinks4" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('topcoder-other')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
          <ImageBoxes>
            <BoxImage>
              <img src="/images/getlinks5.jpg" alt="getlinks5" width="100%" height="100%" loading="lazy"/>
            </BoxImage>
            <BoxImage>
              <img src="/images/getlinks6.jpg" alt="getlinks6" width="100%" height="100%" loading="lazy"/>
            </BoxImage>
          </ImageBoxes>
          <Hr/>
          <SmallTitle>VERSO HACK 2022</SmallTitle>
          <ImageBoxes>
            <BoxImage>
              <img src="/images/versocert.jpg" alt="verso certificate" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('verso-cert')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
          <ImageBoxes>
            <BoxImage>
              <img src="/images/verso1.jpg" alt="verso1" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('verso-desc-1')}</ImageBoxText>
            </BoxImage>
            <BoxImage>
              <img src="/images/verso3.jpg" alt="verso2" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('verso-desc-2')}</ImageBoxText>
            </BoxImage>
            <BoxImage>
              <img src="/images/verso4.jpg" alt="verso3" width="100%" height="100%" loading="lazy"/>
              <ImageBoxText>{t('verso-desc-3')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
          <p><br/></p>
          <Hr/>
          <SmallTitle>{t('games')}</SmallTitle>
          <ImageBoxes>
            <BoxImage>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/p9gJwQmi5VA`}
                  frameBorder="0"
                />
              </div>
              <ImageBoxText>{t('battleparkour')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
          <Hr/>
          <ImageBoxes>
            <BoxImage>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/PGnKGzeVHpc`}
                  frameBorder="0"
                />
              </div>
              <ImageBoxText>{t('treegame')}</ImageBoxText>
            </BoxImage>
          </ImageBoxes>
        </Collapsible>
      </CollapsableBackground>
    </Section>
  );
};

export default Gallery;