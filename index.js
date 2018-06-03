// Author: Dipro Bhowmik
// Date: June 1, 2018
// SERVER-SIDE CODE FOR CHATROOM APP

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Function to generate a username (numerical identifier)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    io.emit('new connection');

    // Broadcast message when new user joins
    socket.on('add user', (username) => {
        socket.username = username;
        io.emit('user joined', username);
    });

    // Send message
    socket.on('chat message', (user, msg){
        io.emit('chat message', msg);
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
