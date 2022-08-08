import React from "react";

const Sucursales = (info) => {
    let infoSucur  = info.info;
    
    return(

        <div className={infoSucur.clase} id="sucursales" >
            <div className="animate__animated animate__backInUp d-flex flex-column p-3 gap-2 fw-bolder">
            <h2 className="text-light fw-bolder" >{infoSucur.nombre}</h2>
            <span className="text-light">{infoSucur.ubicacion}</span>
            <a href="#">
                <img src="http://labirreria.com.ar/wp-content/uploads/2019/08/png.png" alt="" />
            </a>
            </div>
        </div>
    )
}

export default Sucursales;