var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Function to generate a username (numerical identifier)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    // Assign member ID

    // Broadcast a connection
    io.emit('connection', "A new member has joined.");

    // Send message
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

    // Broadcast a disconnection
    io.on('disconnect', function(){
        io.emit('disconnect');
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
