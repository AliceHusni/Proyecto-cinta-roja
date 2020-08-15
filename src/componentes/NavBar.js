import React from 'react'
import logo2 from '../imagenes/logo2.png'

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/Portada"><img src={logo2} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Sobrenosotros">Sobre Nosotros<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contacto">Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/Congelados" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Productos
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Congelados">Congelados</a>
                            <a className="dropdown-item" href="a">Comida Lista Para Calentar</a>
                            <a className="dropdown-item" href="a">Botanas y Ensaladas</a>
                            <a className="dropdown-item" href="a">Postre y Jalot</a>
                        </div>
                    </li>
                    
                </ul>
                
                <form className="form-inline my-2 my-lg-0">
                 
                <div className="nav-item navbar-light bg-light">
                        <a className="nav-link" href="/Carrito">Carrito</a>
                    </div>

                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
  </div>
</nav>
       
    )
}

export default NavBar
