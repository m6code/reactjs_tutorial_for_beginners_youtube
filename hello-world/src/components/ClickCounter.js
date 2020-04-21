import React from 'react'
import withCounter from './withCounter'


class ClickCounter extends React.Component {
	
	render() {
		const {count, incrementCount} = this.props
		return (
			<div>
				<button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
			</div>
		)
	}
}

export default withCounter(ClickCounter, 5)