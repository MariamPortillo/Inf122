import React  from "react";
 function Galeria(){
    return(
        <div className="main">
            <h1><img src={require('../Images/principal.png' )} className='principal' alt='principal'/>Pepito</h1>
            <div className="padre">
                <img src={require('../Images/1.jpg' )} className='img1' alt='Img1'/>
                <img src={require('../Images/2.jpg') }className='img2'  alt='Img2'/>
                <img src={require('../Images/3.jpg') }className='img3'  alt='Img3'/>
                <img src={require('../Images/4.jpg') }className='img4'  alt='Img4'/>
                <img src={require('../Images/5.jpg') }className='img4'  alt='Img4'/>
                <img src={require('../Images/6.jpg') }className='img4'  alt='Img4'/>
                <img src={require('../Images/7.jpg') }className='img4'  alt='Img4'/>
                <img src={require('../Images/8.jpg') }className='img4'  alt='Img4'/>
            </div>
        </div>
    );
 }
 export default Galeria;
