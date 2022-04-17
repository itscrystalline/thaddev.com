import Theme from '../styles/theme';

export default function App({Component, pageProps}) {
  return (
      <>
        <title>ThadDev's Site</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
  );
}
 