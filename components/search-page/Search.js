import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import setterRecipes from '../Recipes-page/setterRecipes';

const SearchBar = styled.input`
    height:3rem;
    border:none;
    width: 100% !important;
    max-width: 40rem;
    font-size:1.1rem;
    font-weight: 300;
    outline: none;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius:30px;
    border:1px solid #dcdcdc;
    padding-left: 3rem;

    &:hover {
        box-shadow: 1px 1px 8px 1px #dcdcdc;
    }

    &:focus-within{
        box-shadow: 1px 1px 8px 1px #dcdcdc;
        outline:none;
    }
`;

const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    margin-bottom: 5rem;
    margin-top: -5rem;
    user-select: none;
`;

export function Search({input, setInput, setSearchTerm, setRecipe}){
    const handleSubmit = (event) => {
        event.preventDefault();  
        setSearchTerm(input);
        setterRecipes(input, setRecipe)
    }
    return(
        <CenterDiv>
        <Title>Foodle</Title>

        <form onSubmit={handleSubmit} style={{width:"100%", justifyContent:"center", alignItems:"center", flexDirection:"row", display:"flex"}}>
            <SearchBar type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </form>
        </CenterDiv>
    );
  }
  
  export default Search;