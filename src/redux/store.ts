import { createStore } from "redux";
import { CartItem } from "../models/cartItem";
import { reducerInitialState } from "../models/reducerInitialState";
import { User } from "../models/user";
import reducer from "./reducers";



const initialState: reducerInitialState = {
  cart: [],
  user: {},
};

export const store = createStore(reducer, initialState);
