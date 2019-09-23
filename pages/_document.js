import Document, { Html, Head, Main, NextScript } from 'next/document';

const netlifyIdentityScript = `
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/static/admin/";
      });
    }
  });
}
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='sv'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: netlifyIdentityScript }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
