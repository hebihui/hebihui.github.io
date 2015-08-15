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

app.controller('SigninController', ['$rootScope','$scope','$state','$timeout','AccessToken','userFactory', function($rootScope, $scope, $state, $timeout, AccessToken, userFactory){
		
		$scope.email = "";
		$scope.password = "";

		$scope.signin = function(){
			userFactory.getUser.success(function(data){
				if($scope.email == data.email && $scope.password == data.password){
					$state.go('manage.about');
				}
				else{
					alert("Please check your email and password.");
				}
			});
		}

    $scope.$on('oauth:login', function(event, token) {
      console.log('yo')
      $scope.accessToken = token.access_token;
    });

    $scope.$on('oauth:logout', function(event) {
      $scope.accessToken = null;
    });
}]);