import React from 'react';
import '../style/Tablero.css';
import Cuadro from './Cuadro';
function Tablero() {

    return (
        <div className="tablero">
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
            <Cuadro valor={valor} />
        </div>

    );
}

export default Tablero;