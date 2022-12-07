import { ModalAction, ModalStateInterface } from "../../types/reduxTypes/modal.types";
import { ActionType } from "../actions-types/modal.actionType"

const initialState: ModalStateInterface = {
  cardToCartId: "",
};

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case ActionType.SET_CARD_TO_CART:
      return {
        ...state,
        cardToCartId: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
