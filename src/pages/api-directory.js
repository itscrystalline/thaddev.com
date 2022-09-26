import {AltLayout} from "../layout/AltLayout";
import {
  darkTheme,
  Section,
  SectionText,
  SectionTitle,
  StyledTableCell,
  StyledTableRow,
  Title
} from "../styles/GlobalComponents";
import {NavLink} from "../components/Header/HeaderStyles";
import React from "react";
import {Link, Paper, Table, TableBody, TableContainer, ThemeProvider} from "@mui/material";
import {HttpVerb} from "../components/HttpVerb/HttpVerb";
import {computerControl, mapsSystem, otherApis, timerAPIs, timerInstanceAPIs} from "../constants/constants";
import {NextSeo} from "next-seo";
import ChangeLanguageButton from "../styles/GlobalComponents/Button";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const APIDirectory = () => {
  const router = useRouter();
  const {t} = useTranslation(['api-directory', 'common']);
  return (
    <>
      <NextSeo title="ThadDev's Site - API Directory"/>
      <AltLayout noTagLinks>
        <Section>
          <SectionTitle>{t('apidirectory')}</SectionTitle>
          <SectionText>
            {t('desc-1')} <NavLink href="https://github.com/MyNameTsThad/project-apis">Project
            APIs</NavLink> {t('desc-2')}
            <br/> <br/>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    <StyledTableRow key="Main Endpoint URL">
                      <StyledTableCell component="th" scope="row">
                        <b>{t('mainendpoint')}</b>
                      </StyledTableCell>
                      <StyledTableCell align="right"><Link
                        href="https://thaddev.com/api-v1">https://api.thaddev.com/api-v1</Link></StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>{t('timer')}</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {timerAPIs.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{t(row.name)}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>{t('timerinstance')}</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {timerInstanceAPIs.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{t(row.name)}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>{t('computercontrol')}</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {computerControl.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{t(row.name)}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>{t('maps')}</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {mapsSystem.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{t(row.name)}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>{t('other')}</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {otherApis.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{t(row.name)}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
          </SectionText>
        </Section>
      </AltLayout>
      <ChangeLanguageButton/>
    </>
  );
}

function getVerbColor(verb) {
  switch (verb) {
    case "GET":
      return <HttpVerb color="#998fd5"><code>GET</code></HttpVerb>;
    case "POST":
      return <HttpVerb color="#80b158"><code>POST</code></HttpVerb>;
    case "PUT":
      return <HttpVerb color="#d28b2f"><code>PUT</code></HttpVerb>;
    case "PATCH":
      return <HttpVerb color="#d4bb1e"><code>PATCH</code></HttpVerb>;
    case "DELETE":
      return <HttpVerb color="#ae5654"><code>DELETE</code></HttpVerb>;
    default:
      return <HttpVerb color="#2a2a2a"><code>{verb}</code></HttpVerb>;
  }
}

export async function getServerSideProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'api-directory'])),
    }
  };
}

export default APIDirectory;