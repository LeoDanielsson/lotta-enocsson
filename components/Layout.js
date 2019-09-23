import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import { black, white, red } from '../colors';

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
  useEffect(() => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-92249813-2');
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{`Lotta Enocsson - ${title}`}</title>
        <meta name='Description' content='Målare och skulptör i Stockholm.' />
        <meta lang='sv' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link
          href='https://fonts.googleapis.com/css?family=Hepta+Slab|Merriweather|Open+Sans&display=swap'
          rel='stylesheet'
        />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-92249813-2'
        ></script>
        <script></script>
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
          background: ${black};
        }
        body {
          color: ${white};
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

        img {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};
