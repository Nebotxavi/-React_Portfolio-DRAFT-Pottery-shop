import React from "react";

export const Item = ({ match }) => {
  return <div>Hi from specific item: {match.params.id}</div>;
};
