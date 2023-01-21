import React from 'react';
import Head from 'next/head';
import Recipe from './Recipe';
import Nutrition from './Nutrition';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        <Recipe/>
        <Nutrition/>
    </div>
  );
}

export default Home;
