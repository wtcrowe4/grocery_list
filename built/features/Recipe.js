"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//import style from '../css/recipe.module.css';
const Recipe = ({ title, calories, image, ingredients }) => {
    const recipeStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        minWidth: "20vh",
        backgroundColor: "whitesmoke",
        //backgroundImage: '/src/css/secondRecipeBackground.jpg',
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
    };
    const imageStyle = {
        borderRadius: "10px",
        boxShadow: "10px 10px 25px #1b1a1a",
        margin: "0 0 20px 0"
    };
    return (react_1.default.createElement("div", { className: recipeStyle },
        react_1.default.createElement("h1", null, title),
        react_1.default.createElement("ol", null, ingredients.map((ingredient) => // needs a key value
         react_1.default.createElement("li", null, ingredient.text))),
        react_1.default.createElement("p", null,
            "Calories : ",
            calories),
        react_1.default.createElement("img", { className: imageStyle, src: image, alt: "" })));
};
exports.default = Recipe;
