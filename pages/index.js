import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NewComponent from '../components/NewComponent';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        <NewComponent/>
    </div>
  );
}

export default Home;
