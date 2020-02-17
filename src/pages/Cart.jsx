import React, { useContext } from "react";

import { CollectionContext } from "../contextProvider";
import { Title } from "../components/Title";

export const Cart = () => {
  const { cart, handleCartItem, removeCartItem, clearCart } = useContext(
    CollectionContext
  );

  const subtotal = cart.length
    ? cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0)
    : 0;
  const tax = 21; // consider if this should be outside/API
  const total = (subtotal * (tax / 100 + 1)).toFixed(2);

  return (
    <div>
      <Title text={"Your cart"} />
      {cart.map(item => {
        return (
          <div key={item.ref}>
            <p>Image here</p>
            <p>Ref: {item.ref}</p>
            <p>Price: {item.price}€</p>
            <button onClick={() => handleCartItem(item, "subs")}>-</button>
            <p>{item.amount}</p>
            <button onClick={() => handleCartItem(item, "add")}>+</button>
            <button onClick={() => removeCartItem(item)}>Remove</button>
            <p>Total price: {item.price * item.amount}</p>
            <p>-----------</p>
          </div>
        );
      })}
      <div>
        <button onClick={() => clearCart()}>Clear cart</button>
        <p>Subtotal: {cart.length && subtotal}€</p>
        <p>Tax: {tax}%</p>
        <p>Total: {parseFloat(total)}€</p>
      </div>
    </div>
  );
};
