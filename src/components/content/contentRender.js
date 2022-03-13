import { FaArrowRight } from 'react-icons/fa';
import { useContext} from 'react';
import {recipeItems} from '../../Context/context';

const ContentRender = ({handleNext}) => {
    
    const {items} = useContext(recipeItems)

    return (
        <article>
            <div className='display_wrapper'>
                <div className='random_recipe'>
                    <h1>{items.strMeal}</h1>
                    <h2>{items.strArea}</h2>
                    <img className = "food_image" src = {items.strMealThumb} alt = "text"></img>
                    <h2>{items.strCategory}</h2>
                    <a href = {items.strYoutube}>Watch a video</a>
                    <div><FaArrowRight onClick={handleNext} className='faArrow'/></div>
                </div>
            </div>
        </article>
    )
}

export default ContentRender