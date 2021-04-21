import React, { useState, useContext } from 'react'
import { CountContext } from '../CountContext/CountContext'
import './Purchase.css'

export default function PurchaseBtn() {

    return (
        <div>
            <div className="detail-product-container-btn">
                <a className="detail-product-btn" href="https://github.com/" target="_blank">Finalizar Compra</a>
            </div>
        </div>
    )
}
