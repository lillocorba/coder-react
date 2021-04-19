import React, { useState, useEffect, Fragment } from 'react'
import './ItemDetail.css'

export default function ItemDetail({ productos }) {

    return (
        <Fragment>
            <div className="wrapper">
                <div className="product-detail-container">
                    <div className="product-detail-container-img">
                        <img src="" alt=""></img>
                    </div>
                    <div className="product-detail-container-info">
                        <h2 className="detail-product-title"></h2>
                        <h4 className="detail-product-price"></h4>
                        <p className="detail-product-desc"></p>
                        <button className="boton-product">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}