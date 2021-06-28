import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// ----------
// 1. Handling Events
// * React events are named using camelCase, rather than lowercase.
// * With JSX you pass a function as the event handler, rather than a string.

// Example: 

// HTML:
{/* <button onclick="activateLasers()">
  Activate Lasers
</button> */}

// React:
{/* <button onClick={activateLasers}>
  Activate Lasers
</button> */}
// ----------


// ----------
// Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:

{/* <form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form> */}

// In React, this could instead be:
// function Form() {
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('You clicked submit.');
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// ----------


// ----------
// Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent reference guide to learn more.

// When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

// When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isToggleOn: true };

//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this) // Binding ke function 'handleClick' prevState
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn // Merubah nilai dari true ke false dan sebaliknya
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
// ----------
// ========================================


// ========================================
// 2. 

// class Btn extends React.Component {
//     handleClick() {
//         console.log(this)
//     }

//     render() {
//         // This syntax ensures `this` is bound within handleClick
//         return (
//             // <button onClick={this.handleClick()}> {/* Enable by default/Auto run function 'handleClick' on render */}
//             <button onClick={() => this.handleClick()}>
//                 Click Me
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <Btn />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Without Bind

class Toggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggle: false
        }
    }

    handleToggle() {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }))
    }

    render() {
        return (
            <button onClick={() => this.handleToggle()}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)
// ========================================


// ========================================
// 4. 

{/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */}
{/* <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
// The above two lines are equivalent
// ========================================