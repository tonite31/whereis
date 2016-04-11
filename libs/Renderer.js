var Renderer = {};

(function()
{
	var self = this;
	this.viewPath = '';
	
	this.replacePath = function(html, callback)
	{
		var matchList = html.match(/\@\{[a-zA-Z0-9\_\-\.\:\/]*\}/gi);
		if(matchList)
		{
			for(var i=0; i<matchList.length; i++)
			{
				var split = matchList[i].replace('@{', '').replace('}', '').split(':');
				
				var name = '';
				if(split.length == 2)
					name = split[1];
				else
					name = split[0];
				
				html = html.replace(matchList[i], self.viewPath + '/' + name);
			}
		}
		
		callback(html);
	};

}).call(Renderer);

module.exports = Renderer;