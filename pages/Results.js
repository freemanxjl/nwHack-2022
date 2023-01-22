import { TextField } from '@material-ui/core';
import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export function Results() {
    const [input, setInput] = useState("");
    const [recipe, setRecipe] = useState("");
    const [nutrition, setNutrition] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
    }, []);

      
    const handleSubmit = (event) => {
        event.preventDefault();  

        const axios = require("axios");

        const nutrition = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {query: input},
        headers: {
            'X-RapidAPI-Key': '8cefc76bdfmsh06cac7263062103p149d13jsnea8f9a420168',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
            }
        };
        axios.request(nutrition).then(function (response) {
            setNutrition(response.data);
        }).catch(function (error) {
            console.error(error);
        }); 

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

        const image = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: input},
            headers: {
              'X-RapidAPI-Key': '18a4b0517dmsh287b579413b5a7ep1645dbjsn3b7785018934',
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
          };
          
          axios.request(image).then(function (response) {
              setImage(response.data.value[0].contentUrl)
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
            {"Title : " + recipe[0].title}
            <br></br>
            {"Ingredients : " + recipe[0].ingredients}
            <br></br>
            {"Servings : " + recipe[0].servings}
            <br></br>
            {"Instructions : " + recipe[0].instructions}
            <br></br>
            </StyledDiv>}

        {nutrition && 
        <StyledDiv>
            {"Name : " + nutrition[0].name}
            <br></br>
            {"Calories : " + nutrition[0].calories}
            <br></br>
            {"Carbohydrates (g) : " + nutrition[0].carbohydrates_total_g}
            <br></br>
            {"Cholesterol (mg) : " + nutrition[0].cholesterol_mg}
            <br></br>
            </StyledDiv>}
        {image && <img src={image} width="200px" height="200px"/>}
    </div>
  );

}
export default Results;