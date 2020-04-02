import React, { Component } from "react";
import StorePicker from "./store-picker";

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        Order
        <StorePicker />
      </div>
    );
  }
}
