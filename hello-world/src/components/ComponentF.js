import React from 'react'
import {UserConsumer} from './userContext'

class ComponentF extends React.Component {
	render() {
		return (
			<UserConsumer>
				{
					(username) => {
						return <div>Hello {username}</div>
					}
				}
			</UserConsumer>
		)
	}
}

export default ComponentF