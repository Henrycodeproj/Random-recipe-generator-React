import { useContext, useEffect} from 'react';
import {recipeItems} from '../../Context/context';

export const ContentRender = () => {
    
    const {items} = useContext(recipeItems)

    useEffect(()=>{
        console.log('Next recipe.')
    },[items])

    return (
        <article>
            <div className='display_wrapper'>
                <div className='random_recipe'>
                    <img className = "food_image" src = {items.strMealThumb} alt = "text"></img>
                </div>
            </div>
        </article>
    )
}

export default ContentRender
