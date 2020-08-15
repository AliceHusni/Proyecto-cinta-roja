import React from 'react'
import "./Card.css"
import Carrito from "./Carrito"

const Card = (props) => {

    const { Nombre, Precio, img } = props;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={img} />
            <div className="card-body">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">{Precio}</p>

                <button id='aumentar' onclick="carrito(this)" value="aumentar">+</button>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="1"></input>
                <button id='disminuir' onclick="carrito(this)" value="disminuir">-</button>

                <p id='contador' value=""></p>

               
                {/* <button onClick={ () => {createCarrito(Nombre,Precio,img)}} className="btn btn-primary">Agregar</button> */}
                 
            </div>
        </div>
    )
}


export default Card
