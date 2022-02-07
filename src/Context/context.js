import { useState, useEffect, createContext } from "react";

export const recipeItems = createContext()

export const RecipeContext = ({children}) => {

    const [items, setItems] = useState('')

    //gets fetch data on inital startup, doesn't update any other time

    useEffect(()=> {
  
      const url = 'https://www.themealdb.com/api/json/v2/1/random.php'
  
      const fetchData = async () => {
        const response = await fetch(`${url}`)
        const recipeObject = await response.json()
        const recipe = await recipeObject.meals[0]
        setItems(recipe)
      }
  
        (async () => await fetchData())()

    },[])

    //sends id to api link and then resends then sets item variable to the specific list item to display older recipe

    const showRecipe = async (id) =>{
      const url = `https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`
        const response = await fetch(`${url}`)
        const previousRecipe = await response.json()
        const displayRecipe = await previousRecipe.meals[0]
        setItems(displayRecipe)
    }

    //creates template for children, and values are sent through usecontext
    return (
        <recipeItems.Provider value = {{items, setItems, showRecipe}}>
          {children}
        </recipeItems.Provider>
    )
}
