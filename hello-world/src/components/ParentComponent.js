import React from 'react'
import ChildComponent from './ChildComponent'
class ParentComponents extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			parentName: "Parent Component"
		}

		this.greetParent = this.greetParent.bind(this)
	}

	greetParent(childName){
		alert(`Hello ${this.state.parentName} from ${childName}`)
	}

	render() {
		return (
			<div>
				<ChildComponent greetHandler={this.greetParent} />
			</div>
			)
	}
}

export default ParentComponents