import { Component } from 'react'
import RoomPage from './pages/room'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { username: '' }
	}

	/**
   * set username after login
   * @param {String} username
   */
	setUsernameToState = username => {
		this.setState( { username })
	}

	render() {
		return (
			<div className="app">
				<Router>
					<Route exact path="/" component={ (e) => <LoginPage onLogin={ this.setUsernameToState } { ...e } /> } />
					<Route path="/room" component={ (e) => <RoomPage username={ this.state.username } { ...e } /> } />
				</Router>
			</div>
		)
	}
}

export default App