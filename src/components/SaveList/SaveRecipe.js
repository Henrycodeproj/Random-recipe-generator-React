const SaveRecipe = ({itemID}) =>{
    console.log(itemID)

    const saveRecipe = () => {
        let ID = itemID.idMeal
        let title = itemID.strMeal
        localStorage.setItem('savedRecipes', JSON.stringify({'Id':ID, 'title':title}))
    }

    let get = JSON.parse(localStorage.getItem('savedRecipes'))

    return (
        <section>
            <button onClick={() => saveRecipe()}>Save Recipe</button>
            {localStorage.getItem('savedRecipes') ? <div>{get.title}</div>:<div>You currently do not have any recipes saved</div>}
        </section>
    )
}

export default SaveRecipe

// testing branches again