import React from "react";
import { shallow } from "enzyme";
import Navigation from "../Navigation";

describe("Navigation test component", () => {
  const NavigationWrapper = shallow(<Navigation />);

  it("should match to snapshot", () => {
    expect(NavigationWrapper).toMatchSnapshot();
  });
});
