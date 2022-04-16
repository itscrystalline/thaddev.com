import Theme from '../styles/theme';

export default function App({Component, pageProps}) {
  return (
      <>
        <title>ThadDev's Portfolio</title>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
  );
}
 