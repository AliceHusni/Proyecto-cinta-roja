import React from 'react'
import Card from '../componentes/Card'

const Carrito = (props) => {

    const { Nombre, Precio, img } = props;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={img} />
            <div className="card-body">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">{`Total:${"$"},${(Card/Precio)*2}`}</p>

                <p id='contador' value=""></p>

                <a href={"a"} className="btn btn-primary">Agregar a carrito</a>
            </div>
        </div>
    )
}

export default Carrito



