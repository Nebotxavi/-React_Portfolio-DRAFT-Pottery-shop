import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CollectionContext } from "../contextProvider";

export const MinItems = () => {
  const { collection, handleCartItem } = useContext(CollectionContext);

  return (
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
            <button onClick={() => handleCartItem(item, "add")}>Buy</button>
          </div>
        );
      })}
    </div>
  );
};
