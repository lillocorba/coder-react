import React from 'react'
import cart from './shopping-bags.png'
import './CartWidget.css'

export default function CartWidget() {
    return (
        <div>
            <img src={cart} className='img-cart' />
        </div>
    )
}
