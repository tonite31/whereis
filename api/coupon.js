var restful = require('node-restful'),
    mongoose = restful.mongoose;

module.exports = function(app){
    var Coupon = app.resource = restful.model('coupon', mongoose.Schema({
            name: String,
            description: String,
            product:String,
            sale:Number
        }))
        .methods(['get', 'post', 'put', 'delete']);

    Coupon.register(app, '/api/coupons');
}


