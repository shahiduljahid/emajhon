import { logDOM } from "@testing-library/dom";
import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header-Container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <nav>
          <a href="/shop">Shop</a>
          <a href="/review"> Order Review</a>
          <a href="/manage">Manage inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
