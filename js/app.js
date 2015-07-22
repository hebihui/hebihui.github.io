var app = angular.module("Dawn", ['locationProvider','customFilters.markdown','customFilters.trust','ui-router'])

app.config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider, $stateProvider ,$urlRouterProvider){
	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode(true);

	// Now set up the states
	$stateProvider
		.state('index',{
			url: "/",
			templateUrl: "templates/about.html"
		})
		.state('show',{
			url: "/:name",
			templateUrl: "templates/show.html",
			controller: "ShowController"
		});
}]);

// app.constant('SERVICE', {"API": "/api/v1"});

