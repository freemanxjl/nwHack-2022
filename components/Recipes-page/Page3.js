import setterNutrition from "./setterNutrition";
import setterImage from "./setterImage";
import ChosenRecipe from "./chosenRecipe";
import { useEffect, useState } from "react";
import ChosenNutrition from "./chosenNutrition";

export function Page3({recipe}) {
    const [image, setImage] = useState("");
    const [nutrition, setNutrition] = useState("");

    useEffect(() => {
        setterImage(recipe.title, setImage);
        setterNutrition(recipe.title, setNutrition);
    },[recipe]);

    return (
    <div>
        {image && <img src={image} width="200px" height="200px"/>}
        {nutrition && <ChosenNutrition nutrition={nutrition}></ChosenNutrition>}
        <ChosenRecipe recipe={recipe}/>
    </div>
    )
}

export default Page3;


