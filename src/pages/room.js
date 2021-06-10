import io from 'socket.io-client'
import { Component } from 'react'
import MessageForm from '../components/messageForm'
import MessageItem from '../components/messageItem'

class RoomPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			socket: null,
			messages: [],
		}
	}

	/**
   * check is have username
   * connect to socket
	 * set chat new message event listener
   */
	componentDidMount = async () => {
		try {
			if (!this.props.username) {
				this.props.history.push('/')
				return
			}

			await this.setState({ socket: io('http://localhost:8080') }) 

			this.state.socket.on('CHAT_NEW_MESSAGE', message => this.handleNewMessage(message))

		} catch(e) {
			console.error(e)
		}
	}

	/**
   * send message to socket
   * @param {String} message
   */
	sendMessage = message => {
		const username = this.props.username
		const payload = JSON.stringify({ message, username })
		this.state.socket.emit('CHAT_SEND_MESSAGE', payload)
	}

	/**
   * receive new message and push to message array
   * @param {Object} payload { message, username }
   */
	handleNewMessage = payload => {
		const messages = this.state.messages
		const newMessageObj = JSON.parse(payload)
		messages.push(newMessageObj)
		this.setState({ messages })
	}

	render() {
		const messages = []
		this.state.messages.forEach(({ message, username }, index) => {
			messages.push(<MessageItem key={ 'message-' + index } message={ message } username={ username } />)
		})

		return (
			<div className="container">
				<div
					style={{ height: '100vh' }}
					className="d-flex flex-column align-items-center justify-content-center"
				>
					<div className="messages w-100 my-4" style={{ height: '90vh', overflowY: 'auto' }}>
						{ messages }
					</div>
					<MessageForm onSend={ this.sendMessage } />
				</div>
			</div>
		)
	}	
}

export default RoomPage