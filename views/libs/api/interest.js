var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Interest = app.resource = restful.model('interest', mongoose.Schema({
            name: String,
            description: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Interest.register(app, '/api/interests');
}


