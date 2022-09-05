import './css/App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'

import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {

  const [cart, updateCart] = useState([]) 
  const [style, updateStyle] = useState("hidden")  
 
  
  function clickCart(){

    if (style==="hidden"){return updateStyle("visible")}
    if (style==="visible"){ return updateStyle("hidden")}
  }

  function update(object){
    
    let boolean = false //to check for double items to increase quantity
    cart.forEach((el)=>{

      

      if (el.name==object.name){
       boolean = true
      }
    })

    if (!boolean){ updateCart([...cart,object])}
    if (boolean){
      let newCart = cart.map((el)=>{
        if (el.name==object.name){
          el.quantity++
          
        }

        return el
    })

    updateCart([...newCart])
  
  }


    
  }

  function increaseQuantity(object){

    let newCart = cart.map((el)=>{
      if (el.name==object.name){
        el.quantity++
      }

      return el
    })

    updateCart([...newCart])
  }

  function decreaseQuantity(object){
    
    let newCart = cart.map((el)=>{
      if (el.name==object.name){
        el.quantity--
      }

     return el    
    })

    const result = newCart.filter(item => item.quantity > 0);
   
    updateCart([...result])

  }

  return (
    <div className="App">
      <Cart cart={cart} clickCart={clickCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} style={style}></Cart> 
     <Navbar cart={cart} clickCart={clickCart}/>
     <Router>
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop" element={<Shop update={update}></Shop>}/>
        </Routes>
     </Router>
    
      

    </div>
  );
}

export default App;
