import React from "react";

export const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => {
          return <th key={column.label}>{column.label}</th>;
        })}
      </tr>
    </thead>
  );
};
