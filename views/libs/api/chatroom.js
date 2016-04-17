var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var ChatRoom = app.resource = restful.model('chatroom', mongoose.Schema({
            participants: Array,
            date: Date,
        }))
        .methods(['get', 'post', 'put', 'delete']);

    ChatRoom.register(app, '/api/chatrooms');
}


