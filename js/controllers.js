app.controller('SideController', ['$scope', 'nameFactory', function($scope, nameFactory){
	$scope.items = [];
	nameFactory.getName.success(function(data){
		$scope.items = data;
		// console.log($scope.items[0]);
	});
}]);

app.controller('ShowController', ['$scope','$stateParams','docFactory', function($scope,$routeParams,docFactory){
	docFactory.getDoc($routeParams.name).success(function(data) {
		$scope.content = data;
	});
}]);

app.controller('timeController', ['$scope', '$timeout', function($scope, $timeout){
	var timer;
	var updateTime = function() {
		$scope.time = new Date();
		timer = $timeout(updateTime, 1000);
	}
	timer = $timeout(updateTime, 1000);
	$scope.$on('$destroy', function() {
		if (timer) { $timeout.cancel(timer);}
	});
}]);