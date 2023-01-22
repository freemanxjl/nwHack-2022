
import { List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import React  from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import Page3 from './Page3';
import setterRecipes from './setterRecipes';


const SearchBar = styled.input`
    height:3rem;
    border:none;
    width: 100% !important;
    max-width: 40rem;
    font-size:1.1rem;
    font-weight: 300;
    outline: none;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius:30px;
    border:1px solid #dcdcdc;
    padding-left: 3rem;

    &:hover {
        box-shadow: 1px 1px 8px 1px #dcdcdc;
    }

    &:focus-within{
        box-shadow: 1px 1px 8px 1px #dcdcdc;
        outline:none;
    }
`;

const RecipeList = styled(List)`
`;

export function Page2({input, setInput, recipe, setRecipe, chosenRecipe, setChosenRecipe}) {
    useEffect(() => {
    }, []);

      
    // const handleSubmit = (event) => {
    //     event.preventDefault();  

    //     const axios = require("axios");

    //     const recipe = {
    //         method: 'GET',
    //         url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    //         params: {query: input},
    //         headers: {
    //           'X-RapidAPI-Key': '08e5532811msh88cf7d8031a47a0p1e1db8jsn0d4bf4f97a9d',
    //           'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    //         }
    //     };
        
    //     axios.request(recipe).then(function (response) {
    //         setRecipe(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

       
    // }

    const handleSubmit = (event) => {
        event.preventDefault();  
        setterRecipes(input, setRecipe)
    }

    return (
    <div className="nutrition">
        <form onSubmit={handleSubmit}>
            <SearchBar type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </form>
        {recipe &&
            <RecipeList>
                {recipe.map((item, index) => 
                    <div>
                        <ListItem disablePadding key={index}>
                            <ListItemButton onClick={(e) => setChosenRecipe(item)}>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </div>

                )}
            </RecipeList>
        } 
        {chosenRecipe && <Page3 recipe={chosenRecipe}/>}
    </div>
  );

}
export default Page2;