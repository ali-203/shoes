import React from "react";
import { Link } from "react-router-dom";


function Navbar () {
  return (
    <div className="nav">
     <div className="home"> <Link  to="/"> Home </Link> </div>
     <div className="about"> <Link to="/about"> About </Link> </div>
     <div className="product"> <Link to="/product"> Produc </Link> </div>
    </div>
      
  );
  }
export default Navbar;