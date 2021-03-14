import React from "react";

const ReviewItem = (props) => {
//   console.log(props.removedProduct);
  const { name, quantity,key, price} = props.product;
  const reviewItemStyle = {
      borderBottom : '1px solid lightgrey',
      marginBottom : '5px',
      paddingBottom : '5px',
      marginLeft :'150px'
  };
  return (
    <div style ={reviewItemStyle}>
      <h4>{name}</h4>
      <p>Quantity : {quantity}</p>
      <p><small>$ {price}</small></p>
      
      <button onClick={()=>props.removedProduct(key)}  className="add-product">Remove</button>
    </div>
  );
};

export default ReviewItem;
