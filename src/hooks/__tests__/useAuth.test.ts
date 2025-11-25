import { renderHook } from "@testing-library/react";

jest.mock("js-cookie", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    set: jest.fn(),
    remove: jest.fn(),
  },
}));

import Cookies from "js-cookie";
import { useAuth } from "../useAuth";

describe("useAuth hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns isAuthenticated true when accessToken exists", () => {
    (Cookies.get as jest.Mock).mockReturnValue("mock-token");

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(true);
    expect(Cookies.get).toHaveBeenCalledWith("accessToken");
  });

  test("returns isAuthenticated false when accessToken does not exist", () => {
    (Cookies.get as jest.Mock).mockReturnValue(undefined);

    const { result } = renderHook(() => useAuth());

    expect(result.current.isAuthenticated).toBe(false);
    expect(Cookies.get).toHaveBeenCalledWith("accessToken");
  });
});
