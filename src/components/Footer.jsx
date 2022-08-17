import React from "react";

const Footer = () =>{
    return(
        <div className="footer text-capitalize fs-3">
        <div className="row lh-sm p-4">
            <div className="col">
                <h5 className="fw-bold links">© 2022 Federico Caballero</h5>
            </div>            
            <div className="col text-start" id="contacto">
                <div className="d-flex flex-column flex-md-row justify-content-around" >
                    <a className="links" href="https://www.instagram.com/fedecaballero11/" target="blank">
                        <i className="fa-brands fa-instagram fw-bold me-2"></i>
                        instagram
                    </a>
                    <a className="links" href="https://fedecaballero1234@gmail.com" target="blank">
                        <i className="fa-solid fa-envelope fw-bold me-2"></i>
                        gmail
                    </a>
                    <a className="links" href="https://wa.me/543704556925" target="blank">
                        <i className="fa-brands fa-whatsapp fw-bold me-2"></i>
                        WhatsApp
                    </a>
                    
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Footer;