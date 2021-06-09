import { Component } from 'react'

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = { username: '', email: '' }
	}

	login = (e) => {
		e.preventDefault()
		this.props.onLogin(this.state)
	}

	handleInputChange = (e, key) => {
		const value = e.target.value
		this.setState({ [key]: value })
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
						<input type="text" className="form-control mb-2" onChange={ (e) => this.handleInputChange(e, 'username') } />

						<label htmlFor="Email">Email:</label>
						<input type="text" className="form-control" onChange={ (e) => this.handleInputChange(e, 'email') } />

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