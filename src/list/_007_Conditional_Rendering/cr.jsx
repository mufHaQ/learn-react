import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. 

// function UserGreeting() {
//     return <h1>Welcome back!</h1>
// }

// function GuesGreeting() {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn

//     if (isLoggedIn) {
//         return <UserGreeting />
//     }

//     return <GuesGreeting />
// }

// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 2. Handle Login


// function UserGreeting() {
//     return <h1>Welcome!</h1>
// }

// function GuestGreeting() {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     let isLoggedIn = props.isLoggedIn

//     if (isLoggedIn) {
//         return <UserGreeting />
//     }
//     return <GuestGreeting />
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick} >
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     handleLoginClick() {
//         this.setState({
//             isLoggedIn: true
//         })
//     }

//     handleLogoutClick() {
//         this.setState({
//             isLoggedIn: false
//         })
//     }

//     render() {
//         let isLoggedIn = this.state.isLoggedIn

//         let button

//         if (isLoggedIn) {
//             button = <LogoutButton onClick={() => this.handleLogoutClick()} />
//         } else {
//             button = <LoginButton onClick={() => this.handleLoginClick()} />
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={this.state.isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Inline If with Logical && Operator

// ========================================