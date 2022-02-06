import {useContext} from "react"
import { recipeItems } from "../../Context/context"

const SaveRecipe = () =>{
    const {items, showRecipe} = useContext(recipeItems)

    let currentList = JSON.parse(localStorage.getItem('savedRecipes'))

    const saveRecipe = () => {
        let addRecipe = {
            Id:items.idMeal,
            title:items.strMeal
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

    const deleteHandler = (id) =>{
        let currentSavedList = JSON.parse(localStorage.getItem('savedRecipes'))
        let changedList = currentSavedList.filter((items) => items.Id !== id)
        localStorage.setItem('savedRecipes', JSON.stringify(changedList))
    }

    return (
        <div>
            <div><button onClick={(e) => saveRecipe(e)}>Save Recipe</button></div>
            {currentList ? currentList.map((listItems) =>
            <ul>
            <li key={listItems.Id}>
                <a onClick={() => showRecipe(listItems.Id)}>{listItems.title}</a>
                <button onClick={() => deleteHandler(listItems.Id)}><span>Delete Item</span></button>
            </li>
            </ul>):
            <div>You have no items in the list yet</div>}
        </div>
    )
}

export default SaveRecipe

// testing branches again