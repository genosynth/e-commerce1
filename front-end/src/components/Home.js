import React from 'react'
import image from '../home.jpg'
import Button from '@mui/material/Button';
import './home.css'

function Home() {


  return (
    <div className='bimage'>
        <div className='home-body'><h1>Best Online Shop Of 2021</h1>
        <h4>-#1 Ranked by Technology Magazine</h4>
        <form action="/shop">
        <Button variant="contained" type='submit'>Shop Now</Button>
        </form>
        
        </div>
        </div>
  )
}

export default Home