import React from 'react'

// function Greet() {
// 	return <h1> Hello Benjamin </h1>
// }

// const Greet = ({name, heroName}) => {
// 	//console.log(props);
// 	return (
// 		<div>
// 		<h1>Hello {name} a.k.a {heroName} </h1>
		
// 		</div>
// 		)

// }

const Greet = (props) => {
	const {name, heroName} = props;
	return (
		<div>
		<h1>Hello {name} a.k.a {heroName} </h1>
		{props.children}
		</div>
		)

}

// Named Export
export const WelcomeNamed = () => <p> Welcome to my first react app I'm try named export here </p>

// Default Export
export default Greet

