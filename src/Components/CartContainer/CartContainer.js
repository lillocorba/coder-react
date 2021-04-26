import React, { useState, useContext } from 'react'
import Cart from '../Cart.js/Cart'
import './CartContainer.css'
import { CartContext } from '../CartContext/CartContext'

export default function CartContainer() {

    const [item, setItem] = useContext(CartContext)
    const [cart, setCart] = useContext(CartContext)

    return (
        <div className="cart-container">
            <Cart cart={cart} />
        </div>
    )
}
