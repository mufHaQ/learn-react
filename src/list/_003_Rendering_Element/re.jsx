import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. Rendering an Element into the DOM

// const element = <h1>Hello, World</h1>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 2. Updating the Rendered Element
// * React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

// Consider this ticking clock example:
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, World</h1>
//             <h2>It is {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )

//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000)

// It calls ReactDOM.render() every second from a setInterval() callback.
// React Only Updates What’s Necessary
// ========================================
