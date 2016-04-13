module.exports = function(app)
{
	app.get('/', function(req, res, next)
	{
		res.render('layout', {page : 'index'});
	});
	
	app.get('/:id', function(req, res, next)
	{
		res.render('layout', {page : req.params.id});
	});
}