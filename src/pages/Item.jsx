import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ItemBought } from "../components/ItemBought";
import { CollectionContext } from "../contextProvider";
import loading from "../img/loader/loading.gif";

export const Item = ({ match, history }) => {
  const { getCurrentItem, handleCartItem } = useContext(CollectionContext);

  const [isItemActive, setIsItemActive] = useState(false);
  const item = getCurrentItem(match.params.id);

  const handleContinueShopping = () => {
    history.push("/products");
  };

  if (item)
    return (
      <div>
        <div>
          <h4>{item.name}</h4>
          <div>
            <img src={item.image} alt="" />
          </div>
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
          <ItemBought item={item} handleClick={handleContinueShopping} />
        )}
      </div>
    );
  else
    return (
      <div>
        <img src={loading} alt="" />
      </div>
    );
};
