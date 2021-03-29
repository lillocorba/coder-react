import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <Fragment>
            <div>
                Mi Marca
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </Fragment>
    )
}
