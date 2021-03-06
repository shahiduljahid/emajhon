import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price,0);
    let shipping =0;
    if ( total>100){
        shipping=0;
    }
    else if(total>50){
        shipping = 4.99;
    }
   else if(total>0){
        shipping = 12.99;
    }
    const tax = Number((total/10).toFixed(2))
    const grandTotal = Number((total + shipping + tax).toFixed(2))
   
    
    return (
        <div>
            <h4>Order summery</h4>
            <p>Items ordered : {cart.length}</p>
          
            <p><small>Shipping cost :${shipping}</small></p>
            <p>Tax + Vat :$ {tax}</p>
            <p>Total : ${grandTotal}</p>
          
           
            
        </div>
    );
};

export default Cart;