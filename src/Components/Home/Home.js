import React, { Fragment } from 'react'
import './Home.css'
import ItemListContainer from "../ItemListContainer/ItemListContainer"

export default function Home() {
    return (
        <Fragment>
            <div className="home">
                <div className="home-banner">
                    <div>
                        <h2 className="home-banner-h2">Conocé todos nuestros usuarios.</h2>
                    </div>
                </div>
            </div>
            <ItemListContainer />
        </Fragment>
    )
}
