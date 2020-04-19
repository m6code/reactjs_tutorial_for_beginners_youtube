import React from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "Benjamin"
		}
		console.log('LifeCycleA Constructor');
	}

	static getDerivedStateFromProps(props, state){
		console.log("LifeCycleA getDerivedStateFromProps");
		return null;
	}

	componentDidMount(){
		console.log("LifeCycleA componentDidMount")
	}
	render() {
		console.log("LifeCycleA render()")
		return (
			<div>
				LifeCycleA
				<LifeCycleB/>
			</div>
		)
	}
}

export default LifeCycleA