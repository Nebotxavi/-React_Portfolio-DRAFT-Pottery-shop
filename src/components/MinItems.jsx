import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CollectionContext } from "../contextProvider";
import { ManageClickOutside } from "./common/manageClickOutside";

export const MinItems = () => {
  const { collection, handleCartItem } = useContext(CollectionContext);

  const [item, setItem] = useState();
  const [isItemActive, setIsItemActive] = useState(false);

  return (
    <div>
      <div>
        {collection.map(item => {
          return (
            <div key={item.ref}>
              <Link to={`products/${item.ref}`}>
                <p>Ref: {item.ref}</p>
                <div>image here</div>
                <p>{item.name}</p>
                <p>Price: {item.price}€</p>
              </Link>
              <button
                onClick={() => {
                  handleCartItem(item, "add");
                  setIsItemActive(true);
                  setItem(item);
                }}
              >
                Buy
              </button>
            </div>
          );
        })}
      </div>
      {isItemActive && (
        <ManageClickOutside onClick={() => setIsItemActive(false)}>
          <div>
            <h4>Item Added To Cart</h4>
            <div>Image here</div>
            <p>{item.name}</p>
            <p>Price: {item.price}€</p>
            <button onClick={() => setIsItemActive(false)}>
              Continue Shopping
            </button>
            <Link to="/cart">
              <button>Go To Cart</button>
            </Link>
          </div>
        </ManageClickOutside>
      )}
    </div>
  );
};
