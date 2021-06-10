import http from 'http'
import express from 'express'
import { Server } from 'socket.io'

const port = 8080
const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', socket => {
	console.log('user connected')

	socket.on('CHAT_SEND_MESSAGE', message => {
		io.emit('CHAT_NEW_MESSAGE', message)
	})
})

server.listen(port, () => {
	console.log('start listening on ' + port)
})