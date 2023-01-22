import React, { useEffect, useState } from 'react';
import axios from "axios";

export function ImageRender({userInput}){
    const [image, setImage] = useState("");
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: `food ${userInput}`},
            headers: {
              'X-RapidAPI-Key': '18a4b0517dmsh287b579413b5a7ep1645dbjsn3b7785018934',
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setImage(response.data.value[0].contentUrl)
          }).catch(function (error) {
              console.error(error);
          });

          
    }, [])
  return(
    <div style={{marginTop: '10rem'}}>
        {image && <img src={image} width="200px" height="200px"/>}
    </div>
  );
}

export default ImageRender;
