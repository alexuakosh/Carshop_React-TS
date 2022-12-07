import { FavoritesAction, FavoritesStateInterface } from "../../types/reduxTypes/favorites.types";
import { ActionType } from "../actions-types/favorites.actionType"

const initialState: FavoritesStateInterface = {
  favoriteProductsId: localStorage.getItem("favorites")?.split(",") || [],
  favoriteProducts: [],
};

const favoritesReducer = (state = initialState, action: FavoritesAction) => {
  switch (action.type) {
    case ActionType.DOWNLOADED_CARDS_FROM_FAVORITES:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case ActionType.ADDED_TO_FAVORITES:
      return {
        ...state,
        favoriteProductsId: action.payload,
      };

    case ActionType.REMOVED_FROM_FAVORITES:
      return {
        ...state,
        favoriteProductsId: action.payload,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
