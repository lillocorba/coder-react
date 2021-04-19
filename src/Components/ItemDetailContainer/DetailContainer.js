import React, { useState, useEffect } from 'react'

export default function DetailContainer({ match }) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>

        </div>
    )
}
