import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. Rendering Multiple Components

const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(n => {
    return <li>{n}</li>
})

ReactDOM.render(
    <ul>
        {listItems}
    </ul>,
    document.getElementById('root')
)
// ========================================
