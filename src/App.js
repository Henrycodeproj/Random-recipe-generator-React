import Content from './components/content/content'
import SaveRecipe from './components/SaveList/RecipeHandler'
import {RecipeContext} from './Context/context'
import {Navbar} from './navbar/navbar'

function App() {
// functions in context
  return (
    <div className="App">
      <RecipeContext>
        <Navbar/>
        <main>
          <div className='main_wrapper'>
            <Content/>
            <SaveRecipe/>
          </div>
        </main>
      </RecipeContext>
    </div>
  );
}

export default App;
