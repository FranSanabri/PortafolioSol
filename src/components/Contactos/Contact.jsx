import React from "react";
import { Link } from 'react-router-dom';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function Titulo() {
    return (
        <div className="contact-general" id="contact">
            <img src="https://www.pngmart.com/files/17/Watercolor-Paint-PNG-Clipart.png" className="pintura-1" />
           <h3 className="contact-titulo" >Contacto</h3>
            <h6 className="email">Email:
            <p className="correo">msolcis18@gmail.com</p></h6>
            <h6 className="red">Mis redes:
            <a href="https://www.instagram.com/msolciiss/" target="_blank"><FontAwesomeIcon icon={faInstagram} href="" target="_blank" className="iconos"/></a> {"  "}
            <a href="https://www.linkedin.com/in/maria-sol-sanabria-051961205/" target="_blank"><FontAwesomeIcon icon={faLinkedin}  className="iconos"/></a> {"  "} </h6>
            <hr className="linea"></hr>
            
        </div>
        
        
    );
}