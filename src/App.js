import { Component } from 'react'
import RoomPage from './pages/room'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props)
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
			<div className="app">
				<Router>
					<Route exact path="/" component={ (e) => <LoginPage onLogin={ this.setUserDataToState } { ...e } /> } />
					<Route path="/room" component={ RoomPage } />
				</Router>
			</div>
		)
	}
}

export default App