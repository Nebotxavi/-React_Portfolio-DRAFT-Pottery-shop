import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { render, fireEvent, cleanup } from "@testing-library/react";
// import Enzyme, { shallow, render, mount } from "enzyme";
// import toJson from "enzyme-to-json";
// import Adapter from "enzyme-adapter-react-16";

import { Cart } from "../../pages/Cart";
import { CollectionProvider } from "../../contextProvider";
import { data } from "../../data/productsData";
import { Home } from "../../pages/Home";

// Enzyme.configure({ adapter: new Adapter() });

describe("Cart", () => {
  it("yo que se", () => {
    const wrapper = render(
      <CollectionProvider>
        <Router>
          <Cart />
        </Router>
      </CollectionProvider>
    );
  });
});
