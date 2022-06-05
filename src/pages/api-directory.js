import {AltLayout} from "../layout/AltLayout";
import {Section, SectionText, SectionTitle, Title} from "../styles/GlobalComponents";
import {NavLink} from "../components/Header/HeaderStyles";
import React from "react";
import {
  createTheme,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  ThemeProvider
} from "@mui/material";
import {styled} from '@mui/material/styles';
import {HttpVerb} from "../components/HttpVerb/HttpVerb";
import {computerControl, otherApis, timerAPIs, timerInstanceAPIs} from "../constants/constants";
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'supermarket'],
    fontSize: "17rem",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

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
                        href="https://thaddev.com/api-v1">https://thaddev.com/api-v1</Link></StyledTableCell>
                      <StyledTableCell align="right"><Link
                        href="https://thaddev.xyz/api-v1">https://thaddev.xyz/api-v1</Link></StyledTableCell>
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