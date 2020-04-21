import React from 'react'

class User extends React.Component {
	render() {
		return (
			<div>
				{this.props.render(true)}
			</div>
		)
	}
}

export default User