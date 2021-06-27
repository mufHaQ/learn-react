
// ========================================
// 1. With Function
// function formatName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// const user = {
//     firstName: 'Dliyaulhaq',
//     lastName: 'Mufliansyah'
// }

// const element = (
//     <h1>
//         Hello, {formatName(user)}
//     </h1>
// )

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 2. Expression
// function formatName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// const user = {
//     firstName: 'Dliyaulhaq',
//     lastName: 'Mufliansyah'
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}.</h1>
//     }
//     return <h1>Hello, Stranger.</h1>
// }

// ReactDOM.render(
//     getGreeting(user),
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Specifying Attributes

// Example:
// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl}></img>;
// ========================================


// ========================================
// 4. Specifying Children

// const element = <img src={user.avatarUrl} />;

// const element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you here.</h2>
//     </div>
// );

// ========================================


// ========================================
// 5. JSX Prevents Injection Attacks

// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;
// ========================================


// ========================================
// 6. JSX Represents Objects

// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );


// const element2 = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello, world!'
// );

// performs a few checks to help you write bug-free code but essentially it creates an object like this:

// Note: this structure is simplified

// const element = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, world!'
//     }
// };
// ========================================
