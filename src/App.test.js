import { mount } from "enzyme";
import ProductList from "./components/ProductList/ProductList";
import Button from "./components/Button/Button";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";
import { Provider } from "react-redux";
import store from "./store/store";
import Modal from "./components/Modal/Modal";


const callback = jest.fn(() => {});

test("Button calls callback function on click", () => {
  const button = mount(
    <Provider store={store}>
      <Button color="red" text="some text" func={callback} />
    </Provider>
  );

  button.find(".button").simulate("click");
  expect(callback).toHaveBeenCalledTimes(1);
});

describe("Modal testing", () => {
  const modal = mount(
    <Provider store={store}>
      <Modal
        header="Do you want to add this?"
        text="When you click 'Ok' this car will be added to your cart"
        color="green"
        closeModal={callback}
        actions={
          <div className="modal-btns">
            <Button text="Ok" func={callback} color="black"></Button>
            <Button text="Cancel" func={callback} color="grey"></Button>
          </div>
        }
      />
    </Provider>
  );

  test("Modal hasn't been rendered in ProductList by default", () => {
    const products = mount(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  
    expect(products.find(Modal)).toHaveLength(0);
  });
  
  test("Modal hasn't been rendered in Favorites by default", () => {
    const products = mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
  
    expect(products.find(Modal)).toHaveLength(0);
  });
  
  test("Modal hasn't been rendered in Cart by default", () => {
    const products = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
  
    expect(products.find(Modal)).toHaveLength(0);
  });

  test("Modal contains buttons", () => {
    expect(modal.find(Button)).toHaveLength(2);
  });
  
  test("Modal contains right title", () => {
    expect(modal.find(".title").text()).toEqual("Do you want to add this?");
  });
})

