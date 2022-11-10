import "./Navbar.css";
import { Link } from "react-router-dom";
import React,{useContext} from 'react';
import {AuthContext} from '../../context/AuthContext'

const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={'/'} style= {{color: "inherit", textDecoration: "none"}}>
          <span className="logo">lambooking</span>
        </Link>
        { user ? user.details.username :(
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div> )}
      </div>
    </div>
  );
};

export default NavBar;
