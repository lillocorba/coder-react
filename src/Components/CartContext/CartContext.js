import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [items, setItems] = useState()
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[items, setItems], [cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}