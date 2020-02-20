import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ItemBought } from "../components/ItemBought";
import { CollectionContext } from "../contextProvider";

export const Item = ({ match }) => {
  const { getCurrentItem, handleCartItem } = useContext(CollectionContext);
  const [isItemActive, setIsItemActive] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(getCurrentItem(match.params.id));
  }, [getCurrentItem, match.params.id]);

  if (item)
    return (
      <div>
        <div>
          <h4>{item.name}</h4>
          <div>image here</div>
          <p>Price: {item.price}€</p>
          <p>Some info about the product:</p>
          <p>{item.description}</p>
          <Link to="/products">
            <button>Back to Products</button>
          </Link>
          <button
            onClick={() => {
              handleCartItem(item, "add");
              setIsItemActive(true);
            }}
          >
            Add to Cart
          </button>
        </div>
        {isItemActive && (
          <ItemBought item={item} setIsItemActive={setIsItemActive} />
        )}
      </div>
    );
  else return <div>loading</div>;
};
