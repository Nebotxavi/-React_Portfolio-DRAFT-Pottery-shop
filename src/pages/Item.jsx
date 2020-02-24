import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { ItemBought } from "../components/ItemBought";
import { CollectionContext } from "../contextProvider";
import loading from "../img/loader/loading.gif";

export const Item = () => {
  const { getCurrentItem, handleCartItem } = useContext(CollectionContext);

  const { id } = useParams();
  const { history } = useHistory();

  const [isItemActive, setIsItemActive] = useState(false);
  const item = getCurrentItem(id);

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
          <ItemBought
            item={item}
            setIsItemActive={setIsItemActive}
            handleClick={handleContinueShopping}
          />
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
