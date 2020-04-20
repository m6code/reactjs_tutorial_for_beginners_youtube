import React from 'react'
// eslint-disable-next-line
import RegComp from './RegComp';
// eslint-disable-next-line
import PureComp from './PureComp';

class ParentComp extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 name: "Benjamin",
		}
	}

	componentDidMount(){
		setInterval(() => {
			this.setState({
				name: "Benjamin"
			})
		}, 2000)
	}
	render() {
		console.log("*************ParentComp Render****************")
		return (
			<div>
				Parent Component
				<RegComp name={this.state.name}/>
				<PureComp name={this.state.name}/>
			</div>
		)
	}
}

export default ParentComp