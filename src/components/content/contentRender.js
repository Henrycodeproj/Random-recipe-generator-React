import { FaArrowRight } from 'react-icons/fa';
import Ingredients from './Ingredients';
import { useContext, useEffect, useRef, useState } from 'react';
import {recipeItems} from '../../Context/context';
import { motion } from 'framer-motion';

const ContentRender = ({handleNext}) => {
    const {items} = useContext(recipeItems)
    //console.log(items.strInstructions)

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

    const carouselWidth = useRef()

    const [width, setWidth] = useState(0)

    useEffect (() =>{
        setWidth(carouselWidth.current.scrollWidth - carouselWidth.current.offsetWidth)
        console.log(carouselWidth.current.offsetWidth, carouselWidth.current.scrollWidth)
    },[items])

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
            <motion.div className='test'>
            <motion.div ref={carouselWidth}
            drag = "x"
            dragConstraints = {{right:0, left: -width}}
            className='test1'
            >
            <Ingredients recipeItems = {ingredients}/>
            </motion.div>
            </motion.div>
            </section>
        </main>
    )
}

export default ContentRender