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

export default ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{`Lotta Enocsson - ${title}`}</title>
        <meta lang='sv' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link
          href='https://fonts.googleapis.com/css?family=Hepta+Slab|Merriweather|Open+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header className='header' />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
      <style jsx global>{`
        ${typography.toString()}

        .hero {
          height: 400px;
        }
        h1 {
          color: ${red};
          margin: 48px 0;
        }

        html {
          background: #000;
        }
        body {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0) 0vh,
              rgba(0, 0, 0, 1) 30vh
            ),
            url('/static/img/IMG_2096.jpg');
          color: #fafafa;
          background-position: top;
          background-size: 100vw;
          background-repeat: no-repeat;
        }
        main {
          padding-top: 32px;
        }

        a {
          color: ${red};
        }

        .container {
          max-width: 1200px;
          padding: 0 8px;
          margin: 0 auto;
        }
        p,
        li {
          max-width: 50em;
        }

        @media (min-width: 900px) {
          body {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0) 0vh,
                rgba(0, 0, 0, 0.9) 50vh,
                rgba(0, 0, 0, 0.99) 100vh
              ),
              url('/static/img/IMG_2096.jpg');
          }
        }
      `}</style>
    </div>
  );
};
