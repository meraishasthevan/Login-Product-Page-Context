
import './App.css';
import Login from './Login.js';
import Home from './Home.js'
import About from './About.js';
import Form from './Form.js';
import Dashboard from './Dashboard.js';
import Product from './Product.js';
import { ProductContext } from './ProductContext.js';
import {Route,Routes} from 'react-router-dom';
import { useState } from 'react';
/*import {FormContext} from './FormContext.js'*/


function App() {
    
   /*const [username,setUserName]=useState("")
   const [brand,setBrand]=useState("")
   const [price,setPrice]=useState("")
   const [quantity,setQuantity]=useState("")
   const [description,setDescription]=useState("")
   const [showProduct,setShowProduct]=useState(false)*/

   const[quantity,setQuantity]=useState(1)

  return (
      <div>
      <ProductContext.Provider value={{quantity,setQuantity}}>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product' element={<Product/>}/>
      
      </Routes>
          
      </ProductContext.Provider>
    
      </div>

        /*<FormContext.Provider value={{username,setUserName,brand,setBrand,price,setPrice,quantity,setQuantity,description,setDescription,showProduct,setShowProduct}}>
          {showProduct}? <Product/>:<Form/>
        </FormContext.Provider>*/
      
        
    
  );
}

export default App;
