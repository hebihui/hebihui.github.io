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

app.controller('SigninController', ['$rootScope','$scope','$state', function($rootScope, $scope, $state){
	$scope.email = "";
	$scope.password = "";
	$scope.signin = function(){
		if($scope.email == "hebihui@qiniu.com" && $scope.password == "dawn"){
			$state.go('manage.about')
		}
	};
}]);