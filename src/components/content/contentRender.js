import { FaArrowRight } from 'react-icons/fa';
import Ingredients from './Ingredients';
import { useContext } from 'react';
import {recipeItems} from '../../Context/context';

const ContentRender = ({handleNext}) => {
    const {items} = useContext(recipeItems)

    const ingredients = []

    let values = Object.values(items)
    let counter = 29
    for (let i = 9; i <= 28; i++) {
        let arr = []
        arr.push(values[counter])
        arr.push(values[i])
        counter += 1
        if (arr[0] && arr[1] !== '') {
            ingredients.push(arr)
        }
    }
    console.log(items)

    return (
        <main>
            <div>
                <h1>{items.strMeal}</h1>
                <h2>{items.strArea}</h2>
                <img src = {items.strMealThumb} alt = "text"></img>
                <h2>{items.strInstructions}</h2>
                <h2>{items.strCategory}</h2>
                <a href = {items.strYoutube}>Watch a video</a>
                <div><FaArrowRight onClick={handleNext} className='faArrow'/></div>
            </div>
            <section><Ingredients recipeItems = {ingredients}/></section>
        </main>
    )
}

export default ContentRender