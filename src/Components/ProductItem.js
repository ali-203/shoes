import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../Shoes.json";

function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  if(!shoe)
  return <h2> Product Not Found! </h2>
  
  return (
    <div>
      <h1> Welcome to Product Item </h1>
    </div>
      
  );
  }
export default ProductItem;