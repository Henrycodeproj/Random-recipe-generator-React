import ContentRender from './contentRender';

const Content = ({items, setItems}) =>{
    //handles the next recipe from api call
    const handleNext = async () => { 
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php') // gets the data from api
        const recipeObject = await response.json() // changes the object into json format
        const recipe = await recipeObject.meals[0] // returns an object with an array called meals
        setItems(recipe)
    }
    return (
        <ContentRender
        items = {items}
        setItems = {setItems}
        handleNext = {handleNext}
        />
    )
}

export default Content