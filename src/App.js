import React from 'react'
import './App.css'
import { Fragment } from 'react'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

export default function App() {

  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greeting='Martín' />
    </Fragment>
  )
}

