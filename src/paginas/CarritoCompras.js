import React, { useState, useEffect } from 'react';
// import Cards from '../componentes/Card';
// import './containers.css'
import axios from 'axios';

import Carrito from '../componentes/Card';


const productos = () => {

    const productos = Carrito;

    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        axios.get(productos)
            .then((res) => setProductos(res.data))
            .catch((error) => alert(error));
    }

    useEffect(()=>{

        getProductos()

    },[])

    
    return (
        <div>
            
            <main className="main">      

                <div className="container pt-4">

                    {cards ? Object.keys(productos).map((id) =>
                            <Card
                                key={id}
                                id={id}
                                Nombre={productos[id].Nombre}
                                Precio={productos[id].Precio}
                                img={productos[id].img}
                                
                            />)
                        :<h1>No hay productos en tu carrito</h1>
                    }

                </div>
            </main>
        </div>
    )
}

export default Congelados;