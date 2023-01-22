import { useEffect, useState } from "react";
import setterImage from "./setterImage";
import setterNutrition from "./setterNutrition";
import setterRecipes from "./setterRecipes";
export function Recipes() {
    const [input, setInput] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [nutrition, setNutrition] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        setterRecipes("chicken",setRecipe);
        setterNutrition("chicken", setRecipe);
        setterImage("chicken", setImage);
    }, []);




}
