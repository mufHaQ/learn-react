import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. 

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuesGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return <UserGreeting />
    }

    return <GuesGreeting />
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
)
// ========================================