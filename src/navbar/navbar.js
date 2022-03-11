import { useContext, useRef, useState } from "react"
import { recipeItems } from "../Context/context"
import {motion} from "framer-motion"

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
            console.log(meals)
            setSearch(meals)
        }

        (async () => fetchData())()

    }
    
    const handlesearchLinks = (meal) => {
        setItems(meal)
    } 

    return (
        <nav>
            {/* <ul className="outline">
                <li>items</li>
                <li>items2</li>
                { <Button variant="contained" color ="error">Hello World</Button>}
            </ul> */}
            <div className="nav-container">
            <input type = "text" placeholder="Type a category or meal" onChange={(e)=> searchBar(e)}></input>
            {searchItems.value !== 0 && (
                        <div className="searchContainer">
                            { //begining of conditional
                            search ? search.map((meal) => // first condition checks to see if there is any information typed in search bar
                                <motion.div onClick={() => handlesearchLinks(meal)} className = "ddd"
                                whileHover={{scale:1.1}}
                                > 
                                    <img className="preview" src={meal.strMealThumb}></img>
                                    <p className="search_results">{meal.strMeal}</p>
                                </motion.div>
                            ):// If there is nothing in search state, it will render nothing.
                            console.log('nothing')
                            }
                        </div>
            )}
            </div>
        </nav>
    )
}
