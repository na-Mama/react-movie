import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/MovieList">MovieList</Link>
      <Link to="/Favorites">Favorites</Link>
    </div>
  );
}

export default Menu;
