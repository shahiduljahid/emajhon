import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/Header/Header";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import Productdetail from "./component/Productdetail/Productdetail";
import Review from "./component/Review/Review";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route exact={true} path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productdetail></Productdetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
