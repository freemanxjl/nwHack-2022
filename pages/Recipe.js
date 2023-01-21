
import {useState, useEffect} from 'react'


export function Recipe(){
    const [variable, setVariable] = useState("");

    useEffect(() => {
    }, []);

    const TestConnection = () => {
        setVariable("Test Button Clicked!");

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
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
           
    };

    return(
        <div>
            {variable}
            <button onClick={TestConnection}>Test Connection</button>
        </div>
    )
}

export default Recipe;

