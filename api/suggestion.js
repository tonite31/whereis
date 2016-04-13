var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Suggestion = app.resource = restful.model('suggestion', mongoose.Schema({
            to: String,
            who: String,
            reason: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Suggestion.register(app, '/api/suggestions');
}


