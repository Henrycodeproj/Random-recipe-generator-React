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

    console.log(items)

    return (
        <main>
            <div className='wrapper'>
                <h1>{items.strMeal}</h1>
                <h2>{items.strArea}</h2>
                <img src = {items.strMealThumb} alt = "text"></img>
                <h2 className='instructions'>{items.strInstructions}</h2>
                <h3>{items.strCategory}</h3>
                <div><a href={items.strYoutube} target="blank">Watch video</a></div>
                <span><FaArrowRight onClick={handleNext} className='faArrow'/></span>
            </div>

            <section><Ingredients recipeItems = {ingredients}/></section>
        </main>
    )
}

export default ContentRender