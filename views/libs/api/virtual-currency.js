var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var VirtualCurrency = app.resource = restful.model('virtual-currency', mongoose.Schema({
            userid: String,
            amount: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    VirtualCurrency.register(app, '/api/virtual-currency');
}


