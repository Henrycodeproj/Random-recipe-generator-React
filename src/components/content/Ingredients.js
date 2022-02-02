const Ingredients = ({recipeItems}) => {
    return (
        recipeItems.map((measurements) =>
            <div>
            <img src= {'https://www.themealdb.com/images/ingredients/' + measurements[1] + '-Small.png'}/>
            <div>{measurements}</div>
            </div>
        )
    )
}

export default Ingredients