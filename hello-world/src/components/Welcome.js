import React, { Component } from 'react';

class Welcome extends Component {
	render(){
		const {name, heroName} = this.props;
		// const {state1, state2} = this.state;

		return (
			<h2> 
			ClassComponent | Welcome {name} - aka {heroName} </h2>
			)
	}
}

export default Welcome