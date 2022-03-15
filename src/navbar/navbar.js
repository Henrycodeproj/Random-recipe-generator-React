import { useContext, useState } from "react"
import { recipeItems } from "../Context/context"
import {motion} from "framer-motion"
import { ListItemSecondaryAction } from "@mui/material"

export const Navbar = () => {

    const [search, setSearch] = useState('')
    const [searchItems, setsearchItems] = useState([])

    const {setItems} = useContext(recipeItems)

    const searchBar = (e) => {
        const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

        const fetchData = async () => {
            const response = await fetch(`${URL}${e.target.value}`)
            const results = await response.json()
            const meals = await results.meals
            setSearch(meals)
        }

        (async () => fetchData())()

    }
    
    const handlesearchLinks = (meal) => {
        setItems(meal)
    }

    return (
        <nav>
            <div className="nav-container">
            <input className="search_bar" type = "text" placeholder="Type a category or meal" onChange={(e)=> searchBar(e)}></input>
            </div>
            <div>{search ? <div className="search_container">{search.map((item) =><div>{item.strMeal}</div>)}</div>:null}</div>
        </nav>
    )
}
