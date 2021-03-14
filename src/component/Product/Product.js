import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const product = (props) => {
 
  const { img, name, seller, price, stock,key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4><Link to={'/product/'+key}>{name}</Link></h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only{stock} left in stock -order soon</small>
        </p>
      {props.showAddToCart &&<button onClick={()=>props.handleProduct(props.product)}  className="add-product">
        <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
      </button>}
      </div>
    </div>
  );
};

export default product;
