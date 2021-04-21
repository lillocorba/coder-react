import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import { CountContext } from '../CountContext/CountContext'
import PurchaseBtn from '../PurchaseBtn/PurchaseBtn'

export default function ItemDetail({ match }) {

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const [count, setCount] = useContext(CountContext)

    return (
        <div className="wrapper" key="" >
            <div className="product-detail-container">
                <div className="product-detail-container-img">
                    <img src={user.avatar_url} alt="" className="detail-product-img"></img>
                </div>
                <div className="product-detail-container-info">
                    <h2 className="detail-product-title">{user.name}</h2>
                    <h4 className="detail-product-price">Followers: {user.followers}</h4>
                    <ItemCountContainer />
                    {(count > 0 ? <PurchaseBtn /> : "")}
                </div>
            </div>
        </div >
    )
}