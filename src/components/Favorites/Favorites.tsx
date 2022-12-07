import React, { FC, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { FavoritesStateInterface } from "../../types/reduxTypes/favorites.types";
import { ProductInterface } from "../../types/types";
import { productsToShow } from "../../store/action-creators/products.actions";

const Favorites: FC = () => {
  const { downloadRequestState, productList } = useTypedSelector(
    (state) => state.products
  );

  const { cardToCartId } = useTypedSelector((state) => state.modal);

  const favoriteState: FavoritesStateInterface = useTypedSelector((state) => state.favorites);
  const { favoriteProductsId, favoriteProducts } = favoriteState

  const {
    fetchProducts,
    downloadCardsFromFavorites,
    addToCart,
    removeFromFavorites,
    closeModal,
    openModal,
  } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cardsFromFavorites = productsToShow(productList, favoriteProductsId);
    downloadCardsFromFavorites(cardsFromFavorites);
  }, [productList, favoriteProductsId]);

  const addProductToCart = (): void => {
    addToCart();
    closeModal();
  };

  const removeProductFromFavorites = (id: string): void => {
    removeFromFavorites(id);
  };

  const handleCloseModal = (): void => {
    closeModal();
  };

  return (
    <>
      <div style={{ minWidth: "100%", textAlign: "center" }}>
        {!favoriteProducts.length && downloadRequestState === "success" && (
          <div style={{ fontSize: "30px", color: 'red' }}>
            Currently, there are no favorite products
          </div>
        )}
        {downloadRequestState === "success" &&
          favoriteProducts.map((product: ProductInterface) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.favorites}
                name={product.name}
                color={product.color}
                code={product.code}
                price={product.price}
                openModal={openModal}
                removeFromFavorites={removeProductFromFavorites}
                isFavorite={
                  favoriteProductsId.includes(product.id as never) ? true : false
                }
                btnColor={"green"}
                btnText={"Add to cart"}
              />
            );
          })}
      </div>

      {cardToCartId !== "" && (
        <>
          <div onClick={handleCloseModal} className="blackback"></div>
          <Modal
            header="Do you want to add this?"
            text="When you click 'Ok' this car will be added to your cart"
            color="green"
            closeModal={closeModal}
            actions={
              <div className="modal-btns">
                <Button
                  text="Ok"
                  func={addProductToCart}
                  color="black"
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

export default Favorites;
