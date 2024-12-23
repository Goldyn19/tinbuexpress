import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Address from './pages/Address';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart  />} />
          <Route path='/address' element={<Address />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
