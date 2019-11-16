import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home";
import { renderHook } from "@testing-library/react-hooks";
import useStatus from "../useStatus";

Enzyme.configure({ adapter: new Adapter() });

describe("test home", () => {
  const HomeWrapper = shallow(<Home />);

  // tslint:disable-next-line:react-hooks-nesting
  const { result } = renderHook(() => useStatus(false));

  it("should test", () => {
    expect(result.current.status).toBe(false);
    expect(typeof result.current.setStatus).toBe("function");
  });

  it("should be false", () => {
    const status = HomeWrapper.find("p");
    expect(status.text()).toEqual("false");
  });

  it("should be true", () => {
    HomeWrapper.find("button").simulate("click");
    const status = HomeWrapper.find("p");
    expect(status.text()).toEqual("true");
  });
});
