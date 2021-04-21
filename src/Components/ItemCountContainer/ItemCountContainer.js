import React, { useState, useContext } from 'react'
import { CountContext } from '../CountContext/CountContext'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemCountContainer() {

    const [count, setCount] = useContext(CountContext)

    const sumar = () => {
        if (count < 10) {
            setCount(count + 1)
        } else {
            return
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            return
        }
    }

    return (
        <div>
            <ItemCount restar={restar} count={count} sumar={sumar} />
        </div>
    )
}
