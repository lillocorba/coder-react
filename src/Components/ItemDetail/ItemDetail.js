import React, { Fragment } from 'react'
import './ItemDetail.css'

export default function ItemDetail({ products }) {

    const productos = products

    console.log(productos)

    return (
        <Fragment>
            <div className="wrapper">
                <div className="product-detail-container">
                    <div className="product-detail-container-img">
                        <img src={productos[0].image} alt=""></img>
                    </div>
                    <div className="product-detail-container-info">
                        <h2 className="detail-product-title">{productos[0].title}</h2>
                        <h4 className="detail-product-price">{productos[0].price}</h4>
                        <p className="detail-product-desc">{productos[0].description}</p>
                        <button className="boton-product">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

//     return (
//         <Fragment>
//             <div className="wrapper">
//                 {
//                     products.map((product) => {
//                         return (
//                             <div className="product-detail-container">
//                                 <div className="product-detail-container-img">
//                                     <img src={product.image} alt=""></img>
//                                 </div>
//                                 <div className="product-detail-container-info">
//                                     <h2 className="detail-product-title">{product.title}</h2>
//                                     <h4 className="detail-product-price">{product.price}</h4>
//                                     <p className="detail-product-desc">{product.description}</p>
//                                     <button className="boton-product">Agregar al carrito</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </Fragment>
//     )
// }
