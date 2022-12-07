import { ProductInterface } from "../types";

export interface FavoritesStateInterface {
    favoriteProductsId: string [] | [],
    favoriteProducts: [],
  };

  export type FavoritesAction = {
    type: string;
    payload: ProductInterface[] | string[];
}
  