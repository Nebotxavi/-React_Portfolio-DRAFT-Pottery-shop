import React, { useContext } from "react";
import { CollectionContext } from "../contextProvider";

export const TableBody = ({ columns }) => {
  const { cart, handleCartItem, removeCartItem } = useContext(
    CollectionContext
  );

  const renderCell = (item, column) => {
    if (column.path === "image") return <img src={item.image} alt="" />;
    else if (column.path) return item[column.path];
    else if (column.ref === "quantity") {
      return (
        <>
          <button onClick={() => handleCartItem(item, "subs")}>-</button>
          <p>{item.amount}</p>
          <button onClick={() => handleCartItem(item, "add")}>+</button>
        </>
      );
    } else if (column.ref === "remove") {
      return <button onClick={() => removeCartItem(item)}>Remove</button>;
    } else return <p>{item.price * item.amount}</p>;
  };

  return (
    <tbody>
      {cart.map(item => {
        return (
          <tr key={item.ref}>
            {columns.map(column => {
              return (
                <td key={item.ref + column.label}>
                  {renderCell(item, column)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
