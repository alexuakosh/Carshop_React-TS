import { FC, useEffect } from "react";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { ProductStateInterface } from "../../types/reduxTypes/products.types";
import { ProductInterface } from "../../types/types";
import { FavoritesStateInterface } from "../../types/reduxTypes/favorites.types";

const ProductList: FC = () => {
  const productState: ProductStateInterface = useTypedSelector(
    (state) => state.products
  );
  const { downloadRequestState, productList } = productState

  const { cardToCartId } = useTypedSelector((state) => state.modal);

  const favoriteState: FavoritesStateInterface = useTypedSelector((state) => state.favorites);
  const { favoriteProductsId } = favoriteState

  const {
    fetchProducts,
    addToFavorites,
    addToCart,
    removeFromFavorites,
    closeModal,
    openModal,
  } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProductToCart = (): void => {
    addToCart();
    closeModal();
  };

  const addProductToFavorites = (id: string): void => {
    addToFavorites(id);
  };

  const removeProductFromFavorites = (id: string): void => {
    removeFromFavorites(id);
  };

  const handleCloseModal = (): void => {
    closeModal();
  };

  return (
    <>
      <div>
        {downloadRequestState === "success" && productList.map((product: ProductInterface) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.img}
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

export default ProductList;
