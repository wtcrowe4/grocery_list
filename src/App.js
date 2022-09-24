import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./views/home"
import Recipes from "./views/recipes"
import Users from "./views/users"
import Groceries from './views/groceries';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
      </header>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/groceries' element={<Groceries/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
