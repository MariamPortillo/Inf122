import React from 'react';
function boton({ funClick, text }) {

    return (
        <button onClick={funClick}>
            {text}
        </button>
    )
}

export default boton;
