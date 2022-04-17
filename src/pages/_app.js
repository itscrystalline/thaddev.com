import Theme from '../styles/theme';

export default function App({Component, pageProps}) {
  return (
      <>
        <title>ThadDev's Site</title>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
  );
}
 