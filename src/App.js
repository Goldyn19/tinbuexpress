import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Address from './pages/Address';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<SingleProduct/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/address' element={<Address/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
