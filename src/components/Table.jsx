import React from "react";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

const columns = [
  { label: "PRODUCTS", path: "image", ref: "image" },
  { label: "NAME OF PRODUCT", path: "name", ref: "name" },
  { label: "PRICE", path: "price", ref: "price" },
  { label: "QUANTITY", ref: "quantity" },
  { label: "REMOVE", ref: "remove" },
  { label: "TOTAL", ref: "total" }
];

export const Table = () => {
  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </table>
  );
};
