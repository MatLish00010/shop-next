import React from 'react';
import Head from 'next/head';

import Header from 'components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
