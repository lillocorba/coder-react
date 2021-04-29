import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { CartContext } from '../CartContext/CartContext'
import { UserContext } from '../UserContext/UserContext'

export default function Cart() {

    const [user, setUser] = useContext(UserContext)
    const [cart, setCart] = useContext(CartContext)
    const [IsEmpty, setIsEmpty] = useState(true)

    // Condicional para setear estado y mostrar o no "El carrito está vacío"

    useEffect(() => {
        if (cart.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }, [])

    // Remover productos (Remueve 1 solo producto y a partir de ahí ninguno más, nose porque.)

    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    return (
        <div className="cart">
            <h2 className="cart__h2">Carrito</h2>
            {(IsEmpty ? <div className="btn-back-home-container"><h3 className="cart-empty">El carrito está vacío</h3><Link to="/"><button className="btn-back-home">Volver al home</button></Link></div> : cart.map((item) => {
                return (
                    <div className="card-item">
                        <div className="card-item-img-container">
                            <img src={item.avatar_url} className="card-item-img" alt="" />
                        </div>
                        <div className="card-item-name-container">
                            <h3 className="card-item-name">{item.name}</h3>
                        </div>
                        <div className="card-item-btn-container">
                            <button className="card-item-btn" onClick={() => removeProduct(user.id)}>X</button>
                        </div>
                    </div>
                )
            }))}
        </div >
    )
}