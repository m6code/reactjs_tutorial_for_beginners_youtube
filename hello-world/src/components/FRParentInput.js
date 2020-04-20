import React from 'react'
import FRInput from "./FRInput"

class FRParentInput extends React.Component {
	constructor(props) {
		super(props)
	
		this.inputRef = React.createRef()
	}

	clickHandler = () => {
		this.inputRef.current.focus()
	}

	render() {
		return (
			<div>
				<FRInput ref={this.inputRef} />
				<button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default FRParentInput