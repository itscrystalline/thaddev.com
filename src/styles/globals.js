import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ;

  @font-face {
    font-family: "JetBrains Mono";
    src: url("/fonts/JetBrainsMono-Regular.woff2");
  }

  @font-face {
    font-family: "supermarket";
    src: url("/fonts/supermarket.ttf");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    //font-size-adjust: 0.534;
  }

  body {
    font-size-adjust: 0.534;
    font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};

    /* global 94%+ browsers support */
    background: ${props => props.theme.colors.dark2};

    color: ${props => props.theme.colors.gold1};
    cursor: default;

  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  code {
    font-family: "JetBrains Mono", monospace;
  }

`;

export default GlobalStyles;
