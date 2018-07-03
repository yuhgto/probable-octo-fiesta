// Author: Dipro Bhowmik
// Date: June 1, 2018
// SERVER-SIDE CODE FOR CHATROOM APP

var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var num_users = 0;
var num_rooms = 0;

// configure express server paths
app.use(express.static(path.join(__dirname + "/css"))); // allows HTML files to reference stylesheets

// configure server router
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
    socket.on('chat message', (data) => {
        io.emit('chat message', {
            username: socket.username,
            message: data,
        });
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
