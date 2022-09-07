import React from "react";
import '../css/itemsInCart.css'

function ItemsInCart({ cart, increaseQuantity, decreaseQuantity }) {
  return cart.map((item) => {
    return (

        <tr>
            <td>{item.name}<img src={item.img} style={{width:"100px"}}></img></td>
            <td>{item.value * item.quantity}€</td>
            <td>
            <span
          className="quantity"
          onClick={() => {
            decreaseQuantity(item);
          }}
        >
          -
        </span>
        x{item.quantity}
        <span
          className="quantity"
          onClick={() => {
            increaseQuantity(item);
          }}
        >
          +
        </span>
            </td>

            
        </tr>
      
    );
  });
}

export default ItemsInCart;
