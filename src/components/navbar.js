import React from 'react';
import {  Link } from "react-router-dom";


const Navbar= () =>{
  return (
  <div>
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
  );
}
export default Navbar;
