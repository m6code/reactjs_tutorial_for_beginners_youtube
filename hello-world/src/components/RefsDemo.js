import React from 'react'

class RefsDemo extends React.Component {

	constructor(props) {
		super(props)
		this.inputRef = React.createRef();
		this.cbRef = null;
		this.setCBRef = (element) =>{
			this.cbRef = element;
		}

		this.state = {
	
		}
	}

	componentDidMount(){
		// this.inputRef.current.focus()
		// console.log(this.inputRef)

		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	clickHandler = () =>{
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} />
				<input type='text' ref={this.setCBRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default RefsDemo