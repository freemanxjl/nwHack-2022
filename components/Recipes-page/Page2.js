
import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Page3 from './Page3';


const StyledDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export function Page2() {
    const [input, setInput] = useState("");
    const [recipe, setRecipe] = useState("");
    const [nutrition, setNutrition] = useState("");
    const [image, setImage] = useState("");
    const [chosenRecipe, setChosenRecipe] = useState(null);

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
        <StyledDiv>
            {recipe.map((item, index) => 
            <Button variant = "link" onClick={(e) => setChosenRecipe(item)}>{item.title} </Button>)
            }
        </StyledDiv>

            // {!recipes && !chosenRecipe && <Search></Search>}
            // {recipes && !chosenRecipe && <SearchResults></SearchResults>}
            // {recipes && chosenRecipe && <RecipePage chosenRecipe={chosenRecipe}></RecipePage>}
} 
    {chosenRecipe && <Page3 recipe={chosenRecipe}/>}
    </div>
  );

}
export default Page2;