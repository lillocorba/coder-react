import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemCountContainer() {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < 10) {
            setCount(count + 1)
        } else {
            return
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        } else {
            return
        }
    }

    return (
        <div>
            <ItemCount sumar={sumar} restar={restar} count={count} />
        </div>
    )
}
