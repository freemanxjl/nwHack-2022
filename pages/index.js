import React from 'react';
import Head from 'next/head';
import Results from './Results';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        <Results/>
    </div>
  );
}

export default Home;
