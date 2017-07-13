import { actionReducer } from "../action.reducer";
import actionTypes from "../../actions/actionTypes";

describe("actionReducer", () => {
  it("must return initial state", () => {
    expect(actionReducer(undefined, {})).toBe("");
  });
  it("must return paytion for action type `ACTION_FULFILLED`", () => {
    expect(
      actionReducer(undefined, {
        type: actionTypes.ACTION + "_FULFILLED",
        payload: { data: { message: "hello" } }
      })
    ).toBe("hello");
  });
});
