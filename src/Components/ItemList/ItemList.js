import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList() {

    return (
        <div className="item-container">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}
