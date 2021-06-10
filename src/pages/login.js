import { Component } from 'react'

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = { username: '' }
	}

	login = (e) => {
		e.preventDefault()
		this.props.onLogin(this.state.username)
		this.props.history.push('/room')
	}

	handleInputChange = (e) => {
		const value = e.target.value
		this.setState({ username: value })
	}

	render() {
		return (
			<div className="container">
				<div
					style={{ height: '100vh' }}
					className="d-flex flex-column align-items-center justify-content-center"
				>
					<h2 className="mb-5">H Chatroom</h2>
					<form>
						<label htmlFor="Username">Username:</label>
						<input type="text" className="form-control mb-2" onChange={ this.handleInputChange } />

						<input
							type="submit"
							value="Start"
							onClick={ this.login }
							className="btn btn-primary mt-3 w-100"
						/>
					</form>
				</div>
			</div>
		)
	}
}

export default LoginPage