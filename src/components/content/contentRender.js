import { FaArrowRight } from 'react-icons/fa';
import Ingredients from './Ingredients';

const ContentRender = ({items, handleNext}) => {

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

    return (
        <main>
            <div>
                <h1>{items.strMeal}</h1>
                <img src = {items.strMealThumb} alt = "text"></img>
                <div><FaArrowRight onClick={handleNext} className='faArrow'/></div>
            </div>

            <section><Ingredients recipeItems = {ingredients}/></section>
        </main>
    )
}

export default ContentRender