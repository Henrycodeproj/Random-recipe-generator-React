import Content from './components/content/content'
import SaveRecipe from './components/SaveList/RecipeHandler'
import {RecipeContext} from './Context/context'

function App() {
// functions in context
  return (
    <div className="App">
      <RecipeContext>
        <Content/>
        <SaveRecipe/>
      </RecipeContext>
    </div>
  );
}

export default App;
