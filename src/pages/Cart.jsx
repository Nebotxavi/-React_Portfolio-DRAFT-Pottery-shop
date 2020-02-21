import React, { useContext } from "react";

import { CollectionContext } from "../contextProvider";
import { Table } from "../components/Table";
import { Title } from "../components/Title";

export const Cart = () => {
  const { cart, clearCart } = useContext(CollectionContext);

  const subtotal = cart.length
    ? cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0)
    : 0;
  const tax = 21; // consider if this should be outside/API
  const total = parseFloat((subtotal * (tax / 100 + 1)).toFixed(2));

  return (
    <div>
      <Title text={"Your cart"} />
      <Table />
      <div>
        <button onClick={() => clearCart()}>Clear cart</button>
        <p>Subtotal: {cart.length && subtotal}€</p>
        <p>Tax: {tax}%</p>
        <p>Total: {total}€</p>
      </div>
    </div>
  );
};
