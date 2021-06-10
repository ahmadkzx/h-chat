import { Component } from 'react'

class MessageForm extends Component {

	constructor() {
		super()
		this.state = { message: '' }
	}

	handleChangeMessage = (e) => {
		this.setState({ message: e.target.value })
	}

	sendMessage = (e) => {
		e.preventDefault()
		console.log(this.state.message)
	}

	render() {
		return (
			<div style={{ height: '10vh' }}>
				<form className="d-flex justify-content-between align-items-center" onSubmit={ this.sendMessage }>
					<input type="text" placeholder="Type message..." className="form-control" onChange={ this.handleChangeMessage } />
					<input type="submit" value="Send" className="btn btn-primary ml-2" />
				</form>
			</div>
		)
	}
}

export default MessageForm