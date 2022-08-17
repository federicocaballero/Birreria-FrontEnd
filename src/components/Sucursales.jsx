import React from "react";

const infoSucursales = [
    {nombre:"Palermo Hollywood", ubicacion:"Honduras 5502 - Reservas 11.5478.8123", ig:"", clase:"sucursal1"},
    {nombre:"Puerto Madero", ubicacion:"Alicia M de justo 152 - reservas 11.2595.8925", ig:"", clase:"sucursal2"},
    {nombre:"cañitas", ubicacion:"ortega y gasset 1899 - reservas 11.6737.0129", ig:"", clase:"sucursal3"},
    {nombre:"palermo viejo", ubicacion:"acuña de figueroa 1800 - reservas 11.5400.1829", ig:"", clase:"sucursal4"},
    {nombre:"almagro", ubicacion:"lavalle 4590 - reservas 11.4829.1989", ig:"", clase:"sucursal1"},
    {nombre:"villa crespo", ubicacion:"vera 601 - reservas 11.2397.2078", ig:"", clase:"sucursal2"},
    {nombre:"banfield", ubicacion:"av. alsina 1001 - reservas 11.5489.1992", ig:"", clase:"sucursal3"},
    {nombre:"paseo la plaza", ubicacion:"corrientes 169 - reservas 11.5330.5329", ig:"", clase:"sucursal4"},
  ]

const Sucursales = () => {
    return (
    
    infoSucursales.map((element) => (
        <div className={element.clase} id="sucursales" >
            <div className="animate__animated animate__backInUp d-flex flex-column p-3 gap-2 fw-bolder">
            <h2 className="text-light fw-bolder" >{element.nombre}</h2>
            <span className="text-light">{element.ubicacion}</span>
            <a href="https://www.instagram.com/labirreriaok/" target="blank">
                <img src="http://labirreria.com.ar/wp-content/uploads/2019/08/png.png" alt="sucursales" />
            </a>
            </div>
        </div>
    ))
    )
}

export default Sucursales;