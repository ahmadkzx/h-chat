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
		this.props.onSend(this.state.message)
		this.setState({ message: '' })
	}

	render() {
		return (
			<div style={{ height: '10vh', width: '100%' }}>
				<form className="d-flex justify-content-between align-items-center" onSubmit={ this.sendMessage }>
					<input
						type="text"
						className="form-control"
						value={ this.state.message }
						placeholder="Type message..."
						onChange={ this.handleChangeMessage }
					/>
					<input type="submit" value="Send" className="btn btn-primary ml-2" />
				</form>
			</div>
		)
	}
}

export default MessageForm