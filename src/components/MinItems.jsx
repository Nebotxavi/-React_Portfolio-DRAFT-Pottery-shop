import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ItemBought } from "../components/ItemBought";
import { CollectionContext } from "../contextProvider";

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
        <ItemBought item={item} setIsItemActive={setIsItemActive} />
      )}
    </div>
  );
};
