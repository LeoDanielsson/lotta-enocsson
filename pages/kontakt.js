import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Kontakt</h1>
    <address className='grid'>
      <address>
        <p>
          <div>Lotta Enocsson</div>
          <div>Ateljé Vinterviken hus 36</div>
          <div>117 65 Stockholm</div>
        </p>
        <p>
          <span>Telefon: </span>
          <a href='tel:0736249285'>073-624 92 85</a>
        </p>
        <p>
          <span>E-post: </span>
          <a href='mailto:lottaenocsson@hotmail.com'>
            lottaenocsson@hotmail.com
          </a>
        </p>
        <h2>Länkar</h2>
        <p>
          <a href='https://renqvistsverkstad.se' target='_blank'>
            Renqvists verkstad
          </a>
        </p>
        <p>
          <a href='http://www.skulptorforbundet.se/' target='_blank'>
            Skulptörförbundet
          </a>
        </p>
        <p>
          <a
            href='https://www.svenskakonstnarer.se/start/plus_artist.php?chr=5&aid=1089'
            target='_blank'
          >
            Lotta Enocsson på svenskakonstnarer.se
          </a>
        </p>
        <p>
          <a href='http://konstnarshuset.org/' target='_blank'>
            Konstnärshuset
          </a>
        </p>
      </address>
      <img src='/static/kontakt.jpg' />
    </address>
    <style jsx>{`
      address {
        max-width: 1200px;
        font-style: normal;
        text-align: left;
      }

      @media (min-width: 900px) {
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>
  </Layout>
);
