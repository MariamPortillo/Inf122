import React, {useState} from "react";
import NotaBasic from "./NotaBasic";
import "../styles/listaNotas.css";

function ListaNotasBasic(){
    const [notas,setNotas]=useState([])
    const [texto,setTexto]=useState([])
    const addNota=() => {
        setNotas([...notas,texto])
        console.log(notas);
    };
    const onDelete=() => {
        console.log("Eliminar");
    };
    const onEdit=() => {
        console.log("Editar");
    };
    return(
        <div className="contenedor-principal">
            <input 
                className="input"
                type="text"
                value=""
            />
            <button className="boton" onClick={addNota}
            <Nota
                    nota={"Soy una nota"}
                    onDelete={onDelete}
                    onEdit={onEdit}/>
            
            ))


        </div>
    )

}