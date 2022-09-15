import './css/App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'

import polyd from './photos/polyd.jpg'
import polybrute from './photos/polybrute.png'
import kurzweil from './photos/kurzweil2700.jpg'
import jupiter from './photos/jupiter.png'
import opsix from './photos/opsix.png'
import deepmind from './photos/deepmind.png'

import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {

  //localStorage.setItem("cart",[]);
  const [cart, updateCart] = useState(()=>{
    if (localStorage.getItem("cart")){return JSON.parse(localStorage.getItem("cart"))}
    return []
  }) 
  const [style, updateStyle] = useState("hidden")  

  const [items, updateItems] = useState([
    {name:"Behringer Poly D", value:600,quantity:1, img:polyd},
    {value:2100, name:"Arturia Polybrute", quantity:1, img:polybrute},
    {value:450, name:"Korg Opsix", quantity:1, img:opsix},
    {value:720, name:"Behringer Deepmind 12", quantity:1, img:deepmind},
    {value:5000, name:"Roland Jupiter-8", quantity:1, img:jupiter},
    {value:2400, name:"Kurzweil - K2700", quantity:1, img:kurzweil}

  ])
 
  
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

    if (!boolean){
       updateCart([...cart,object])
       
      }
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


  useEffect(()=> {
   localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="App">
    <Cart cart={cart} clickCart={clickCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} style={style}></Cart> 
     <Navbar cart={cart} clickCart={clickCart}/>
     <Router>
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop" element={<Shop update={update} items={items}></Shop>}/>
        </Routes>
     </Router>
    
      

    </div>
  );
}

export default App;
