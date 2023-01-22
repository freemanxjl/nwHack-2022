
import { List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import React  from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import Page3 from './Page3';


const RecipeList = styled(List)`
`;

export function Page2({input, setInput, recipe, setRecipe, chosenRecipe, setChosenRecipe}) {
    useEffect(() => {
    }, []);

      
    const handleSubmit = (event) => {
        event.preventDefault();  

        const axios = require("axios");

        const recipe = {
            method: 'GET',
            url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
            params: {query: input},
            headers: {
              'X-RapidAPI-Key': '08e5532811msh88cf7d8031a47a0p1e1db8jsn0d4bf4f97a9d',
              'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        axios.request(recipe).then(function (response) {
            setRecipe(response.data);
        }).catch(function (error) {
            console.error(error);
        });

       
    }

    return (
    <div className="nutrition">
        <form onSubmit={handleSubmit}>
            <label>Food:
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </label>
            <input type="submit" value="View Nutrition and Recipe"/>
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