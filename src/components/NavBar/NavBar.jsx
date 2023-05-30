import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <a href="#titulo"><p className="store">Sobre mi</p></a>
            <a href="#skill"><p className="store-1">Habilidades</p></a>
            <a href="#port"><p className="store-2">Portafolio</p></a>
            <a href="#contact"><p className="store-3">Contacto</p></a>
        </nav>
        


        </>
    )
}







