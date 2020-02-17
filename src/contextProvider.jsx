import React, { useState, useEffect, createContext } from "react";
import { data } from "./data/productsData";

const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCollection(data); // Redundant useEffect that will make sense once we make calls to the API.
  }, []);

  const handleCartItem = (item, operation) => {
    if (cart.includes(item)) {
      setCart(prevItems => {
        // Add or subtract item amount
        item.amount = operation === "add" ? item.amount + 1 : item.amount - 1;
        const index = prevItems.indexOf(item);
        if (item.amount > 0) prevItems.splice(index, 1, item);
        // Remove the item if the item.amount is 0
        else prevItems.splice(index, 1);
        return [...prevItems];
      });
    } else {
      item.amount = 1;
      setCart([...cart, item]);
    }
  };

  const removeCartItem = item => {
    setCart(prevItems => {
      return prevItems.filter(prevItem => prevItem.ref !== item.ref);
    });
  };

  return (
    <CollectionContext.Provider
      value={{ collection, cart, handleCartItem, removeCartItem }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
