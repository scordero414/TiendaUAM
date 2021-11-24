import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  cart: [],
  user: {},
};

export const store = createStore(reducer, initialState);
