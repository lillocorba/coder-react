import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { CartContext } from '../CartContext/CartContext'
import { CountContext } from '../CountContext/CountContext'
import { UserContext } from '../UserContext/UserContext'

export default function Cart() {

    const [items, setItems] = useContext(UserContext)
    const [cart, setCart] = useContext(CartContext)
    const [count, setCount] = useContext(CountContext)
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
                    <Fragment>
                        <div className="card-item">
                            <div className="card-item-img-container">
                                <img src={item.image} className="card-item-img" alt="" />
                            </div>
                            <div className="card-item-name-container">
                                <h3 className="card-item-name">{item.title}</h3>
                                <p className="card-item-price">{'$' + item.price}</p>
                                <p className="card-item-quantity">Cantidad: {count}</p>
                            </div>
                            <div className="card-item-btn-container">
                                <button className="card-item-btn" onClick={() => removeProduct(item.id)}>X</button>
                            </div>
                        </div>
                    </Fragment>
                )
            }))}
            {(IsEmpty === false ? <Link to="/checkout"><div><button className="card-item-btn btn-checkout">Finalizar Compra</button></div></Link> : "")}
        </div >
    )
}