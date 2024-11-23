import React, { useContext } from "react";
import { FormContext } from "./FormContext";


function Form(){
  const [setUserName,setBrand,setPrice,setQuantity,setDescription,setShowProduct]=useContext(FormContext)
  const handleClick=(event)=>{
     event.preventDefault()
      if(event.target.elements.name.value!=="" || event.target.elements.brand.value!==""  || event.target.elements.price.value!=="" || event.target.elements.price.value!=="" || event.target.elements.quantity.value!=="" || event.target.elements.description.value!==""){
          setUserName(event.target.elements.name.value)
          setBrand(event.target.elements.brand.value)
          setPrice(event.target.elements.price.value)
          setQuantity(event.target.elements.quantity.value)
          setDescription(event.target.elements.description.value)
          setShowProduct(true)
          }
          else{
                alert("enter correct method")
              }
            
       }
    return(
        <div>
          <form onSubmit={handleClick}>
            <input type='text' name='name' placeholder='Enter Your name'/>
            <input type='text' name='brand'  placeholder='enter your brand name'/>
            <input type='number' name='price' placeholder='enter your price'/>
            <input type='number' name='quantity' placeholder='enter your quantity'/>
            <input type='text' name='description' placeholder='enter your text'/>
            <button>submit</button>
          </form>
        </div>
    );
}
export default Form;
