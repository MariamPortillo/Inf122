import React from "react";
import "../styles/Evento.css";
function Evento(){
    return(
        <div className="card-container">
            <img className="card-image" src={require("../images/evento1.jpeg")} alt="Foto del evento"/>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{dateLiteral}</p>
                <p className="card-place"{placeLiteral}</p>
                <p className="card-description">{description.map}</p>
            </div>
        </div> 
    );
}
export default Evento;
