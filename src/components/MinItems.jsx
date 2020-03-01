import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ItemBought } from "../components/ItemBought";
import { CollectionContext } from "../contextProvider";

export const MinItems = () => {
  const { collection, handleCartItem } = useContext(CollectionContext);

  const [item, setItem] = useState();
  const [isItemActive, setIsItemActive] = useState(false);

  const handleClick = item => {
    handleCartItem(item, "add");
    setIsItemActive(true);
    setItem(item);
  };

  const handleContinueShopping = item => {
    setIsItemActive(false);
  };

  return (
    <div>
      <div>
        {collection.map(item => {
          return (
            <div className="minItem" key={item.ref}>
              <Link to={`products/${item.ref}`}>
                <p>Ref: {item.ref}</p>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
                <p>Price: {item.price}€</p>
              </Link>
              <button
                onClick={() => {
                  handleClick(item);
                }}
              >
                Buy
              </button>
            </div>
          );
        })}
      </div>
      {isItemActive && (
        <ItemBought
          item={item}
          setIsItemActive={setIsItemActive}
          handleClick={handleContinueShopping}
        />
      )}
    </div>
  );
};
