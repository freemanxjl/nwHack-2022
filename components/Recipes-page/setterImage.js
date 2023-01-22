



export function setterImage(recipe, setImage) {
    
      
    

        const axios = require("axios");

        
        

        const image = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: recipe},
            headers: {
              'X-RapidAPI-Key': '18a4b0517dmsh287b579413b5a7ep1645dbjsn3b7785018934',
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
          };
          
          axios.request(image).then((response) => {
              setImage(response.data.value[0].contentUrl)
          }).catch((error) => {
              console.error(error);
          });
    }


export default setterImage;