import React from 'react';
import Head from 'next/head';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Global CSS
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <div id="container">
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div id="main-content"><Component {...pageProps}/></div>
    </div>
  )
}

export default MyApp
