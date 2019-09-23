import Head from 'next/head';

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-92249813-2');
`;

export default ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name='Description' content='Målare och skulptör i Stockholm.' />
    <meta lang='sv' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <link
      rel='apple-touch-icon'
      sizes='57x57'
      href='/static/apple-icon-57x57.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='60x60'
      href='/static/apple-icon-60x60.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='72x72'
      href='/static/apple-icon-72x72.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='76x76'
      href='/static/apple-icon-76x76.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='114x114'
      href='/static/apple-icon-114x114.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='/static/apple-icon-120x120.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='144x144'
      href='/static/apple-icon-144x144.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/static/apple-icon-152x152.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/apple-icon-180x180.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='192x192'
      href='/static/android-icon-192x192.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='96x96'
      href='/static/favicon-96x96.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicon-16x16.png'
    />
    <link rel='manifest' href='/static/manifest.json' />
    <meta name='msapplication-TileColor' content='#1f1f1f' />
    <meta
      name='msapplication-TileImage'
      content='/static/ms-icon-144x144.png'
    />
    <meta name='theme-color' content='#1f1f1f' />
    <link
      href='https://fonts.googleapis.com/css?family=Hepta+Slab|Merriweather|Open+Sans&display=swap'
      rel='stylesheet'
    />
    <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=UA-92249813-2'
    ></script>
    <script dangerouslySetInnerHTML={{ __html: gaScript }} />
  </Head>
);
