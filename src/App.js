import React from 'react'
import './App.css'
import { Fragment } from 'react'

export default function App() {

  const name = "Agustin";
  const edad = 29;
  const style = {
    color: 'orange',
    fontSize: 16
  }

  return (
    <Fragment>
      <h1 className="titulo-h1">Hola Mundo!</h1>
      <p style={style}>Mi nombre es {name} y tengo {edad} años.</p>
    </Fragment>
  )
}

