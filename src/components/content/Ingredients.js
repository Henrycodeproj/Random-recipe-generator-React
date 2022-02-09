const Ingredients = ({recipeItems}) => {
    return (
        recipeItems.map((measurements) =>
            <div>
            <img className = "ingredient_image" src= {'https://www.themealdb.com/images/ingredients/' + measurements[1] + '-Small.png'}/>
            <div className="test">{measurements[0]} {measurements[1]}</div>
            </div>
        )
    )
}

export default Ingredients