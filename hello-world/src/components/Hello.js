import React from 'react';

// With JSX
// const Hello = () => {
// 	return (
// 		<div>
// 		<h1>Hello Benjamin Sharia</h1>
// 		</div>
// 	)
// }

// Without JSX
const Hello = () => {
	return React.createElement(
		'div',
		 {id: "hello", className: 'dummyClass'},
		 React.createElement("h1",'null', "Hello Benjamin Sharia")
		 );
}
export default Hello;