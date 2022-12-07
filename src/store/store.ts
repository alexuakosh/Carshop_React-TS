// @ts-nocheck
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import products from "./reducers/products.reducer";
import modal from "./reducers/modal.reducer";
import cart from "./reducers/cart.reducer";
import favorites from "./reducers/favorites.reducer";

const reduxDevToolsCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];

export const rootReducer = combineReducers({
  products,
  modal,
  cart,
  favorites,
});

export const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>

