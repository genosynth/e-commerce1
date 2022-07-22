import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'

import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop" element={<Shop></Shop>}/>
        </Routes>
     </Router>
     <Cart></Cart>
      

    </div>
  );
}

export default App;
