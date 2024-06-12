import React from "react"; 
import {PRODUCTS} from "../../../products";
import { Product } from "./product";
import "./shop.css";
export function Shop(){
    console.log("hello");
    return(
<div className="shop">
 <div className="shopTitle">
    <h1> My Shop</h1>
</div>
<div className="products" >
{PRODUCTS.map((product)=>(

<Product data={product}/>
))}
</div>
 </div>
    )
}