// Author: Dipro Bhowmik
// Date: June 1, 2018
// SERVER-SIDE CODE FOR CHATROOM APP

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var num_users = 0;
var num_rooms = 0;

// Function to generate a username (numerical identifier)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    io.emit('new connection');

    // Broadcast message when new user joins
    socket.on('add user', (username) => {
        io.emit('user joined', username);
    });

    // Send message
    socket.on('chat message', (sender, msg) => {
        sender = socket.username;
        msg = "MESSAGE_HERE";
        io.emit('chat message', (sender, msg));
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
