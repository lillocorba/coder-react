import React, { useState, useContext } from 'react'
import bag from './shopping-bags.png'
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext'

export default function CartWidget(cartNumber) {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div className="cart-icon-container">
            <span className="cart-number"><p>{cart.length}</p></span>
            <img src={bag} className='img-cart' />
        </div >
    )
}
