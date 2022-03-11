import {useContext, useState} from "react"
import { recipeItems } from "../../Context/context"
import { FaTrashAlt } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const SaveRecipe = () =>{
    const {items, showRecipe} = useContext(recipeItems)

    const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('savedRecipes')))

    const saveRecipe = () => {

        let addRecipe = {
            Id:items.idMeal,
            title:items.strMeal
        }

        let idList = savedItems.map((storageItems) => storageItems.Id)
    
        const array = []

        if (savedItems === null) {
            array.push(addRecipe)
            setSavedItems(array)
            localStorage.setItem('savedRecipes', JSON.stringify(array))
        } else if (idList.includes(addRecipe.Id) === true) {
            console.log('This recipe is already in your list!')
            return
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

    const listAnimations = {
        Begin:{
            y:50,
            opacity:[0,.5,1]
        },
        Motion:{
            y:0,
            opacity:[0,.5,1],
            transition:{
                duration:.75,
            },
        },
        Leave:{
            y:25,
            opacity:[1,.5,0],
            transition:{
                duration:.75
            }
        }
    }

    return (
        // <div className="list_container">
        <section>
            <div><button onClick={(e) => saveRecipe(e)}>Save Recipe</button></div>
            <ul>
            <AnimatePresence>
            {savedItems? savedItems.map((listItems) =>
            <motion.div
            key={listItems.title}
            variants = {listAnimations}
            initial = "Begin"
            animate = "Motion"
            exit = "Leave"
            >
                <li key={listItems.Id}>
                    <a className = "list_links"onClick={() => showRecipe(listItems.Id)}>{listItems.title}</a>
                    <span><FaTrashAlt className="trash_delete" onClick={() => deleteHandler(listItems.Id)}/></span>
                </li>
            </motion.div>
            ):
            <div>You have no items in the list yet</div>}
            </AnimatePresence>
            </ul>
            </section>
    )
}

export default SaveRecipe

// testing branches again