import React from 'react';
import Head from 'next/head';
import NewComponent from '../components/NewComponent';

function Home(){
  return(
    <div style={{marginTop: '10rem'}}>
        <Head>
            <meta name="description" property="og:description" content="A collection of MapleStory guides, resources and information."/>
        </Head>
        {/* <NewComponent/> */}
    </div>
  );
}

export default Home;
