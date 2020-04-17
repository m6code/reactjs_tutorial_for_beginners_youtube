import React from 'react'

class UserGreeting extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: true
		}
	}
	render() {

		// Using Shortcut Operator approach
		return this.state.isLoggedIn && <div> Welcome Benjamin Sharia </div>

		// // Using Tenary Approach
		// return(

		// 	this.state.isLoggedIn? 
		// 	<div> Welcome Benjamin Sharia </div> : 
		// 	<div> Welcome Guest User-in </div>

		// 	)

		// // Element Variable Approach
		// let message;

		// if(this.state.isLoggedIn){
		// 	message = <div>Welcome Benjamin Sharia </div>
		// }else{
		// 	message = <div>Welcome Guest User </div>
		// }

		// return <div>{message}</div>;
		// if(this.state.isLoggedIn){
		// 	return (
		// 		<div>
		// 			<div> Welcome Benjamin Sharia</div>
		// 		</div>

		// 		)
		// }else{
		// 	return (
		// 	<div>
		// 		<div> Welcome Guest </div>

		// 	</div>
		// )
	}

}

export default UserGreeting