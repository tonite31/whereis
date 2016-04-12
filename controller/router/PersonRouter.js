module.exports = function(app)
{
	var PersonSchema = mongoose.Schema(
	{
		name : String,
		nickName : String,
		age : Number,
		location : String
	});
	
	var Person = mongoose.model('Person', PersonSchema);
	
	app.get('/persons', function(req, res, next)
	{
		Person.find(function(err, data)
		{
			if(err)
				res.status(500).send(err);
			else
				res.send(data);
		});
	});
	
	app.get('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
		Person.findOne({_id : id }, function(err, data)
		{
			if(err)
				res.status(500).send(err);
			else
				res.send(data);
		});
	});
	
	app.post('/persons', function(req, res, next)
	{
		var data = req.body;
		var person = new Person(data);
		person.save(function(err, item)
		{
			if(err)
			{
				console.err(err);
				throw err;
			}
			res.send(item);
		});
	});
	
	app.put('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
	    var data = req.body;
	    
	    Person.findById(id, function(err, doc)
	    {
	    	if(err)
			{
				console.log("에러 : ", err);
				res.status(500).send(err);
			}
			else
			{
				for(var key in data)
					doc[key] = data[key];
				
				doc.save(function(err, doc)
				{
					res.send(doc);
				});
			}
	    });
	});
	
	app.delete('/persons/:id', function(req, res, next)
	{
		var id = req.params.id;
		Person.findByIdAndRemove({_id : id}, function(err, doc)
		{
			if(err)
			{
				console.log("에러 : ", err);
				res.status(500).send(err);
			}
			else
			{
				console.log("결과 : ", doc);
				res.send(doc);
			}
		});
	});
};