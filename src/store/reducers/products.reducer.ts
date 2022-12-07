import { ProductsAction, ProductStateInterface } from "../../types/reduxTypes/products.types";
import { ActionType } from "../actions-types/products.actionType";

const initialState: ProductStateInterface = {
  downloadRequestState: "idle",
  productList: [],
};

const productsReducer = (state = initialState, action: ProductsAction) => {
  switch (action.type) {
    case ActionType.DOWNLOAD_ALL_CARDS_REQUESTED:
      return {
        ...state,
        downloadRequestState: "loading",
      };

    case ActionType.DOWNLOAD_ALL_CARDS_SUCCESS:
      return {
        ...state,
        downloadRequestState: "success",
        productList: action.payload,
      };

    case ActionType.DOWNLOAD_ALL_CARDS_ERROR:
      return {
        ...state,
        downloadRequestState: "error",
      };

    default:
      return state;
  }
};

export default productsReducer;
