import React from 'react';
import Head from 'next/head';
import Results from './Results';
import { Recipes } from '../components/Recipes-page/Recipes';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        <Recipes/>
    </div>
  );
}

export default Home;
