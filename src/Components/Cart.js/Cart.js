import React, { useState, useContext } from 'react'
import './Cart.css'
import { CartContext } from '../CartContext/CartContext'

export default function Cart({ cart }) {

    return (
        <div className="cart">
            <h2 className="cart__h2">Carrito</h2>
            <div>
                {
                    cart.map((item) => {
                        return (
                            <div className="card-item">
                                <div className="card-item-img-container">
                                    <img src={item.avatar_url} className="card-item-img" />
                                </div>
                                <div className="card-item-name-container">
                                    <h3 className="card-item-name">{item.name}</h3>
                                </div>
                                <div className="card-item-btn-container">
                                    <button className="card-item-btn">X</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}