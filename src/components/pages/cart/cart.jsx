import React, {useContext} from "react";
import { ShopContext } from "../../../context/shop-context";
import { PRODUCTS } from "../../../products";

import { CartItem } from "./cart-item";
import './cart.css'
export const Cart=()=>{
    const {cartItems}=useContext(ShopContext);
    return (
    <div className="cart">
       <div>
         <h1>Your Cart Items </h1>
      </div>
       <div className="cart">
         {PRODUCTS.map((product)=>{
           console.log(cartItems[product.id])
           if(cartItems[product.id]!=0 && cartItems[product.id]!= undefined){
                console.log("hi")
                return <CartItem data={product}/>;}
          })} 

       </div>

       <div className="checkout"> 
        <p>Subtotal : $</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
       </div>
    </div>);
}