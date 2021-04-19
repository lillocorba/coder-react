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
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

export default function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" exact component={ItemListContainer} />
          <Route path="/productos/:id" component={ItemDetail} />
        </Switch>
        <Footer />
        <Credits />
      </Fragment>
    </BrowserRouter>
  )
}

