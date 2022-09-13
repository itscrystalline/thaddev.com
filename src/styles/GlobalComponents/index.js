import styled from 'styled-components'
import {createTheme, TableCell, tableCellClasses, TableRow} from "@mui/material";

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"};
  margin: 0 auto;
  max-width: 1140px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};
  font-size-adjust: 0.534;
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '82px' : '76px'};
  width: auto;
  max-width: 90%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '46px' : '38px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '42px' : '50px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 90%;
  }
`

export const Title = styled.h3`
  font-size-adjust: 0.534;
  font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};
  font-weight: 600;
  font-size: ${(props) => props.main ? '55px' : '36px'};
  line-height: ${(props) => props.main ? '62px' : '46px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '41px' : '33px'};
    line-height: ${(props) => props.main ? '21px' : '13px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '18px' : '22px'};
    line-height: ${(props) => props.main ? '22px' : '30px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  font-size-adjust: 0.534;
  font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};
  max-width: 1140px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);


  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 512px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  align-self: center;
  background: ${(props) => props.colorAlt ?
          'linear-gradient(270deg, #FF8800 0%, #FFAA00 100%)' :
          'linear-gradient(270deg, #FF8800 0%, #FFAA00 100%)'};

  margin: ${(props) => props.divider ? "4rem 0" : ""};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 384px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 256px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({large}) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({large}) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({large}) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({large}) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({nav}) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({large}) => large ? '32px' : '16px'};
  }
`

export const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#202020",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Niarmit', 'Plus Jakarta Sans'],
    fontSize: "20rem",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-size: 1.5rem;
          font-display: swap;
          font-weight: 600;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

