import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. Function and Class Components

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// ReactDOM.render(
//     <Welcome name="Dliyaulhaq"/>,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 2. Composing Component

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Dliyaulhaq" />
//             <Welcome name="Mufliansyah" />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Extracting Components

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserName">
                <Avatar user={props.user.name} />
            </div>
            <div className="UserComment">
                <h1>{props.user.comment}</h1>
            </div>
            <div className="DateComment">
                <p>{props.user.date}</p>
            </div>
        </div>
    )
}

function Avatar(props) {
    return <h4>{props.user}</h4>
}

const user = {
    name: "Dliyaulhaq",
    comment: "Keren",
    date: "27-06-2021 20:00:00"
}

ReactDOM.render(
    <Comment user={user} />,
    document.getElementById('root')
)
// ========================================


// ========================================
// 4. Props are Read-Only
// ========================================
