import { useContext} from 'react';
import {recipeItems} from '../../Context/context';

const ContentRender = () => {
    
    const {items} = useContext(recipeItems)

    return (
        <article>
            <div className='display_wrapper'>
                <div className='random_recipe'>
                    <h1 className='meal_name'>{items.strMeal}</h1>
                    <h3 className='region'>Region: {items.strArea}</h3>
                    <img className = "food_image" src = {items.strMealThumb} alt = "text"></img>
                </div>
            </div>
        </article>
    )
}

export default ContentRender