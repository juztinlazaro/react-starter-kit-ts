import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";

describe("Home test element", () => {
  const HomeWrapper = shallow(<Home />);

  it("should match to snapshot", () => {
    expect(HomeWrapper).toMatchSnapshot();
  });

  it("should status initial value false", () => {
    const status = HomeWrapper.find("p");
    expect(status.text()).toEqual("false");
  });

  it("should render #login if status is false", () => {
    expect(HomeWrapper.find("#login").exists()).toEqual(true);
  });

  it("should be status value true if button click", () => {
    HomeWrapper.find("button").simulate("click");
    const status = HomeWrapper.find("p");
    expect(status.text()).toEqual("true");
  });

  it("should render #logout if status is true", () => {
    expect(HomeWrapper.find("#logout").exists()).toEqual(true);
  });
});