export function ChosenNutrition({nutrition}) {
    return (
        <div>
            {"Name : " + nutrition[0].name}
            <br></br>
            {"Calories : " + nutrition[0].calories}
            <br></br>
            {"Carbohydrates (g) : " + nutrition[0].carbohydrates_total_g}
            <br></br>
            {"Protien (g): " + nutrition[0].protein_g}
            <br></br>
            {"Total Fat (g) : " + nutrition[0].protein_g}
            <br></br>
            {"Cholesterol (mg) : " + nutrition[0].cholesterol_mg}
            <br></br>
            {"Sugar (mg) : " + nutrition[0].sugar_g}
        </div>
    )
}

export default ChosenNutrition;