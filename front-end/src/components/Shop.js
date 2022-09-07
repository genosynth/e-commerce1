import React from 'react'
import polyd from '../photos/polyd.jpg'
import polybrute from '../photos/polybrute.png'
import kurzweil from '../photos/kurzweil2700.jpg'
import jupiter from '../photos/jupiter.png'
import opsix from '../photos/opsix.png'
import deepmind from '../photos/deepmind.png'
import '../css/shop.css'
import Button from '@mui/material/Button';

function Shop({update}) {

    let style = {width:"500px", height:"300px"}
  return (
    <div><h1>Shop</h1>
      <div className='container'>
        <div className='card'>
          <h2>Behringer Poly-D</h2>
          <img src={polyd} style ={style}></img>
          <div className='price'>
            <h3>Eur 600</h3>
            <button className='my-button' type='submit' onClick={()=> {
              update({value:600, name:"Behringer Poly-D", quantity:1, img:polyd})
            }}>Add To Cart</button>
            </div>
        </div>

        <div className='card'>
          <h2>Arturia Polybrute</h2>
          <img src={polybrute} style ={style}></img>
          <div className='price'>
            <h3>Eur 2,100</h3>
            <button className='my-button' type='submit' onClick={()=> {
              update({value:2100, name:"Arturia Polybrute", quantity:1, img:polybrute})
            }}>Add To Cart</button>
            </div>
          </div> 

        <div className='card'>
          <h2>Korg Opsix</h2>
          <img src={opsix} style ={style}></img>
          <div className='price'>
            <h3>Eur 450</h3>
            <button className='my-button' type='submit' onClick={()=>{
              update({value:450, name:"Korg Opsix", quantity:1, img:opsix})
            }}>Add To Cart</button>
          </div>  
        </div>  

            <div className='card'>
          <h2>Behringer Deepmind 12</h2>
          <img src={deepmind} style ={style}></img>
          <div className='price'>
            
            <h3>Eur 720</h3>
            <button className='my-button' type='submit' onClick={()=>{
              update({value:720, name:"Behringer Deepmind 12", quantity:1, img:deepmind})
            }}>Add To Cart</button>
          </div>
        </div> 
 

        

        <div className='card'>
          <h2>Roland Jupiter-8 (Vintage)</h2>
          <img src={jupiter} style ={style}></img>
          <div className='price'>
            <h3>Eur 5,000</h3>
            <button className='my-button' type='submit' onClick={()=>{
              update({value:5000, name:"Roland Jupiter-8", quantity:1, img:jupiter})
            }}>Add To Cart</button>
          </div>
        </div> 

        <div className='card'>
          <h2>Kurzweil - K2700</h2>
          <img src={kurzweil} style ={style}></img>
          <div className='price'>
            <h3>Eur 2,400</h3>
            <button className='my-button' type='submit' onClick={()=> {
              update({value:2400, name:"Kurzweil - K2700", quantity:1, img:kurzweil})
            }}>Add To Cart</button>
            </div>
        </div> 

     

    
      </div>
    </div>

    
  )
}

export default Shop