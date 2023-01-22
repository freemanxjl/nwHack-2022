

export function setterRecipes(input, setRecipe) {

     

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
export default setterRecipes;