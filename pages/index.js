import Layout from '../components/Layout';
import { grey, gold, red, lightRed } from '../colors';
import verkstad from '../content/verkstad.md';

export default () => (
  <Layout>
    <h1>Lotta Enocsson</h1>
    <div className='teaser'>Skulptör och målare i Stockholm</div>
    <div className='presentation'>
      <p>
        Lotta Enocssons skulpturer är ofta tysta möten med det vardagliga.
        Föremål som vi är väl bekanta med förvandlas och ges en annan betydelse.
        Likaså finns i måleriet fragment av det vi kan känna igen och förhålla
        oss till. Med en dramatik och med kontraster som känns igen som delar av
        livets olika skeden. Lotta arbetar vanligen i traditionella material som
        brons och sten och målar i olja på duk, trä eller akrylglas.
      </p>
      <picture>
        <img src='/static/Lotta_Enocsson.jpg' alt='Lotta Enocsson' />
      </picture>
    </div>
    <div className='body'>
      <div className='gallery'>
        <img src='/static/en-liten-stund.jpg' />
        <img src='/static/presenning.jpg' />
      </div>
      <div className='newsfeed'>
        <h2>Aktuellt</h2>
        <article className='article'>
          <h3>{verkstad.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: verkstad.html }} />
        </article>
        <article className='article'>
          <h3>Utställning på ett slott</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            nibh et est bibendum tempor. Mauris ut aliquam augue. Mauris mollis
            lorem quam. Nunc felis nisl, fermentum a diam quis, accumsan
            sagittis purus. Donec nec placerat leo. Donec id mi est. Vivamus
            orci lacus, consequat eu convallis et, fringilla vitae dui.
            Curabitur ut velit non nibh tempor facilisis. Fusce accumsan aliquam
            lectus, at pharetra erat maximus ut.
          </p>
          <p>
            Vestibulum ullamcorper, nibh at venenatis lacinia, neque risus
            dignissim justo, in vulputate libero mauris ac tortor. Maecenas eros
            velit, tincidunt ut egestas vitae, rutrum a nulla. Fusce ut
            porttitor eros. Aliquam luctus lorem eget justo accumsan pharetra.
            In sodales mi scelerisque, pulvinar tortor quis, ultricies lacus.
            Fusce at orci suscipit, laoreet ipsum vitae, placerat massa.
            Vestibulum accumsan sapien at ipsum pharetra fringilla.
          </p>
        </article>
        <article className='article'>
          <h3>Projekt i Sollentuna</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            nibh et est bibendum tempor. Mauris ut aliquam augue. Mauris mollis
            lorem quam. Nunc felis nisl, fermentum a diam quis, accumsan
            sagittis purus. Donec nec placerat leo. Donec id mi est. Vivamus
            orci lacus, consequat eu convallis et, fringilla vitae dui.
            Curabitur ut velit non nibh tempor facilisis. Fusce accumsan aliquam
            lectus, at pharetra erat maximus ut.
          </p>
        </article>
      </div>
    </div>

    <style jsx>{`
      .teaser {
        text-align: center;
        font-size: 24px;
        margin-bottom: 32px;
      }

      .presentation {
        margin-bottom: 64px;
        font-size: 1.1rem;
        font-family: 'Merriweather';
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
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-gap: 32px;
        }
      }
    `}</style>
  </Layout>
);
