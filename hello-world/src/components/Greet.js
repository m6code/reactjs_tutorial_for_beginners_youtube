import React from 'react'

// function Greet() {
// 	return <h1> Hello Benjamin </h1>
// }

const Greet = (props) => {
	console.log(props);
	return (
		<div>
		<h1>Hello {props.name} a.k.a {props.heroName} </h1>
		{props.children}
		</div>
		)

}

// Named Export
export const WelcomeNamed = () => <p> Welcome to my first react app I'm try named export here </p>

// Default Export
export default Greet

