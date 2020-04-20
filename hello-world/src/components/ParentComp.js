import React from 'react'
// eslint-disable-next-line
import RegComp from './RegComp';
// eslint-disable-next-line
import PureComp from './PureComp';
// eslint-diasble-next-line
import MemoComp from './MemoComp';

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
				<MemoComp name={this.state.name} />
				{/* <RegComp name={this.state.name}/>
				<PureComp name={this.state.name}/> */}
			</div>
		)
	}
}

export default ParentComp