import React from 'react'
import Items from './Items'
import '../css/shop.css'

function Shop({update,items}) {

    let style = {width:"500px", height:"300px"}
  return (
    <div><h1>Shop</h1>
      <div className='container'>
        <Items items={items} update={update}></Items>          
    
      </div>
    </div>

    
  )
}

export default Shop