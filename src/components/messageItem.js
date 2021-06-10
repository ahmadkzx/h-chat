import { Component } from 'react'

class MessageItem extends Component {
	render() {
		return (
			<div>
				<b>{ this.props.username }</b>
				<p>{ this.props.message }</p>
			</div>
		)
	}
}

export default MessageItem