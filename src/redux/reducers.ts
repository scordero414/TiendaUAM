import AsyncStorage from "@react-native-async-storage/async-storage";
import { reducerInitialState } from "../models/reducerInitialState";
import { createUser } from "../models/user";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter((item: any) => item.product.id !== action.payload),
            };
        case "LOGIN":
            AsyncStorage.setItem(
                "google_auth",
                JSON.stringify(action.payload)
            ).then(() => createUser(action.payload.user));
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            AsyncStorage.removeItem("google_auth").then();
            return {
                ...state,
                user: {},
            };

        default:
            return state;
    }
};

export default reducer;
