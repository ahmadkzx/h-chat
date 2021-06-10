import { Component } from 'react'
import MessageForm from '../components/messageForm'
import MessageItem from '../components/messageItem'

class RoomPage extends Component {
	render() {
		return (
			<div className="container">
				<div
					style={{ height: '100vh' }}
					className="d-flex flex-column align-items-center justify-content-center"
				>
					<div className="messages" style={{ height: '90vh' }}>
						<MessageItem username={ 'Ahmad' } message={ 'How are you today?' } />
					</div>
					<MessageForm />
				</div>
			</div>
		)
	}	
}

export default RoomPage