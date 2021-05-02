import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Search HaRa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
