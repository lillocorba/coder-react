import React, { Fragment } from 'react'
import './ItemDetail.css'

export default function ItemDetail({ products }) {

    const productos = products

    console.log(productos)

    return (
        <Fragment>
            {productos.map((producto) => {
                return (
                    < div className="wrapper">
                        <div className="product-detail-container">
                            <div className="product-detail-container-img">
                                <img src={producto.image} alt=""></img>
                            </div>
                            <div className="product-detail-container-info">
                                <h2 className="detail-product-title">{producto.title}</h2>
                                <h4 className="detail-product-price">{producto.price}</h4>
                                <p className="detail-product-desc">{producto.description}</p>
                                <button className="boton-product">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </Fragment >
    )
}
