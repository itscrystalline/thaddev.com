import Theme from '../styles/theme';

export default function App({Component, pageProps}) {
  return (
      <>
        <link rel="shortcut icon" href="favicon.ico"/>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
  );
}
 