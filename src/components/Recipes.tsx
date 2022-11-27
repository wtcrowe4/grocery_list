import React, { useEffect, useState } from 'react'
// @ts-expect-error TS(6142): Module '../features/Recipe' was resolved to 'C:/Us... Remove this comment to see the full error message
import Recipe from '../features/Recipe';
//require ('dotenv').config();

const Recipes = () => {
  const APP_ID = '13755d77';
  const APP_KEY = '0af463b47293aad01d8fdbae960f0de5';
  //const APP_KEY = process.env.RECIPES_API_KEY;  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const getSearch = (e: any) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="App">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <br></br>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>Search for recipes</h3>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={getSearch} className="search-form">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button className="search-button" type="submit">Search</button>
      </form>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="recipes">
      {recipes.map(recipe => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Recipe 
        // @ts-expect-error TS(2339): Property 'recipe' does not exist on type 'never'.
        key={recipe.recipe.label}
        // @ts-expect-error TS(2339): Property 'recipe' does not exist on type 'never'.
        title={recipe.recipe.label} 
        // @ts-expect-error TS(2339): Property 'recipe' does not exist on type 'never'.
        calories={recipe.recipe.calories} 
        // @ts-expect-error TS(2339): Property 'recipe' does not exist on type 'never'.
        image={recipe.recipe.image} 
        // @ts-expect-error TS(2339): Property 'recipe' does not exist on type 'never'.
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default Recipes;