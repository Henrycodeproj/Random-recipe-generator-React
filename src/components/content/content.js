import ContentRender from './contentRender';
import { useContext } from 'react';
import {recipeItems} from '../SaveList/context';

const Content = () =>{
    //handles the next recipe from api call
    const {setItems} = useContext(recipeItems)
    
    const handleNext = async () => { 
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php') // gets the data from api
        const recipeObject = await response.json() // changes the object into json format
        const recipe = await recipeObject.meals[0] // returns an object with an array called meals
        setItems(recipe)
    }
    return (
        <ContentRender
        handleNext = {handleNext}
        />
    )
}

export default Content