import { useContext} from 'react';
import {recipeItems} from '../../Context/context';

const ContentRender = () => {
    
    const {items} = useContext(recipeItems)

    return (
        <article>
            <div className='display_wrapper'>
                <div className='random_recipe'>
                    <h1 className='meal_name'>{items.strMeal}</h1>
                    <h2 className='region'>Region: {items.strArea}</h2>
                    <img className = "food_image" src = {items.strMealThumb} alt = "text"></img>
                    <h3 className='category_tag'>{items.strCategory}</h3>
                    <div className='video_link'><a href = {items.strYoutube} target = "blank">Watch a video</a></div>
                </div>
            </div>
        </article>
    )
}

export default ContentRender