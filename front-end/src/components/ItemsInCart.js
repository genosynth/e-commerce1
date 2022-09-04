import React from "react";
import '../css/itemsInCart.css'

function ItemsInCart({ cart, increaseQuantity, decreaseQuantity }) {
  return cart.map((item) => {
    return (

        <tr>
            <td>{item.name}</td>
            <td>{item.value * item.quantity}€</td>
            <td>
            <span
          className="quantity"
          onClick={() => {
            increaseQuantity(item);
          }}
        >
          +
        </span>{" "}
        x{item.quantity}{" "}
        <span
          className="quantity"
          onClick={() => {
            decreaseQuantity(item);
          }}
        >
          -
        </span>{" "}
            </td>
        </tr>
      
    );
  });
}

export default ItemsInCart;
