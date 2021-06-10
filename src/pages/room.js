import { Component } from 'react'
import MessageForm from '../components/messageForm'

class RoomPage extends Component {
	render() {
		return (
			<div className="container">
				<div
					style={{ height: '100vh' }}
					className="d-flex flex-column align-items-center justify-content-center"
				>
					<div className="messages" style={{ height: '90vh' }}></div>
					<MessageForm />
				</div>
			</div>
		)
	}	
}

export default RoomPage