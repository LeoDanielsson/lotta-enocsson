import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import { eggshell, red, grey, lightRed } from '../colors';

import Typography from 'typography';
import Footer from './Footer';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
  headerFontFamily: ['Hepta Slab', 'serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
});

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>Lotta Enocsson - Skulptör</title>
        <meta lang='sv' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link
          href='https://fonts.googleapis.com/css?family=Hepta+Slab|Merriweather|Open+Sans&display=swap'
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
          color: ${red};
        }
        body {
          background: #1f1f1f;
          color: #fafafa;
          padding: 16px;
        }
        main {
          background: #1f1f1f;
          padding-top: 32px;
        }

        a {
          color: ${red};
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }
        p,
        li {
          max-width: 50em;
        }
      `}</style>
    </div>
  );
};
