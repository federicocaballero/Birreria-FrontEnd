import React from "react";

const Navbar = () =>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light text-uppercase navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav text-start">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#banner">Nosotros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#birras">Nuestras birras</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#sucursales">Locales</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Reservas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Franquicias</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" target="blank" href="https://www.instagram.com/fedecaballero11/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>                            
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;
