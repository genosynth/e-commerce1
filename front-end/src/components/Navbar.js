import React from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart';
import '../css/navbar.css'


function Navbar({cart,clickCart}) {
let quantity = 0
  cart.forEach(element => {
    quantity=quantity+element.quantity
  });
  return (
    <nav>
    <h2>The Zone</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="#" onClick={clickCart}><CartIcon fontSize='large'/>{quantity}</a></li>
    
    </ul>
    
  </nav>
  )
}

export default Navbar