import { CartItem } from "./cartItem";
import { User } from "./user";

export interface reducerInitialState {
    cart: CartItem[],
    user: User
  }