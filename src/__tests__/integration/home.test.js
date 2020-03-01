import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import { CollectionProvider } from "../../contextProvider";
import { data } from "../../data/productsData";
import { Home } from "../../pages/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("home page", () => {
  const exec = () => {
    return mount(
      <CollectionProvider>
        <Router>
          <Home />
        </Router>
      </CollectionProvider>
    );
  };

  const amount = data.length;

  it("should render data items", () => {
    const wrapper = exec();
    expect(wrapper.find(".minItem")).not.toBe(null);
  });

  it("should render the same amount of items as in the array data", () => {
    const wrapper = exec();
    expect(wrapper.find(".minItem").length).toBe(amount);
  });

  it("should show up the 'Item added to cart' section", () => {
    const wrapper = exec();
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(wrapper.find("h4").text()).toMatch(/cart/i);
  });
});
