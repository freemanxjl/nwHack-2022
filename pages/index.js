import React from 'react';
import Head from 'next/head';
import Results from './Results';
import { Page2 } from "../components/Recipes-page/Page2"
import { Recipes } from '../components/Recipes-page/Recipes';
import Search from './Search';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        <Search/>
        <Page2/>
    </div>
  );
}

export default Home;
