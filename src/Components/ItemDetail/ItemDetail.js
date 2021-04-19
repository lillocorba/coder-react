import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

export default function ItemDetail({ match }) {

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    console.log(user)

    return (
        <div className="wrapper" key="" >
            <div className="product-detail-container">
                <div className="product-detail-container-img">
                    <img src={user.avatar_url} alt="" className="detail-product-img"></img>
                </div>
                <div className="product-detail-container-info">
                    <h2 className="detail-product-title">{user.name}</h2>
                    <h4 className="detail-product-price">Followers: {user.followers}</h4>
                    <div className="detail-product-container-btn">
                        <a className="detail-product-btn" href={user.html_url} target="_blank">Ver perfil</a>
                    </div>
                </div>
            </div>
        </div >
    )
}