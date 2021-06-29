import ReactDOM from 'react-dom'
import React from 'react'

// ========================================
// 1. Rendering Multiple Components

// const numbers = [1, 2, 3, 4, 5]
// function ListItems() {
//     return numbers.map(e => {
//         return <li key={e}>{e}</li>
//     })
// }

// ReactDOM.render(
//     <ul>
//         <ListItems />
//     </ul>,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 2. Basic List Component

// function NumberList(props) {
//     const numbers = props.numbers
//     const listItems = numbers.map((number, index) => {
//         return <li key={index}>{number}</li>
//     })

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 3. Keys

// ----------
// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//         {number}
//     </li>
// );
// ----------


// ----------
// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// );
// ----------


// ----------
// When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:

// const todoItems = todos.map((todo, index) =>
//     // Only do this if items have no stable IDs
//     <li key={index}>
//         {todo.text}
//     </li>
// );
// ----------
// ========================================


// ========================================
// 4. Extracting Components with Keys

// ----------
// Example: Incorrect Key Usage
// function ListItem(props) {
//     const value = props.value;
//     return (
//         // Wrong! There is no need to specify the key here:
//         <li key={value.toString()}>
//             {value}
//         </li>
//     );
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Wrong! The key should have been specified here:
//         <ListItem value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );
// ----------


// ----------
// Example: Correct Key Usage
// function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Correct! Key should be specified inside the array.
//         <ListItem key={number.toString()} value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );
// ----------
// ========================================


// ========================================
// 5. Keys Must Only Be Unique Among Siblings

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map(post => (
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             ))}
//         </ul>
//     )

//     const content = props.posts.map(post => (
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     ))

//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     )
// }

// const posts = [
//     { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//     { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ]

// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// )
// ========================================


// ========================================
// 6. Embedding map() in JSX

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers
    return (
        <ul>
            {numbers.map(number =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    )
}

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)
// ========================================
