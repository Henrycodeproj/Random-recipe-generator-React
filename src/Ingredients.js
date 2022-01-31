const Ingredients = ({recipeItems}) => {
    return (
        recipeItems.map((measurements) =>
            <div className="ingredients">
            <img src= {'https://www.themealdb.com/images/ingredients/' + measurements[1] + '-Small.png'}/>
            <div>{measurements[0]} {measurements[1]}</div>
            </div>
        )
    )
}

export default Ingredients