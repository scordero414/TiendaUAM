import { CartItem } from "../models/cartItem";
import { Product, SpecificProduct } from "../models/product";
import { User } from "../models/user";

export const addProductAction = (product: any) => ({
    type: "ADD_PRODUCT",
    payload: product,
});

export const deleteProductAction = (productId: string) => ({
    type: "DELETE_PRODUCT",
    payload: productId,
});

export const updateProductsAction = (products: CartItem[]) => ({
    type: "UPDATE_PRODUCTS",
    payload: products,
});


export const login = (user: User) => ({
    type: "LOGIN",
    payload: user
})

export const logout = () => ({
    type: "LOGOUT"
});

