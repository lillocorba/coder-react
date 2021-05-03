import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ items }) {

    return (
        <div className="card-container">
            {
                items.map((item) => {
                    return (
                        <div className="card-producto">
                            <div className="img-container">
                                <img src={item.image} alt="" className="img-product"></img>
                            </div>
                            <div className="title-container">
                                <h4 className="title-product">{item.title}</h4>
                            </div>
                            <div className="price-container">
                                <p className="price-product">{'$' + item.price}</p>
                            </div>
                            <div className="description-container">
                                <p className="description-product">{item.description}</p>
                            </div>
                            <Link to={`productos/${item.id}`}>
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
