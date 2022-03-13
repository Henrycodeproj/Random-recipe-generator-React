import Content from './components/content/content'
import SaveRecipe from './components/SaveList/RecipeHandler'
import {RecipeContext} from './Context/context'
import {Navbar} from './navbar/navbar'
import {Instructions} from './components/content/Instructions'

function App() {
// functions in context
  return (
    <div className="App">
      <RecipeContext>
        <Navbar/>
        <main>
        <div className='main_container'>
          <div className='main_wrapper'>
            <Content/>
            <SaveRecipe/>
            </div>
            <Instructions/>
          </div>
        </main>
      </RecipeContext>
    </div>
  );
}

export default App;
