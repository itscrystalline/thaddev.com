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

    /* ff 3.6+ */
    background: -moz-linear-gradient(90deg, rgba(31, 31, 31, 1) 0%, rgba(32, 32, 32, 1) 50%, rgba(31, 31, 31, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background: -webkit-linear-gradient(90deg, rgba(31, 31, 31, 1) 0%, rgba(32, 32, 32, 1) 50%, rgba(31, 31, 31, 1) 100%);

    /* opera 11.10+ */
    background: -o-linear-gradient(90deg, rgba(31, 31, 31, 1) 0%, rgba(32, 32, 32, 1) 50%, rgba(31, 31, 31, 1) 100%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1F1F1F', endColorstr='#1F1F1F', GradientType=0);

    /* ie 10+ */
    background: -ms-linear-gradient(90deg, rgba(31, 31, 31, 1) 0%, rgba(32, 32, 32, 1) 50%, rgba(31, 31, 31, 1) 100%);

    /* global 94%+ browsers support */
    background: linear-gradient(90deg, rgba(31, 31, 31, 1) 0%, rgba(32, 32, 32, 1) 50%, rgba(31, 31, 31, 1) 100%);

    color: ${props => props.theme.colors.primary1};
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
