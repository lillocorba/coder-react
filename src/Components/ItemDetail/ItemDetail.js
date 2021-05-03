import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer'
import { CountContext } from '../CountContext/CountContext'
import { CartContext } from '../CartContext/CartContext'
import { db } from '../../firebase'

export default function ItemDetail({ match }) {

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

    const [count, setCount] = useContext(CountContext)
    const [cart, setCart] = useContext(CartContext)

    const definirItem = (item) => {
        setCart([...cart, item])
    }

    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <div className="wrapper" key={item.id} >
                            <div className="product-detail-container">
                                <div className="product-detail-container-img">
                                    <img src={item.image} alt="" className="detail-product-img"></img>
                                </div>
                                <div className="product-detail-container-info">
                                    <h2 className="detail-product-title">{item.title}</h2>
                                    <h4 className="detail-product-price">Followers: {item.price}</h4>
                                    <ItemCountContainer />
                                    {(count > 0 ? <Link to="/cart">
                                        <div className="detail-product-container-btn">
                                            <a className="detail-product-btn" target="_blank" onClick={() => definirItem(item)}>Finalizar Compra</a>
                                        </div>
                                    </Link> : "")}
                                </div>
                            </div>
                        </div >
                    )
                })
            }
        </div >
    )
}