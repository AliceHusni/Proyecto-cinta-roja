import React from 'react'
import parra from "../imagenes/parra.jpg"
import aa from "../imagenes/aa.jpg"
import b from "../imagenes/b.png"

function Carrousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide h-25" data-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={aa} className="d-block  h-25" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={aa}className="d-block  h-25" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block h-25" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carrousel
