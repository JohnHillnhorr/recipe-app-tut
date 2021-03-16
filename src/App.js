import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './foodRecipe';



const App = () => {
  
  const APP_ID = "3f7a2ab6";
  const APP_KEY = "17e7f07a97828e53409fad9657903cc0";
  const [recipes, getRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const searchUpdate = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }

useEffect ( () => {
  getRecipes();

}, [query]); 

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
  const data = await response.json();
  getRecipe(data.hits);
  console.log(data);
}

const getQuery = (e) => {
  e.preventDefault();
  setQuery(search)
}


  return (

    <div className="App">
      <h1 className="header">Search food for Ingredients</h1>
      
      <form className="form"  onSubmit={getQuery}>
          <input className="inputBox" type="text" value={search} onChange={searchUpdate} />
          <button className="button" type="submit">Search</button>
      </form>
      

      {recipes.map(recipe => {

        return (
          <div className="food">
            
            <Recipe title={recipe.recipe.label}  mealType={recipe.recipe.mealType} img={recipe.recipe.image} key={recipe.recipe.label} ingredients={recipe.recipe.ingredients}/>
            
          </div>
        )
      })}
    </div>

  )


}

export default App;
