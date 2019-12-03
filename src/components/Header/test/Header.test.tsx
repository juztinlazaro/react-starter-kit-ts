import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header test component", () => {
  const HeaderWrapper = shallow(<Header />);

  it("should match to snapshot", () => {
    expect(HeaderWrapper).toMatchSnapshot();
  });
});
