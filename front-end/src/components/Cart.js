import React, {useState, useEffect} from 'react'
import ItemsInCart from './ItemsInCart.js'
import '../css/cart.css'
import { motion, AnimatePresence } from "framer-motion";

function Cart({cart,increaseQuantity,decreaseQuantity,clickCart,style}) {
  const [total, updateTotal] = useState(()=>{
    let total = 0;
    cart.forEach((el)=>{
      total=total+(el.value*el.quantity)
    })

    return total
  }) 


  const css = {
    visibility: style
  }

  if (cart.length<1){
    return (
      <div className='cart' style={css}><span className='close' onClick={clickCart}> Close </span>
      <h1>Cart</h1>
      <span>Your cart is empty!</span>
    </div>
    )
  }
  return (
    <div className='cart' style={css}><span className='close' onClick={clickCart}> Close </span>
      <h1>Cart</h1>

      <table>
        <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
        
        <ItemsInCart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}></ItemsInCart>
          
    </table>
    Total - {total}
    </div>
  )
}

export default Cart