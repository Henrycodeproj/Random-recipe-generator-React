import { useContext, useState } from "react"
import { recipeItems } from "../Context/context"
import {motion} from "framer-motion"
import { } from "@mui/material"

export const Navbar = () => {

    const [search, setSearch] = useState('')
    const [searchItems, setSearchItems] = useState([])

    const {setItems} = useContext(recipeItems)

    const searchBar = (e) => {
        setSearch(e.target.value)
        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
        const fetchData = async () => {
            const response = await fetch(`${URL}${e.target.value}`)
            const results = await response.json()
            const meals = await results.meals
            setSearchItems(meals)
        }

        (async () => fetchData())()

    }

    return (
        <nav>
            <div className="nav-container">
            <input className="search_bar" type = "text" placeholder="Type a category or meal" onChange={(e)=> searchBar(e)}></input>
            </div>
            {search.length !== 0 &&
            <div className="search_container">{searchItems !== 0 && searchItems.map((item) =>
                <ul>
                    <li>
                        <img className="preview" src={item.strMealThumb} alt = "thumbnail"></img>
                        <div>{item.strMeal}</div>
                    </li>
                </ul>
            )}</div>
            }
        </nav>
    )
}
