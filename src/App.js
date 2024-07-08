import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<SingleProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
