import React from "react";

const Sucursales = (info) => {
    let infoSucur  = info.info;
    
    return(
        <div className={infoSucur.clase} >
            <h2 className="text-light" >{infoSucur.nombre}</h2>
            <span className="text-light">{infoSucur.ubicacion}</span>
            
            <a href="#">
                <img src="http://labirreria.com.ar/wp-content/uploads/2019/08/png.png" alt="" />
            </a>
        </div>
    )
}

export default Sucursales;