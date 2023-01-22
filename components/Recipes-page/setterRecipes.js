

export function setterRecipes(input, setRecipe) {

        const axios = require("axios");

        

        const recipe = {
            method: 'GET',
            url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
            params: {query: input},
            headers: {
              'X-RapidAPI-Key': '08e5532811msh88cf7d8031a47a0p1e1db8jsn0d4bf4f97a9d',
              'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        axios.request(recipe).then(function (response) {
            setRecipe(response.data[0]);
        }).catch(function (error) {
            console.error(error);
        });

        


//     return (
//     <div className="nutrition">
//         <form onSubmit={handleSubmit}>
//             <label>Food:
//             <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
//             </label>
//             <input type="submit" value="View Nutrition and Recipe"/>
//         </form>
//         {recipe && 
//         <StyledDiv>
//             {"Title : " + recipe[0].title}
//             <br></br>
//             {"Ingredients : " + recipe[0].ingredients}
//             <br></br>
//             {"Servings : " + recipe[0].servings}
//             <br></br>
//             {"Instructions : " + recipe[0].instructions}
//             <br></br>
//             </StyledDiv>}

        
//     </div>
//   );

}
export default setterRecipes;