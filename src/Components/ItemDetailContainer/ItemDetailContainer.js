import React, { useState, useEffect } from 'react'
import Products from '../Item/Products.json'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductos(Products)
        }, 2000)
    }, [])

    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}
