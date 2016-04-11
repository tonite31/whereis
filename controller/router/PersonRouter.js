module.exports = function(app)
{
	app.get('/persons', function(req, res, next)
	{
		db.collection(dbname, function(err, collection)
		{
	        collection.find().toArray(function(err, items)
	        {
	            res.send(items);
	        });
	    });
	});
	
	app.get('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
	    db.collection(dbname, function(err, collection)
	    {
	        collection.findOne({'_id': new mongo.ObjectID(id)}, function(err, item)
	        {
	        	if(err)
	        		res.status(500).send({'error' : err});
	        	else
	        		res.send(item);
	        });
	    });
	});
	
	app.post('/persons', function(req, res, next)
	{
		var data = req.body;
	    db.collection(dbname, function(err, collection)
	    {
	        collection.insert(data, {safe:true}, function(err, result)
	        {
	        	if(err)
	        		res.status(500).send({'error' : err});
	            else
	                res.send(result);
	        });
	    });
	});
	
	app.put('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
	    var data = req.body;
	    db.collection(dbname, function(err, collection)
	    {
	        collection.update({'_id': new mongo.ObjectID(id)}, data, {safe:true}, function(err, result)
	        {
	            if (err) {
	        		res.status(500).send({'error' : err});
	            } else {
	                res.send(data);
	            }
	        });
	    });
	});
	
	app.delete('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
	    db.collection(dbname, function(err, collection)
	    {
	        collection.remove({'_id': new mongo.ObjectID(id)}, {safe:true}, function(err, result)
	        {
	            if (err) {
	            	res.status(500).send({'error' : err});
	            } else {
	                res.send(req.body);
	            }
	        });
	    });
	});
};