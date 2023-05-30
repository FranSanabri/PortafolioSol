import React from "react";
import { Link } from 'react-router-dom';
import './Portafolio.css';

export default function Portafolio() {
    return (
        <div className="container3">
           <h1 className="Portafolio-tittle" id="port">Portafolio</h1>   
           <img src="https://i.pinimg.com/750x/74/00/91/7400918c3a78a0db46d82925c08976e3.jpg" className="it" />
           <img src="https://i.pinimg.com/750x/db/2c/ac/db2cac08962708fbaa5acdbe413cf886.jpg" className="Certi1" />
           <img src="https://i.pinimg.com/750x/c3/24/b8/c324b8622da904e12552be14bd30214a.jpg" className="Certi2" /> 
           <img src="https://i.pinimg.com/750x/99/68/47/9968472a9a34827ec224d4172c33298b.jpg" className="Certi3" />                         
        </div>
        
        
    );
}