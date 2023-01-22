import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
        
export function Random(){
    const [meal, setMeal] = useState("");
    const [image, setImage] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");

    const fetchData = async () => {
        const axios = require("axios")
        const random = {
            method: ".GET",
            url: "https://www.themealdb.com/api/json/v1/1/random.php",
        };
    
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
            const {strCategory, strMealThumb, strMeal, strSource} = response.data.meals[0];
            setMeal(strMeal);
            setCategory(strCategory);
            setSource(strSource),
            setImage(strMealThumb);
        }).catch(function (error) {
            console.error(error);
        });
    }

useEffect(() => {
    fetchData();
    }, []);

    function refreshPage() {
        fetchData();
      }

    return(
        <div align="center">
            <div>
                <h2>
                    {meal}
                </h2>
            </div>
            <div>
                <Image src={image} width = {350} length = {350}> 
                    
                </Image>
            </div>
            <div>
                <h5>
                Category: {category}
                </h5>
            </div>
            <div>
                <h5>
                    Source: 
                    <a href="{source}"> {source}</a>
                </h5>
            </div>
            <div>
                <Button variant="primary" onClick={refreshPage}>
                    Generate a New Recipe
                </Button>{' '}
            </div>
        </div>
    )
}

export default Random;
