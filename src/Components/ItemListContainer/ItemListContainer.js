import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer(props) {
    return (
        <div className='itemList-container'>
            <ItemList />
        </div>
    )
}
