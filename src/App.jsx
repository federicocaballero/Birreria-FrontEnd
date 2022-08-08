import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Birras from './components/Birras';
import Banner from './components/Banner';
import Sucursales from './components/Sucursales';
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
  ];

  const infoSucursales = [
    {nombre:"Palermo Hollywood", ubicacion:"Honduras 5502 - Reservas 11.5478.8123", ig:"", clase:"sucursal1"},
    {nombre:"Puerto Madero", ubicacion:"Alicia M de justo 152 - reservas 11.2595.8925", ig:"", clase:"sucursal2"},
    {nombre:"cañitas", ubicacion:"ortega y gasset 1899 - reservas 11.6737.0129", ig:"", clase:"sucursal3"},
    {nombre:"palermo viejo", ubicacion:"acuña de figueroa 1800 - reservas 11.5400.1829", ig:"", clase:"sucursal4"},
    {nombre:"almagro", ubicacion:"lavalle 4590 - reservas 11.4829.1989", ig:"", clase:"sucursal1"},
    {nombre:"villa crespo", ubicacion:"vera 601 - 11.2397.2078", ig:"", clase:"sucursal2"},
    {nombre:"banfield", ubicacion:"av. alsina 1001 - reservas 11.5489.1992", ig:"", clase:"sucursal3"},
    {nombre:"paseo la plaza", ubicacion:"corrientes 169 - reservas 11.5330.5329", ig:"", clase:"sucursal4"},
    
  ]


  return (
    <div className="App">
      <Navbar/>
      <Portada/>
      <Banner />
      <Birras images={images}/>
      <Sucursales info={infoSucursales[0]} />
      <Sucursales info={infoSucursales[1]} />
      <Sucursales info={infoSucursales[2]} />
      <Sucursales info={infoSucursales[3]} />
      <Sucursales info={infoSucursales[4]} />
      <Sucursales info={infoSucursales[5]} />
      <Sucursales info={infoSucursales[6]} />
      <Sucursales info={infoSucursales[7]} />
      
      
      
    </div>
  );
}

export default App;
