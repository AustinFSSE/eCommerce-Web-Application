import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./ProductReducer.js";
import {errorReducer} from "./errorReducer.js";
import { cartReducer } from "./CartReducer.js";

const cartItems = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    carts: { cart: cartItems },

};
export const store = configureStore({
    reducer: {
        products: productReducer,
        error: errorReducer,
        carts: cartReducer,
    },
    preloadedState: {
        initialState,
    },
});

export default store;