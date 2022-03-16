import Ingredients from './Ingredients';
import { motion } from 'framer-motion';
import {recipeItems} from '../../Context/context';
import { useContext} from 'react';

export const Instructions = () => {

    const {items} = useContext(recipeItems)

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
    const instructions = items.strInstructions

    return (
        <aside>
        {items.strInstructions ? instructions.map((steps, index) => (steps.length !== 1 && steps.length !== 0) || steps !== '' ? <div>Step {index}: {steps}</div>:null): console.log('a')}
        {items.strInstructions && instructions.map((step) => step.length !== 0 && console.log(step))}
        <motion.div className='test'>
        <ul className='ingredients_list'>
        <Ingredients recipeItems = {ingredients}/>
        </ul>
        </motion.div>
        </aside>
    )
}
