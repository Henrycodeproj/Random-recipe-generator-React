import { useState } from "react"

const SaveRecipe = ({itemID}) =>{

    let currentList = JSON.parse(localStorage.getItem('savedRecipes'))

    const saveRecipe = () => {
        let addRecipe = {
            Id:itemID.idMeal,
            title:itemID.strMeal
        }
        const array = []
        if (currentList === null) {
            array.push(addRecipe)
            localStorage.setItem('savedRecipes', JSON.stringify(array))
        } else {
            const newList = [...currentList, addRecipe]
            localStorage.setItem('savedRecipes', JSON.stringify(newList))
        }
    }
    return (
        <div>
            <div><button onClick={(e) => saveRecipe(e)}>Save Recipe</button></div>
            {currentList? currentList.map((listItems) =>
            <a>{listItems.title}</a>):
            <div>You have no items in the list yet</div>}
        </div>
    )
}

export default SaveRecipe

// testing branches again