import React, { Component } from 'react';

class Counter extends Component{
	constructor(props) {
		super(props)
		
		this.state = {
			count: 0,
		}
	}		

	increment(){
		this.setState({
			count: (this.state.count+1),
		})
	}

	decrement(){
		if (this.state.count !== 0) {
			this.setState({
				count:(this.state.count-1),
			})
		}
	}

	render(){
		return(
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.increment()}> Increment</button>
				<button onClick={() => this.decrement()}> Decrement</button>
			</div>

			)
	}
}

export default Counter;