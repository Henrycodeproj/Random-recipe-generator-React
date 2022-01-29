import {useState, useEffect} from 'react'
import Content from './content'
function App() {

  const [items, setItems] = useState('')

  //gets fetch data on inital startup, doesn't update any other time
  useEffect(()=> {

    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

    const fetchData = async () => {
      const response = await fetch(`${url}`)
      const recipeObject = await response.json()
      const recipe = await recipeObject.meals[0]
      setItems(recipe)
    }

  (async () => await fetchData())()

  }, [])

  return (
    <div className="App">
      <Content
      items ={items}
      setItems = {setItems} 
      />
    </div>
  );
}

export default App;
