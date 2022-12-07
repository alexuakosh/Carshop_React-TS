import { CartAction, CartStateInterface } from "../../types/reduxTypes/cart.types";
import { ActionType } from "../actions-types/cart.actionType"

const initialState: CartStateInterface = {
  productsToCartId: localStorage.getItem("cart")?.split(",") || [],
  productsToCart: [],
  purchasedProductsInfo: {
    products: [],
    buyerInfo: null,
  },
};

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ActionType.DOWNLOADED_CARDS_FROM_CART:
      return {
        ...state,
        productsToCart: action.payload,
      };

    case ActionType.ADDED_TO_CART:
      return {
        ...state,
        productsToCartId: action.payload,
      };

    case ActionType.REMOVED_FROM_CART:
      return {
        ...state,
        productsToCartId: action.payload,
      };

    case ActionType.PURCHASED_PRODUCTS:
      return {
        ...state,
        purchasedProductsInfo: {
          products: state.productsToCart,
          buyerInfo: action.payload,
        },
        productsToCartId: [],
        productsToCart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
