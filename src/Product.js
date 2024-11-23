import React, {useContext } from "react";
import { ProductContext } from "./ProductContext";
import Navbar from './Navbar.js'; 
import './Product.css';
function Product(){
     const {quantity}=useContext(ProductContext)
 return(
    
           <div className="product-backimg">
             <Navbar/>
             <h1>Count:{quantity}</h1>
             <div className="product-flex">
             <div className="product-card">
             <img src="/images/img-1.jpeg" alt="wait"/> 
             <h3>Wakefit</h3>
             <h3>Orthopaedic</h3>
             <h3>$ 65,000</h3>
             <p>Furniture Store Hunter Queen Size Bed.</p>
             <Counter/>
             </div> 
             <div className="product-card">
             <img src="/images/img-2.webp" alt="wait"/> 
             <h3>Fabric LHS L shape Sofa</h3>
             <h3>Light Gray and Blue</h3>
             <h3>$ 2,00,000</h3>
             <p>Movable Furniture,Fixtures and Equipment.</p>
             <Counter/>
             </div> 
             <div className="product-card">
             <img src="/images/img-3.png" alt="wait"/> 
             <h3>Jodhpuri Furniture</h3>
             <h3>Solid wood and Metal </h3>
             <h3>$ 5,00,000</h3>
             <p>Everything is Designed Well.</p>
             <Counter/>
             </div> 
             </div>
           </div>

        );
 }
            

   function Counter(){
    const{quantity,setQuantity}=useContext(ProductContext)

    function increment(){
      setQuantity(quantity+1)
    }

    function decrement(){
     if(quantity>1) {setQuantity(quantity-1)}
    }

      return(
        <div className="count-btn" >
           <button onClick={increment}>+</button>
             <span>{quantity}</span>
           <button onClick={decrement}>-</button>
        </div>
      )
   }





















 export default Product;