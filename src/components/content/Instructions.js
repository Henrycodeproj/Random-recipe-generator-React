import Ingredients from './Ingredients';
import { motion } from 'framer-motion';
import {recipeItems} from '../../Context/context';
import { useContext} from 'react';
import { Button, Dialog, DialogContent, DialogTitle} from '@mui/material';
import {useState} from 'react';

export const Instructions = () => {

    const [isClicked, setisClicked] = useState(false)
    const [categories, setCategories] = useState([])

    const {items} = useContext(recipeItems)

    const getCategories = async (category) => {
        const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
        const response = await fetch(`${url}${category}`)
        const recipeObject = await response.json()
        const recipes = recipeObject.meals
        setCategories(recipes)
    }

    const ingredients = []
    //gets the values from the keys in returned json object
    let values = Object.values(items)
    let counter = 29
    //The item number position starts at 9 and the ingredients start at 29 for api,
    for (let i = 9; i <= 28; i++) { 
        // this loop adds a sub array to an outter array to better organize data
        let arr = []
        arr.push(values[counter])
        arr.push(values[i])
        counter += 1
        if (arr[0] && arr[1] !== '') { //checks to see if array has any items and appends if items are present
            ingredients.push(arr)
        }
    }
    const handlePopOpen = () =>{
        getCategories(items.strCategory)
        setisClicked(true)
    }
    const handlePopClose = () => {
        setisClicked(false)
    }

    const instructions = items.strInstructions

    return (
        <aside>
            <div className='title_container'>
                <h1 className='instructions_title'>Instructions</h1>
            </div>
            {items.strInstructions && instructions.map((steps, index) => (steps.length !== 1 && steps.length !== 0) || steps !== '' ? <div  className='steps'> {index}: {steps}</div>:null)}
            <div className='video_link'>
                <a href = {items.strYoutube} target = "blank" title='Click here to watch a video tutorial'>Watch a video</a>
            </div>
            {<Button variant="outlined" className='category_tag' onClick={()=> handlePopOpen(items.strCategory)}>
                {items.strCategory}
            </Button>}
            <motion.div className='test'>
                <ul className='ingredients_list'>
                    <Ingredients recipeItems = {ingredients}/>
                </ul>
            </motion.div>
            <Dialog maxHeight="200px" className='modal' open = {isClicked} onClose={handlePopClose}>
                <DialogTitle>Categories</DialogTitle>
                <DialogContent>
                {categories && categories.map((category) =>
                    <div className='category_recipes'>
                        <img className='preview' src = {category.strMealThumb}></img>
                        <div>{category.strMeal}</div>
                    </div>
                )}
                </DialogContent>
            </Dialog>
        </aside>
    )
}
