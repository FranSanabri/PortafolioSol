import React from "react";
import { Link } from 'react-router-dom';
import './AboutMe.css';


export default function AboutMe() {
    return (
        <div className="container" id="aboutme">
          <h1 className="About">Acerca de mi</h1>
          <p className="name">Soy estudiante de Licenciatura en Psicologia en la Universidad Argentina Jonh F Kennedy, con el 70% de las materias aprobodas. Me encataria insertarme en el mundo laboral ocupando un lugar donde pueda aportar valor, aprender, desarrollarme, y ayudar al resto de las personas con las que trabajo.</p>
          <img src="https://i.pinimg.com/originals/d7/f0/44/d7f04426f1116d51976ce844369b1963.jpg" className="foto"></img>
        </div>
    
    );
}