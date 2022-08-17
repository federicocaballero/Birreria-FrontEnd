import './App.css';
import 'animate.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Birras from './components/Birras';
import Banner from './components/Banner';
import Sucursales from './components/Sucursales';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Portada/>
      <Banner />
      <Birras/>
      <Sucursales/>
      <Footer/>      
    </div>
  );
}

export default App;
