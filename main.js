// Author: Dipro Bhowmik
// Date: June 1, 2018
// CLIENT-SIDE CODE FOR CHATROOM APP

$(function () {

    // initialize variables
    var username;
    var chatroom;

    // entries to generate usernames
    var adjectives_usernames = {"Salty",
                      "Fruity",
                      "Yellow",
                      "Blue",
                      "Green",
                      "Orange",
                      "Fuschia",
                      "Smelly",
                      "Thirsty" };
    var nouns_usernames = {"Octopus",
                           "Shark",
                           "Dolphin",
                           "Shoebox",
                           "Wasp",
                           "Egg",
                           "Elephant",
                           "Hippo",
                           "Walrus" };

    var socket = io();

    const setUsername = () => {
        var adj = adjectives_usernames[Math.floor(Math.random()*adjectives_usernames.length)];
        var noun = nouns_usernames[Math.floor(Math.random()*nouns_usernames.length)];
        // var username = adj.concat(" ").concat(noun);
        var username = "Dipro";
        console.log("A username was generated.");
        // tell server your username!
        socket.emit('add user', username);
        return username;
    };

    username = setUsername();

    $('form').submit(function(){
        socket.emit('chat message', (username, $('#m').val()));
        $('#m').val('');
        return false;
    });

    socket.on('user joined', function(username){
        $('#messages'.append($('<li>').text("The user ".concat(username).concat("has joined.")));
        console.log("A user was added.");
    });

    // socket.on('chat message', function(msg){
    //     $('#messages').append($('<li>').text(msg));
    //     console.log("A message was sent.");
    // });

    socket.on('chat message', (sender, msg) => {
        if (sender == username) {
            $('#messages').append($('<li class="sent">').text("POOPSICLE"));
        }
        else {
            $('#messages').append($('<li class="received">').text(sender + ": " + msg));
        }
        console.log("A message was sent.");
    });
});
