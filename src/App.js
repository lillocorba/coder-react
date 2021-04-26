import React, { Fragment } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Credits from './Components/Credits/Credits'
import ItemDetail from './Components/ItemDetail/ItemDetail'
import DetailContainer from './Components/ItemDetailContainer/DetailContainer'
import { CountProvider } from './Components/CountContext/CountContext'
import { CartProvider } from './Components/CartContext/CartContext'
import CartContainer from './Components/CartContainer/CartContainer'

export default function App() {

  return (
    <CountProvider>
      <CartProvider>
        <BrowserRouter>
          <Fragment>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" exact component={ItemListContainer} />
              <Route path="/users/:id" component={ItemDetail} />
              <Route path="/cart" component={CartContainer} />
            </Switch>
            <DetailContainer />
            <Footer />
            <Credits />
          </Fragment>
        </BrowserRouter>
      </CartProvider>
    </CountProvider>
  )
}