import React from "react";
// @ts-expect-error TS(2307): Cannot find module '../css/recipe.module.css' or i... Remove this comment to see the full error message
import style from '../css/recipe.module.css';
  
const Recipe = ({
    title,
    calories,
    image,
    ingredients
}: any) =>{
    
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={style.recipe}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h1>{title}</h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ol>
                {ingredients.map((ingredient: any) => // needs a key value
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <li >{ingredient.text}</li>)}
            </ol>
              
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
<p>Calories : {calories}</p>
  
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img className={style.image} src={image} alt=""/>
  
        </div>
    );
  
}
export default Recipe;