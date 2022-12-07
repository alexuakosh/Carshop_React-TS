import { Dispatch } from 'redux';
import { ActionType } from '../actions-types/favorites.actionType';
import { FavoritesAction } from '../../types/reduxTypes/favorites.types';
import { ProductInterface } from '../../types/types';

export const addToFavorites = (id: string) => {
  return async(dispatch: Dispatch<FavoritesAction>, getState: any) => {
    const { favorites } = getState();
    const updatedFavoritesId: any = [...favorites.favoriteProductsId, id];
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", updatedFavoritesId);
    dispatch({
      type: ActionType.ADDED_TO_FAVORITES,
      payload: updatedFavoritesId
    });
  };
};

export const removeFromFavorites = (id: string) => {
  return async(dispatch: Dispatch<FavoritesAction>, getState: any) => {
    const { favorites } = getState();
    const updatedFavoritesId = favorites.favoriteProductsId.filter((productId: string) => {
      return productId !== id;
    });

    localStorage.removeItem("favorites");
    if (updatedFavoritesId.length > 0) {
      localStorage.setItem("favorites", updatedFavoritesId);
    }

    dispatch({
      type: ActionType.REMOVED_FROM_FAVORITES,
      payload: updatedFavoritesId
    });
  };
};

export const downloadCardsFromFavorites = (favorites: ProductInterface[]) => {
  return (dispatch: Dispatch<FavoritesAction>) => {
    dispatch({
      type: ActionType.DOWNLOADED_CARDS_FROM_FAVORITES,
      payload: favorites
    });
  };
};

