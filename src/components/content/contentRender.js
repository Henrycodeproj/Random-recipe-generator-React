import { FaArrowRight } from 'react-icons/fa';
import Ingredients from './Ingredients';
import { useContext } from 'react';
import {recipeItems} from '../../Context/context';
import { motion } from 'framer-motion';

const ContentRender = ({handleNext}) => {
    const {items} = useContext(recipeItems)
    console.log(items.strInstructions)

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

    return (
        <main>
            <div className='random_recipe'>
                <h1>{items.strMeal}</h1>
                <h2>{items.strArea}</h2>
                <img className = "food_image" src = {items.strMealThumb} alt = "text"></img>
                <h2>{items.strInstructions}</h2>
                <h2>{items.strCategory}</h2>
                <a href = {items.strYoutube}>Watch a video</a>
                <div><FaArrowRight onClick={handleNext} className='faArrow'/></div>
            </div>
            <section>
                <Ingredients recipeItems = {ingredients}/>
            </section>
        </main>
    )
}

export default ContentRender