import React, { Fragment } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

export default function App() {

  return (
    <Fragment>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </Fragment>
  )
}

