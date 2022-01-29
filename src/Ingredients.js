const Ingredients = ({recipeItems}) => {
    console.log(recipeItems, 'sadasdadad')
    return (
        recipeItems.map((measurements) =>
            <div>
            <img src= {'https://www.themealdb.com/images/ingredients/' + measurements[1] + '-Small.png'}/>
            <span>{measurements}</span>
            </div>
        )
    )
}

export default Ingredients