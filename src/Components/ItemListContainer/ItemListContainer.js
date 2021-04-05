import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return (
        <div className='saludo-container'>
            <h1>¡Hola {props.greeting}!</h1>
        </div>
    )
}
