import { Product } from "../models/Product";
import { User } from "../models/user";

export const addProductAction = (product: Product, size: string) => ({
  type: "ADD_PRODUCT",
  payload: {product: product, size: size},
});

export const deleteProductAction = (productId: string) => ({
  type: "DELETE_PRODUCT",
  payload: productId,
});


export const login = (user: User) => ({
  type: "LOGIN",
  payload: user
})

export const logout = () => ({
  type: "LOGOUT"
});

