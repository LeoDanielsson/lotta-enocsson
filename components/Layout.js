import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from './Head';
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

export default ({ title, metaTitle, children }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    if (window && window.ga) {
      window.ga('set', 'page', pathname);
      window.ga('send', 'pageview');
    }
  }, []);

  return (
    <div>
      <Head title={metaTitle || `Lotta Enocsson - ${title}`} />
      <Header className='header' />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
      <style jsx global>{`
        ${typography.toString()}
        * {
          box-sizing: border-box;
        }
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
