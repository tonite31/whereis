var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Job = app.resource = restful.model('job', mongoose.Schema({
            name: String,
            description: String,
            jobtype:String,
            hostname: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Job.register(app, '/api/jobs');
}


