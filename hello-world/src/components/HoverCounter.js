import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {

	render() {
		const {count, incrementCount} = this.props;
		return (
			<div>
				<h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
			</div>
		)
	}
}

export default withCounter(HoverCounter, 10)