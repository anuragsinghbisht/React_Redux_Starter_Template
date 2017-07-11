import { actionReducer } from "../action.reducer";
import actionTypes from "../../actions/actionTypes";

describe("actionReducer", () => {
  it("must return initial state", () => {
    expect(actionReducer(undefined, {})).toBe("");
  });
  it("must return paytion for action type `ACTION`", () => {
    expect(
      actionReducer(undefined, { type: actionTypes.ACTION, payload: "hello" })
    ).toBe("hello");
  });
});
