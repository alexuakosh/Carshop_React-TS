import { Dispatch } from 'redux';
import { ActionType } from '../actions-types/cart.actionType';
import { CartAction } from '../../types/reduxTypes/cart.types';
import { ProductInterface } from '../../types/types';

export const addToCart = () => {
  return async (dispatch: Dispatch<CartAction>, getState: any) => {
    const { cart, modal } = getState();
    const updatedCartId: any = [...cart.productsToCartId, modal.cardToCartId];

    if (!cart.productsToCartId.includes(modal.cardToCartId)) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", updatedCartId);
      dispatch({
        type: ActionType.ADDED_TO_CART,
        payload: updatedCartId
      });
    }
  };
};

export const removeFromCart = (id: string) => {
  return async (dispatch: Dispatch<CartAction>, getState: any) => {
    const { cart } = getState();
    const updatedProductsToCart = cart.productsToCartId.filter((productId: string) => {
      return productId !== id;
    });
    localStorage.removeItem("cart");
    if (updatedProductsToCart.length > 0) {
      localStorage.setItem("cart", updatedProductsToCart);
    }

    dispatch({
      type: ActionType.REMOVED_FROM_CART,
      payload: updatedProductsToCart
    });
  };
};

export const purchaseProducts = (info: any) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: ActionType.PURCHASED_PRODUCTS,
      payload: info
    });
    localStorage.removeItem("cart");
  };
};

export const downloadCardsFromCart = (cart: ProductInterface[]) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: ActionType.DOWNLOADED_CARDS_FROM_CART,
      payload: cart
    });
  };
};
