import React, { FC, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import PurchaseForm from "../PurchaseForm.jsx/PurchaseForm";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { CartStateInterface } from "../../types/reduxTypes/cart.types";
import { ProductInterface } from "../../types/types";
import { FavoritesStateInterface } from "../../types/reduxTypes/favorites.types";
import { productsToShow } from "../../store/action-creators/products.actions";

const Cart: FC = () => {
  const { downloadRequestState, productList } = useTypedSelector(
    (state) => state.products
  );

  const { cardToCartId } = useTypedSelector((state) => state.modal);

  const favoriteState: FavoritesStateInterface = useTypedSelector((state) => state.favorites);
  const { favoriteProductsId } = favoriteState

  const cartState: CartStateInterface = useTypedSelector((state) => state.cart);
  const { productsToCart, productsToCartId, purchasedProductsInfo } = cartState

  const {
    fetchProducts,
    downloadCardsFromCart,
    addToFavorites,
    removeFromFavorites,
    removeFromCart,
    closeModal,
    openModal,
  } = useActions();


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cardsFromCart = productsToShow(productList, productsToCartId);
    downloadCardsFromCart(cardsFromCart);
  }, [productList, productsToCartId]);

  useEffect(() => {
    if (purchasedProductsInfo.buyerInfo !== null) {
      console.log("PURCHASED PRODUCTS ARE:");
      purchasedProductsInfo.products.forEach((product: ProductInterface) => {
        console.log(product.name);
      });

      console.log();

      console.log("BUYER'S INFO:");
      for (const [key, value] of Object.entries(
        purchasedProductsInfo.buyerInfo
      )) {
        console.log(`${key} - ${value}`);
      }
    }
  }, [purchasedProductsInfo]);

  const addProductToFavorites = (id: string): void => {
    addToFavorites(id);
  };

  const removeProductFromFavorites = (id: string): void => {
    removeFromFavorites(id);
  };

  const removeProductFromCart = (e: any): void => {
    removeFromCart(e.target.dataset.id);
    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <div style={{ minWidth: "100%", textAlign: "center" }}>
        {!productsToCart.length && downloadRequestState === "success" && (
          <div style={{ fontSize: "30px", color: 'red' }}>
            Currently, there are no products in cart
          </div>
        )}

        {downloadRequestState === "success" &&
          productsToCart.map((product: ProductInterface) => {
            return (
              <>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.favorites}
                  name={product.name}
                  color={product.color}
                  code={product.code}
                  price={product.price}
                  openModal={openModal}
                  addToFavorites={addProductToFavorites}
                  removeFromFavorites={removeProductFromFavorites}
                  isFavorite={
                    favoriteProductsId.includes(product.id as never) ? true : false
                  }
                  btnColor={"red"}
                  btnText={"Remove from cart"}
                />
              </>
            );
          })}
      </div>

      {productsToCart.length > 0 && downloadRequestState === "success" && <PurchaseForm />}

      {cardToCartId !== "" && (
        <>
          <div onClick={handleCloseModal} className="blackback"></div>
          <Modal
            header="Do you want to delete this?"
            text="When you click 'Ok' this car will be deleted from your cart"
            color="red"
            closeModal={closeModal}
            actions={
              <div className="modal-btns">
                <Button
                  text="Ok"
                  func={removeProductFromCart}
                  color="black"
                  data-id={cardToCartId}
                ></Button>
                <Button
                  text="Cancel"
                  func={handleCloseModal}
                  color="grey"
                ></Button>
              </div>
            }
          />
        </>
      )}
    </>
  );
}

export default Cart;


