var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    //Using node-restful for api framework (https://github.com/baugarten/node-restful)
    var User = app.resource = restful.model('user', mongoose.Schema({
            name: String,
            userid: String,
            passwd: String,
            location: String,
            interests: Array,
            job: String,
            verification: Date
        }))
        .methods(['get', 'post', 'put', 'delete']);

    //TODO : authentication for update
    User.register(app, '/api/users');
}


