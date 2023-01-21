import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import Axios from 'axios';

export function Nutrition() {
    const [variable, setVariable] = useState("");

    useEffect(() => {
    }, []);

 

    const testConnection = () => {
        setVariable("Test Button Clicked!");

        
        const axios = require("axios");

        const options = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {query: '1lb brisket with fries'},
        headers: {
            'X-RapidAPI-Key': '8cefc76bdfmsh06cac7263062103p149d13jsnea8f9a420168',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        }); 
    };

    return (
    <div className="nutrition">
        {variable}
        <button onClick={testConnection}>testConnection</button>
    </div>
  );

}
export default Nutrition;