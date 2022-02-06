import Content from './components/content/content'
import SaveRecipe from './components/SaveList/SaveRecipe'
import {RecipeContext} from './components/SaveList/context'

function App() {

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
