import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import Products from '../Item/Products.json'

export default function ItemList() {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProducto(Products)
        }, 2000)
    }, [])

    return (
        <div className="item-container">
            <Item productos={producto} />
        </div>
    )
}
