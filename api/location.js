var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Location = app.resource = restful.model('location', mongoose.Schema({
            name: String,
            address: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Location.register(app, '/api/locations');
}


