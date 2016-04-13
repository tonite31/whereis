var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Event = app.resource = restful.model('event', mongoose.Schema({
            title: String,
            who: Array,
            date: Date,
            location: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Event.register(app, '/api/events');
}


