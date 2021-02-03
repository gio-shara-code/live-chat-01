import http from 'http'
import express from 'express'
import { Socket, Server } from 'socket.io'
import { User, Message } from './models'
import { deleteUserFromList } from './services/users'
import { generateRandomMessageId } from './services/messages'
    
const app = express()
const nodejsServer = http.createServer(app)

// const db = mongodbClient.db() //db name optional because you passed it in connect function
// const usersCollection = db.collection('users')
// const changeStream: mongodb.ChangeStream<any> = usersCollection.watch([], { })

const io = new Server(nodejsServer, { 
cors: { 
    origin: "*", 
    methods: ['GET', 'POST'],
    credentials: true
}
});

let users: User[] = []

//connect is a default event which will be fired when the socket connection is established
io.on('connection', async (socket: Socket) => {
    const currentUser: User = {
        nickname: socket.handshake.auth.nickname,
        _id: socket.handshake.auth._id
    }
    users.push(currentUser)
    //Client connects...
    socket.broadcast.emit('client_on_participant_list', users)
    socket.emit('client_on_participant_list', users)
    
    const msgConnection: Message = {
        content: 'has been connected!',
        from: currentUser.nickname,
        timestamp: Date.now(),
        id: generateRandomMessageId(),
        type: 'connect'
}
    socket.broadcast.emit('client_on_message', msgConnection)

    socket.on('disconnecting', (reason)=> {

        //Client disconnects....
        users = [ ...deleteUserFromList(users, currentUser._id) ]
        socket.broadcast.emit('client_on_participant_list', users) //Send to everyone but the user        
        const msgDisconnection: Message = {
            content: 'has been disconnected!',
            from: currentUser.nickname,
            timestamp: Date.now(),
            id: generateRandomMessageId(),
            type: 'disconnect'
        }
        socket.broadcast.emit('client_on_message', msgDisconnection)
    })

    socket.on('server_on_message',  (message: Message) => {
        socket.broadcast.emit('client_on_message', message)
        socket.emit('client_on_message', message)
    })
})

nodejsServer.listen(3000, ()=> console.log(`Server is running on the port 3000!`))
