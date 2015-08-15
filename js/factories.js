app.factory('nameFactory', ['$http', function($http) {
	return {
		getName: $http.get('/api/tree.json')
	};
}]);

app.factory('userFactory', ['$http', function($http){
	return {
		getUser: $http.get('/api/user.json')
	};
}]);

app.factory('docFactory', function($http) {
	return {
		getDoc: function (name) {
			return $http.get('/api/docs/'+name+'.md');
		}
	};
});