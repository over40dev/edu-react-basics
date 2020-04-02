import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export default class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100}></Header>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

/*
Gotchas
- use the {} to include an actual number in JSX;
- strings are okay to not be surrounded by {}
- keep in mind that {} tells JS to treat this what is inside as regular JS
*/
