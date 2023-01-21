import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import Head from 'next/head';

import { getInitialTheme, GlobalStyle } from '../special/GlobalTheme';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Global CSS
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);

  return(
    <div id="container">
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
              {/* <MainNavbar setTheme={setTheme} theme={theme}/> */}
              <div id="main-content"><Component {...pageProps}/></div>
        </>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
