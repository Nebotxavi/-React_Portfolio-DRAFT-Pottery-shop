import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NotFound";
import { Item } from "./pages/Item";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/products/:id" component={Item} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/products" component={Home} />
        <Redirect from="/" to="/products" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
