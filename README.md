#

This is a project that allows people to open private chatrooms and talk to their friends. When everyone leaves the chatroom, it disappears.

## Todos:
1. Style message feed to include usernames and separate recieved from sent messages
2. Add functionality for multiple rooms
3. 

## Technologies

At the moment, this project uses Socket.io for messaging and Node.js on the backend.

### Future Updates:
- Encrypted communication
- Some form of identity validation (socialist billionaire?)

## Functions and features

### Setting up a new chatroom
1. Client requests to set up a new chatroom
2. Server opens a room, sends room_ID to client
3. Client receives room_ID, joins room, is assigned a username, and waits for others to join

### Joining a chatroom
1. Client sends room_ID to server, along with join request
2. Server adds client to room, assigns client a username, routes messages to client
3. Client receives most recent messages (last 50 messages)
4. Client can begin chatting with other members of the room

### Sending a message
1. Client sends message to server
2. Server adds message to temporary store, sends to clients
3. Clients receive messages

### Receiving a message
1. Client recieves message from server
2. Client stores message in mesaageDB, logs time of receipt
3. Client renders messages from messageDB in chronological order
