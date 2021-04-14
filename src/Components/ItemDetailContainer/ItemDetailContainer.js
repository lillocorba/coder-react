import React, { useState, useEffect } from 'react'
import ProductsDetail from '../ItemDetail/ProductsDetail.json'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProductos(ProductsDetail)
        }, 2000)
    }, [])

    return (
        <div>
            <ItemDetail products={productos} />
        </div>
    )
}
