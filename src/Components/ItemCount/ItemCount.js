import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ sumar, restar, count }) => {
    return (
        <div className='container'>
            <div className='contador-container'>
                <div className='resta-container' onClick={restar}>
                    <button className='boton boton-rojo'>-</button>
                </div>
                <div className='numero-container'>
                    <p className='numero'>{count}</p>
                </div>
                <div className='suma-container' onClick={sumar}>
                    <button className='boton boton-verde'>+</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
