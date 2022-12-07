import { Dispatch } from 'redux';
import { ActionType } from '../actions-types/products.actionType';
import { ProductsAction } from '../../types/reduxTypes/products.types';
import { ProductInterface } from '../../types/types';

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch({
      type: ActionType.DOWNLOAD_ALL_CARDS_REQUESTED
    });
    fetch("./products.json")
      .then((response) => response.json())
      .then((products) => {
        setTimeout(() => {
          dispatch({
            type: ActionType.DOWNLOAD_ALL_CARDS_SUCCESS,
            payload: products,
          });
        }, 1000);
      })
      .catch((e) => {
        dispatch({
          type: ActionType.DOWNLOAD_ALL_CARDS_ERROR
        });
      });
  };
};

export const productsToShow =
  (productList: ProductInterface[], productsToShowId: string[]): ProductInterface[] => {
    const products: ProductInterface[] = [];
    productList.forEach((product: ProductInterface) => {
      productsToShowId.forEach((productToShowId: string) => {
        if (product.id === productToShowId) {
          products.push(product);
        }
      });
    });

    return products;
  };

