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

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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
    fontFamily: 'Plus Jakarta Sans',
    fontSize: "15rem",
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
  return (
    <>
      <NextSeo title="ThadDev's Site - API Directory"/>
      <AltLayout noTagLinks>
        <Section>
          <SectionTitle>API Directory</SectionTitle>
          <SectionText>
            This page contains a list of all the API endpoints available to
            the application. This API is powered by the <NavLink href="https://github.com/MyNameTsThad/project-apis">Project
            APIs</NavLink> project.
            <br/> <br/>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    <StyledTableRow key="Main Endpoint URL">
                      <StyledTableCell component="th" scope="row">
                        <b>Main Endpoint URL</b>
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
            <Title>Timer API</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {timerAPIs.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{row.name}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>Timer Instance API</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {timerInstanceAPIs.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{row.name}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>Computer Control API</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {computerControl.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{row.name}</b>
                        </StyledTableCell>
                        <StyledTableCell align="right"><Link>{row.apiLink}</Link></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <br/>
            <Title>Other API Endpoints</Title>
            <ThemeProvider theme={darkTheme}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableBody>
                    {otherApis.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {getVerbColor(row.method)}&nbsp;&nbsp;<b>{row.name}</b>
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

export default APIDirectory;