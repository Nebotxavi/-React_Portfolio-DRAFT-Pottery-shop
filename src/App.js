import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route path="/cart/:id" component={Item} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
