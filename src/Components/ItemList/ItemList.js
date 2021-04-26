import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <div className="item-container">
                <Item users={users} />
            </div>
        </div>
    )
}
