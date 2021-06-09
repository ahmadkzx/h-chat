import { Component } from 'react'
import LoginPage from './pages/login'

class App extends Component {
	constructor() {
		super()
		this.state = {
			user: {}
		}
	}

	/**
   * set user data after login
   * @param {Object} payload - { username, email }
   */
	setUserDataToState = (payload) => {
		this.setState({ user: payload })
	}

	render() {
		return (
			<LoginPage onLogin={ this.setUserDataToState } />
		)
	}
}

export default App