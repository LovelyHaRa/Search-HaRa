import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getIntialProps(ctx) {
    const initialPorps = await Document.getInitialProps(ctx);
    return { ...initialPorps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>Cocktail Recipes</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
