import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Header() {
  const { downloadRequestState } = useTypedSelector(
    (state) => state.products
  );
  
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <Button text="HOME" color="grey"></Button>
        </Link>
        <Link to={"/favorites"}>
          <Button text="FAVORIRES" color="gold"></Button>
        </Link>
        <Link to={"/cart"}>
          <Button text="CART" color="green"></Button>
        </Link>
      </div>
      <div>
        {downloadRequestState === "loading" && (
          <div className="loader">
            <h3 className="header">Loading...</h3>
          </div>
        )}

        {downloadRequestState === "error" && (
          <div className="loader">
            <h3 className="header">There is some problem with downloading products...</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
