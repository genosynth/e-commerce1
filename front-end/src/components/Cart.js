import React, {useState, useEffect} from 'react'
import ItemsInCart from './ItemsInCart.js'
import '../css/cart.css'
import { motion, AnimatePresence } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Cart({cart,increaseQuantity,decreaseQuantity,clickCart,style}) {

  const [total, updateTotal] = useState(0)

  useEffect(()=> {
    let subTotal = 0
    cart.forEach((el)=>{
      subTotal=subTotal+(el.value*el.quantity)
    })
   updateTotal(subTotal)
  }, [cart])

  const css = {
    visibility: style
  }

  if (cart.length<1){
    return (
      <div className='cart' style={css}>
      <h1>Cart</h1>
      <span>Your cart is empty!</span>
      <Button variant="secondary" onClick={clickCart}>Close</Button>
    </div>
    )
  }
  return (
    <div className='cart' style={css}>
      <h1>Cart</h1>

      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        
        
        <ItemsInCart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}></ItemsInCart>
       
    </Table>
    <span>Total - {total}€ </span>
    <Button>Check Out</Button>
    <Button variant="secondary" onClick={clickCart}>Close</Button>
    </div>
  )
}

export default Cart