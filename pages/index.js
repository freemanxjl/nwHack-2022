import React, {useState} from 'react';
import Head from 'next/head';
import { Page2 } from "../components/Recipes-page/Page2"
import Search from '../components/search-page/Search';
import {Page3} from '../components/Recipes-page/Page3';

export function Home(){
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [chosenRecipe, setChosenRecipe] = useState(null);

  return(
    <div>
        <Head>
            <meta name="description" property="og:description" content=""/>
        </Head>
        {!searchTerm && !recipe && !chosenRecipe && <Search input={input} setInput={setInput} setSearchTerm={setSearchTerm} setRecipe={setRecipe}/>}
        {searchTerm && recipe && !chosenRecipe && <Page2 input={input} setInput={setInput} recipe={recipe}
               setRecipe={setRecipe} chosenRecipe={chosenRecipe}
               setChosenRecipe={setChosenRecipe}/>}
        {searchTerm && recipe && chosenRecipe && <Page3 recipe={chosenRecipe}/>}
    </div>
  );
}

export default Home;
