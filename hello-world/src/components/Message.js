import React, {Component} from 'react';

class Message extends Component{
	constructor(){
		super()
		this.state = {
			message: "Welcome Visitor",
			isClick: false,
		}
	}

	changeMessage(){
		if (!this.state.isClick) {
			this.setState({
			message: "Thanks for Subscribing",
			isClick: true,
		})
		}else{
			this.setState({
				message: "Welcome Visitor Again",
				isClick: false,
			})
		}
		
	}

	render(){
		return(
			<div>
			<h1>
				{this.state.message}
			</h1>
			<button onClick={() => this.changeMessage()}>Subscribe</button>
			</div>
			)
	}
}

export default Message;
