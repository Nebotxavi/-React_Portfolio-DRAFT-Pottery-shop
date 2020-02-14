import React, { useState, useEffect, createContext } from "react";
import { data } from "./data/productsData";

const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCollection(data); // Redundant useEffect that will make sense once we make calls to the API.
  }, []);

  const handleAddItem = item => {
    if (cart.includes(item)) {
      setCart(prevItems => {
        const index = prevItems.indexOf(item);
        prevItems[index].amount++;
        return prevItems;
      });
    } else {
      item.amount = 1;
      setCart([...cart, item]);
    }
  };

  console.log("CART", cart);

  return (
    <CollectionContext.Provider value={{ collection, cart, handleAddItem }}>
      {children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
