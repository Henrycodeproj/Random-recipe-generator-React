import { useContext, useState } from "react"
import { recipeItems } from "../Context/context"

export const Navbar = () => {

    const [search, setSearch] = useState('')

    const {items} = useContext(recipeItems)

    const searchBar = (e) => {
        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

        const fetchData = async () => {
            const response = await fetch(`${URL}${e.target.value}`)
            const results = await response.json()
            const meals = await results.meals
            meals.map((meal)=> `<a>${meal.strMeal}</a>`)
            setSearch(meals)
        }

        (async () => fetchData())()

    }

    return (
        <nav>
            <div>test</div>
            <ul>
                <input type = "text" placeholder="Type a category or meal" onChange={(e)=> searchBar(e)}></input>
                {/* {search ? search.map((meal) => `<a>${meal.strMeal}</a>`): console.log('nothing')} */}
                <li>test2</li>
                <li>test3</li>
            </ul>
        </nav>
    )
}
