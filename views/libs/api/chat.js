var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Chat = app.resource = restful.model('chat', mongoose.Schema({
            from: String,
            to: String,
            chatroom: String,
            message: String,
            date: Date
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Chat.register(app, '/api/chats');
}


