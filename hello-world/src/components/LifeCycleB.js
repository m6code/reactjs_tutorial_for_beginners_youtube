import React from 'react'

class LifeCycleB extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "Benjamin"
		}
		console.log('LifeCycleB Constructor');
	}

	static getDerivedStateFromProps(props, state){
		console.log("LifeCycleB getDerivedStateFromProps");
		return null;
	}

	componentDidMount(){
		console.log("LifeCycleB componentDidMount")
	}
	render() {
		console.log("LifeCycleB render()")
		return (
			<div>
				LifeCycleB
			</div>
		)
	}
}

export default LifeCycleB