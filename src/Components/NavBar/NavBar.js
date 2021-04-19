import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Fragment>
            <div className="container-fluid menu">
                <Link to="/" className="link">
                    <div className="brand-container">
                        <h4>GinShop</h4>
                    </div>
                </Link>
                <div className="nav-container">
                    <nav>
                        <ul>
                            <Link to="/" className="link-nav">
                                <li>Home</li>
                            </Link>
                            <Link to="/productos">
                                <li>Productos</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className='cart-container'>
                    <CartWidget />
                </div>
            </div>
        </Fragment >
    )
}
