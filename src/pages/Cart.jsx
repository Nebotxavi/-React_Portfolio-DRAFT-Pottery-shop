import React, { useContext } from "react";

import { CollectionContext } from "../contextProvider";
import { Title } from "../components/Title";

export const Cart = () => {
  const { cart, handleCartItem, removeCartItem } = useContext(
    CollectionContext
  );

  return (
    <div>
      <Title text={"Your cart"} />
      {cart.map(item => {
        return (
          <div key={item.ref}>
            <p>Image here</p>
            <p>Ref: {item.ref}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleCartItem(item, "subs")}>-</button>
            <p>{item.amount}</p>
            <button onClick={() => handleCartItem(item, "add")}>+</button>
            <button onClick={() => removeCartItem(item)}>Remove</button>
            <p>Total price: {item.price * item.amount}</p>
            <p>-----------</p>
          </div>
        );
      })}
    </div>
  );
};
