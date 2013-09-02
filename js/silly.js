var SILLY = (function(module){
	module.test = function(resultObject){
		resultObject.prepend(Date() + '<br />');
	};
	return module;
}(SILLY || {}))