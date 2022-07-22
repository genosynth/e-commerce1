import React from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css'


function Navbar() {
  return (
    <nav>
    <h2>The Zone</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="#"><CartIcon fontSize='large' /></a></li>
    </ul>
    
  </nav>
  )
}

export default Navbar