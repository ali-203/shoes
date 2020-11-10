import React from "react";
import Shoes from "./../Shoes.json";
import { NavLink } from "react-router-dom";
function Product() {
  console.log(Shoes)
  return (
    <div>
      <h1> Welcome to Product </h1>
    <div className="productContainer">
    {Object.keys(Shoes).map(keyName=>{
      const shoe = Shoes[keyName];
      return (
        <NavLink key={keyName}
         className="navlink"
          to={`/product/${keyName}`}>
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={150}/>
      </NavLink>)
    })}
      </div>
      </div>
  );
  }
export default Product;