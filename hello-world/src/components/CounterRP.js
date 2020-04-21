import React from 'react'

class CounterRP extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0,
		}
	}

	incrementCount = () =>{
		this.setState(prevState => {
			return {count: prevState.count + 1 }
		})
	}

	render() {
		return (
			<div>
				{this.props.render(this.state.count, this.incrementCount)}
			</div>
		)
	}
}

export default CounterRP