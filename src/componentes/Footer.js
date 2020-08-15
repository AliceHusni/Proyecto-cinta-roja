import React from 'react'
import logo from '../imagenes/logo.png'

function Footer() {
    return (
   
   
    <div className="container-fluid ">
     <div className="row">
         <div className="col-6 text-light bg-purple text-align-center">
            
             <h3>Tel/WhatsApp: 5551465458 / 5510662292</h3>
         </div>
         <div className="col-6 d-flex justify-content-center">
             <img src={logo} alt="" width="140" height="80"/>
         </div>
    </div>
    </div>
    ) 
}

export default Footer
