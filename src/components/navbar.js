import React from 'react';
import {  Link } from "react-router-dom";
import '../App.css';


const Navbar= () =>{
  return (
  
    <nav class="mainNavbar">
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
  </nav>
  );
}
export default Navbar;
