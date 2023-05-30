import React from "react";
import { Link } from 'react-router-dom';
import './SolImagen.css';


export default function SolImagen() {
    return (
        <div className="contenedor">
        <img src="https://i.pinimg.com/564x/e1/8b/1c/e18b1cf22218a80ed150289b3aa4bbfb.jpg" className="imagen"></img>
        <img src="https://www.pngmart.com/files/17/Watercolor-Paint-PNG-Clipart.png" className="pintura" />
        <img src="https://www.alvamex.com.mx/sitio/wp-content/uploads/2019/12/slider4_manchas.png" className="mancha" />
        </div>
    
    );
}