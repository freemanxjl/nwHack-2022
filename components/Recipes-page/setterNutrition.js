
export function setterNutrition(recipe, setNutrition) {
   
      
    
        const axios = require("axios");

        const nutrition = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {query: recipe},
        headers: {
            'X-RapidAPI-Key': '8cefc76bdfmsh06cac7263062103p149d13jsnea8f9a420168',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
            }
        };
        axios.request(nutrition).then((response) => {
            setNutrition(response.data);
        }).catch((error) => {
            console.error(error);
        }); 

   
}
export default setterNutrition;