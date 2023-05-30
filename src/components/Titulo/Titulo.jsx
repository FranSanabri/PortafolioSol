import React from "react";
import { Link } from 'react-router-dom';
import './Titulo.css';
import CVSS2023 from '../cv/CVSS2023.pdf';


export default function Titulo() {
    return (
        <div className="box">
           <h1 className="tittle" id="titulo">Maria Sol Sanabria</h1>
           <p className="descripcion">Estudiante de Licenciatura en Psicologia - IT Recruiter</p>
           <button className="button-2"><span></span>
                                         <span></span>
                                         <span></span>
                                        <span></span><a href={CVSS2023} target="_blank"> Ver CV</a></button>
                                       
        </div>
        
        
    );
}