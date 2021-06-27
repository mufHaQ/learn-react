import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. 
// Consider the ticking clock example from one of the previous sections. In Rendering Elements, we have only learned one way to update the UI. We call ReactDOM.render() to change the rendered output:


// Versi 1
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);


// Versi 2
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, World</h1>
//             <h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// function tick() {
//     return ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000) // Akan memanggil fungsi 'tick' setiap 1 detik.
// However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second should be an implementation detail of the Clock.
// ========================================


// ========================================
// 2. Converting a Function to a Class

// class Clock extends React.Component {
//     // (2)
//     constructor(props) {
//         super(props)

//         this.state = {
//             date: new Date()
//         }
//     }

//     // (4)
//     componentDidMount() {
//         this.timerID = setInterval(() => {
//             this.tick()
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }

//     // (5)
//     tick() {
//         this.setState({
//             date: new Date() // Akan mengubah date yang lalu menjadi yang sekarang
//         })
//     }

//     // (3)
//     render() {
//         return (
//             <div>
//                 <h1>Hello, World</h1>
//                 <h2>It is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
//     // State is similar to props, but it is private and fully controlled by the component.
// }

// ReactDOM.render(
//     <Clock />, // (1)
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Do Not Modify State Directly

// Wrong
// this.state.comment = 'Hello';

// Correct
// this.setState({comment: 'Hello'});
// ========================================


// ========================================
// 4. State Updates May Be Asynchronous


// React may batch multiple setState() calls into a single update for performance.

// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter:

// -----
// Wrong
// this.setState({
//     counter: this.state.counter + this.props.increment,
// });
// -----

// -----
// Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
// }));
// -----

// -----
// Correct
// this.setState(function (state, props) {
//     return {
//         counter: state.counter + props.increment
//     };
// });
// -----
// ========================================


// ========================================
// 5. The Data Flows Down
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, World</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
// ========================================