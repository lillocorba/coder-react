import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ productos }) {

    return (
        <div className="card-container">
            {
                productos.map((product) => {
                    return (
                        <div className="card-producto">
                            <div className="img-container">
                                <img src={product.image} alt="" className="img-product"></img>
                            </div>
                            <div className="title-container">
                                <h4 className="title-product">{product.title}</h4>
                            </div>
                            <div className="price-container">
                                <p className="price-product">{product.price}</p>
                            </div>
                            <div className="description-container">
                                <p className="description-product">{product.description}</p>
                            </div>
                            <Link to={`productos/${product.id}`}>
                                <div className="boton-container">
                                    <button className="boton-product">Ver producto</button>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}
