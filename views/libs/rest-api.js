var Rest = {};

(function()
{
	this.request = function(param)
	{
		var successCallback = null;
		if(param.success)
		{
			successCallback = param.success;
			delete param.success;
		}

		var errorCallback = function(data) { console.error(data); };
		if(param.error)
		{
			errorCallback = param.error;
			delete param.error;
		}

		var json =
		{
			success: function(data)
			{
				if(data)
				{
					try
					{
						result = JSON.parse(data);
					}
					catch(err)
					{
						console.error(err.stack);
					}
				}
			}
		};

		for(var key in param)
		{
			if(param.hasOwnProperty(key))
			{
				json[key] = param[key];
			}
		}

		var result = null;
	    $.ajax(json);
	    
	    return result;
	};
	
	this.get = function(name, data, success, error)
	{
		this.call(name, 'get', data, success, error);
	};
	
	this.put = function(name, data, success, error)
	{
		this.call(name, 'put', data, success, error);
	};
	
	this.post = function(name, data, success, error)
	{
		this.call(name, 'post', data, success, error);
	};
	
	this.delete = function(name, data, success, error)
	{
		this.call(name, 'delete', data, success, error);
	};
	
	this.call = function(name, type, data, success, error)
	{
		if(!data)
			data = {};
		
		var url = '/' + name;
		if((type == 'get' && data._id) || type == 'put' || type == 'delete')
		{
			url += '/' + data._id;
			delete data._id;
		}
		
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.open(type, url);
		xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlhttp.onreadystatechange = function()
		{
		    if (xmlhttp.readyState == XMLHttpRequest.DONE)
		    {
		        if(xmlhttp.status == 200)
		        {
		        	if(success)
		        		success.call(xmlhttp, xmlhttp.responseText);
		        }
		        else
		        {
		        	if(error)
		        		error.call(xmlhttp, xmlhttp.responseText);
		        }
		    }
		}
		
		xmlhttp.send(JSON.stringify(data));
	};
}).call(Rest);