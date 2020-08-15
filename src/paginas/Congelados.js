import React, { useState, useEffect } from 'react';
import Cards from '../componentes/Card';
// import './containers.css'
import axios from 'axios';

import Card from '../componentes/Card';


const Congelados = () => {

    const URL = 'https://selem-hideki.firebaseio.com/productoscongelados.json';

    const [cards, setCards] = useState([]);

    const getCards = () => {
        axios.get(URL)
            .then((res) => setCards(res.data))
            .catch((error) => alert(error));
    }

    useEffect(()=>{

        getCards()

    },[])

    
    return (
        <div>
            
            <main className="main">      

                <div className="container pt-4">

                    {cards ? Object.keys(cards).map((id) =>
                            <Card
                                key={id}
                                id={id}
                                Nombre={cards[id].Nombre}
                                Precio={cards[id].Precio}
                                img={cards[id].img}
                                
                            />)
                        :<h1>No hay productos</h1>
                    }

                </div>
            </main>
        </div>
    )
}

export default Congelados;