import React from 'react';
import Head from 'next/head';
import 'styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cocktail Recipes</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
