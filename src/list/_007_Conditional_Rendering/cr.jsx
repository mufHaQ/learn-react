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

// function MailBox(props) {
//     const unreadMessages = props.unreadMessages
//     return (
//         <div>
//             { unreadMessages.length > 0 && // Jika menggunakan tanda '||' maka akan tetap ditampilkan walaupun panjangnya 0
//                 <h2>You have {unreadMessages.length} unread messages.</h2>
//             }
//         </div>
//     )
// }

// const messages = []

// ReactDOM.render(
//     <MailBox unreadMessages={messages} />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Inline If-Else with Conditional Operator

// Example 1:
// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//         <div>
//             The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//         </div>
//     );
// }

// Example 2:
// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//         <div>
//             {isLoggedIn
//                 ? <LogoutButton onClick={this.handleLogoutClick} />
//                 : <LoginButton onClick={this.handleLoginClick} />
//             }
//         </div>
//     );
// }
// ========================================


// ========================================
// 4. Preventing Component from Rendering

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showWarning: true
        }

        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick} >
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)
// ========================================
