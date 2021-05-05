import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Checkout.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Checkout() {

    const MySwal = withReactContent(Swal)

    const btnPago = document.getElementById('btn-pago')
    const inputName = document.getElementById('inputName')
    const inputEmail = document.getElementById('inputEmail')
    const inputDireccion = document.getElementById('inputDireccion')
    const inputCP = document.getElementById('inputCP')

    const handleSubmit = (e) => {
        e.preventDefault()
            Swal.fire(
                'Compra realizada con éxito!',
                'Te llegará un mail con los datos de tu compra.',
                'success'
              )
    }

    return (
        <div className="checkout">
            <h2 className="checkout-h2">Checkout</h2>
            <form>
                <input type="text" name="Nombre" id="inputName" placeholder="Nombre y Apellido"/>
                <input type="email" name="Email" id="inputEmail" placeholder="Email"/>
                <input type="text" name="Dirección" id="inputDireccion" placeholder="Dirección"/>
                <input type="text" name="Código Postal" id="inputCP" placeholder="Código Postal"/>
                <button className="btn-pago" id="btn-pago" onClick={handleSubmit}>Realizar Pago</button>
            </form>
        </div>
    )
}
