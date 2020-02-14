import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CollectionContext } from "../contextProvider";

export const MinItems = () => {
  const { collection, handleAddItem } = useContext(CollectionContext);

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
            <button onClick={() => handleAddItem(item)}>Buy</button>
          </div>
        );
      })}
    </div>
  );
};
