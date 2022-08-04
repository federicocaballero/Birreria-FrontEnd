import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Birras from './components/Birras';
import Banner from './components/Banner';
function App() {

  const images = [
    {id:1, title: "Dos Dingos", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/dingo-200x200.png"},
    {id:2, title: "Ogham", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/Sin-t%C3%ADtulo-1-200x200.png"},
    {id:3, title: "Darwin", url:"https://labirreria.com.ar/wp-content/uploads/2017/02/DARWIN-200x200.png"},
    {id:4, title: "Guten Bier", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/guten-1-200x200.png"},
    {id:5, title: "La Paloma", url:"https://labirreria.com.ar/wp-content/uploads/2018/07/paloma-200x200.png"},
    {id:6, title: "Minga", url:"https://labirreria.com.ar/wp-content/uploads/2018/07/minga-200x200.png"},
    {id:7, title: "Astor", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/astor-2-200x200.png"},
    {id:8, title: "Cheverry", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/cheverry-200x200.png"}
    ]
  return (
    <div className="App">
      <Navbar/>
      <Portada/>
      <Banner />
      <Birras images={images}/>
    </div>
  );
}

export default App;
