import React from 'react'
import axios from 'axios'

class PostList extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 posts: [],
			 errMsg: '',
		}
	}

	componentDidMount(){
		axios.get('http://jsonplaceholder.typicode.com/posts')
		.then(response =>{
			console.log(response)
			this.setState({
				posts:response.data
			})
		})
		.catch(error =>{
			console.log(error)
			this.setState({
				errMsg: "Error retrieving data"
			})
		})
	}

	render() {
		const { posts, errMsg } = this.state
		return (
			<div>
				List of Posts {
					posts.length ?
					posts.map(post => <div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						</div>) :
					null
				}
				{errMsg ? <div>{errMsg}</div> : null}
			</div>
		)
	}
}

export default PostList