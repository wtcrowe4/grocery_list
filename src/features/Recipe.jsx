import React from "react";
import style from '../css/recipe.module.css';
  
const Recipe = ({title,calories,image,ingredients}) =>{
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    // needs a key value
                    <li >{ingredient.text}</li>
                ))}
            </ol>
              
<p>Calories : {calories}</p>
  
            <img className={style.image} src={image} alt=""/>
  
        </div>
    );
  
}
export default Recipe;