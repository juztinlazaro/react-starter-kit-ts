import { renderHook, act } from "@testing-library/react-hooks";
import useStatus from "../useStatus";

describe("test home useStatus", () => {
  it("should test", () => {
    // tslint:disable-next-line:react-hooks-nesting
    const { result } = renderHook(() => useStatus(false));
    expect(result.current.status).toBe(false);
    expect(typeof result.current.setStatus).toBe("function");
  });

  it("should status true if setStatus param true", () => {
    // tslint:disable-next-line:react-hooks-nesting
    const { result } = renderHook(() => useStatus(false));
    act(() => {
      result.current.setStatus(true);
    });

    expect(result.current.status).toBe(true);
  });

  it("should status false if setStatus param false", () => {
    // tslint:disable-next-line:react-hooks-nesting
    const { result } = renderHook(() => useStatus(false));
    act(() => {
      result.current.setStatus(false);
    });

    expect(result.current.status).toBe(false);
  });
});
