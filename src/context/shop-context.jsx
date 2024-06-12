import React, {createContext} from "react";
import {PRODUCTS} from "../products";
export const ShopContext= createContext(null);

const getDefaultCart=()=>{
   let cart={};
   for(let i=1;i<PRODUCTS.length;i++){
    cart[i]=0;
   } 
   return cart;
}
export const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=React.useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const updateCartItemCount=(newItem,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]: newItem}));
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
                
            }
        }
    }
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}
