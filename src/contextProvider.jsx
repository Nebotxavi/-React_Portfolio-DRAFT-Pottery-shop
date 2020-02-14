import React, { useState, useEffect, createContext } from "react";
import { data } from "./data/productsData";

const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(data); // Redundant useEffect that will make sense once we make calls to the API.
  }, []);

  return (
    <CollectionContext.Provider value={{ collection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
