import React from "react";

import { Title } from "../components/Title";
import { MinItems } from "../components/MinItems";

export const Home = () => {
  return (
    <div>
      <Title text={"Our Products"} />
      <MinItems />
    </div>
  );
};
