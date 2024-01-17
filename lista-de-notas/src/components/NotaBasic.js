import React from "react";

function NotaBasic({nota, onDelete, onEdit}){
    return(
        <div>
            <p className="nota">{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}