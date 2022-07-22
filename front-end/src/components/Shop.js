import React from 'react'
import polyd from '../polyd.jpg'
import polybrute from '../polybrute.png'
import kurzweil from '../kurzweil2700.jpg'
import jupiter from '../jupiter.png'
import opsix from '../opsix.png'
import deepmind from '../deepmind.png'
import './shop.css'
import Button from '@mui/material/Button';

function Shop() {

    let style = {width:"500px"}
  return (
    <div><h1>Shop</h1>
      <div className='container'>
        <div className='card'>
          <h2>Behringer Poly-D</h2>
          <img src={polyd} style ={style}></img>
          <h3>Eur 600</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
          
        </div>

        <div className='card'>
          <h2>Arturia Polybrute</h2>
          <img src={polybrute} style ={style}></img>
          <h3>Eur 2,100</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
          </div> 

        <div className='card'>
          <h2>Kurzweil - K2700</h2>
          <img src={kurzweil} style ={style}></img>
          <h3>Eur 2,400</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
        </div> 

        <div className='card'>
          <h2>Roland Jupiter-8 (Vintage)</h2>
          <img src={jupiter} style ={style}></img>
          <h3>Eur 5,000</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
        </div> 

        <div className='card'>
          <h2>Korg Opsix</h2>
          <img src={opsix} style ={style}></img>
          <h3>Eur 450</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
        </div> 

        <div className='card'>
          <h2>Behringer Deepmind 12</h2>
          <img src={deepmind} style ={style}></img>
          <h3>Eur 720</h3>
          <Button variant="contained" type='submit'>Add To Cart</Button>
        </div> 

      </div>
    </div>

    
  )
}

export default Shop