import React from "react";
import { Link } from "react-router-dom";

import { ManageClickOutside } from "../components/common/manageClickOutside";

export const ItemBought = ({ item, setIsItemActive }) => {
  return (
    <div>
      <ManageClickOutside onClick={() => setIsItemActive(false)}>
        <div>
          <h4>Item Added To Cart</h4>
          <div>Image here</div>
          <p>{item.name}</p>
          <p>Price: {item.price}€</p>
          <button onClick={() => setIsItemActive(false)}>
            Continue Shopping
          </button>
          <Link to="/cart">
            <button>Go To Cart</button>
          </Link>
        </div>
      </ManageClickOutside>
    </div>
  );
};
