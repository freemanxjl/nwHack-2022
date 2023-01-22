export function ChosenRecipe ({recipe}) {

return (
    <div>
        {"Title : " + recipe.title}
        <br></br>
        {"Ingredients : " + recipe.ingredients}
        <br></br>
        {"Servings : " + recipe.servings}
        <br></br>
        {"Instructions : " + recipe.instructions}
        <br></br>
    </div>
  );
}

export default ChosenRecipe;