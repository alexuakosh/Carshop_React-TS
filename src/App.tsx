import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";
import { store } from "./store/store"


function App() {
  return (
    
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    
  );
}

export default App;
