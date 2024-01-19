import React from 'react';

function Login(){
    const click = (x) =>{
        console.log(x);
    };
    return(
        <div className='main'>
            <div className='padre'>
                <form>
                    <div className='Usuario'>
                        <label>Usuario </label>
                        <input placeholder='Ingrese nombre de usuario'></input>
                    </div>
                    <div className='Contraseña'>
                        <label>Contraseña</label>
                        <input placeholder='Contraseña...'></input>
                    </div>
            
                    <div className='Botones'>
                        <boton funClick={()=>click("Login")} text="Login"/>
                        <boton funClick={()=>click("Ingresar")} text="Ingresar"/> 
                    </div>
                </form>
            </div>
        </div>
    );
}
 export default Login;