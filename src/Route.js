import React from "react"
import { Router } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";

function RouteConfig() {
  return (
    <div>
      <Router> 
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="about" component={About}/>
          <Route exact path="product" component={Product}/>
          <Route exact path="product/:id" component={ProductItem}/>
      </Switch>
       </Router>
    </div>
      
  );
  }
export default RouteConfig;