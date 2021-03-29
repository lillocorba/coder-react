import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'

export default function NavBar() {
    return (
        <Fragment>
            <div className="container-fluid menu">
                <div className="brand-container">
                    <h4>Mi Marca</h4>
                </div>
                <div className="nav-container">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment >
    )
}
