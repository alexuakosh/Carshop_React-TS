import { ProductInterface } from "../types";

export interface ProductStateInterface {
    downloadRequestState: string,
    productList: [],
  }

export type ProductsAction = {
    type: string;
    payload?: ProductInterface[];
}
    