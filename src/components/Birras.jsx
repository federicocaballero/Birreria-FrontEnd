import React from "react";

const Birras = (images) =>{
   
    const imagenes = images.images;
    return(
        <div className="contenedor-items" id="birras">
            <img className="item" src={imagenes[0].url} alt={imagenes[0].title} />
            <img className="item" src={imagenes[1].url} alt={imagenes[1].title} />
            <img className="item" src={imagenes[2].url} alt={imagenes[2].title} />
            <img className="item" src={imagenes[3].url} alt={imagenes[3].title} />
            <img className="item" src={imagenes[4].url} alt={imagenes[4].title} />
            <img className="item" src={imagenes[5].url} alt={imagenes[5].title} />
            <img className="item" src={imagenes[6].url} alt={imagenes[6].title} />
            <img className="item" src={imagenes[7].url} alt={imagenes[7].title} />
        </div>
        
    )
    
}


export default Birras; 