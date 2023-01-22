
import {useState, useEffect} from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export function Recipe(){
    const [recipe, setRecipe] = useState("");

    useEffect(() => {
    }, []);

    const TestConnection = () => {
        

        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
            params: {query: 'italian wedding soup'},
            headers: {
              'X-RapidAPI-Key': '08e5532811msh88cf7d8031a47a0p1e1db8jsn0d4bf4f97a9d',
              'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setRecipe(response.data);
          }).catch(function (error) {
              console.error(error);
          });
           
    };

    return(
        <div>
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
            <button onClick={TestConnection}>Test Connection</button>
        </div>
    )
}

export default Recipe;

