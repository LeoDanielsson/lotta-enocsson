import Layout from '../components/Layout';
import News from '../components/News';
import { grey, gold, red, lightRed } from '../colors';
import verkstad from '../content/verkstad.md';

export default () => (
  <Layout>
    <h1>Lotta Enocsson</h1>
    <div className='teaser'>Målare och skulptör i Stockholm</div>
    <div className='presentation'>
      <p>
        Lotta Enocssons skulpturer är ofta tysta möten med det vardagliga.
        Föremål som vi är väl bekanta med förvandlas och ges en annan betydelse.
        Likaså finns i måleriet fragment av det vi kan känna igen och förhålla
        oss till. Med en dramatik och med kontraster som känns igen som delar av
        livets olika skeden. Lotta arbetar vanligen i traditionella material som
        brons och sten och målar i olja på duk, trä eller akrylglas.
      </p>
    </div>
    <div className='body'>
      <div className='gallery'>
        <img src='/static/paintings/IMG_2094.JPG' />
        <img src='/static/paintings/IMG_2636.jpg' />
        <img src='/static/paintings/IMG_2338.jpg' />
      </div>
    </div>

    <style jsx>{`
      .teaser {
        font-size: 24px;
        margin-bottom: 32px;
      }

      .presentation {
        margin-bottom: 64px;
        font-size: 1.1rem;
      }

      .article {
        border-top: 1px solid ${gold};
        padding-top: 24px;
        margin-bottom: 32px;
      }

      @media (min-width: 900px) {
        .presentation {
          display: flex;
          justify-content: space-between;
        }

        .presentation * {
          margin: 0;
        }

        .presentation picture {
          margin-left: 16px;
        }

        .body {
        }

        .gallery {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 32px;
        }
      }
    `}</style>
  </Layout>
);
