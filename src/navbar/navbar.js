import { useContext, useState } from "react"
import { recipeItems } from "../Context/context"

export const Navbar = () => {

    const [search, setSearch] = useState('')

    const {setItems} = useContext(recipeItems)

    const searchBar = (e) => {
        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

        const fetchData = async () => {
            const response = await fetch(`${URL}${e.target.value}`)
            const results = await response.json()
            const meals = await results.meals
            //console.log(meals)
            setSearch(meals)
        }

        (async () => fetchData())()

    }
    const handlesearchLinks = (meal) => {
        setItems(meal)
    }  
    return (
        <nav>
            <div>test</div>
            <ul>
                <li>test2</li>
                <li>test3</li>
            </ul>
            <input type = "text" placeholder="Type a category or meal" onChange={(e)=> searchBar(e)}></input>
                    <div className="searchContainer">
                        { //begining of conditional
                        search ? search.map((meal) => // first condition checks to see if there is any information typed in search bar
                        <ul>
                            <li onClick={() => handlesearchLinks(meal)}> 
                                {meal.strMeal}
                            </li>
                        </ul>
                        ):// If there is nothing in search state, it will render nothing.
                        console.log('nothing')
                        }
                    </div>
        </nav>
    )
}
