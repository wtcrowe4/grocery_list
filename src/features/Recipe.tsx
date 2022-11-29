import React from "react";
//import style from '../css/recipe.module.css';

  
const Recipe = ({
    title,
    calories,
    image,
    ingredients
}: any) =>{
    
const recipeStyle: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    minWidth: "20vh",
    backgroundColor: "whitesmoke",
    backgroundImage: "url('/src/css/secondRecipeBackground.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    boxShadow: "10px 10px 25px #1b1a1a",
    margin: "8px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "copperplate",
    textShadow: "2px 2px 2px #1b1a1a",
    transition: "all 0.3s ease-in-out",
}

const imageStyle: any = {
    borderRadius: "10px",
    boxShadow: "10px 10px 25px #1b1a1a",
    margin: "0 0 20px 0"
}


    return (
        <div className={recipeStyle}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient: any) => // needs a key value
                <li >{ingredient.text}</li>)}
            </ol>
              
<p>Calories : {calories}</p>
  
            <img className={imageStyle} src={image} alt=""/>
  
        </div>
    );
  
}
export default Recipe;