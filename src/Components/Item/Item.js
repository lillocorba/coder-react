import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({ users }) {

    return (
        <div className="card-container">
            {
                users.map((user) => {
                    return (
                        <div className="card-producto">
                            <div className="img-container">
                                <img src={user.avatar_url} alt="" className="img-product"></img>
                            </div>
                            <div className="title-container">
                                <h4 className="title-product">{user.login}</h4>
                            </div>
                            <Link to={`users/${user.id}`}>
                                <div className="boton-container">
                                    <button className="boton-product">Ver usuario</button>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}
