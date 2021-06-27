import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. Create Simple Element
const name = 'Dliyaulhaq Mufliansyah';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
// ========================================