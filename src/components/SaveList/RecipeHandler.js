import {useContext, useEffect, useState} from "react"
import { recipeItems } from "../../Context/context"
import { FaTrashAlt } from "react-icons/fa"
import { motion, useSpring } from "framer-motion"

const SaveRecipe = () =>{
    const {items, showRecipe} = useContext(recipeItems)

    const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('savedRecipes')))

    const saveRecipe = () => {

        let addRecipe = {
            Id:items.idMeal,
            title:items.strMeal
        }

        const array = []

        if (savedItems === null) {
            array.push(addRecipe)
            setSavedItems(array)
            localStorage.setItem('savedRecipes', JSON.stringify(array))
        } else {
            const newList = [...savedItems, addRecipe]
            setSavedItems(newList)
            localStorage.setItem('savedRecipes', JSON.stringify(newList))
        }
    }

    const deleteHandler = (id) =>{
        let currentSavedList = JSON.parse(localStorage.getItem('savedRecipes'))
        let changedList = currentSavedList.filter((items) => items.Id !== id)
        setSavedItems(changedList)
        localStorage.setItem('savedRecipes', JSON.stringify(changedList))
    }

    return (
        <div className="list_container">

            <div><button onClick={(e) => saveRecipe(e)}>Save Recipe</button></div>
            <div>
            <motion.button 
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            >
                test
            </motion.button>
            </div>

            {savedItems ? savedItems.map((listItems) =>
            <ul>
                <li key={listItems.Id}>
                    <a className = "list_links"onClick={() => showRecipe(listItems.Id)}>{listItems.title}</a>
                    <span><FaTrashAlt className="trash_delete" onClick={() => deleteHandler(listItems.Id)}/></span>
                </li>
            </ul>

            ):
            <div>You have no items in the list yet</div>}
        </div>
    )
}

export default SaveRecipe

// testing branches again