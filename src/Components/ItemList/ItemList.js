import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { db } from '../../firebase'

export default function ItemList() {

    const [items, setItems] = useState([])

    const getItems = async () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            // Guardamos los que recibimos dentro del State
            setItems(docs)
        })
    }

    useEffect(() => {
        getItems()
    })

    return (
        <div>
            <div className="h2-productos-destacados-container">
                <h2 className="h2-productos-destacados">Productos Destacados</h2>
            </div>
            <div className="item-container">
                <Item items={items} />
            </div>
        </div>
    )
}
