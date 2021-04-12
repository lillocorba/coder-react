import React, { useState, useEffect } from 'react'
import Products from './Products.json'

export default function Item() {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProducto(Products)
        }, 2000)
    }, [])

    return (
        <div className="card-container">
            <div className="img-container">
                <img src={producto.map((product) => {
                    return product.img
                })} alt=""></img>
            </div>
            <div className="title-container">
                <h2>{producto.map((product) => {
                    return product.title
                })}</h2>
            </div>
            <div className="price-container">
                <p>{producto.map((product) => {
                    return product.price
                })}</p>
            </div>
            <div className="description-container">
                <p>{producto.map((product) => {
                    return product.description
                })}</p>
            </div>
        </div>
    )
}
