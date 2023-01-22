export function ChosenNutrition ({nutrition}) {
    return (
        <div>
            {"Name : " + nutrition[0].name}
            <br></br>
            {"Calories : " + nutrition[0].calories}
            <br></br>
            {"Carbohydrates (g) : " + nutrition[0].carbohydrates_total_g}
            <br></br>
            {"Cholesterol (mg) : " + nutrition[0].cholesterol_mg}
            <br></br>
        </div>
    )
}

export default ChosenNutrition;