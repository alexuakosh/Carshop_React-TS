import { ProductInterface } from "../types";

export interface CartStateInterface {
    productsToCartId: string[],
    productsToCart: [],
    purchasedProductsInfo: {
      products: [],
      buyerInfo: string | null,
    },
  };

  export type CartAction = {
    type: string;
    payload: ProductInterface[] | string;
}
  