import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/new">Add New Item</Link>
  </div>
)

export default NavBar;