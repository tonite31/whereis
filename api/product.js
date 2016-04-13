var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Product = app.resource = restful.model('product', mongoose.Schema({
            name: String,
            description: String,
            price: Number,
            picture: String
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Product.register(app, '/api/products');
}


