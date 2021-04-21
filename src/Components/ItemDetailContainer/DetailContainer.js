import React, { useState, useEffect, useContext } from 'react'
import { CountContext } from '../CountContext/CountContext'

export default function DetailContainer({ match }) {

    const saludo = useContext(CountContext)

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h4>{saludo}</h4>
        </div>
    )
}
