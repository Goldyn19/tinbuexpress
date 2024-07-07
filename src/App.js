import './App.css';
import Collection from './component/Collection';
import Footer from './component/Footer';
import Hero from './component/Hero';
import NavBar from './component/NavBar';
import Products from './component/Products';
import Specials from './component/Specials';

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <Collection/>
      <Products/>
      <Specials/>
      <Footer/>
    </div>
  );
}

export default App;
