import setterNutrition from "./setterNutrition";
import setterImage from "./setterImage";
import setterRecipes from "./setterRecipes";
import { ChosenRecipe } from "./chosenRecipe";
import { useEffect, useState } from "react";
import { ChosenNutrition } from "./chosenNutrition";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, carbs, protein, totalfat, cholestrol, sugar) {
  return { name, calories, carbs, protein, totalfat, cholestrol, sugar };
}




export function BasicTable({nutrition}) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Total Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Cholesterol&nbsp;(g)</TableCell>
              <TableCell align="right">Sugar&nbsp;(g)</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow
                key={nutrition.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {nutrition.name}
                </TableCell>
                <TableCell align="right">{nutrition.calories}</TableCell>
                <TableCell align="right">{nutrition.carbohydrates_total_g}</TableCell>
                <TableCell align="right">{nutrition.protein_g}</TableCell>
                <TableCell align="right">{nutrition.fat_total_g}</TableCell>
                <TableCell align="right">{nutrition.cholesterol_mg}</TableCell>
                <TableCell align="right">{nutrition.sugar_g}</TableCell>
              </TableRow>
        
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  

export function Page3({recipe}) {
    const [image, setImage] = useState("");
    const [nutrition, setNutrition] = useState(null);

    useEffect(() => {
        setterImage(recipe.title, setImage);
        setterNutrition(recipe.title, setNutrition);
    },[recipe]);

    

    return (
    <div>
        {image && <img src={image} width="200px" height="200px"/>}
        {nutrition && <BasicTable nutrition={nutrition[0]}/>}
        <ChosenRecipe recipe={recipe}/>
    </div>
    )
}

export default Page3;


