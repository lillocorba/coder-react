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
                        <h4>GitUsers</h4>
                    </div>
                </Link>
                <div className="nav-container">
                    <nav>
                        <ul>
                            <Link to="/" className="link-nav">
                                <li>Home</li>
                            </Link>
                            <Link to="/users">
                                <li>Usuarios</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className='cart-container'>
                    <Link to="/cart" className="link">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </Fragment >
    )
}
