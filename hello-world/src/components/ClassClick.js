import React from 'react'

class ClassClick extends React.Component {
	clickHandler(){
		console.log("Clicked the class Button");
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>classClickMe</button>
			</div>
		)
	}
}

export default ClassClick