import Theme from '../styles/theme';
import {appWithTranslation} from 'next-i18next';

const App = ({Component, pageProps}) => {
  return (
    <>
      <link rel="shortcut icon" href="favicon.ico"/>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default appWithTranslation(App);
 