import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import { eggshell, red, grey } from '../colors';

import Typography from 'typography';
import Footer from './Footer';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
  headerFontFamily: ['Merriweather', 'serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
});

export default ({ children }) => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/static/admin/';
          });
        }
      });
    }
  });
  return (
    <div>
      <Head>
        <title>Lotta Enocsson - Skulptör</title>
        <meta lang='sv' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link
          href='https://fonts.googleapis.com/css?family=Merriweather|Open+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
      <style jsx global>{`
        ${typography.toString()}
        h1 {
          text-align: center;
          color: ${red};
        }
        body {
          background: ${grey};
          color: black;
        }
        main {
          background: ${eggshell};
        }

        .container {
          max-width: 1200px;
          padding: 32px 16px;
          margin: 0 auto;
          min-height: 100vh;
        }
        p {
          max-width: 50em;
        }
      `}</style>
    </div>
  );
};
