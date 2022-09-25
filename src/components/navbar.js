import React from 'react';
import {  Link } from "react-router-dom";
import '../App.css';


const Navbar= () =>{
  return (
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-nav"> 
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/groceries">Grocery List</Link>
    </li>
    <li>
      <Link to="/recipes">Recipes</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </div>
  </nav>
  );
}
export default Navbar;
