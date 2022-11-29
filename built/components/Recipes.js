"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Recipe_1 = __importDefault(require("../features/Recipe"));
//require ('dotenv').config();
const Recipes = () => {
    const APP_ID = '13755d77';
    const APP_KEY = '0af463b47293aad01d8fdbae960f0de5';
    //const APP_KEY = process.env.RECIPES_API_KEY;  
    const [recipes, setRecipes] = (0, react_1.useState)([]);
    const [search, setSearch] = (0, react_1.useState)("");
    const [query, setQuery] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        getRecipes();
    }, [query]);
    const getRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = yield response.json();
        setRecipes(data.hits);
    });
    const updateSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("br", null),
        react_1.default.createElement("h3", null, "Search for recipes"),
        react_1.default.createElement("form", { onSubmit: getSearch, className: "search-form" },
            react_1.default.createElement("input", { className: "search-bar", type: "text", value: search, onChange: updateSearch }),
            react_1.default.createElement("button", { className: "search-button", type: "submit" }, "Search")),
        react_1.default.createElement("div", { className: "recipes" }, recipes.map(recipe => (react_1.default.createElement(Recipe_1.default, { key: recipe.recipe.label, title: recipe.recipe.label, calories: recipe.recipe.calories, image: recipe.recipe.image, ingredients: recipe.recipe.ingredients }))))));
};
exports.default = Recipes;
