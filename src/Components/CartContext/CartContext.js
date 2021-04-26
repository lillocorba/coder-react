import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [item, setItem] = useState()
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[item, setItem], [cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}